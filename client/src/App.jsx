import { useState, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import './styles/App.css'

function App() {
  const [timesheets, setTimesheets] = useState([])
  const [totals, setTotals] = useState({})
  const fetchTimesheets = async () => {
    const request = await fetch('/api/timesheets')
    const response = await request.json()
    setTimesheets(response.timesheets)
    setTotals({
      total_hours: response.total_hours,
      total_billable_amount: response.total_billable_amount
    })
  }
  useEffect(() => {
    fetchTimesheets()
  }, [])

  return (
    <div className="App">
      <Header totals={totals} />
      <Table timesheets={timesheets} />
    </div>
  )
}

export default App
