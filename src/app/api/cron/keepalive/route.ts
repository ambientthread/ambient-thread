import { NextResponse } from 'next/server'

/**
 * Daily database keep-alive (vercel.json → crons / Cloudflare Cron Trigger).
 *
 * Supabase pauses a FREE-plan project after a quiet week, and mostly-static pages
 * mean real visitors never touch the database. This route makes a couple of tiny
 * reads every day so the project never goes to sleep.
 *
 * Auth: when CRON_SECRET is set, only `Authorization: Bearer <CRON_SECRET>` (the
 * header Vercel Cron and the Cloudflare cron worker send) is accepted. Without
 * CRON_SECRET the route stays open — it returns no data and only touches a row
 * count, and a keep-alive that silently 401s forever is exactly how databases
 * ended up paused before.
 */

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET
  if (secret && req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY
  if (!url || !key) return NextResponse.json({ ok: true, skipped: 'no_database' })

  const headers = { apikey: key, Authorization: `Bearer ${key}` }
  const checks = await Promise.all([
    fetch(`${url}/auth/v1/admin/users?page=1&per_page=1`, { headers, cache: 'no-store' }).then((r) => r.ok).catch(() => false),
    fetch(`${url}/storage/v1/bucket`, { headers, cache: 'no-store' }).then((r) => r.ok).catch(() => false),
  ])
  if (!checks.some(Boolean)) {
    return NextResponse.json({ ok: false, code: 'db_unreachable' }, { status: 503 })
  }
  return NextResponse.json({ ok: true, at: new Date().toISOString() })
}
