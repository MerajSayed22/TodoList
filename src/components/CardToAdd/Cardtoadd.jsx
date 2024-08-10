import { useState } from "react"
import CardtoDisplay from "../CardtoDisplay/CardtoDisplay";

function Cardtoadd () {

    const [userInput, setUserInput] = useState("")
    const [listTodo,setListTodo] = useState("")
    let task = () => {
        setListTodo(userInput);
        setUserInput("")
        
    }

    const getTaskInput = (e) => {
        setUserInput(e.target.value);
    }


    return (


        <>
        <div className="card text-center">
            <div className="text-2xl font-bold m-2 px-2 text-blue-400">Please Enter Your Task</div>
            <input
            type="search"
            placeholder={'Enter Task'}
            className="outline px-5 py-1 m-2 rounded-md p3 text-2xl"
            value={userInput}
            onChange={getTaskInput}
            />
            <button className="outline rounded-md px-2 bg-blue-500 text-white text-2xl"
            onClick={task}
            >Add Task</button>

        
           
        </div>
        <CardtoDisplay listTodo={listTodo}/>
        
        </>
    )
}

export default Cardtoadd