import '../styles/Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-item'>
            <h4>Hours Tracked</h4>
            <h1>100.00</h1>
        </div>
        <div className='header-item'>
            <h4>Billable Amount</h4>
            <h1>$90,000.00</h1>
        </div>
    </div>
  )
}
export default Header
