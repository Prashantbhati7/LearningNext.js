
const page = async(props) => {
  const searcparams = await props.params;
  const {productcategory} = searcparams;
  return (
    <div>
         <div>Productcategory  is {productcategory} </div>
    </div>
  )
}

export default page
