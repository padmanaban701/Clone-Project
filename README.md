# 🛒 Nexus Store — Production-Grade E-Commerce Application

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?style=for-the-badge&logo=react-query)](https://tanstack.com/query/latest)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-v4.1-7A00FF?style=for-the-badge&logo=vitest)](https://vitest.dev/)

**Nexus Store** is a modern, high-performance E-Commerce front-end web application built using **React 19**, **Vite**, and **TanStack Query**. It features responsive layout designs, client-side server-state simulation, cart calculation algorithms, local storage persistence, accessible modal primitives, and automated test coverage.

---

## 🌟 Key Features

* **📦 Catalog Browsing & Multi-Faceted Filtering:** Real-time search by query string, category, price slider boundaries, minimum customer ratings, and sort order (`featured`, `price-low`, `price-high`, `rating`, `newest`).
* **🔄 Asynchronous Server State Management (TanStack Query v5):** Implements `useQuery` and `useMutation` hooks over simulated async service calls with custom caching (`staleTime`), loading skeletons, and background refetching.
* **🛒 Persistent Slide-Over Cart Drawer:** Context-driven shopping cart with automatic price calculation, coupon discount logic (percentage & fixed amount discounts), free shipping threshold calculation ($100+ threshold), and `localStorage` state persistence.
* **💖 Wishlist Management:** Save and remove favorite products across browser sessions.
* **📱 Accessible UI Component Suite:** Combines Tailwind CSS v4, Material UI theme primitives (`@mui/material`), Ant Design rate controls (`antd`), and Radix UI dialog primitives (`@radix-ui/react-dialog`) with smooth Framer Motion animations.
* **🧪 Automated Test Suite:** Unit testing for utilities, context integration tests, and component interaction testing powered by **Vitest** and **React Testing Library**.

---

## 🏗️ Application Architecture

```
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

## 📁 Directory Structure

```
clone_project/
├── .env.example                # Environment variables template
├── .prettierrc                 # Prettier code formatting standards
├── vite.config.js              # Vite & Vitest test environment configuration
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── cart/               # CartDrawer slide-over interface
│   │   ├── common/             # Radix dialog confirmation modals & common controls
│   │   ├── layout/             # Navbar, Footer, and Header navigation
│   │   └── product/            # ProductCard, ProductFilter sidebar, and ProductGrid
│   ├── context/                # Auth, Cart, Wishlist, and Filter state providers
│   ├── data/                   # Product, category, and promo mock models
│   ├── hooks/                  # Custom hooks & TanStack Query hooks (useProductQueries)
│   ├── layouts/                # MainLayout wrapper
│   ├── pages/                  # Page routes (HomePage, ShopPage, ProductDetailPage, CartPage...)
│   ├── services/               # Data access service simulating async API latency
│   ├── utils/                  # Utility helpers (formatCurrency, storage helpers)
│   └── __tests__ / test files  # Vitest unit & integration test files
└── package.json                # Scripts & package dependencies
```

---

## 🧰 Tech Stack & Libraries

| Category | Technology |
|---|---|
| **Core Framework** | React 19, Vite 8 |
| **Server State & Caching** | TanStack Query (React Query) v5 |
| **Styling & Icons** | Tailwind CSS v4, Lucide React, Framer Motion |
| **Component Suites** | Material UI (`@mui/material`), Ant Design (`antd`), Radix UI primitives |
| **Testing** | Vitest, React Testing Library, `@testing-library/jest-dom`, `jsdom` |
| **Form & Utilities** | React Hook Form, Zod schema validation, Axios |

---

## ⚡ Getting Started & Commands

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/clone_project.git
   cd clone_project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run Automated Tests:**
   ```bash
   npm run test:run
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
