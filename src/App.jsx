import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/login";
import Hero from "./pages/Hero";
import UpdateBook from "./pages/updatebook";
import CartPage from "./pages/Hero/components/CartPage";
import SignUpNav from "./pages/Hero/components/SignUpNav";
import { useState } from "react";
import About from "./pages/Hero/components/About";
import ContactUs from "./pages/Hero/components/ContactUs";
import Blog from "./pages/Hero/components/Blog";
import Categories from "./pages/Hero/components/Categories";
import CheckoutPage from "./pages/Hero/components/CheckoutPage";
import FeaturedBooks from "./pages/Hero/components/FeaturedBooks";
import ReviewsSection from "./pages/Hero/components/ReviewsSection";
import Herro from "./pages/Hero/components/Herro";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
import SignUp from './pages/SignUp';
import LogIn from './pages/login';
import Hero from './pages/Hero';
import UpdateBook from './pages/updatebook';
import Authors from './pages/authors';
// import AddBookForm from './components/AddBookForm';

function App() {
  const [user, setUser] = useState(""); // Manage user state here

  // Function to handle logout
  const handleLogout = () => {
    setUser(""); // Reset user data on logout
    alert("You have logged out.");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero user={user} setUser={setUser} onLogout={handleLogout} />,
    },
    {
      path: "/home",
      element: <Hero />,
    },
    {
      path: "/add-new",
      element: <AddBook />,
    },
    {
      path: "/booklist",
      element: <BookList />,
    },
    {
      path: "/books",
      element: <BookList />,
    },
    {
      path: "/books/:id",
      element: <BookDetails />,
    },
    {
      path: "/signup",
      element: <SignUp setUser={setUser} />, // Ensure SignUp can set the user
    },
    {
      path: "/login",
      element: <LogIn setUser={setUser} />, // Ensure LogIn can set the user
    },
    {
      path: "/updatebook",
      element: <UpdateBook />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/signupnav",
      element: <SignUpNav setUser={setUser} />, // Ensure SignUpNav can set the user
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/featuredbooks",
      element: <FeaturedBooks />,
    },
    {
      path: "/reviews",
      element: <ReviewsSection />,
    },


      {path:"/updatebook",
      element:<UpdateBook/>
    },
    {
      path:"/authors",
      element:<Authors/>
    },
  ]);
  return <RouterProvider router={router} />
}

export default App;
