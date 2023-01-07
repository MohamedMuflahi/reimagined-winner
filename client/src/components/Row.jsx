import '../styles/Row.css'
const Row = ({ timesheet }) => {
    const {
        first_name,
        last_name,
        client,
        hours,
        billable,
        billing_rate
    } = timesheet
    const billableAmount = Number((billing_rate * hours).toPrecision(5))
    return (
        <div className="row-container">
            <div className="row-item">
                <p>{first_name} {last_name}</p>
            </div>
            <div className="row-item">
                <p>{client}</p>
            </div>
            <div className="row-item right">
                <p>{hours}</p>
            </div>
            <div className="row-item right">
                <p>{billable ? hours : 0}</p>
            </div>
            <div className="row-item right">
                <h4>{billable ? `$ ${billableAmount}` : "-"}</h4>
            </div>
        </div>
    )
}

export default Row