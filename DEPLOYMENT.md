# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Joga yoga platform to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- GitHub account with repository created
- Repository name: `joga` (or update the `base` path in `astro.config.mjs` if different)
- Main branch should be `main` (update workflow if using different branch)

## 🔧 Configuration Already Done

The following files have been configured for GitHub Pages deployment:

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- ✅ Automated deployment on push to `main` branch
- ✅ Manual deployment option via workflow_dispatch
- ✅ Uses official Astro action for deployment
- ✅ Proper permissions configured

### 2. Astro Configuration (`astro.config.mjs`)
- ✅ Site URL configured: `https://bumbarasch.github.io`
- ✅ Base path configured: `/joga`
- ✅ Static output mode configured

## 🚀 Deployment Steps

### Step 1: Push to GitHub

If you haven't already, push your code to GitHub:

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Push to main branch
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** tab
3. Scroll down to **Pages** section
4. Under **Build and deployment**, set **Source** to **GitHub Actions**

### Step 3: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. The workflow will:
   - Install dependencies
   - Build your Astro site
   - Deploy to GitHub Pages

### Step 4: Access Your Site

Once deployment is complete, your site will be available at:

```
https://bumbarasch.github.io/joga
```

## 🔍 Troubleshooting

### Build Fails
- Check the **Actions** tab for error details
- Verify `package.json` has build script: ✅ Already configured
- Ensure all dependencies are committed

### Site Not Loading
- Ensure GitHub Pages is enabled in repository settings
- Check that **Source** is set to **GitHub Actions**
- Verify the workflow completed successfully

### Wrong URL
- Update `site` in `astro.config.mjs` if username is different
- Update `base` path if repository name is not "joga"

### 404 Errors on Subpages
- Ensure `base` path is correctly configured
- Check that internal links include the base path

## 🔄 Automatic Deployments

Your site will automatically redeploy when you:

- Push changes to the `main` branch
- Manually trigger the workflow from the Actions tab
- Update any configuration files

## 🌐 Custom Domain (Optional)

To use a custom domain instead of `github.io`:

1. **Configure DNS** with your domain provider
2. **Create CNAME file**:
   ```bash
   echo "yourdomain.com" > public/CNAME
   git add public/CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```
3. **Update astro.config.mjs**:
   ```javascript
   export default defineConfig({
     site: 'https://yourdomain.com',
     // Remove the base line for custom domains
   });
   ```

## 📊 Deployment Status

- **Workflow File**: ✅ `.github/workflows/deploy.yml`
- **Astro Config**: ✅ Updated for GitHub Pages
- **Build Script**: ✅ `npm run build` available
- **Ready to Deploy**: ✅ All configurations complete

## 🛠️ Development vs Production

- **Development**: `npm run dev` - Runs on `localhost:4321`
- **Production**: `npm run build` - Creates static files in `./dist/`
- **Preview**: `npm run preview` - Preview production build locally

## 📝 Additional Notes

- The GitHub Action automatically detects your package manager (npm/yarn/pnpm)
- Build time is typically 1-3 minutes
- Your site will be served from GitHub's global CDN
- All Astro features including i18n will work correctly in production

---

**🎉 Your Joga platform is ready for GitHub Pages deployment!**

For more information, visit the [Astro Deployment Documentation](https://docs.astro.build/en/guides/deploy/github/).