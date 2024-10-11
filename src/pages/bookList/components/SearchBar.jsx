// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import { BASE_URL } from '../../../constants';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');                    
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook for navigation

//   // Function to fetch data from the API
//   const fetchData = async (query) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/getall` ); // Ensure API returns proper search results
//       setResults(response.data.Search || []);
//     } 
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//     setLoading(false);
//   };

//   // Effect to trigger fetch when searchTerm changes 
//   useEffect(() => {
//     if (searchTerm) {
//       const delayDebounceFn = setTimeout(() => {
//         fetchData(searchTerm);
//       }, 500); // Add debounce delay to prevent excessive API calls

//       return () => clearTimeout(delayDebounceFn);
//     } else {
//       setResults([]);
//     }
//   }, [searchTerm]);

//   // Function to handle search and redirect to BookDetails page
//   const handleSearchClick = () => {
//     if (results.length > 0) {
//       const selectedBook = results[0]; // Assume we're taking the first result for simplicity
//       navigate(`${BASE_URL}/books/:id`, { state: { book: selectedBook } }); // Navigate to BookDetails page with the book data
//     } else {
//       alert('No books found!');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for books..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className='w-[50%] h-[100%] ml-[25%] border-[2px] rounded-[40px] py-[1em] pl-[1em]'
//       />
//       <button onClick={handleSearchClick}>
//         <FontAwesomeIcon className="ml-[-2em] top-[5px] text-[1.7em] text-[#000080]" icon={faMagnifyingGlass} />
//       </button>
//       {loading && <p>Loading...</p>}
//       <ul>
//         {results.length > 0 ? (
//           results.map((book, index) => (
//             <li key={index}>
//               {book.cover} ({book.title})
//             </li>
//           ))
//         ) : (
//           !loading && <li></li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { BASE_URL } from '../../../constants';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');                    
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Function to fetch data from the API
  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/`, {
        params: { query } // Send search term as query param
      });
      setResults(response.data.Search || []); // Check if the API returns a 'Search' array
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Effect to trigger fetch when searchTerm changes 
  useEffect(() => {
    if (searchTerm) {
      const delayDebounceFn = setTimeout(() => {
        fetchData(searchTerm); // Call API with searchTerm
      }, 500); // Add debounce delay to prevent excessive API calls

      return () => clearTimeout(delayDebounceFn);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  // Function to handle search and redirect to BookDetails page
  const handleSearchClick = () => {
    if (results.length > 0) {
      const selectedBook = results[0]; // Assume we're taking the first result for simplicity
      navigate(`/books/${selectedBook.id}`, { state: { book: selectedBook } }); // Navigate to BookDetails page with book data
    } else {
      alert('No books found!');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-[50%] h-[100%] ml-[25%] border-[2px] rounded-[40px] py-[1em] pl-[1em]'
      />
      <button onClick={handleSearchClick}>
        <FontAwesomeIcon className="ml-[-2em] top-[5px] text-[1.7em] text-[#000080]" icon={faMagnifyingGlass} />
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {results.length > 0 ? (
          results.map((book, index) => (
            <li key={index}>
              <img src={book.cover} alt={book.title} width="50" /> {book.title}
            </li>
          ))
        ) : (
          !loading && <li></li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
