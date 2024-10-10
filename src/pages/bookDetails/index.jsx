import Navbar1 from "../../components/Navbar1";
import { useLocation } from "react-router-dom";
import B from "../../constants/index"

const BookDetails = () => {
  const location = useLocation();
  const { selectedBook } = location.state ||{};

  return (
    <section className="h-[100vh]">
      <Navbar1 />
      <div className="border shadow-2xl h-[50%] w-[70%] ml-[15%] mt-[15%] mb-auto z-0">

        <h3 className="ml-[35%] text-[1.5em] font-bold mt-[0.7em]">{selectedBook.title} </h3>
        <h4 className="ml-[35%] text-[1em] font-bold mt-[0.7em]">{selectedBook.author} </h4>
        <p className="ml-[35%] mt-[0.7em] w-[60%]">bio</p>
        
        <p className="ml-[35%] mt-[0.7em] text-[#000080] font-medium">Read more </p>
        <p className="ml-[35%] mt-[3em] font-semibold">rating</p>
      </div>    
              <div className="h-[40%] w-[15%] shadow-md border mt-[-33%] ml-[20%] z-20 bg-[white]">
        <img className="h-[100%] w-[100%]" src={selectedBook.cover} alt={selectedBook.title} />
      </div>
      

    </section>
  );
};

export default BookDetails;