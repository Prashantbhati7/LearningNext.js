'use server'
import { redirect } from "next/navigation";
import { db } from "../config/db.connection";
export const feedbackaction = async(prevformdata,formdata)=>{
    try{
    const {name,email,message} = Object.fromEntries(formdata.entries());
    const res = await db.execute(`insert into feedbackform values (?,?,?)`,[name,email,message]);
     //return {success:true,message:'form submitted successfully !'};
     redirect('/')          // can be used only in server comp , controllers , route handlers must be outside try catch;
     // it throws an (303) redirect error inside try catch which is not handles by try catch so we need to do it manually
    }
    catch(error){
        console.log("error " , error);
        if (error.message === 'NEXT_REDIRECT') throw error;
        return {success:false,message:error.message}
    }
}