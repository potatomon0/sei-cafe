import {Link} from 'react-router-dom'

export default function NavBar() {
    return(
        <nav>
            {/* in react, <a> tag causes page refresh so we use Link instead which  */}
            <Link to='/orders'>Order History</Link>
            {/* create a new space that will not be removed by word wrap or other element */}
            &nbsp; | &nbsp; 
            <Link to="/orders/new">New Order</Link>
        </nav>
    )
}