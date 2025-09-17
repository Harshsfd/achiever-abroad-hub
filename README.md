<!-- Banner / Logo -->
<p align="center">
  <img src="public/logo.png" alt="Achievers Study Logo" width="120"/>
</p>

<h1 align="center">🎓 Achievers Study – A-SAC</h1>

<p align="center">
  Modern education consultancy platform built with <b>React + TypeScript + Vite</b>, 
  designed for seamless guidance on study abroad opportunities 🌍
</p>

<p align="center">
  <a href="https://www.achieversstudy.com">🌐 Visit Live Website</a> ·
  <a href="#-features">✨ Features</a> ·
  <a href="#-getting-started">⚡ Getting Started</a> ·
  <a href="#-tech-stack">🛠 Tech Stack</a>
</p>

---

## 🚀 Overview

Achievers Study (A-SAC) is a **responsive, fast, and modern web application** that connects students with global study opportunities.  
It provides information about **countries, programs, services, blog posts, and easy contact options**.

This project is optimized for **SEO, performance, and scalability**, with interactive features like **3D globe**, **animated counters**, and **smooth UI components**.

---

## ✨ Features

- 🌍 **Interactive 3D Globe** – visualize global study opportunities.  
- 📰 **Blog & Updates** – dynamic blog page for announcements and tips.  
- 📊 **Animated Counters** – engaging statistics and achievements.  
- 📱 **Fully Responsive** – mobile-first, works on all devices.  
- 🎨 **Modern UI** – TailwindCSS + Radix + shadcn styled components.  
- 📬 **Contact Form** – powered by EmailJS (with environment-safe config).  
- ⚡ **Fast Build** – Vite + TypeScript for blazing-fast performance.  

---

## 🛠 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,vercel,netlify,threejs,git,github" />
</p>

- **Frontend:** React, TypeScript, Vite  
- **Styling:** TailwindCSS, Radix UI, shadcn-ui  
- **Animation:** Framer Motion, Lottie, Embla Carousel  
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei  
- **Forms:** React Hook Form + EmailJS  
- **Deployment:** Vercel / Netlify (choose one)  

---

## 📂 Project Structure

```

A-SAC/
├─ public/               # Static assets (logo, icons, images)
├─ src/
│   ├─ components/       # Reusable UI + interactive components
│   ├─ pages/            # Page components (Home, About, Blog, Contact, etc.)
│   ├─ providers/        # Context providers (Theme, etc.)
│   ├─ lib/              # Utility functions
│   └─ main.tsx          # App entry point
├─ package.json
├─ tailwind.config.ts
├─ vercel.json / netlify.toml
└─ README.md

````

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Harshsfd/achiever-abroad-hub.git
cd a-sac
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file (never commit it) based on `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ADMIN=your_admin_template_id
VITE_EMAILJS_TEMPLATE_REPLY=your_reply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

👉 Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

This project supports **Vercel** and **Netlify**.

* **Vercel**:
  Add your `.env` variables in **Vercel Dashboard → Project Settings → Environment Variables**.
  Deploy directly with:

  ```bash
  vercel --prod
  ```

* **Netlify**:
  Add `.env` variables in **Netlify → Site Settings → Build & Deploy → Environment Variables**.
  Deploy with:

  ```bash
  netlify deploy --prod
  ```

---

## 🔍 SEO & Performance

* ✅ Meta tags included (`title`, `description`, `keywords`)
* ✅ Optimized with Vite for fast builds
* ✅ Responsive images (recommend converting to WebP/AVIF)
* ✅ Lighthouse tested for Performance, SEO, and Accessibility

---

## 📌 Future Improvements

* [ ] Add CMS integration (for blog posts)
* [ ] Add student testimonials dynamically from backend
* [ ] Implement multi-language support (i18n)
* [ ] Migrate contact form to serverless function for more security

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork this repo
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Push and create a PR

---

## 📜 License

This project is **private** and developed for **Achievers Study (A-SAC)**.
All rights reserved © 2025.

---

<p align="center">Made with ❤️ by <b>Harsh Bhardwaj</b></p>
```

