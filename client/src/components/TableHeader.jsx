import { useState } from "react"
const TableHeader = ({ name }) => {
    const [sort, setSort] = useState(true)
    return (
        <div className="table-header-item no-select" onClick={() => setSort(!sort)}>
            <p>{name}</p>
        </div>
    )
}

export default TableHeader