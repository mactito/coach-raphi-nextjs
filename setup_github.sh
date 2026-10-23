#!/bin/bash
echo "=== Coach Raphi Pro - GitHub Setup ==="
read -p "Enter your GitHub username: " USERNAME
read -p "Enter repo name [coach-raphi-pro]: " REPO
REPO=${REPO:-coach-raphi-pro}
git init
git add .
git commit -m "feat: Coach Raphi Pro OS v2 with Supabase Auth - Trainer + Client magic link"
git branch -M main
echo "Create repo on GitHub: https://github.com/new -> $REPO (do NOT init with README)"
read -p "Press enter after creating repo on GitHub..."
git remote add origin https://github.com/$USERNAME/$REPO.git
git push -u origin main
echo "Done! Now import in Vercel: https://vercel.com/new"
