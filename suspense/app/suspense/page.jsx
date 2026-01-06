import { Suspense } from "react"
import Asynchronouswork from "../component/Asynchronouswork.jsx"


const page = () => {
  return (
    <div className="container min-w-screen min-h-screen">
            <div className="upper h-[50vh]  w-full flex justify-between  ">
                <div className="left bg-rose-100 w-1/2 text-black text-center mt-5 "> Static content </div>
                   <Suspense fallback={<div className="text-center bg-black text-white  text-5xl">Loading.... </div>}>
                        <div className="right w-1/2 bg-teal-200"> 
                            <Asynchronouswork time={2000} className={'text-black '} text={"this is an asynchrous text that takes 2 seconds to Load into the Website "} ></Asynchronouswork>
                        </div>
                    </Suspense>
            </div>
            <div className="lower h-[50vh] w-full flex justify-between">
                <Suspense fallback={<div className="text-center bg-black text-white text-4xl ">Loading.... </div>}>
                <div className="left w-1/2 border-x-gray-500">
                    <Asynchronouswork time={5000} className={'text-white'} text={"this is an asynchrous text that takes 5 seconds  to Load into the Website "} ></Asynchronouswork>
                </div>
                </Suspense>
                <div className="righ w-1/2 bg-blue-300 text-black "> normal text </div>
            </div>
    </div>
  )
}

export default page