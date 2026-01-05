
const page = async({searchParams}) => {
  const {name} = await searchParams;
 //console.log('name is ',name)
   const res = await fetch(`https://api.genderize.io/?name=${name}`)
    const data= await res.json();
    const promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(5)
      }, 4000);
    })
    const stop = await promise;
   
  return (
    <div className="body text-4xl text-center text-white">
        <div className="container">
            <div className="box ">
                <div className="name">name = {data.name} </div>
                <div className="gender"> gender = {data.gender} </div>
                <div className="probab"> probability of {data.gender} is {data.probability} </div>
            </div>
        </div>
    </div>
  )
}

export default page
