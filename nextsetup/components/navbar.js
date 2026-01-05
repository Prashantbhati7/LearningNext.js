import Link from "next/link"

function Navbar() {
  return (
    <div className="w-full py-5 bg-gray-700  flex justify-between ">
       <div className="left gap-4 w-1/2 flex ">
        <div className="lgog"><Link href={'/'}>Logo</Link></div> 
        <div className="title">title</div>
       </div>
       <div className="right w-1/2 flex pr-4 justify-end  gap-4 "> 
       <div className="contact px-2"><Link href={'/contact'}> Contact </Link></div>
       <div className="about"> <Link href={'/about'}> About</Link></div>
       <div className="about"> <Link href={'/services'}> Services </Link></div>
       <div className="login"><Link href={'/login'}>Login</Link></div>
       <div className="signup"><Link href={'/signup'}>SignUp</Link></div>
       </div>
    </div>
  )
}

export default Navbar
