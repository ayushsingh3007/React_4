import React  from "react";
import { useNavigate } from "react-router-dom";
 import { useParams } from "react-router-dom";
 const User=()=>{

    const Navi=useNavigate()


    const {id}=useParams()
    console.log(id);
return( 
    <>
   


 



   

   <button onClick={()=>Navi("/student")}>Add Details</button>
    </>
)
}
export {User}