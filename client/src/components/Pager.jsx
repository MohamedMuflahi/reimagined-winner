import '../styles/Pager.css'
const Pager = ({page, setPage,totalPages }) => {
    const filteredPageNumbers = [...Array(totalPages).keys()].filter((i) => {
        return i <= page + 2 && i >= page - 2
    })
    const renderPageNumbers = filteredPageNumbers.map((i) => {
        return (
            <button className='nums' key={i} onClick={() => {
                setPage(i)
            }}>{i + 1}</button>
        )
    })
   
    return (
        <div className="page-container">
            {page > 1 && <button 
            className="previous" 
            onClick={() => {
                setPage(page => page - 1)
            }}>{"<"}</button>}
            {renderPageNumbers}
            {page + 3 < totalPages && <button 
            className="next"
            onClick={() => {
                setPage(page => page + 1)
            }}>{">"}</button>}
        </div>
    )
}

export default Pager