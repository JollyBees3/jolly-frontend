// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
// import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// import { BASE_URL } from "../../constants";
// import Navbar1 from "../../components/Navbar1";
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from "react";

// const handleSubmit = async (event) => {
// try {
//     event.preventDefault();
//     // collect form data
//     const formData = new FormData(event.target);
//     // post data to api
//     const response = await axios.post(`${BASE_URL}/post`, {
//         title: formData.get("title"),
//         author: formData.get("author"),
//         story: formData.get("story"),

//     })
// } catch (error) {
//         console.log(error)
// }
// }

// const AddBook = () => {
//     // var to get
//     const [authors, setAuthors] = useState([]);

//     // save
//     const getAuthors = async () => {
//         const response = await axios.get(`${BASE_URL}/getallauthors`);
//         setAuthors(response.data)
//     }
//     // call func
//     useEffect(() => {
//         getAuthors();
//     }, []);
//     const navigate = useNavigate();
//     const saveBook = async (event) => {
//         event.preventDefault();

//         const formData = new FormData(event.target);

//         await axios.post(`${BASE_URL}/post`, {
//             title: formData.get("title"),
//             author: formData.get("author"),
//             Body: formData.get("body"),
//         });

//         navigate("/booklist")
//     }
//     return (


//         <section className="h-[250vh]">
//             <Navbar1 />
//             {/* Page Content */}
//             <div className="h-[100vh] flex">
//                 <div className="w-[40%] h-[100%] ">
//                     <div className="bg-[#EEEEEE] w-[50%] h-[60%] mt-[15%] ml-[20%] pt-[25%] ">
//                         <div className="flex justify-center align-center items-center "><FontAwesomeIcon icon={faImage} fontSize="4em" color="grey" /></div>
//                         <p className="text-center">Add a cover image for your book</p>
//                         <div className="flex justify-end text-[1em] text-[grey]  px-[0.3em] pt-[45%]"><FontAwesomeIcon icon={faCircleExclamation} /></div>
//                     </div>
//                 </div>

//                 <div className="w-[60%] ">
//                     <form onSubmit={saveBook} className="w-[90%] h-[100%] mt-[10%] border rounded-sm shadow-xl px-[1em]">
//                         <div className=" h-[12%]">
//                             <div className="h-[100%] w-[20%] border-b-[6px] border-[blue] pt-[1.5em]"><h1 className="mb-[0.5em] text-[1.5em]">Story Details</h1></div>
//                         </div>
//                         {/* Autor's name input */}
//                         <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
//                             <label htmlFor="bookTitle" className="text-[1.3em]">Author's Name <FontAwesomeIcon icon={faCircleExclamation} color="grey" /></label>
//                             {/* <input id="bookTitle" type="text" className="w-[80%] h-[90%] border" placeholder="   Enter your name" required name="author"/> */}
//                             <select name="author" id="" className="border h-[90%] w-[80%]">
//                                 {authors.map((author) => {
//                                     return <option key={author._id} value={author._id}>{author.name}</option>
//                                 })}
//                             </select>
//                         </div>

//                         {/* title input */}
//                         <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
//                             <label htmlFor="bookTitle" className="text-[1.3em]">Title</label>
//                             <input id="bookTitle" type="text" className="w-[80%] h-[90%] border" name="title" />
//                         </div>

//                         {/* Date Published input */}
//                         <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
//                             <label className="text-[1.3em]">Body</label>
//                             <input id="bookTitle" type="text" className="w-[80%] h-[90%] border" name="body" />
//                         </div>

                        
//                         <button className="mb-[1em] ml-[1.3em] w-[40%] font-bold text-[1.5em] p-[0.3em] bg-[#000080] text-center text-[white] rounded-sm mt-[1em]">Add Book</button>


//                     </form>
//                 </div>


//             </div>

//         </section>


//     )
// }

// export default AddBook;




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Navbar1 from "../../components/Navbar1";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const AddBook = () => {
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(null); // For error handling

    // Fetch authors
    const getAuthors = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/getallauthors`);
            setAuthors(response.data);
        } catch (err) {
            console.error("Error fetching authors:", err);
        }
    };

    useEffect(() => {
        getAuthors();
    }, []);

    const navigate = useNavigate();

    const saveBook = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            // Post the book to the API
            const newBook = {
                title: formData.get("title"),
                author: formData.get("author"),
                Body: formData.get("body"),
            };

            // Post the new book to the API
            const response = await axios.post(`${BASE_URL}/post`, newBook);

            // After successful post, navigate to the booklist page and pass the newly added book in state
            navigate("/booklist", { state: { addedBook: response.data } });
        } catch (error) {
            console.error("Error saving book:", error);
            setError("Failed to add the book. Please try again.");
        }
    };

    return (
        <section className="h-[250vh]">
            <Navbar1 />
            {/* Page Content */}
            <div className="h-[100vh] flex">
                <div className="w-[40%] h-[100%]">
                    <div className="bg-[#EEEEEE] w-[50%] h-[60%] mt-[15%] ml-[20%] pt-[25%]">
                        <div className="flex justify-center align-center items-center">
                            <FontAwesomeIcon icon={faImage} fontSize="4em" color="grey" />
                        </div>
                        <p className="text-center">Add a cover image for your book</p>
                        <div className="flex justify-end text-[1em] text-[grey] px-[0.3em] pt-[45%]">
                            <FontAwesomeIcon icon={faCircleExclamation} />
                        </div>
                    </div>
                </div>

                <div className="w-[60%]">
                    <form onSubmit={saveBook} className="w-[90%] h-[100%] mt-[10%] border rounded-sm shadow-xl px-[1em]">
                        <div className="h-[12%]">
                            <div className="h-[100%] w-[20%] border-b-[6px] border-[blue] pt-[1.5em]">
                                <h1 className="mb-[0.5em] text-[1.5em]">Story Details</h1>
                            </div>
                        </div>

                        {/* Author selection */}
                        <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
                            <label htmlFor="author" className="text-[1.3em]">Author's Name <FontAwesomeIcon icon={faCircleExclamation} color="grey" /></label>
                            <select name="author" className="border h-[90%] w-[80%]" required>
                                {authors.map((author) => (
                                    <option key={author._id} value={author._id}>{author.name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Book title input */}
                        <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
                            <label htmlFor="title" className="text-[1.3em]">Title</label>
                            <input id="title" type="text" className="w-[80%] h-[90%] border" name="title" required />
                        </div>

                        {/* Body (Story) input */}
                        <div className="flex flex-col mb-[0.5em] h-[13%] px-[2em] mt-[1em]">
                            <label htmlFor="body" className="text-[1.3em]">Body</label>
                            <input id="body" type="text" className="w-[80%] h-[90%] border" name="body" required />
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="mb-[1em] ml-[1.3em] w-[40%] font-bold text-[1.5em] p-[0.3em] bg-[#000080] text-center text-[white] rounded-sm mt-[1em]">Add Book</button>

                        {/* Error message */}
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBook;
