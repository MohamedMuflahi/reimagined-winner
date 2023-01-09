import { useState } from "react"
import "../styles/Form.css"

const Form = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const postNewTimesheet = async (e) => {
        const request = await fetch("/api/timesheets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({}),
            // {
            //     "first_name": "Robert",
            //     "last_name": "Powell",
            //     "client": "Anil",
            //     "project": "Ethereum",
            //     "project_code": "RD001",
            //     "hours": 3.84,
            //     "billable": false,
            //     "billing_rate": 0,
            //     "date": "4/3/17"
            // }
        })

        const response = await request.json()
        console.log(response)
    }
    return (
        <div className="form-container">
            {isFormOpen ?
                <div className="form-container">
                    <form className="form">
                        <label htmlFor="name">First Name</label>
                        <input type="text" name="first_name" id="first_name" />
                        <label htmlFor="name">Last Name</label>
                        <input type="text" name="last_name" id="last_name" />
                        <label htmlFor="name">Client</label>
                        <input type="text" name="client" id="client" />
                        <label htmlFor="name">Project</label>
                        <input type="text" name="project" id="project" />
                        <label htmlFor="name">Project Code</label>
                        <input type="text" name="project_code" id="project_code" />
                        <label htmlFor="name">Hours</label>
                        <input type="text" name="hours" id="hours" />
                        <label htmlFor="name">Billable?</label>
                        <input type="text" name="billable" id="billable" />
                        <label htmlFor="name">Billing Rate</label>
                        <input type="text" name="billing_rate" id="billing_rate" />
                        <label htmlFor="name">Date</label>
                        <input type="text" name="date" id="date" />
                    </form>
                    <button onClick={() => setIsFormOpen(!isFormOpen)}>X</button>
                </div>

                :
                <button onClick={() => setIsFormOpen(!isFormOpen)}>
                    Add Timesheet
                </button>}
        </div>
    )
}


export default Form