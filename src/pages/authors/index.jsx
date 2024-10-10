// import Navbar1 from "../../components/Navbar1";
// import B, { BASE_URL } from "../../constants/index";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAt } from "@fortawesome/free-solid-svg-icons";
// import SearchBar from "../bookList/components/SearchBar";
// const Authors = () =>{
    
       
        
//             <section className="h-[100vh] ">
//                  <Navbar1/>
//               <div className="h-[10%] mt-[4em]">
//                 <div><h1 className="text-[2em] font-bold text-center mt-[1em] mb-[1em]">Our Authors</h1></div>
//               <SearchBar/>
//               </div>
//               <div className="h-[100%] mt-[10%] w-[60%] ml-[20%] grid grid-col-1 gap-[2em]">
//                 {
//                   authors.map((author) => {
                    
//                       <div key={index} className="h-[50%] py-auto  pl-[0.5em] bg-[white] shadow-md rounded-lg">
//                         <h3 className="text-[2em] text-start"><FontAwesomeIcon icon={faAt} className="text-[#000080]"/> 
//                             {author.name}
//                         </h3>
//                         <p>{author.bio}</p>
//                       </div>
                    
//                   })
//                 }
//               </div> 
//             </section>
          
//     )
// }
// export default Authors;
import {useEffect,useState} from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
const Authors = ()=>{
    const[authors,setAuthors] = useState([])
    const getAuthors = async() =>{
        const response = await axios.get(`${BASE_URL}/getallauthors`);
        setAuthors(response.data);
    }

    useEffect(() =>{
        getAuthors();
    },[]);

    return(
        <div>
            <h1>ALL AUTHORS</h1>
            <div>
                {authors.map((author) =>{
                  <h1 key={author._id}>{author.map}</h1>

                })}
            </div>
        </div>
    )
}
export default Authors;