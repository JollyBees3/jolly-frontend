import { Link } from "react-router-dom";

const LogIn = () =>{
    return(
        <section className="signUp">
            <div className="border shadow-lg w-[30%] h-[90%] ml-[55%] flex flex-col" >
                <h1 className="text-[2em] text-center mt-[1em] font-bold mb-[1em]">Log In to Library</h1>
                <input type="text" className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto" placeholder="Enter your username"/>
                <input type="text" className="w-[80%] h-[10%] border mb-[1em] ml-[10%] mr-auto" placeholder="Enter your password"/>
                <Link to="" className="border w-[30%] h-[10%] text-[1em] text-[white] font-bold p-[0.5em] pl-[1.7em] ml-[35%] rounded-sm bg-[#000080]">Sign Up</Link>
                <p className="font-bold text-[0.9em] text-center">Don't have an account? </p>
                <Link to="../SignUp" className="font-bold text-[0.9em] text-center text-[#000080] underline">Log In</Link>
                
            </div>
        </section>
    );
}
export default LogIn;