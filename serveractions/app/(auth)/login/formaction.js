"use server"

const formaction = async(formdata)=>{
    const data= Object.fromEntries(formdata.entries());
    //console.log("name is ",name , " email is ",email, " password is ",password);
    console.log(data);
 }
export default formaction