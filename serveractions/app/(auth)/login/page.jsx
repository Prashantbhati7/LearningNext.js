
import formaction from "./formaction"
const page = () => {
  return (
    <div className="h-full w-full ">
        <form action={formaction} className="max-w-xl mt-40 mx-auto ">

            <div className=" text-center "><input type="text" name="name"  placeholder="enter your name " className="px-4 outline outline-lime-600  rounded-2xl  mt-3 text-center py-2 "/></div>
            <div className="text-center"> <input type="text" name="email"  placeholder="enter your email " className="px-4 mt-3 outline outline-lime-600 rounded-2xl text-center py-2 "/>  </div>
            <div className="text-center"> <input type="text" name="password"  placeholder="enter your password" className="px-4 mt-3 outline outline-lime-600 rounded-2xl  text-center py-2 "/> </div>
            <div className="text-center w-full "> <button className="text-center w-50  mt-4 bg-green-300 px-3 py-2 rounded-2xl " type="submit">submit</button> </div>
        </form>
    </div>  
  )
}

export default page
