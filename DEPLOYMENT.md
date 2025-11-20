# GitHub Pages Deployment Guide

## 🚀 Quick Start - Deploy to GitHub Pages

Follow these steps to deploy your InvoCraft website to GitHub Pages:

### Step 1: Commit Your Changes

```powershell
# Add all files to git
git add .

# Commit the changes
git commit -m "feat: Setup GitHub Pages deployment with Angular"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in
2. Click the **+** icon in the top right
3. Select **New repository**
4. Repository name: `invocraft-website`
5. Description: "Professional Invoice & Quote Management Platform"
6. Choose **Public** (required for free GitHub Pages)
7. Do NOT initialize with README, .gitignore, or license
8. Click **Create repository**

### Step 3: Push to GitHub

```powershell
# Set the main branch
git branch -M main

# Add remote repository (replace HAJNEL with your GitHub username)
git remote add origin https://github.com/HAJNEL/invocraft-website.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/HAJNEL/invocraft-website`
2. Click on **Settings** (top menu)
3. Scroll down and click **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select **GitHub Actions**
5. Save (if needed)

### Step 5: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the deployment progress
4. Once the workflow completes successfully (green checkmark), your site is live!

### Step 6: Access Your Website

Your website will be available at:
```
https://HAJNEL.github.io/invocraft-website/
```
(Replace HAJNEL with your GitHub username)

---

## 📝 Important Notes

### First Deployment
- The first deployment may take 5-10 minutes
- GitHub Actions needs to build and deploy your Angular application
- You'll receive an email when deployment is complete

### Subsequent Updates
Every time you push to the `main` branch:
```powershell
git add .
git commit -m "your commit message"
git push
```
The website will automatically rebuild and redeploy (usually takes 2-3 minutes).

### Troubleshooting

#### Workflow Fails
- Check the **Actions** tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify the `angular.json` configuration is correct

#### Site Shows 404
- Wait a few minutes after deployment
- Clear your browser cache
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the source is set to "GitHub Actions"

#### Assets Not Loading
- The `base-href` is set to `/invocraft-website/` in the build script
- If your repository name is different, update it in `package.json`:
  ```json
  "build:prod": "ng build --configuration production --base-href /your-repo-name/"
  ```

---

## 🔧 Advanced Configuration

### Custom Domain
1. Buy a domain name (e.g., from Namecheap, GoDaddy)
2. In your repository, go to Settings → Pages
3. Under "Custom domain", enter your domain
4. Add a CNAME record in your domain provider's DNS settings
5. Update the build script to use root path:
   ```json
   "build:prod": "ng build --configuration production --base-href /"
   ```

### Environment Variables
If you need environment-specific configurations:
1. Create environment files in `src/environments/`
2. Update `angular.json` to use different environments
3. Add secrets in GitHub Settings → Secrets and variables → Actions

---

## 📊 Workflow Details

The `.github/workflows/deploy.yml` file contains:
- **Triggers**: Runs on push to main branch or manual trigger
- **Build Job**: Installs dependencies and builds the Angular app
- **Deploy Job**: Deploys the built app to GitHub Pages

### Manual Trigger
You can manually trigger the deployment from the Actions tab:
1. Go to Actions
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch (main)
5. Click "Run workflow" button

---

## ✅ Success Checklist

- [ ] Git repository initialized
- [ ] All files committed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Workflow completed successfully
- [ ] Website accessible at GitHub Pages URL

---

## 🆘 Need Help?

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Angular deployment guide](https://angular.io/guide/deployment)
3. Check the Actions workflow logs for specific error messages
4. Ensure Node.js version 18 or higher is specified in the workflow

---

## 🎉 Congratulations!

Your InvoCraft website is now live on GitHub Pages! Share the URL with others and showcase your professional Angular application.

Remember: Every push to the main branch will automatically update your live website.
