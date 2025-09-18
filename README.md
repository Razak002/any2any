# 🎛️ Any2Any File Converter  

Any2Any is a **free, modern, and powerful file conversion tool** built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).  
It lets you **seamlessly convert images, videos, and audio files** between multiple formats — all in the browser.  

No ads. No paywalls. Just fast, reliable conversions.  

---

## 🚀 Features  

- 🔄 Convert **images, audio, and video** to multiple formats.  
- ⚡ Built with **Next.js 14 (App Router)** for performance and scalability.  
- 🎨 Styled using **Tailwind CSS v4** with dark mode support.  
- 🎥 Uses **FFmpeg.wasm** for client-side media processing.  
- 🌐 100% **in-browser conversion** – no server uploads needed.  
- 📱 Fully responsive UI.  

---

## 🛠️ Tech Stack  

- **Framework:** [Next.js](https://nextjs.org)  
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)  
- **Animations:** [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)  
- **Media Processing:** [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)  
- **Fonts:** [Geist](https://vercel.com/font)  

---

## 📦 Getting Started  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/Razak002/any2any
cd any2any
npm install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 to see it in action 🎉

🖼️ Usage
Upload a file (image, audio, or video).

Select the desired output format.

Click Convert.

Download your converted file instantly.

📂 Project Structure
plaintext
Copy code
.
├── app/             # Next.js App Router pages
├── components/      # Reusable UI components
├── public/          # Static assets
├── styles/          # Global styles
├── utils/           # Helper functions (FFmpeg, format lists, etc.)
├── tailwind.config.ts
└── README.md
🚀 Deployment
Deploy easily with Vercel:

bash
Copy code
vercel
Or check out the Next.js deployment guide.

📖 Learn More
Next.js Documentation

Tailwind CSS Documentation

FFmpeg.wasm Guide

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit a PR.

