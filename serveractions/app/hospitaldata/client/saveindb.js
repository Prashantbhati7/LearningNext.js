'use server';

import { db } from "@/app/config/db.connection";
import { revalidatePath } from "next/cache";


export const saveinDb= async(formdata)=>{
    const {name,state,city,established}  = Object.fromEntries(formdata.entries());
    await db.execute(`insert into hospitaldetails values (?,?,?,?)`,[name,city,state,established])
    return {success:true,message:'saved to databse successfully '};    // when using router.refresh in client component 
   //revalidatePath('/hospitaldata/client');               // when not using router.refresh in client comp 

}