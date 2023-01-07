import { useState,useEffect } from 'react'
import Header from './Header'
import Table from './Table'
import './App.css'

function App() {
  const [timesheets, setTimesheets] = useState([])
  const fetchTimesheets = async () => {
    const request = await fetch('/api/timesheets')
    const response = await request.json()
    console.log(response)
  }
  useEffect(() => {
    fetchTimesheets()
  }, [])

  return (
    <div className="App">
      <Header />
      <Table timesheets={timesheets}/>
    </div>
  )
}

export default App
