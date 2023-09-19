import { TextInput, Button, Spinner } from 'flowbite-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { JOBS } from '../models/jobs'
import JobCard from '../components/JobCard'

const Search = () => {

  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState<JOBS>([] as JOBS)

  const fetchSearchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search',
      params: {
        SearchQuery: searchValue || 'javascript',
        PageSize: '12',
        PageNumber: '1'
      },
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

  const handleSearch = (event : React.FormEvent) => {
    setLoading(true)
    event.preventDefault()
    fetchSearchData()
    setLoading(false)
  }

  useEffect(() => {
    fetchSearchData()
  }, [])
  return (
    <div>
     <main className='bg-slate-100 py-10'>
     <h1 className="text-center text-lg font-medium mb-3">FIND YOUR DREAM JOB</h1>

<div className='mx-10 lg:mx-96'>
  <form onSubmit={handleSearch} className='flex space-x-3'>
    <TextInput type='search' required className='w-full rounded-none' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />


    {loading ? <Button className='rounded-none' disabled>Loading..</Button> : <Button type='submit' className='rounded-none'>Search</Button>}
  </form>
</div>
     </main>


      <div className="grid gap-5 mx-8 mt-5 lg:mx-96">
     {loading && <div> <Spinner
        aria-label="Extra small spinner example"
        size="lg"
      /></div>}
        {
          jobs &&  jobs.map((job, index) => (

            <JobCard key={index} company={job.company} jobSource={job.jobSource} slug={job.slug} tags={job.tags} title={job.title} />
          ))
        }
      </div>
    </div>
  )
}

export default Search