import {Link} from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({user,setUser}) {//destructure
    // const user = props.userInfo
    //no need of this if we destructure the porps

    const handleLogout=()=>{
        userService.logOut()
        setUser(null)
    }

    return(
        <nav>
            <h3>Hello {user.name}!</h3>
            &nbsp;  &nbsp; 
            <Link to="" onClick={handleLogout}>Log Out</Link>
            &nbsp; | &nbsp; 
            {/* in react, <a> tag causes page refresh so we use Link instead which  */}
            <Link to='/orders'>Order History</Link>
            {/* create a new space that will not be removed by word wrap or other element */}
            &nbsp; | &nbsp; 
            <Link to="/orders/new">New Order</Link>
            
        </nav>
    )
}