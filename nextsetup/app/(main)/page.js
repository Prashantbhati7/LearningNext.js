import Image from "next/image"

import demo from '@/public/demo.jpeg'

function page() {
  return (
    <div>
       <h1 className="text-5xl text-blue-600 "> This is Home page </h1>
       {/* <Image  ></Image> */}
      <Image quality={75} placeholder="blur" loading="lazy" blurDataURL={demo.blurDataURL} alt="an Image" height={500}  width={500}  className="h-100 w-100" src={'/demo.jpeg'} ></Image>
    </div>
  )
}

export default page
