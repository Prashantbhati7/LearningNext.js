"use client"
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    const formaction = async(formdata)=>{      // No need of states , value on change onsubmit handlechange handlesubmit and all 
        const {name,email,password} = Object.fromEntries(formdata.entries());
        
        router.push('/') ;
        //router.back();
    }
  return (
    <div className="max-w-xl mx-auto mt-5 h-full ">
            <form action={formaction} className="">
                <input type="text" name='name' placeholder="enter your name"  className="w-full mt-6 text-center py-2 px-4 outline outline-purple-300 rounded-2xl " />
                <input type="text" name="email" placeholder="enter your email " className="w-full mt-6 text-center py-2 px-4 outline outline-purple-300 rounded-2xl " />
                <input type="text" name="password" placeholder="enter your password "  className="w-full mt-6 text-center py-2 px-4 outline outline-purple-300 rounded-2xl " />
                <button className="w-full text-center py-2 px-4 bg-white/50 outline outline-purple-300 mt-6 rounded-2xl">Submit</button>
            </form>
    </div>
  )
}

export default page
