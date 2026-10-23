
# Coach Raphi Pro OS — Next.js + Supabase

Full fitness coaching platform for personal trainers.

### Features
- Trainer dashboard, client CRM, workout builder, assignment engine, nutrition planner (7 days), progress charts, chat
- Client view for completing workouts
- Supabase for auth + DB (fallback to localStorage if no env)

### Stack
Next.js 14 App Router, Tailwind, Zustand, Supabase, Recharts, Lucide

### Setup
1. `npm install`
2. Create Supabase project, run SQL in `supabase/schema.sql`
3. Copy `.env.example` to `.env.local` and fill keys
4. `npm run dev`

### Deploy to Vercel
- Push to GitHub
- Import in Vercel, add env vars
- Deploy — done. See `vercel.json` for config.

### Supabase Tables
- clients, exercise_library, workout_templates, assignments, nutrition_plans, messages, progress_logs
