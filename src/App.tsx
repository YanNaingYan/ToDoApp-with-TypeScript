
      
  
  import React, { useState } from 'react'
import { Input } from './Components/Input'

import ListGroup from './Components/ListGroup'
import Status from './Components/Status'

  type Tasks = 
  {  
    id:number,
    job:string,
    isDone:boolean
  }

  type TasksProps=Tasks[]
   type addTaskProps=(newTask:Tasks)=>void
   

  
  const App = () => {
    const [tasks,setTasks] = useState<TasksProps>(
[  
      { id: 1, job: "Complete homework", isDone: false },
      { id: 2, job: "Buy groceries", isDone: false },
      { id: 3, job: "Call mom", isDone: false },
      { id: 4, job: "Go for a run", isDone: false },
      { id: 5, job: "Read a book", isDone: false },
    ]
    )
const doneTask  =(id:number)=>{
  setTasks(
    tasks.map((task)=>task.id === id ? {...task,isDone:!task.isDone} : task)
  )
}
    const addTask : addTaskProps = (newTask)=>{
      setTasks([...tasks,newTask])
    }
    const delTask =(id:number)=>{
setTasks(tasks.filter((el)=>el.id!=id))
    }
    const updateTask=(id : number,newJob:string)=>{
      setTasks(tasks.map((task)=>(task.id===id ? {...task,job:newJob}:task)))
    }

    return (
      <div className='w-[70%] mx-auto mt-8'>
      <h1 className='text-2xl font-bold'>Todo App</h1>
      <Input addTask={addTask}  />
      <Status tasks={tasks}/>
<ListGroup tasks={tasks} doneTask={doneTask} delTask={delTask} updateTask={updateTask}/>
    </div>
    )
  }
  
  export default App