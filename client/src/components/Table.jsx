import '../styles/Table.css'
import Row from './Row'
import TableHeader from './TableHeader'
const Table = ({ timesheets,perPage, setPerPage }) => {
    const renderTimesheets = timesheets.map((timesheet, index) => {
        return (
            <Row key={index} timesheet={timesheet} />
        )
    })
    return (
        <div className="table-container">
            <div className="table-header">
                <TableHeader name="Name" />
                <TableHeader name="Clients" />
                <TableHeader name="Hours" />
                <TableHeader name="Billable Hours" />
                <TableHeader name="Billable Amount" />
                <select
                className="select" 
                value={perPage} 
                onChange={(e)=>setPerPage(e.target.value)}>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className="table-body">
                {renderTimesheets}
            </div>
        </div>
    )
}
export default Table