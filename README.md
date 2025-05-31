# 🏡 Airbnb Clone

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=plastic&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=plastic&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-%232D3748.svg?style=plastic&logo=prisma&logoColor=white)](https://prisma.io)

**A modern Airbnb clone built with Next.js 14, Kinde, Supabase, and Prisma**

🚀[Live Demo](https://your-airbnb-clone.vercel.app)

</div>

---

## ✨ Features

- **Next.js 14 App Router** with server components
- **Kinde Authentication** with OAuth (Google & Facebook)
- **Supabase Backend** with Postgres database and storage
- **Prisma ORM** for database modeling
- **Tailwind CSS** + **Shadcn/UI** for styling
- **Interactive Components** (map, calendar, search modal)
- **Multi-step Forms** for listing creation
- **Responsive Design** optimized for all devices

---

## 🛠️ Tech Stack

| Category     | Technology                                                                                                                                           | Description                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **Frontend** | [![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=plastic&logo=next.js&logoColor=white)](https://nextjs.org)                      | React framework with App Router    |
|              | [![React](https://img.shields.io/badge/React-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB)](https://reactjs.org)                       | UI library for building components |
|              | [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Type-safe JavaScript               |
|              | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=plastic&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)   | Utility-first CSS framework        |
| **Backend**  | [![Supabase](https://img.shields.io/badge/Supabase-%23181818.svg?style=plastic&logo=supabase&logoColor=white)](https://supabase.com)                 | Backend-as-a-Service platform      |
|              | [![Prisma](https://img.shields.io/badge/Prisma-%232D3748.svg?style=plastic&logo=prisma&logoColor=white)](https://prisma.io)                          | Database ORM and toolkit           |
|              | [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=plastic&logo=postgresql&logoColor=white)](https://postgresql.org)         | Relational database                |
| **Auth**     | [![Kinde](https://img.shields.io/badge/Kinde-%23FF6B35.svg?style=plastic&logo=auth0&logoColor=white)](https://kinde.com)                             | Authentication service             |
| **UI**       | [![Shadcn/UI](https://img.shields.io/badge/Shadcn/UI-%23000000.svg?style=plastic&logo=shadcnui&logoColor=white)](https://ui.shadcn.com)              | Component library                  |
| **Deploy**   | [![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white)](https://vercel.com)                         | Deployment platform                |

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/harshit2004h/airbnb-clone.git
cd airbnb-clone

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your_supabase_project_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"

# Kinde Authentication
KINDE_CLIENT_ID="your_kinde_client_id"
KINDE_CLIENT_SECRET="your_kinde_client_secret"
KINDE_ISSUER_URL="your_kinde_issuer_url"
KINDE_SITE_URL="http://localhost:3000"
KINDE_POST_LOGOUT_REDIRECT_URL="http://localhost:3000"
KINDE_POST_LOGIN_REDIRECT_URL="http://localhost:3000"
```

---

## 📂 Project Structure

```
airbnb-clone/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Shadcn/UI components
│   └── ...               # Custom components
├── lib/                  # Utility functions
│   ├── db.ts            # Database connection
│   └── utils.ts         # General utilities
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
└── package.json         # Dependencies
```

---

## 🚀 Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

```bash
# Or deploy manually
npm run build
vercel --prod
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

Special thanks to the open-source community and these amazing projects:

- **[Next.js Team](https://nextjs.org)** - For the incredible React framework
- **[Vercel](https://vercel.com)** - For seamless deployment platform
- **[Tailwind CSS](https://tailwindcss.com)** - For the utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com)** - For beautiful and accessible components
- **[Prisma](https://prisma.io)** - For the excellent database toolkit
- **[Supabase](https://supabase.com)** - For the fantastic backend platform

---

## 👨‍💻 Author

**Harshit Srivastava**

[![GitHub](https://img.shields.io/badge/Github-%23000000.svg?logo=github&logoColor=white)](https://github.com/harshit2004h)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshit-srivastava-4876001b4)

---

<div align="center">

**Built with ❤️ using Next.js 14**

⭐ Star this repository if you found it helpful!

</div>
