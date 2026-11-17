# Bento Portfolio Website

A clean, responsive, interactive Bento-grid portfolio website built with **React 19**, **TypeScript**, and **Vite**.

- **Interactive Voice Note**: talks via the browser's native speech synthesis with an animated audio waveform.
- **Interactive Vinyl Player**: spinning vinyl disc, seekable track bar, play/pause and mute controls.
- **Reading List & Book Covers**: 3D hover lifting book with reading progress bars.
- **Interactive City Map**: street grid generated dynamically for your city with live local time chip.
- **Experience Timeline**: scrollable and draggable thumb with role details on hover.
- **Project Detail Modals**: keyboard navigation (`←`, `→`, `Esc`) and tag filtering.
- **Light / Dark Mode**: follows system preference by default, with an instant toggle switch.
- **Zero Config**: All personal information is configured in a single file (`src/config/portfolio-data.ts`).

---

## 🚀 Quick Deploy (Choose Any Method)

### Method 1: Instant Drag & Drop (Zero Setup)
The production bundle is already pre-built in the `dist/` directory!
1. Go to **[Netlify Drop](https://app.netlify.com/drop)**.
2. Drag and drop the **`dist`** folder from this project directly onto the browser window.
3. Your site is live immediately with a free HTTPS URL!

---

### Method 2: Deploy with Vercel (Recommended)
1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial bento portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and select your repository.
3. Vercel automatically detects Vite and will deploy in seconds!

Alternatively, deploy directly from your terminal using the Vercel CLI:
```bash
npx vercel
```

---

### Method 3: Deploy with Cloudflare Pages
1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages**.
2. Connect your GitHub repository.
3. Set:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

## 💻 Local Development

To run and preview the website on your local machine:

```bash
# 1. Install dependencies (already installed if using this pre-configured folder)
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build the static site for production:
```bash
npm run build
```

---

## 🎨 How to Customize

All your portfolio data lives in one clean file:
📁 **`src/config/portfolio-data.ts`**

You can easily modify:
- **Bio & Title**: name, role, headline, company, previously at.
- **Voice Note**: transcript read aloud by the speech synthesizer.
- **Experience Timeline**: your roles, companies, years, and links.
- **Projects**: title, client, year, tags, description, and link to GitHub/demo.
- **Location**: your city name, timezone (e.g. `Asia/Kolkata`), and map labels.
- **Tools / Tech Stack**: list of badges and technologies.
- **Socials**: links to your GitHub, LinkedIn, Twitter/X, and email.
- **Theme & Accent**: accent color (e.g. `#f0782a`, `#4f7cff`) and default theme (`system`, `dark`, or `light`).

> **Note**: Any section left empty (e.g. `testimonials: []` or `books: []`) will automatically hide its card from the layout.
