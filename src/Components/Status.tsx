import React from 'react'


type tasksProps={
    tasks:{
      key?:number,
      id:number,
      job:string,
      isDone:boolean
    } []
  }

const Status:React.FC<tasksProps> = ({tasks}) => {
  return (
    <div>
    <div className="flex justify-between mb-5 mt-4">
      <h3 className="text-2xl font-bold">Your List</h3>
      <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
        Done ({" "}
        <span >
        {tasks.filter((el)=>el.isDone===true).length}
        </span>{" "}
        /<span >{tasks.length}</span> )
      </div>
    </div>
  </div>
  )
}

export default Status