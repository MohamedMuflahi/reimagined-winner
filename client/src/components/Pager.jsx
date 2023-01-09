import '../styles/Pager.css'
const Pager = ({ page, setPage, totalPages }) => {

    //  limiting the number of page numbers to only display page numbers that are within 2 of the current page
    // [...Array(totalPages).keys()] generates array like so [0,1,2,3,4...totalPages]
    const limitedPageNumbers = [...Array(totalPages).keys()].filter((i) => {
        return i <= page + 2 && i >= page - 2
    })

    const renderPageNumbers = limitedPageNumbers.map((i) => {
        return (
            <button className='nums' key={i} onClick={() => setPage(i + 1)}>
                {i + 1}
            </button>
        )
    })

    return (
        <div className="page-container">
            {/* only showing previous and current buttons based on current page */}
            {page > 1 &&
                <button className="previous" onClick={() => setPage(page => page - 1)}>
                    {"<"}
                </button>}
            {renderPageNumbers}
            {page + 3 < totalPages &&
                <button className="next" onClick={() => setPage(page => page + 1)}>
                    {">"}
                </button>}
        </div>
    )
}

export default Pager