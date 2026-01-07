import { db } from "@/app/config/db.connection"
import { savetoDb } from "./savetodb"



const page = async() => {
    const [hospitaldetails] = await db.execute(`select * from hospitaldetails;`);

  return (
    <div className="flex justify-center min-h-screen  text-white items-center">
        <div className="h-140 w-100 bg-white/20  py-3 px-3  rounded-2xl ">

            <form action={savetoDb}>
                <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you name" name="name"  />
                <input type="text" className="w-full mt-3  py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you city" name="city"  />
                <input type="text" className="w-full mt-3 py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you state" name="state"  />
                <input type="text" className="w-full mt-3 py-2 px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300  " placeholder="enter you established" name="established"  />
                <button className="w-full  py-2 mt-3  px-4 placeholder:text-center outline rounded-2xl  outline-indigo-300 "  >{ "Submit" }</button>
               {hospitaldetails && hospitaldetails?.length>0 && 
                <div className="flex justify-center max-w-5xl h-70 "> 
                        <div className="bg-white/50 rounded-xl mt-4  overflow-scroll  w-full">
                            {hospitaldetails.map(({name,city,state,established},idx)=>{
                                return (
                                    <div className="mt-2 bg-amber-100 text-black rounded-xl outline outline-lime-200 " key={idx}> 
                                      <span>{name}</span>
                                      <span> city : {city}</span>
                                      <span> state :  {state}</span>
                                      <span> est : {established}</span>
                                    </div>
                                )
                            })}
                        </div>
                </div>
               }
            </form>
        </div>
    </div>
  )
}

export default page
