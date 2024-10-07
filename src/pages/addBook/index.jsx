


const AddBook = () => {
    return (
        <section className="h-[250vh]">
           
            {/* Page Content */}
            <div className="h-[100vh] flex">
                <div className="w-[40%] h-[100%] ">
                    img goes here
                </div>
                <div className="w-[60%] ">
                    <form className="w-[90%] h-[200vh] mt-[10%] border rounded-sm shadow-xl px-[1em]">
                        <div className=" h-[6%]">
                            <div className="h-[100%] w-[20%] border-b-[6px] border-[blue] pt-[1.5em]"><h1 className="mb-0 text-[1.5em]">Story Details</h1></div>
                        </div>
                        {/* Title input */}
                        <div className="flex flex-col mb-[0.5em] h-[7%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Author's Name</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[45%] border" placeholder="   Enter your name" required />
                        </div>

                        {/* Title input */}
                        <div className="flex flex-col mb-[0.5em] h-[7%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Title</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[45%] border" placeholder="   Untitled Story" required />
                        </div>

                        {/* Description input */}
                        <div className="flex flex-col mb-[0.5em] h-[15%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Description</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[60%] border" p required />
                        </div>

                        {/* Main Characters input */}
                        <div className="flex flex-col mb-[0.5em] h-[7%] px-[2em] mt-[1em]">
                            <label htmlFor="bookTitle" className="text-[1.3em]">Main Character</label>
                            <input id="bookTitle" type="text" className="w-[80%] h-[45%] border" placeholder="   Untitled Story" required />
                        </div>

                        {/* Category input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] border-y-[1px] border-[#E5E7EB] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em]">Category</label>
                            <input id="bookTitle" type="text" className="w-[62%] h-[90%] border ml-[2em]" required />
                        </div>

                        {/* Tages input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] border-b-[1px] border-[#E5E7EB] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em] mr-[2em]">Tags</label>
                            <input id="bookTitle" type="text" className="w-[60%] h-[90%] border ml-[2em]" required />
                        </div>

                        {/* Language input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] border-b-[1px] border-[#E5E7EB] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em] mr-[2em]">Language</label>
                            <input id="bookTitle" type="text" className="w-[52%] h-[90%] border ml-[2em]" required />
                        </div>

                        {/* Target Audience input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] border-b-[1px] border-[#E5E7EB] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em] mr-[2em]">Target Audience</label>
                            <input id="bookTitle" type="text" className="w-[43%] h-[90%] border ml-[2em]" required />
                        </div>

                        {/* Copyrights input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] border-b-[1px] border-[#E5E7EB] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em] mr-[2em]">Copyright</label>
                            <input id="bookTitle" type="text" className="w-[53%] h-[90%] border ml-[2em]" required />
                        </div>

                        {/* Rating input */}
                        <div className="flex mb-[0.5em] h-[7%] px-[2em] mt-[1em] py-4">
                            <label htmlFor="bookTitle" className="text-[1.3em] mt-[0.5em] mr-[2em]">Rating</label>
                            <input id="bookTitle" type="text" className="w-[58%] h-[90%] border ml-[2em]" required />
                        </div>
                    </form>
                </div>


            </div>

        </section>


    )
}

export default AddBook;