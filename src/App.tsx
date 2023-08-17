import './App.css'
import ProgressCard from './ProgressCard/ProgressCard'
import CurrentTask from './currentTask/CurrentTask'
import { CompletedTask } from './completedTask/CompletedTask'
import axios from 'axios'
import { useState, useEffect } from 'react'


const App = () => {
  const [data, setData] = useState<any>([])

  const getData = async () => {
    await axios.get("http://localhost:5000/").then((res) => {
      setData(res.data.data)
    })
  }

  useEffect(() => {
    getData()
    console.log("App component re-rendered")
  }, [])
  return (
    <>
      <div className="container">
        <ProgressCard data={data} />
        <CurrentTask data={data} getData={getData} />
        <CompletedTask data={data} getData={getData} />
      </div >
    </>
  )
}

export default App