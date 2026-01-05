

const page = async({searchParams}) => {
 const {product , sort} = await searchParams;
 //console.log("product type is" , product , " sort order  is ",sort)
  return (
    <div>
        <div className="pro">product type is {product} </div>
        <div className="srot">sort order is {sort} </div>
    </div>
  )
}

export default page
