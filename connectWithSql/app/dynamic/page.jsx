import { db } from "@/config/db";
import { cache } from "react";
export const dynamic = 'force-dynamic';

const page = async() => {
  const data = await getdata();     // cache can only used in rsc(server component) (ssr) server side rendering 
  const date2 = await getdata();      // also if this fuction used in other components then the cache data is give rather than executing function again 
  const data3 = await getdata();
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


const getdata = cache( async ()=>{
  const data = await db.execute('select * from faculty');
  console.log("getting data from database ");
  return data;
});