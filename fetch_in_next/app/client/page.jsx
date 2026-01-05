"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

const page = () => {
    const [data,setdata] = useState(null);
    const searchparams = useSearchParams();
    const name = searchparams.get('name');
    const [loading,setloading] = useState(true);
    useEffect(()=>{
         
       const fetchdata = async()=>{
        
          const res = await fetch(`https://api.genderize.io/?name=${name}`)
          const resjson= await res.json();
         
          setdata(resjson);

          setloading(false);
       }
       fetchdata();

    },[])
  
 
  return (
    // loading? <div className="text-white text-center text-5xl"> Loading... </div>:
    !loading&& 
    <div className="body text-4xl text-center text-white">
        <div className="container">
            <div className="box ">
                <div className="name">name = {data.name} </div>
                <div className="gender"> gender = {data.gender} </div>
                <div className="probab"> probability of {data.gender} is {data.probability} </div>
            </div>
        </div>
    </div>
  )
}

export default page
