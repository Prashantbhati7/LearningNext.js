

import { notFound } from "next/navigation";
import { db } from "@/config/db";
export async function generateStaticParams(){       //  for all id's returned by this fuction the below query result is stored in build time and the page behave as static and when request is sent to some id the data is taken form stored data instead of loading again and hece page beome static 
    const [faculties] = await db.execute('select facultyid from faculty');  // this function help to generate all data for dynamic id on build time 
    console.log("all faculites id are ",faculties);
    return faculties.map((faculty)=>({id:faculty.facultyid.toString() })) 
}

const page = async({params}) => {
    const {facultyid} = await params;
    const data = await db.execute(`SELECT * FROM faculty WHERE facultyid = ?`,[facultyid])
    if (! data)  notFound();
  return (
    <div className="text-center text-white ">
        <div> Single faculty data  </div>
          <div>{data[0][0]?.name}</div>
    </div>
  )
}

export default page
