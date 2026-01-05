
const page = async(props) => {
    const allparams = await props.params;
    const [username,userid,shopcategory] =  allparams.allDynamicParams;     // you must know the order of dynamic route like first dynamic is name then id then product and all 
    console.log("allparams are ",allparams.allDynamicParams);
    console.log("username is ",username," user id is ",userid," shop category is ", shopcategory );
  return (
    <div>
        <div>username is {username} , userid is {userid} , {shopcategory} is shopping cateogry of user </div>
    </div>
  )
}

export default page
