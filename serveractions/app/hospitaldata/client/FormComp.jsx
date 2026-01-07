'use client'

import { saveinDb } from "./saveindb"
import { useRouter } from "next/navigation"
const FormComp = () => {
    const router = useRouter();
    const handlesubmit = async (formdata)=>{
        const res = await saveinDb(formdata);
        if (res.success) router.refresh();    // re run the parent server component and fetch the fresh data don't refresh page 
    }
  return (
    // <form action={saveinDb}> // valid 
    <form action={handlesubmit} >
                   <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you name" name="name"  />
                   <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you city" name="city"  />
                   <input type="text" className="w-full mt-3 py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you state" name="state"  />
                   <input type="text" className="w-full mt-3 py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you established" name="established"  />
                   <button className="w-full  py-2 mt-3  px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300 "  >{ "Submit" }</button>
    </form>
  )
}

export default FormComp
