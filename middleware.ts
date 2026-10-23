
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest){
  // Allow login page without auth
  if(req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/auth')) return NextResponse.next()

  // If no Supabase env, skip middleware (demo mode)
  if(!process.env.NEXT_PUBLIC_SUPABASE_URL) return NextResponse.next()

  let res = NextResponse.next({ request: { headers: req.headers } })
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => req.cookies.get(name)?.value, set: (name, value, options) => { res.cookies.set({ name, value, ...options }) }, remove: (name, options) => { res.cookies.set({ name, value:'', ...options }) } } }
  )
  const { data } = await supabase.auth.getSession()
  if(!data.session){
    return NextResponse.redirect(new URL('/login', req.url))
  }
  return res
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
