'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export default function Home() {
  const [name, setName] = useState('')
  const [res, setRes] = useState(null)

  const handleSubmit = async (e: any) =>{
    try {
        e.preventDefault()
        console.log(name)
        const rp = await fetch('https://6aeei2crz4lhf4j2ue3adntiny0tlxzh.lambda-url.us-east-1.on.aws',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body : JSON.stringify({ name : name})
        })

        const data = await rp.json()
        setRes(data)
      
    } catch (error: any) {
      console.log(error)
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name" className="border p-2 rounded"></input>
          <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit</button>
        </form>

        {
          res && (
            <div>
              Response : 
              <pre>
                {JSON.stringify(res)}
              </pre>
              </div>
          )
        }
    </div>
  );
}
