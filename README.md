 Interview Q&A; Hub

A modern web application built with Next.js, MongoDB, and TailwindCSS to help you
practice, manage, and share interview questions with ease.

■ Features
• ■ Authentication with NextAuth (Google login support)
• ■ Create, Edit, Delete Questions easily
• ■ Personal Profiles to showcase your shared interview questions
• ■ Search & Filter through community questions
• ■ Responsive Design for all devices
• ■■ Clean UI powered by TailwindCSS + Glassmorphism

■ Getting Started
• Clone the repo: git clone https://github.com/vaishnavkv03/Interview_QAhub.git
• Install dependencies: npm install
• Configure environment variables in .env.local
• Run the development server: npm run dev
• App available at http://localhost:3000

■ Project Structure
Interview_QAhub/ ■ app/ # Next.js app directory (routes, pages, layouts)
■ components/ # Reusable UI components
■ models/ # MongoDB models
■ public/ # Static assets
■ styles/ # Global styles (Tailwind + custom CSS)
■ utils/ # Database connection, helpers
■ .gitignore
■ package.json
■ README.md
■■ Tech Stack
• Frontend → Next.js 13 (App Router) + TailwindCSS
• Backend → Next.js API routes + MongoDB
• Auth → NextAuth.js (Google OAuth)
• Deployment → Vercel
