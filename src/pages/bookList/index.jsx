import { Link } from "react-router-dom";
import B, { BASE_URL } from "../../constants/index.js";
import SearchBar from "./components/SearchBar.jsx";

const BookList = () => {

  return (

    

    <section className="h-[100vh] ">
      <div className="h-[20%] mt-[2em] flex flex-col gap-[1em]">
        <div><h1 className="text-[2em] font-bold text-center mb-[1em]">Our Collection of Books</h1></div>

        <SearchBar />

      </div>
      <div className="h-[100%] mt-[4em] w-[60%] ml-[20%] grid grid-cols-4 grid-rows-2 gap-[2em]">
        {
          B.BOOKS.map((book, index) => (
            <Link key={index}
              to="/books/:id"
              state={{ selectedBook: book }}
            >


              <div key={index} className="h-[100%] bg-[white] border-[1px] border-[#000080] rounded-sm">
                <img className="h-[100%]" src={book.cover} alt={book.title} />
              </div>
            </Link>
          ))}
      </div>
    </section>
  );

};

export default BookList;

