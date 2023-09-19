import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { JOB } from '../models/job'
import { Button } from 'flowbite-react'

const SingleJob = () => {

  const { slug } = useParams()

  const [job, setJob] = useState<JOB>({} as JOB)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [loading, setIsLoading] = useState(false)


  const getJob = async () => {
    const options = {
      method: 'GET',
      url: `https://jobsearch4.p.rapidapi.com/api/v2/Jobs/${slug}`,
      headers: {
        'X-RapidAPI-Key': '8809f10febmsh167c7bf33671756p198cb5jsn935f3759794f',
        'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);

      setJob(response.data)
      console.log(job)
      setIsLoading(false)

      const date = job?.postDate?.split(' ')[0]
      const time = job?.postDate?.split(' ')[1]

      console.log(date)
      console.log(time)

      setDate(date)

      setTime(time)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {

    getJob()
  }, [])


  return (
    <div className=''>
      {loading && <div>Loading</div>}
      <div>
        {job && <main>
          <main className='p-4 bg-slate-100 my-5 text-center flex flex-col justify-center items-center'>

            <h1 className='font-medium text-lg'>{job.title}</h1>

            <div className='flex space-x-2'>
              <p>{job.company}</p>|<p className='text-cyan-700 font-medium'>{job.location}</p>
            </div>


            <div className='flex space-x-1 my-3'>
              <div>Posted :</div>

              <div>{date}</div>,
              <div>{time}</div>
            </div>

            <div className='flex space-x-2'>
              {job.tags?.map((tag, index) => (
                <div key={index} className='border border-black capitalize p-1'>{tag.text}</div>
              ))}
            </div>

          </main>

          <div className='flex flex-col lg:flex-row lg:mx-96'>

            <div className='mx-5' dangerouslySetInnerHTML={{ __html: job.summary }} />

            <div className=" bg-slate-100 my-5">
              <div className='text-center mt-5'>{job.title}

              <hr className='border-1 border-cyan-700 my-3 mx-4' />

              <p className='my-2'>{job.location}</p>

              <div className='justify-center items-center flex mb-4'>
                <Button className='rounded-none '><a href={job.url}>Apply</a></Button>
              </div>
              </div>
            </div>
          </div>


        </main>}
      </div>


    </div>
  )
}

export default SingleJob