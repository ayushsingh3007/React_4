import React from "react"
import { useNavigate } from "react-router-dom"

export const Student=()=>{
    const Data=useNavigate();
    
    return(
        <>
        <h1>this is data rendering</h1>
        <button onClick={()=>Data("/user")}>Add Details</button>

        </>
    )
}
