import Asynchronouswork from "../component/Asynchronouswork.jsx"


const page = () => {
  return (
     <div className="container min-w-screen min-h-screen">
            <div className="upper h-[50vh]  w-full flex justify-between  ">
                <div className="left bg-rose-100 w-1/2 text-center mt-5 "> Static content </div>
                    
                        <div className="right w-1/2 bg-teal-200"> 
                            <Asynchronouswork time={2000} className={'font-white '} text={"this is an asynchrous text that takes 2 seconds to Load into the Website "} ></Asynchronouswork>
                        </div>
                    
            </div>
            <div className="lower h-[50vh] w-full flex justify-between">
                 
                <div className="left w-1/2 border-x-gray-500">
                    <Asynchronouswork time={5000} className={'font-white '} text={"this is an asynchrous text that takes 5 seconds  to Load into the Website "} ></Asynchronouswork>
                </div>
                 
                <div className="righ w-1/2 bg-blue-300"> normal text </div>
            </div>
    </div>
  )
}

export default page