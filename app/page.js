"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle]=useState("");
  const [desc,setdesc]=useState("");
  const [maintask,setmaintask]=useState([]);
  const handlesubmit=(e)=>{
        e.preventDefault();
        setmaintask([...maintask,{title,desc}]);
        settitle("");
        setdesc("");
        console.log(maintask)
  }
  const removal=(i)=>{
let copytask=[...maintask];
copytask.splice(i,1);
setmaintask(copytask);
  }
  let rendertask="No task available";
  if(maintask.length>0){
    rendertask=maintask.map((t,i)=>{
      return (
        <>
        <li className='flex items-center justify-between mb-7 action'>
          <div key={i} className='flex justify-between w-2/3'>
            <h1>{t.title}</h1>
            <h2>{t.desc}</h2>

          </div>
          <button className='bg-red-500 text-white font-bold px-4 py-2 rounded'onClick={()=>{
            removal(i)
          }}>Delete</button>

        </li>
        </>
      )
      })
  }

  return (
    <>
      <h1 className='bg-black text-white text-center p-5 text-3xl font-bold'>Rahul's TODOLIST</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter title here' value={title} onChange={(e)=>settitle(e.target.value)}/>
        <input type="text" placeholder='Enter description here' value={desc} onChange={(e)=>setdesc(e.target.value)} />
        <button className='bg-black text-white font-bold px-4 py-2 rounded'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200 mt-4'>
          <ul>
            {rendertask}
          </ul>
      </div>
    </>
  )
}

export default page