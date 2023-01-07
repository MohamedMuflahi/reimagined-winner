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

    return (
        <div className="row-container">
            <div className="row-item">
                <p>{first_name} {last_name}</p>
            </div>
            <div className="row-item">
                <p>{client}</p>
            </div>
            <div className="row-item">
                <p>{hours}</p>
            </div>
            <div className="row-item">
                <p>{billable ? hours : 0}</p>
            </div>
            <div className="row-item">
                <p>${Number((billing_rate * hours).toPrecision(5))}</p>
            </div>
        </div>
    )
}

export default Row