import './App.css';
import { useState } from "react";
//Components
import Header from './components/header';
import UncontrolForm from './components/uncrontrolForm'
import Taskslist from './components/taskList'



function App() {
  const [todolist, setNewTask] = useState([
    {
      task: "Do the laundry",
      id: 0,
      complete:true,
    },
    {
      task: "Go to the supermarkert",
      id: 1,
      complete:false,
    },
    {
      task: 'Buy cat food',
      id: 2,
      complete:true,
    },
  ]);
  //Funtion to add a new task
   const addTask = (data) =>{
      const newTaskList = [...todolist, data]
      console.log(newTaskList)
      setNewTask(newTaskList)
    }
  
    //Function to check if a task is completed or not. 
    const checkComplete = id => {
      if(window.confirm('Are your sure you want to delete it?'))
      {const newTaskList = todolist.map(tasklist =>{
        if(tasklist.id === id){
          tasklist.complete =! tasklist.complete
        }
        return tasklist
      })
      setNewTask(newTaskList )
    }}
    
    //Funtion to delete a task
    const deletetask = id =>{
     const newTaskList =  todolist.filter(tasklist=> tasklist.id !==id) //Create a new array using the task id.
     setNewTask(newTaskList)
        
    }
  return (
    <div className="App">
    <div className='container-lg'>
      <Header/>
      <div className='inner_ctn'>
        <UncontrolForm newTask={addTask} id={todolist} /> 
        <Taskslist list={todolist} delete={deletetask} check={checkComplete}/>
      </div>
     </div>
    </div>
  );


}

export default App;
