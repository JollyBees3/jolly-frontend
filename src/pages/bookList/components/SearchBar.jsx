import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from the API
  const fetchData = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}`);
      setResults(response.data.Search || []);
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
        fetchData(searchTerm);
      }, 500); // Add debounce delay to prevent excessive API calls

      return () => clearTimeout(delayDebounceFn);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
      
        className='w-[50%] h-[100%] ml-[25%] border-[2px] rounded-[40px] py-[1em] pl-[1em]'
        
      />
      <button><FontAwesomeIcon className=" ml-[-2em] top-[5px] text-[1.7em] text-[#000080]" icon={faMagnifyingGlass} /></button>
      {loading && <p>Loading...</p>}
      <ul>
        {results.length > 0 ? (
          results.map((book, index) => (
            <li key={index}>
              {book.cover} ({book.title})
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
