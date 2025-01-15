
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetch(`https://luxemen-server.vercel.app/jobs`)
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])

  return (
    <>
     
      {/* <h1 className='text-5xl font-bold'>Coming Soon</h1>
      <p className='text-5xl font-bold'>coming</p> */}
     {
      jobs.map(job => <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
     }
      
    </>
  )
}

export default App
