

import { Link } from "react-router-dom";
const AddBook = () => {
    return (
        <section className="h-[250vh]">
           
            {/* Page Content */}
            <div className="h-[100vh] flex">
                <div className="w-[40%] h-[100%] ">
                    <div className="bg-[grey] w-[50%] h-[60%] mt-[15%] ml-[20%]"></div>
                </div>
                <div className="w-[60%] ">
                    <form className="w-[90%] h-[90%] mt-[10%] border rounded-sm shadow-xl px-[1em]">
                        <div className=" h-[12%]">
                            <div className="h-[100%] w-[20%] border-b-[6px] border-[blue] pt-[1.5em]"><h1 className="mb-[0.5em] text-[1.5em]">Story Details</h1></div>
                        </div>
                        {/* Autor's name input */}
                        <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Author's Name</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[90%] border" placeholder="   Enter your name" required />
                        </div>

                        {/* Title input */}
                        <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Title</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[90%] border" placeholder="   Untitled Story" required />
                        </div>

                        {/* Description input */}
                        <div className="flex flex-col mb-[0.5em] h-[40%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Description</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[60%] border" p required />
                            <Link to="" className="mb-[1em] w-[40%] font-bold text-[1.5em] p-[0.3em] bg-[#000080] text-center text-[white] rounded-sm mt-[1em]">Submit Story</Link>
                        </div>
                       
                        
                    </form>
                </div>


            </div>

        </section>


    )
}

export default AddBook;