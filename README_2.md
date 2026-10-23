
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


### Supabase Storage - Video Upload
1. SQL Editor already created `exercise-videos` bucket (public)
2. In Supabase Dashboard → Storage → `exercise-videos` → Check public
3. Builder now has `VideoUpload` component:
   - Upload MP4/MOV directly to Supabase Storage (100MB max)
   - Or paste YouTube URL
   - Auto-generates public URL
   - Preview inline
4. Files stored at: `https://YOUR_PROJECT.supabase.co/storage/v1/object/public/exercise-videos/FILENAME`

If no Supabase keys, demo mode uses local Object URL preview.
