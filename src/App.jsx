
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
import SignUp from './pages/SignUp';
import LogIn from './pages/login';
import Hero from './pages/Hero/hero';
// import AddBookForm from './components/AddBookForm';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero/>
    },
    {
      path: "/add-new",
      element: <AddBook />
    },
    {
      path: "/books/:id",
      element: <BookDetails />
    },
    {
      path:"/signup",
      element: <SignUp/>
    },
    {
      path:"/login",
      element: <LogIn/>
    }
  ]
  );
  return <RouterProvider router={router} />
}

export default App;