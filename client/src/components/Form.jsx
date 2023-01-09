import { useState } from "react"
import "../styles/Form.css"

const Form = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [billable, setBillable] = useState(false)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        client: "",
        project: "",
        project_code: "",
        hours: 0,
        billing_rate: 0,
        date: ""
    })
    const handleFormOpen = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const postNewTimesheet = async (e) => {
        const request = await fetch("/api/timesheets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                client: formData.client,
                project: formData.project,
                project_code: formData.project_code,
                hours: parseInt(formData.hours),
                billable: billable,
                billing_rate: parseInt(formData.billing_rate),
                date: formData.date
            }),
        })

        const response = await request.json()
        console.log(response)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        postNewTimesheet()
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
                    <form className="form" onChange={handleFormOpen} onSubmit={handleFormSubmit}>
                        <label>First Name</label>
                        <input type="text" name="first_name" id="first_name" />
                        <label>Last Name</label>
                        <input type="text" name="last_name" id="last_name" />
                        <label>Client</label>
                        <input type="text" name="client" id="client" />
                        <label>Project</label>
                        <input type="text" name="project" id="project" />
                        <label>Project Code</label>
                        <input type="text" name="project_code" id="project_code" />
                        <label>Hours</label>
                        <input type="text" name="hours" id="hours" />
                        <label >Billable?</label>
                        {billable ? <button
                            onClick={handleBilliableButton}>
                            YES
                        </button>
                            :
                            <button onClick={handleBilliableButton}>
                                NO
                            </button>}

                        <label >Billing Rate</label>
                        <input type="text" name="billing_rate" id="billing_rate" />
                        <label >Date</label>
                        <input type="text" name="date" id="date" />
                        <button>
                            Submit
                        </button>
                    </form>
                    <button onClick={toggleForm}>X</button>
                </div>

                :
                <button onClick={toggleForm}>
                    Add Timesheet
                </button>}
        </div>
    )
}


export default Form