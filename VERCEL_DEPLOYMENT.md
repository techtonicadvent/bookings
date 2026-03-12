# Vercel Deployment Guide

## Event Booking System - Production Deployment

### Files Created for Vercel Deployment:
✅ `vercel.json` - Vercel configuration with build settings
✅ `.vercelignore` - Files to ignore during deployment
✅ `.env.production` - Production environment variables
✅ `public/404.html` - SPA routing handler
✅ `public/manifest.json` - PWA manifest

### Deployment Steps:

#### 1. Local Build & Test:
```bash
npm run build
npm install -g serve
serve -s build
```

#### 2. Push to GitHub:
```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

#### 3. Deploy to Vercel:

**Option A - Using Vercel CLI:**
```bash
npm install -g vercel
vercel
```

**Option B - Connect GitHub to Vercel:**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select "React" as framework
5. Click "Deploy"

#### 4. Custom Domain (Optional):
- Go to your Vercel project settings
- Navigate to "Domains"
- Add your custom domain
- Follow DNS configuration steps

### Configuration Details:

**vercel.json Settings:**
- `buildCommand`: `npm run build` (Create React App)
- `outputDirectory`: `build` (Output folder)
- `framework`: `react` (Framework detection)
- `rewrites`: Routes all requests to `/index.html` for SPA routing
- `headers`: Cache policies for static assets

**404.html:**
- Handles client-side routing for SPA
- Redirects 404 errors to index.html

**Performance Optimizations:**
- Static assets cached for 1 year (immutable)
- HTML cached for 1 hour
- Security headers included
- XSS and clickjacking protection

### Environment Variables:
Set in Vercel Dashboard → Settings → Environment Variables:
- `REACT_APP_ENV`: Set to `production`
- `REACT_APP_API_URL`: Your API endpoint

### Troubleshooting:

**Issue: Build fails on Vercel**
- Check Node version compatibility
- Ensure all dependencies are in package.json
- Clear Vercel build cache

**Issue: Routes not working**
- 404.html and rewrites should handle this
- Check vercel.json is in root directory

**Issue: Environment variables not loading**
- Add to Vercel Dashboard, not .env.production
- Restart deployment after adding variables

### Monitoring:

- **Build Analytics**: Vercel Dashboard → Analytics
- **Real-time Logs**: Vercel Dashboard → Deployments
- **Error Tracking**: Check browser console and Vercel logs

### Rollback:

- Navigate to Vercel Dashboard → Deployments
- Click the deployment you want
- Click "Redeploy"

---

**Your app is now production-ready and optimized for Vercel! 🚀**
