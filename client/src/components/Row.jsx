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
            <div className="row-item selectable">
                <p>{first_name} {last_name}</p>
            </div>
            <div className="row-item selectable">
                <p>{client}</p>
            </div>
            <div className="row-item right">
                <p>{hours}</p>
            </div>
            <div className="row-item right">
                <p>{billable ? hours : 0.00}
                    <span style={{ color: "#ababab" }}>
                        {billable ? " (100%)" : " (0%)"}
                    </span>
                </p>
            </div>
            <div className="row-item right">
                <p className='billing-amount-text'>{billable ? `$ ${billableAmount}` : "-"}</p>
            </div>
        </div>
    )
}

export default Row