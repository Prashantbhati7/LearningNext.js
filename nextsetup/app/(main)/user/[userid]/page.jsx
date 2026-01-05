
const page = async({params}) => {
    const {userid} = await params;
    console.log("user id is ",userid);
  return (
    <div >
      <div>User id is {userid} </div>
    </div>
  )
}

export default page
