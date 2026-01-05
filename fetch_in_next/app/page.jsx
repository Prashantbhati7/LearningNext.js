
"use client"

import { useState } from "react"

import { useRouter } from "next/navigation";

function page() {
    const [name,setname] = useState("");
    const router = useRouter();
    const handleserver = ()=>{
        router.push(`/server?name=${name}`)
        setname("");
    }
    const handleclient = ()=>{
        router.push(`/client?name=${name}`)
        setname("");
    }
  return (
    <div>
       <div className="head text-center">To see fetching in server and client component </div>
        <div className="max-w-2xl mx-auto">
        <input  type="text"  className="text-white outline-white mt-8 px-2 w-full " placeholder="enter your name " value={name} onChange={(e)=> setname(e.target.value)}/>
        <button className="bg-blue-600 mt-3 w-full  rounded-xl px-4 py-1 " onClick={handleserver}>Server Component</button>
        <button className="bg-blue-600 mt-3 w-full rounded-xl px-4 py-1 "  onClick={handleclient}>Client Component </button>
        </div>
    </div>
  )
}

export default page
