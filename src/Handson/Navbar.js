import React from "react"; 
import { Home } from "./Home";
import {Student} from "./Student"
import {Contact} from "./Contact"
import { User } from "./User";
import {BrowserRouter,Link, Route, Routes} from 'react-router-dom';
function Navbar(){
    return(
        <>
        <div id="navbar">
        <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/contact">Contact</Link>
        
        

        <Routes>
            <Route path='/student' element={<Student/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/user/:id' element={<User/>} />
            


        </Routes>
        
        </BrowserRouter>
        </div>
        </>
    )
}
export default Navbar;