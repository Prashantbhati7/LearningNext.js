

const Page  = async(props) =>{
    console.log("props are ",props);
   const query = await props.searchParams;
   console.log("query string is ",query);
    return (
        <>
        <div className="font-mont text-5xl " >This is About  page </div>
        
        </>
    )
}

export default Page