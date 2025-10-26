# Portfolio Website - Setup Guide

This guide explains how to add images, change the splash screen, and deploy your website to Vercel.

---

## 📸 Adding Images to Your Portfolio

### Step 1: Prepare Your Images

1. **Create image directories** in the `public` folder:
   ```
   public/
   ├── images/
   │   ├── portfolio/
   │   └── testimonials/
   ```

2. **Organize your images**:
   - Profile photo: `public/images/yagnik-profile.jpg`
   - Portfolio items: `public/images/portfolio/project1.jpg`, `project2.jpg`, etc.
   - Testimonial photos: `public/images/testimonials/client1.jpg`, etc.

### Step 2: Replace Placeholder Images

#### A. Profile Picture (About Page)

**File**: `app/about/page.tsx`

**Current code** (line 86):
```tsx
<Image
  src="/placeholder.svg?height=600&width=500"
  alt="Yagnik Goswami - Designer & Graphic Expert"
  width={500}
  height={600}
  className="rounded-2xl shadow-2xl"
/>
```

**Replace with**:
```tsx
<Image
  src="/images/yagnik-profile.jpg"
  alt="Yagnik Goswami - Designer & Graphic Expert"
  width={500}
  height={600}
  className="rounded-2xl shadow-2xl"
/>
```

#### B. Portfolio Images

**File**: `app/portfolio/page.tsx`

**Update the portfolioItems array** (starts at line 13):

**Current**:
```tsx
{
  id: 1,
  title: "Cosmic Brand Identity Revolution",
  image: "/placeholder.svg?height=600&width=800",
  // ... other properties
}
```

**Replace with**:
```tsx
{
  id: 1,
  title: "Cosmic Brand Identity Revolution",
  image: "/images/portfolio/cosmic-brand.jpg",
  // ... other properties
}
```

Repeat for all 6 portfolio items:
- `id: 2` → `image: "/images/portfolio/nebula-fashion.jpg"`
- `id: 3` → `image: "/images/portfolio/galaxy-gaming.jpg"`
- `id: 4` → `image: "/images/portfolio/stardust-skincare.jpg"`
- `id: 5` → `image: "/images/portfolio/aurora-athletic.jpg"`
- `id: 6` → `image: "/images/portfolio/moonbeam-mobile.jpg"`

#### C. Testimonial Photos

**File**: `app/testimonials/page.tsx`

**Update the testimonials array** (starts at line 13):

**Current**:
```tsx
{
  id: 1,
  name: "Sarah Johnson",
  image: "/placeholder.svg?height=100&width=100",
  // ... other properties
}
```

**Replace with**:
```tsx
{
  id: 1,
  name: "Sarah Johnson",
  image: "/images/testimonials/sarah-johnson.jpg",
  // ... other properties
}
```

Repeat for all 6 testimonials.

### Step 3: Recommended Image Specifications

- **Profile Photo**: 500x600px, JPG or PNG
- **Portfolio Images**: 1200x800px or larger, JPG or PNG
- **Testimonial Photos**: 200x200px (square), JPG or PNG
- **File Size**: Keep under 500KB per image for fast loading
- **Format**: Use JPG for photos, PNG for logos with transparency

---

## 🎨 Changing the Splash Screen

The splash screen is the intro animation that appears when visitors first load your website.

### File to Edit: `app/page.tsx`

### Option 1: Change the Name and Roles

**Lines 18-19** - Change the roles:
```tsx
const roles = ["Graphic Expert", "Video Editor"]
```

**Example**: Change to `["Web Designer", "UI/UX Specialist"]`

### Option 2: Change the Professional Title

**Line 55** - Change the subtitle:
```tsx
<div className="text-lg md:text-xl font-medium mb-4 font-poppins text-slate-600 dark:text-slate-400">
  Professional
</div>
```

**Example**: Change to "Creative" or "Freelance Designer"

### Option 3: Change the Tagline

**Line 167** - Change the tagline:
```tsx
<p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-poppins">
  Crafting Visual Excellence • Elevating Brands
</p>
```

**Example**: Change to "Designing Dreams • Creating Impact"

### Option 4: Change Animation Duration

**Line 26** - Adjust the timing:
```tsx
const totalAnimationTime = roles.length * 3000 + 2000
```

- Increase `3000` for longer per-role animation (in milliseconds)
- Increase `2000` for longer delay before transition

### Option 5: Change Background Colors

**Line 90** - Modify the gradient:
```tsx
className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-black dark:to-blue-950"
```

**Example**: Change to purple theme:
```tsx
className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-black dark:to-purple-950"
```

### Option 6: Change Text Colors

**Lines 104-108** - Modify name gradient:
```tsx
className="bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
```

**Example**: Change to green theme:
```tsx
className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 dark:from-green-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
```

---

## 🚀 Deploying to Vercel (Live Website)

### Prerequisites

- GitHub account
- Vercel account (free at vercel.com)

### Method 1: Deploy from Git (Recommended)

#### Step 1: Push Code to GitHub

1. **Create a GitHub repository**:
   - Go to github.com
   - Click "New repository"
   - Name it (e.g., "portfolio-website")
   - Click "Create repository"

2. **Push your code**:
   ```bash
   # In your project folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

#### Step 2: Connect to Vercel

1. **Go to vercel.com** and sign in with GitHub

2. **Click "Add New Project"**

3. **Import your repository**:
   - Find your portfolio repository
   - Click "Import"

4. **Configure project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. **Click "Deploy"**

6. **Wait for deployment** (2-5 minutes)

7. **Get your live URL**:
   - After deployment, you'll see: `https://your-project-name.vercel.app`
   - Share this URL with others!

### Method 2: Update Existing Deployment

If your site is already on Vercel:

1. **Make your changes** locally

2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio images and content"
   git push origin main
   ```

3. **Vercel automatically deploys**:
   - Go to vercel.com
   - See "Building..." then "Deployed"
   - Your changes go live in 1-3 minutes

### Important: Environment Variables (if needed)

If you need API keys:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables:
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Value: `your-service-id`
4. Click "Save"
5. Redeploy for changes to take effect

### Custom Domain (Optional)

1. Go to Vercel project → Settings → Domains
2. Add your domain (e.g., `www.yourname.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)

---

## 📝 Quick Checklist

### Before Deploying:

- [ ] Replace all placeholder images
- [ ] Update portfolio content (titles, descriptions)
- [ ] Update testimonials with real client info
- [ ] Update contact information
- [ ] Test all pages locally (`npm run dev`)
- [ ] Check responsive design on mobile

### After Deploying:

- [ ] Visit your live URL and test all pages
- [ ] Check image loading
- [ ] Test navigation
- [ ] Test contact form (if configured)
- [ ] Share with friends for feedback

---

## 🔧 Troubleshooting

### Images Not Loading?

1. **Check file paths**: Use `/images/filename.jpg` (starts with `/`)
2. **Check file extensions**: Must match exactly (`.jpg` vs `.jpeg`)
3. **Clear browser cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Build Errors on Vercel?

1. **Check build logs** in Vercel dashboard
2. **Test locally**: Run `npm run build`
3. **Common issues**:
   - Missing dependencies
   - TypeScript errors
   - Import path errors

### Slow Loading?

1. **Optimize images**: Reduce file size to under 500KB
2. **Use JPG** instead of PNG for photos
3. **Check image dimensions**: Resize to exact usage size

---

## 📞 Need Help?

- **Next.js Docs**: nextjs.org
- **Vercel Docs**: vercel.com/docs
- **Tailwind CSS**: tailwindcss.com

---

**Good luck with your portfolio! 🚀**
