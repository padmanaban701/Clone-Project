# 🛒 Nexus Store — Production-Grade E-Commerce Application

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=for-the-badge&logo=react-query)](https://tanstack.com/query/latest)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.1-7A00FF?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](https://clone-project-eight-tan.vercel.app)

**Nexus Store** is a modern, high-performance E-Commerce front-end web application built using **React 19**, **Vite**, **TanStack Query**, and **Tailwind CSS**. It features responsive layouts, server-state management, persistent shopping cart, wishlist functionality, filtering, authentication UI, automated testing, and an optimized user experience.

---

# 🚀 Live Demo

### 🌐 https://clone-project-eight-tan.vercel.app

---

# 📸 Screenshots

> Add screenshots later by creating a `screenshots` folder.

```text
screenshots/
├── homepage.png
├── shop.png
├── product-details.png
├── cart.png
└── wishlist.png
```

Example:

```md
![Home Page](./screenshots/homepage.png)
```

---

## 🌟 Key Features

- 📦 Product catalog browsing with advanced filtering and sorting
- 🔍 Search products by name
- 🛒 Persistent shopping cart with Local Storage
- 💖 Wishlist management
- 💰 Automatic subtotal, discount, shipping & total calculation
- 🎟️ Coupon code support
- 📱 Fully responsive design
- ⚡ Fast loading using Vite
- 🔄 TanStack Query for server-state management
- 🎨 Modern UI built with Tailwind CSS
- ✨ Smooth animations using Framer Motion
- 🧪 Unit & integration testing using Vitest and React Testing Library

---

# 🏗️ Application Architecture

```text
                                  +-----------------------+
                                  |     React 19 App      |
                                  +-----------+-----------+
                                              |
        +-------------------------+-----------+-----------+-------------------------+
        |                         |                       |                         |
+-------v-------+         +-------v-------+       +-------v-------+         +-------v-------+
|  AuthContext  |         |  CartContext  |       |WishlistContext|         | FilterContext |
+-------+-------+         +-------+-------+       +-------+-------+         +-------+-------+
        |                         |                       |                         |
        +-------------------------+-----------+-----------+-------------------------+
                                              |
                                  +-----------v-----------+
                                  |    TanStack Query     |
                                  |  (useProductsQuery)   |
                                  +-----------+-----------+
                                              |
                                  +-----------v-----------+
                                  |   localDataService    |
                                  |  (Simulated Latency)  |
                                  +-----------+-----------+
                                              |
                                  +-----------v-----------+
                                  | localStorage / Mock   |
                                  +-----------------------+
```

---

# 📁 Project Structure

```text
clone_project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── cart/
│   │   ├── common/
│   │   ├── layout/
│   │   └── product/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| State Management | React Context API |
| Server State | TanStack Query v5 |
| UI Libraries | Material UI, Ant Design, Radix UI |
| Icons | Lucide React |
| Animation | Framer Motion |
| Form Validation | React Hook Form, Zod |
| HTTP Client | Axios |
| Testing | Vitest, React Testing Library |
| Storage | Local Storage |

---

# ⚡ Getting Started

## Prerequisites

- Node.js v18+
- npm v9+

---

## Clone Repository

```bash
git clone https://github.com/padmanaban701/Clone-Project.git
```

Go to the project folder:

```bash
cd Clone-Project
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Run Tests

```bash
npm run test
```

or

```bash
npm run test:run
```

---

## Build for Production

```bash
npm run build
```

---

# 🌐 Deployment

The application is deployed using **Vercel**.

### Live URL

https://clone-project-eight-tan.vercel.app

---

# ✨ Future Enhancements

- Payment Gateway Integration
- Backend API Integration
- User Authentication
- Order History
- Admin Dashboard
- Product Reviews
- Product Search Suggestions
- Dark Mode

---

# 👨‍💻 Author

**Padmanaban P**

Frontend Developer

- GitHub: https://github.com/padmanaban701
- LinkedIn: https://www.linkedin.com/in/padmanaban-padmanaban-28290b188

---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!