# 🚀 Quick Deployment Commands

## Push to GitHub (First Time)

```powershell
# Make sure you're in the project directory
cd c:\Projects\Other\invocraft-website

# Push to GitHub
git push -u origin main
```

## After Successful Push

1. **Go to GitHub**: https://github.com/HAJNEL/invocraft-website
2. **Enable GitHub Pages**:
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
3. **Monitor Deployment**:
   - Go to **Actions** tab
   - Watch the "Deploy to GitHub Pages" workflow
4. **Access Your Site**:
   - https://hajnel.github.io/invocraft-website/

---

## Future Updates

When you make changes to your website:

```powershell
# Add changes
git add .

# Commit with a descriptive message
git commit -m "your changes description"

# Push to GitHub (auto-deploys)
git push
```

The website will automatically rebuild and deploy in 2-3 minutes!

---

## Build Locally First (Optional)

Before pushing, test the production build:

```powershell
npm run build:prod
```

This ensures your production build works correctly.

---

## Repository Info

- **GitHub URL**: https://github.com/HAJNEL/invocraft-website
- **Live Site**: https://hajnel.github.io/invocraft-website/
- **Remote**: origin (https://github.com/HAJNEL/invocraft-website.git)
- **Branch**: main

---

## What Happens Next?

1. ✅ You push code to GitHub
2. ✅ GitHub Actions workflow automatically runs
3. ✅ Angular app builds for production
4. ✅ Built files deploy to GitHub Pages
5. ✅ Your website is live!

All automatic - no manual deployment needed! 🎉
