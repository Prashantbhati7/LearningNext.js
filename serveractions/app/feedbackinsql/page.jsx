'use client'

import { useActionState } from "react"
import { feedbackaction } from "./feedbackaction";
import { useFormStatus } from "react-dom";
const page = () => {
  const [state,formAction,isloading] = useActionState(feedbackaction,null);
 //const [pending,data,method,action] = useFormStatus();      // status information of the last submission 
  return (

    <div className="flex justify-center min-h-screen  text-white items-center">
        <div className="h-140 w-100 bg-white/20  py-3 px-3  rounded-2xl ">
            <form action={formAction}>
                <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you name" name="name"  />
                <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you email" name="email"  />
                <input type="text" className="w-full mt-3 py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you message" name="message"  />
                <button className="w-full  py-2 mt-3  px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300 " disabled={isloading}>{ !isloading && "Submit" }</button>
               {state &&  <div className={`w-full text-center rounded-xl  mt-4 ${state?.success?'bg-green-600':'bg-red-500'} `}>{state?.message}</div>}
            </form>
        </div>
    </div>
  )
}

export default page
