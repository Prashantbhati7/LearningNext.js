"use client"

import { useSearchParams } from "next/navigation"


const page = () => {
    const searchParams = useSearchParams();  
    //console.log("search params are ",searchParams);    
    const product = searchParams.get('product')
    const sort = searchParams.get('sort');      // you must know the key of the value to be given 

    // Or 


    // const {product,sort} = Object.fromEntries(searchParams.entries());     // Also used for form submission 
    // console.log("product is ",product," and sort is ",sort);
    
  return (
    <div>
       <div>Product type is  is {product} </div>
      
       <div>sort method is {sort} </div>
    </div>
  )
}

export default page
