
'use server';

import { db } from "@/app/config/db.connection";
import { revalidatePath } from "next/cache";

export const savetoDb= async(formdata)=>{
    const {name,state,city,established}  = Object.fromEntries(formdata.entries());
    await db.execute(`insert into hospitaldetails values (?,?,?,?)`,[name,city,state,established])
    revalidatePath('/hospitaldata/server')    // refresh cache (clear old cache and create new )
   // return {success:true,message:'successfully saved to database '};
}