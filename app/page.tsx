'use client'

import { useEffect, useState } from "react";


export default function Home() {
const [dat, setDat]=useState([])
const [val, setVal]=useState('')

  useEffect(()=>{
    Dta()
  },[])
   async function Dta(){    
    const mal=await fetch('http://localhost:3000/api')
    const maljs=await mal.json();
    console.log(maljs);
    setDat(maljs)
        
  }

   async function POST() {
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      body: JSON.stringify(val),
    })
   
    const data = await res.json()
    setDat(data)
    setVal('')
    
  }
  async function DELETE(d) {
    const res = await fetch('http://localhost:3000/api', {
      method: 'DELETE',
      body: JSON.stringify(d),
    })
   
    const data = await res.json()
    setDat(data)
    setVal('')
    
  }




  return (
    <div className="bg-slate-200 min-h-[100vh] pt-28"> 
      <div className="w-[600px] mx-auto bg-slate-100 pt-12 px-6">
      <h2 className=" text-center text-[32px]">Todo List</h2>
      <div className="flex w-full justify-center gap-10 py-10">
        <input type="text" value={val} className="px-2" onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={POST} className="px-10 py-2 text-white bg-red-400 ">add</button>
      </div>
      <ul>
      {dat.length==0 ? '': dat.map(a=><li key={a.id} className="text-[24px] flex justify-between">{a.name} <button onClick={()=>DELETE(a.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(217,29,29,1)"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM9 4V6H15V4H9Z"></path></svg></button></li>)}
      </ul>

      
      </div>
    </div>
  );
}
