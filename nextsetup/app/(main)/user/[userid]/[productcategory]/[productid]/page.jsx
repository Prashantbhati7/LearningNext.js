

export default async function page(props) {
    //console.log('on user/userid/prodcategory/prodid page props recieved are ',props);
    const Params =await props.params;
    const {userid,productid,productcategory}  = await props.params;
    const prdctid = Params.productid;
  return (
    <div>
       <div>user id  is {userid}</div>
       <div>product category  is {productcategory}</div>
       <div>Product id  is {prdctid}</div>
    </div>
  )
}
