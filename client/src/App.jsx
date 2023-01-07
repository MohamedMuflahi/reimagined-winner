import { useState,useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import './styles/App.css'

function App() {
  const [timesheets, setTimesheets] = useState([])
  const fetchTimesheets = async () => {
    const request = await fetch('/api/timesheets')
    const response = await request.json()
    setTimesheets(response)
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
