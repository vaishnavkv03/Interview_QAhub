📚 Interview Q&A Hub

A modern web application built with Next.js, MongoDB, and TailwindCSS to help you practice, manage, and share interview questions with ease.


✨ Features

🔑 Authentication with NextAuth (Google login support)

📄 Create, Edit, Delete Questions easily

👤 Personal Profiles to showcase your shared interview questions

🔍 Search & Filter through community questions

📱 Responsive Design for all devices

🖼️ Clean UI powered by TailwindCSS + Glassmorphism

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/vaishnavkv03/Interview_QAhub.git
cd Interview_QAhub

2️⃣ Install dependencies
npm install
# or
yarn install

3️⃣ Configure environment variables

Create a .env.local file in the root:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4️⃣ Run the development server
npm run dev


Your app will be live at 👉 http://localhost:3000

📂 Project Structure
Interview_QAhub/
 ┣ app/               # Next.js app directory (routes, pages, layouts)
 ┣ components/        # Reusable UI components
 ┣ models/            # MongoDB models
 ┣ public/            # Static assets
 ┣ styles/            # Global styles (Tailwind + custom CSS)
 ┣ utils/             # Database connection, helpers
 ┣ .gitignore
 ┣ package.json
 ┗ README.md

🛠️ Tech Stack

Frontend → Next.js 13 (App Router) + TailwindCSS

Backend → Next.js API routes + MongoDB

Auth → NextAuth.js (Google OAuth)

Deployment → Vercel
