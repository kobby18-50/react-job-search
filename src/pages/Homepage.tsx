import { Button,Spinner } from "flowbite-react";
import {useEffect, useState} from 'react'
import MarqueeComponent from "../components/MarqueeComponent";
import axios from "axios";
import { JOBS } from "../models/jobs"; 
import JobCard from "../components/JobCard";


const Homepage = () => {
    const [jobs, setJobs] = useState<JOBS>([] as JOBS)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchJobs = async () => {
            const options = {
                method: 'GET',
                url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest',
                headers: {
                  'X-RapidAPI-Key': '8809f10febmsh167c7bf33671756p198cb5jsn935f3759794f',
                  'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setJobs(response.data.data)
                  setLoading(false)
              } catch (error) {
                  console.error(error);
              }
        }

        fetchJobs()
    }, [])
    
    return ( 
       <main className="">
        <div className="py-10 justify-center flex flex-col items-center bg-slate-100">
            <p className="font-semibold text-lg">WE <span className="text-cyan-700">DON'T</span> WORK REMOTELY</p>

            <p className="p-2 text-center">We Don't Work Remotely is the largest non-remote work community in the world. With over 4.5M visitors, WDWR is the number one destination to find and list incredible remote jobs.</p>

            <Button className="w-fit rounded-none mt-3"><a href="/search">Search Jobs</a></Button>
        </div>

        <MarqueeComponent/>

        <main className="mx-8 lg:mx-96">

        <h2 className="text-xl mb-2 mt-5">Top 20 Jobs</h2>

        {/* start of card */}

       <div className="grid gap-5 ">
       {loading && <div> <Spinner
        aria-label="Extra small spinner example"
        size="lg"
      /></div>}
       {
            jobs.map((job, index) => (
                
               <JobCard key={index} company={job.company} jobSource={job.jobSource} slug={job.slug} tags={job.tags} title={job.title} />
            )) 
        }

       </div>
       

        </main>



           </main>
     );
}
 
export default Homepage;