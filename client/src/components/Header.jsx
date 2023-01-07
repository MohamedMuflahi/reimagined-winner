import '../styles/Header.css'
const Header = ({ totals }) => {
  const { total_hours, total_billable_amount } = totals
  return (
    <div className='header'>
      <div className='header-item'>
        <h4>Hours Tracked</h4>
        <h1>{total_hours}</h1>
      </div>
      <div className='header-item'>
        <h4>Billable Amount</h4>
        <h1>${total_billable_amount}</h1>
      </div>
    </div>
  )
}
export default Header
