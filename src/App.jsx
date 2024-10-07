
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BookList from './pages/bookList';
import AddBook from './pages/addBook';
import BookDetails from './pages/bookDetails';
// import AddBookForm from './components/AddBookForm';

function App() {

  const router = createBrowserRouter([
    {
      path: "/books",
      element: <BookList />
    },
    {
      path: "/add-new",
      element: <AddBook />
    },
    {
      path: "/books/:id",
      element: <BookDetails />
    }
  ]
  );
  return <RouterProvider router={router} />
}

export default App;