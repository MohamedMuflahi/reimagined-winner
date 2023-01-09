import { useState } from "react"
import "../styles/Form.css"

const Form = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [billable, setBillable] = useState(false)

    const postNewTimesheet = async (formData) => {
        const request = await fetch("/api/timesheets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                client: formData.get("client"),
                project: formData.get("project"),
                project_code: formData.get("project_code"),
                hours: parseInt(formData.get("hours")),
                billable: billable,
                billing_rate: parseInt(formData.get("billing_rate")),
                date: formData.get("date")
            }),
        })
        // Normally would update state here but state is dependent on the page number so I wouldn't want to add it to the wrong page
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        postNewTimesheet(formData)
    }
    const toggleForm = () => {
        setIsFormOpen(!isFormOpen)
    }
    const handleBilliableButton = (e) => {
        e.preventDefault()
        setBillable(!billable)
    }
    return (
        <div className="form-container">
            {isFormOpen ?
                <div className="form-container">
                    <form className="form" onSubmit={handleFormSubmit}>
                        <label className="input-label">First Name</label>
                        <input className="input" type="text" name="first_name" id="first_name" />
                        <label className="input-label">Last Name</label>
                        <input className="input" type="text" name="last_name" id="last_name" />
                        <label className="input-label">Client</label>
                        <input className="input" type="text" name="client" id="client" />
                        <label className="input-label">Project</label>
                        <input className="input" type="text" name="project" id="project" />
                        <label className="input-label">Project Code</label>
                        <input className="input" type="text" name="project_code" id="project_code" />
                        <label className="input-label">Hours</label>
                        <input className="input" type="number" name="hours" id="hours" />
                        <label className="input-label">Billable?</label>
                        {billable ? <button
                            className="input-button yes-button"
                            onClick={handleBilliableButton}>
                            YES
                        </button>
                            :
                            <button
                                className="input-button no-button"
                                onClick={handleBilliableButton}>
                                NO
                            </button>}
                        <label className="input-label"> Billing Rate</label>
                        <input className="input" type="number" name="billing_rate" id="billing_rate" />
                        <label className="input-label">Date</label>
                        <input className="input" type="text" name="date" id="date" />
                        <button className="submit-button input-button input-label ">
                            Submit
                        </button>
                    </form>
                    <button className="close-button input-button" onClick={toggleForm}>
                        Close
                        </button>
                </div>

                :
                <button className="open-from-button" onClick={toggleForm}>
                    Add Timesheet
                </button>}
        </div>
    )
}


export default Form