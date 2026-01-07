'use server';

import { db } from "@/app/config/db.connection";

export const fetchfromdb = async()=>{
    const [details] = await db.execute('select * from hospitaldetails');
    return details;
}