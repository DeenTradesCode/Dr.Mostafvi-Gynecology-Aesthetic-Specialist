# Deployment Guide for Dr. Mostafavi Website

## Deploy to Render

### Prerequisites
- A GitHub account
- Your code pushed to a GitHub repository
- A Render account (free tier available)

### Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/dr-mostafavi-website.git
   git push -u origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Sign up/login with your GitHub account
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**
   - **Name**: `dr-mostafavi-website`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Starter` (free)
   - **Branch**: `mock-up-render-deploy`

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your site
   - Your site will be available at `https://dr-mostafavi-website.onrender.com`

### Custom Domain (Optional)
- In your Render dashboard, go to your service
- Click "Settings" → "Custom Domains"
- Add your domain (e.g., `noreenmostafavimd.com`)
- Update your DNS records as instructed

### Environment Variables
No environment variables are required for this project. All configuration is handled in the code.

### Build Status
✅ Production build tested successfully
✅ All ESLint errors fixed
✅ TypeScript compilation successful
✅ Static pages generated (41 pages)

### Performance
- Static site generation for optimal performance
- Optimized images with WebP/AVIF support
- Security headers configured
- SEO-friendly structure
