import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../features/TodoSlice'

export const TodoForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState();
  return (
    <div className='flex sticky top-0 items-center gap-2 justify-between'>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} className='bg-white border-b border-b-[2px]  w-[80%] h-[50px] rounded text-[18px] px-4 font-semibold' placeholder='Enter new task'/>
      <button onClick={() => {dispatch(AddTodo(text)); setText("") }} className='px-[3px] py-[7px] bg-blue-800 hover:bg-blue-400 text-white w-[20%] h-[50px] rounded text-lg font-semibold cursor-pointer'>
        Enter
      </button>
    </div>
    
  )
}
