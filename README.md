# Simple Page – Next.js App with Authentication & Products

A simple **Next.js 15 (App Router)** application with public and protected routes.  
The app includes authentication with **NextAuth.js**, a landing page, product listing, product details, and a protected dashboard for adding products.

---

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sadia126/simple_page.git
   cd simple_page
````

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root and add:

   ```env
   NEXTAUTH_SECRET=your-secret
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MONGODB_URI=your-mongodb-uri
   ```

   * Generate `NEXTAUTH_SECRET` using:

     ```bash
     openssl rand -base64 32
     ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📌 Route Summary

### Public Routes

* `/` → Landing Page (Navbar, Hero, Product Highlights, Footer)
* `/login` → Login page (Google or Credentials via NextAuth)
* `/products` → Product list page
* `/products/[id]` → Product details page

### Protected Routes

* `/dashboard/add-product` → Add new product (only accessible when logged in)

### API Routes

* `/api/products` → Fetch all products (GET), Add new product (POST)
* `/api/products/[id]` → Fetch single product (GET)
* `/api/auth/[...nextauth]` → NextAuth authentication routes

---

## 🛠 Technologies Used

* [Next.js 15 (App Router)](https://nextjs.org/docs)
* [NextAuth.js](https://next-auth.js.org/)
* [MongoDB + Mongoose](https://mongoosejs.com/)
* [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Deployment

The app is deployed on **[Vercel](https://vercel.com/)**.
Easiest way:

```bash
git push origin main
```

Vercel will auto-deploy your app.

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [NextAuth Documentation](https://next-auth.js.org/getting-started/introduction)
* [MongoDB Docs](https://www.mongodb.com/docs/)

---

``` 
```
