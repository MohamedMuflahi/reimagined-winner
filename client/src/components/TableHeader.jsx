import { useState } from "react"
const TableHeader = ({ name }) => {
    return (
        <div className="table-header-item no-select">
            <p>{name}</p>
        </div>
    )
}

export default TableHeader