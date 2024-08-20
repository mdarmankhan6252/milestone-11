import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TabCategories = () => {
   const [jobs, setJobs] = useState([])
   useEffect(()=>{
      const getData = async ()=>{
         const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
         setJobs(data)
      }
      getData()
   },[])
   return (
      <div>
         <div className='text-center py-16 space-y-5'>
            <h1 className='text-2xl font-semibold  sm:text-4xl'>Browse Jobs By Categories</h1>
            <p className='max-w-2xl mx-auto'>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>
         </div>

         <div className='flex items-center justify-center mb-16'>

            <Tabs>
               <div className='*:font-semibold flex justify-center'>
                  <TabList>
                     <Tab>Web Development</Tab>
                     <Tab>Graphic Design</Tab>
                     <Tab>Digital Marketing</Tab>
                  </TabList>
               </div>

               <TabPanel>
                  <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                     {
                        jobs.filter(j => j.category === 'Web Development').map((job, i) => <JobCard job={job} key={i}/>)
                     }
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                     {
                        jobs.filter(j => j.category === 'Graphics Design').map((job, i) => <JobCard job={job} key={i}/>)
                     }
                  </div>
               </TabPanel>
               <TabPanel>
                  <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                     {
                        jobs.filter(j => j.category === 'Digital Marketing').map((job, i) => <JobCard job={job} key={i}/>)
                     }
                  </div>
               </TabPanel>
            </Tabs>
         </div>
      </div>
   );
};

export default TabCategories;