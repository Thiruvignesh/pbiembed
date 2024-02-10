import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {


    return (
        <div class='navbar'>
            <div className='nav-logo'>
                <img src='https://thecloud.company/assets/logo/logo%20thick.svg' alt='img'  />
                {/* <h3 className='logo'>THE CLOUD COMPANY</h3> */}
            </div>
            <div class="navbar-menu">
                <Link class="navbar-item1" to="/">Home</Link>
                <Link class="navbar-item2" to="/report1">Report 1</Link>
                <Link class="navbar-item1" to="/report2">Report 2</Link>
            </div>
        </div>
    )
}

export default Navbar

