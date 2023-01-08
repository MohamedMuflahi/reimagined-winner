import { useState, useEffect } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import Pager from './components/Pager'
import './styles/App.css'

function App() {
  const [timesheets, setTimesheets] = useState([])
  const [totals, setTotals] = useState({})
  const [totalPages, setTotalPages] = useState(0)
  const [page,setPage] = useState(1)
  const [perPage, setPerPage] = useState("15")

  const fetchTimesheets = async () => {
    const request = await fetch(`/api/timesheets/${page}/${perPage}`)
    const response = await request.json()
    setTimesheets(response.timesheets)
    setTotals({
      total_hours: response.total_hours,
      total_billable_amount: response.total_billable_amount
    })
    const pages = Math.ceil(response.total_count / 15)
    setTotalPages(pages)
  }
  useEffect(() => {
    fetchTimesheets()
  }, [page,perPage])

  return (
    <div className="App">
      <Header totals={totals} />
      <Table timesheets={timesheets} perPage={perPage} setPerPage={setPerPage} />
      <Pager page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  )
}

export default App
