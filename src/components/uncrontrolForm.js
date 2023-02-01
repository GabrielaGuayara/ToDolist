import React,{ useRef} from 'react'

const UncontrolForm = ({newTask, id}) => {
    let newTaskRef = useRef()


    const handleSubmit = e =>{
        e.preventDefault();

        let TasksData ={
                task:newTaskRef.current.value,
                id: id.length,
                complete: false
            };
            newTask(TasksData) //Using props to pass data from uncrolledForm to app.js
            newTaskRef.current.value=(' ')//Reset the input bar
    }

    return (
    
             <form onSubmit={handleSubmit}>

                <label id='titleform' htmlFor="newTask">Task:</label>
                <input 
                    type='text'
                    id="task" 
                    placeholder='Enter a new task'
                    ref={newTaskRef}
                    required
                />
                 <button className="btn btn-primary" type='submit'>Submit</button>
                 
            </form>

    )
}
export  default UncontrolForm;
