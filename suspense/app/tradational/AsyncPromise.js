export const asyncPromise = async()=>{
    const newpromise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(5);
        }, 3000);
    })
    const data = await newpromise;
    return data;
}