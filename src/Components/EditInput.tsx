import React, { useEffect, useRef } from 'react'

type EditInputProps = {
    updateInput:string,
    handleUpdateInput:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    handleUpateInputBlur:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const EditInput:React.FC<EditInputProps> = ({updateInput,handleUpdateInput,handleUpateInputBlur}) => {
  const editRef = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    editRef.current?.focus()
  },[])
    return (
    <div>
        <input ref={editRef} type="text" value={updateInput} onChange={handleUpdateInput} onBlur={handleUpateInputBlur} className='border border-black p-2'/>
    </div>
  )
}

export default EditInput