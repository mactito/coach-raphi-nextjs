
# Coach Raphi Pro OS — Next.js + Supabase Auth

**Full production repo for Raphi's fitness coaching business**

### Auth System
- **Trainer (Raphi)**: Email + Password login (`/login` -> Trainer tab)
  - Any email containing `raphi` or `coach` is auto-role `trainer`
  - Set password in Supabase Auth dashboard
- **Clients**: Magic Link login (`/login` -> Client tab)
  - Client enters email -> receives magic link -> auto-login
  - After login, client sees only TodayView (their workouts)
  - Trainer sees full OS

### Quick Start (GitHub → Vercel)
1. **Create GitHub repo**
   ```bash
   git init
   git add .
   git commit -m "feat: Coach Raphi Pro OS with auth"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/coach-raphi-pro.git
   git push -u origin main
   ```

2. **Supabase Setup**
   - Create project at supabase.com
   - SQL Editor → run `supabase/schema.sql`
   - Auth → Settings → Enable Email + Magic Link
   - Auth → Users → Create user for Raphi (email + password)

3. **Vercel Deploy**
   - vercel.com/new → Import GitHub repo
   - Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Deploy

### Demo Mode (No Supabase)
If no env vars, app runs in demo mode:
- Trainer: any email works
- Client: any email works, mapped to c1

### File Map
- `app/(auth)/login/page.tsx` → Login with role switch
- `app/auth/callback/page.tsx` → Magic link callback
- `lib/supabase.ts` → Supabase client + auth helpers
- `lib/auth.tsx` → AuthProvider with role detection
- `middleware.ts` → Protects all routes, redirects to /login
- `components/*` → Dashboard, Clients, Workouts, Builder, Nutrition, TodayView

### Next: Add Stripe
Want subscriptions? I can add Stripe Checkout for client monthly plans.
