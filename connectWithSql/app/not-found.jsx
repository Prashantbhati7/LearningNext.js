import Link from "next/link"

const notfound = () => {
  return (
    <div className="h-full ">
        <div className=" text-center">Not found 404</div>
        <Link className="max-w-2xl mx-auto text-center px-4 py-2 rounded-2xl text-black  bg-amber-400" href={'/'}>Go Home </Link>
    </div>
  )
}

export default notfound
