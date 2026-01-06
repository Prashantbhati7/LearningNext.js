import { db } from "@/config/db";

import { notFound } from "next/navigation";
export const revalidate = 60;         //  ISR (incremental state regeneration ) 
const page = async() => {
    const data = await db.execute('select * from faculty');
    console.log(data[0]);
    if (!data) return notFound();
  return (
    <div className="text-white w-full h-full">
        <table className="h-full ">
            <thead>
               <tr className=""> 
                <th>facultyid</th>
                <th>name</th>
                
               </tr>
            </thead>
            <tbody>
        {data[0].map((obj)=>{
            return <tr key={obj.facultyid}>
                <td>{obj.facultyid}</td>
                <td  className="text-white">{obj.name}</td>
            </tr>
        })}
            </tbody>
        </table>
    </div>
  )
}

export default page
