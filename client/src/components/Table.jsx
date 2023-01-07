import '../styles/Table.css'
import Row from './Row'
const Table = ({ timesheets }) => {
    const renderTimesheets = timesheets.map((timesheet, index) => {
        return (
            <Row key={index} timesheet={timesheet} />
        )
    })
    return (
        <div className="table-container">
            <div className="table-header">
                <div className="table-header-item">
                    <p>Name</p>
                </div>
                <div className="table-header-item">
                    <p>Clients</p>
                </div>
                <div className="table-header-item">
                    <p>Hours</p>
                </div>
                <div className="table-header-item">
                    <p>Billable Hours</p>
                </div>
                <div className="table-header-item">
                    <p>Billable Amount</p>
                </div>
            </div>
            <div className="table-body">
                {renderTimesheets}
            </div>
        </div>
    )
}
export default Table