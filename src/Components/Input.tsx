import React, {  useState } from 'react'


type InputProps = {
    addTask:(newTask:{id:number,job:string,isDone:boolean})=>void
}

export const Input : React.FC<InputProps> = ({ addTask }) => {

const [input,setInput] = useState("")
    const handleChange =(event:React.ChangeEvent<HTMLInputElement> )=>{
        setInput(event.target.value);

        }
        const handleAdd =()=>{
          
      
           const newTask={
            id:Date.now(),
            job:input,
            isDone:false
           }
         if(input != "")  {
            addTask(newTask)
        setInput("")
        }
           
        }
        const handleKeyUp=(event : React.KeyboardEvent <HTMLInputElement>)=>{
            if(event.key === "Enter"){
            
      
          handleAdd()
                
            }
        }
   
  return (
  <div>
        <input value={input} onChange={handleChange} onKeyUp={handleKeyUp} type="text" className='border border-black py-2 px-4 mt-4'/>
        <button onClick={handleAdd}  type='button' className='bg-gray-600 text-white py-2 px-3 border border-gray-600 font-bold hover:bg-gray-800 text-md' >+</button>

   
  </div>
    
  )
}

