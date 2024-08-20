import axios from "axios";
import { useEffect, useState } from "react";
import AJobs from "./AJobs";

const AllJobs = () => {
   const [jobs, setJobs] = useState([])
   useEffect(()=>{
      const getData = async () =>{
         const data = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
         setJobs(data.data)
         console.log(data.data);
      }
      getData()
   }, [])   
   return (
      <div>
         <h1 className="text-xl sm:text-2xl font-semibold mt-8 text-right px-2">Total Live Jobs : {jobs.length}</h1>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-16">
            {
               jobs.map((job, i) => <AJobs key={i} job={job}/>)
            }
         </div>
      </div>
   );
};

export default AllJobs;