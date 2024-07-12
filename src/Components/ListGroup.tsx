import React from 'react'
import List from './List'


type tasksProps={
  tasks:{
    key?:number,
    id:number,
    job:string,
    isDone:boolean,
  
  } [],
  doneTask:(id:number)=>void,
  delTask:(id:number)=>void,
  updateTask:(id:number,job:string)=>void
}



const ListGroup : React.FC<tasksProps > = ({tasks,doneTask,delTask,updateTask}) => {
  return (
    <ul >
{tasks.map(( {id,job,isDone} )=>(<List key={id} id={id} job={job} isDone={isDone} doneTask={doneTask} delTask={delTask} updateTask={updateTask}/>))}
    </ul>
  )
}

export default ListGroup