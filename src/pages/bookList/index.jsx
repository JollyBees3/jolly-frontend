import { Link } from "react-router-dom";



const BookList = () => {
  return (
    <section className="h-[100vh] ">
        <div className="h-[10%] mt-[2em]">
        <h1 className="text-[2em] font-bold text-center mb-[2em]">Our Collection of Books</h1>
        </div>
        <div className="h-[100%] w-[60%] ml-[20%] grid grid-cols-4 grid-rows-3 gap-[1em]">
          <div id="book-pic" className="h-[100%] bg-[white] border-[2px]"></div>
          {/* <div className="h-[100%] bg-[white] border-[2px]"></div>
          <div className="h-[100%] bg-[white] border-[2px]"></div>
          <div className="h-[100%] bg-[white] border-[2px]"></div> */}
        </div>
    </section>
  );
  
}

export default BookList;