import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants"; // Adjust the path as necessary
import Navbar1 from "../../components/Navbar1"; // Import your Navbar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteBook = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate(); 

    // Fetch available books
    const getBooks = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/delete/:id`); 
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    // Delete a book by ID
    const deleteBook = async (bookId) => {
        try {
            await axios.delete(`${BASE_URL}/delete/:id/${bookId}`); 
            setBooks(books.filter((book) => book._id !== bookId));
            alert("Book deleted successfully!"); 
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Failed to delete the book. Please try again.");
        }
    };

    useEffect(() => {
        getBooks(); // Fetch books on component mount
    }, []);

    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <Navbar1 />
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 max-w-3xl mx-auto mt-10">
                <h1 className="text-2xl font-bold text-center mb-4">Delete a Book</h1>
                <ul className="space-y-4">
                    {books.map((book) => (
                        <li key={book._id} className="flex justify-between items-center p-2 border-b">
                            <span>{book.title} by {book.author}</span>
                            <button onClick={() => deleteBook(book._id)} className="text-red-500 hover:text-red-700">
                                <FontAwesomeIcon icon={faTrash} /> Delete
                            </button>
                        </li>
                    ))}
                </ul>
                {books.length === 0 && <p className="text-center mt-4">No books available to delete.</p>}
                <div className="text-center mt-6">
                    <button 
                        onClick={() => navigate("/")} 
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DeleteBook;
