
"use client"

import { useEffect, useState } from "react"

function page() {
  const [joke,setjoke] = useState('');
  const [show,setshow] = useState(false);
  const fetchJoke = async()=>{
     const data = await fetch('https://official-joke-api.appspot.com/random_joke')
     const joke = await data.json();
     console.log("resjson is ",joke);
     setshow(false);
     setjoke(joke);
  }
  useEffect(()=>{
    fetchJoke();
  },[])
  return (
    <div className="min-h-[80vh] flex items-center  text-center text-white">
          <div className="card mx-auto h-80 text-white bg-white/10 w-120  rounded-2xl"> 
          <div className="title text-2xl text-orange-400">Random Jokes Generator</div>
          <div className=" py-4 flex flex-col justify-center gap-5  h-[70%]">
          <div className="text-center text-amber-300 ">{joke?.setup || ''}</div> 
          {show && <div> {joke.punchline} </div>}
           </div>
           <div >
          <button className="px-4 mx-2 cursor-pointer bg-amber-500 rounded-2xl py-2 " onClick={()=> setshow(!show) } > {show?'Hide':'show'} </button>
          <button className="px-4 mx-2  cursor-pointer bg-amber-500 rounded-2xl py-2 " onClick={()=> { fetchJoke() }}> New Joke  </button>
          </div>
           </div>
    </div>
  )
}

export default page
