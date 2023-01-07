import '../styles/Table.css'
import Row from './Row'
import TableHeader from './TableHeader'
const Table = ({ timesheets }) => {
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
            </div>
            <div className="table-body">
                {renderTimesheets}
            </div>
        </div>
    )
}
export default Table