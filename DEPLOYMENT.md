# Deployment Guide

## 🚀 Automated Deployment (Recommended)

Your portfolio is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/dhruv0111/Dhruv-Sharma-portfolio
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save

2. **Push to Main Branch:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

3. **Automatic Deployment:**
   - GitHub Actions will automatically build and deploy
   - Check progress in the **Actions** tab
   - Site will be live at: https://dhruv0111.github.io/Dhruv-Sharma-portfolio/

---

## 📦 Manual Deployment (Alternative)

If you prefer manual deployment:

### Option 1: Using gh-pages package

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### Option 2: Manual build and push

```bash
# Build the project
npm run build

# Navigate to build output
cd dist

# Initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/dhruv0111/Dhruv-Sharma-portfolio.git main:gh-pages

cd ..
```

---

## 🌐 Other Deployment Options

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Your site will be live at: `your-project.vercel.app`

### Netlify

1. Build: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [x] All content is finalized
- [x] Contact information is correct
- [x] Links are working (GitHub, LinkedIn, etc.)
- [x] Images are optimized
- [x] Build completes without errors: `npm run build`
- [x] Preview works locally: `npm run preview`
- [x] Favicon is displaying correctly
- [x] Meta tags are set for SEO

---

## 🔧 Configuration

**Base Path:** `/Dhruv-Sharma-portfolio/` (configured in `vite.config.js`)

**Build Output:** `dist/` directory

**Homepage:** https://dhruv0111.github.io/Dhruv-Sharma-portfolio/

---

## 📊 Post-Deployment

After deployment:

1. **Test the live site** - Check all pages and links
2. **Verify mobile responsiveness** - Test on different devices
3. **Check SEO** - Use Google's PageSpeed Insights
4. **Monitor analytics** (if configured)
5. **Share your portfolio!** 🎉

---

## 🐛 Troubleshooting

**Issue:** Blank page after deployment
- **Solution:** Check `base` path in `vite.config.js` matches your repo name

**Issue:** Assets not loading
- **Solution:** Ensure all asset paths are relative, not absolute

**Issue:** GitHub Actions failing
- **Solution:** Check the Actions tab for error logs
- Ensure GitHub Pages is enabled in repository settings

---

## 📝 Update Deployment

To update your live site:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy! ✨
