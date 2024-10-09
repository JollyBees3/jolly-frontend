import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const UpdateBook = () => {
    return (
        <section className="h-[250vh]">
           
            {/* Page Content */}
            <div className="h-[200vh] ">
                <div className="w-[70%] h-[100%] ml-[20%] mr-auto">
                    <form className="w-[90%] h-[90%] mt-[10%] border rounded-sm shadow-xl px-[1em]">
                        <div className=" h-[6%]">
                            <div className="h-[100%] w-[20%] border-b-[6px] border-[blue] pt-[1.5em]"><h1 className="mb-[0.5em] text-[1.5em]">Update Book</h1></div>
                        </div>
                        {/* Autor's name input */}
                        <div className="  flex flex-col mb-[0.5em] h-[7%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Author's Name<FontAwesomeIcon icon={faCircleExclamation} color="grey"/></label>
                            <input id="bookTitle" type="text" className="p-[0.5em] w-[80%] h-[50%] border" placeholder="   Enter your name" required />
                        </div>

                        {/* Title input */}
                        <div className="  flex flex-col mb-[0.5em] h-[7%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Title</label>
                            <input id="bookTitle" type="text" className="p-[0.5em] w-[80%] h-[90%] border" placeholder="   Untitled Story" required />
                        </div>

                        {/* Description input */}
                        <div className=" flex flex-col mb-[0.5em] h-[100%] px-[2em] mt-[1em] ">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Story</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[60%] border p-[0.5em]"required />
                            <Link to="" className="mb-[1em] w-[40%] font-bold text-[1.5em] p-[0.3em] bg-[#000080] text-center text-[white] rounded-sm mt-[1em]">Save Changes</Link>
                        </div>
                        
                        
                    </form>
                </div>


            </div>

        </section>


    )
}

export default UpdateBook;