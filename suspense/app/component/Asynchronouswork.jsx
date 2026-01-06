

const Asynchronouswork = async({text,className,time}) => {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, time);
    })
    await promise;
  return (
    <div className={className}>
        <h1 className="text-center">{text}</h1>
    </div>
  )
}

export default Asynchronouswork
