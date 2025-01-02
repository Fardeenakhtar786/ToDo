import { useState } from 'react';
import { MdCheck,MdDeleteForever } from "react-icons/md";
import './ToDoList.css';
export const ToDoList = () =>{
    const [InputValue,setInputValue] = useState("");
    const [task,setTask] = useState([])
    const [dateTime,setDateTime] = useState("");
    const handleInputChange = (event) =>{
        setInputValue(event);
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if(!InputValue)return;

        if(task.includes(InputValue)){
            setInputValue("");
            return;
        } 
        // (... = spread operator)
        setTask((prevTask) =>[...prevTask,InputValue]);

        setInputValue("");
    }
            
            //Date and Time 
        setInterval(()=>{
            const now = new Date();
        const formatDate = now.toLocaleDateString();
        const formatTime = now.toLocaleTimeString();
        setDateTime(`${formatDate} - ${formatTime}`);
        },1000)
            //Delete ToDo function
            const handleDeleteToDo = (value) =>{
                    console.log(task);
                    console.log(value);
            const updateTask = task.filter((curTask) => curTask !== value)
            setTask(updateTask);
            }

            // handle clear Button Function 

            const handleClearToDo = () =>{
                setTask([]);
            }

            // handle Check ToDo 
            const handleCheckToDo = () =>{
                
            }
    return(
        <section className="todo-container">
            <header>
            <h1>ToDo List</h1>
            <h2>{dateTime}</h2>
        </header>
        <section className="form" >
        <form onSubmit={handleFormSubmit}>
            <div>
                <input type="text" className="todo-input" autoComplete="off" value={InputValue} onChange={(event)=> handleInputChange(event.target.value)}/>
            
                <button type="submit" className="todo-btn">Add Task</button>
            </div>
        </form>
        </section>
        <section className='myUnordList'>
        <ul>
            {
                task.map((curTask,index)=>{
                    return(
                        <li key={index} className='todo-item'>
                            <span>{curTask}</span>
                            <button className='check-btn' onClick={handleCheckToDo}> 
                                <MdCheck />
                            </button>
                            <button className='delete-btn' onClick={()=>handleDeleteToDo(curTask)}> 
                                <MdDeleteForever />
                            </button>
                        </li>
                        
                    )
                })
            }
        </ul>
        </section>
        <section>
            <button className='clear-btn' onClick={handleClearToDo}>Clear all</button>
        </section>
        </section>
    )
}