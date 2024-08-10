import { useState } from "react";

import Cardtoadd from "../CardToAdd/Cardtoadd"



export default function CardtoDisplay (props) {

    const [letlive,useLetlive]=useState()

    
let handleDelete = () => {
    
    
    
}


    return(
        <>
        <div className="showTask">
            <div className="text-yellow-600 m-3 text-xl font-semibold">Pending Task</div>
            <div className="addedTaskcard">
                <div className="taskName">{console.log(props.listTodo)}
                </div> <button className="bg-blue-500 rounded-md text-white px-4">Edit</button> 
                <button onClick={handleDelete}
                className="bg-red-500 rounded-md text-white px-3">Delete</button>
            </div>
            

        </div>
        </>
    )
}