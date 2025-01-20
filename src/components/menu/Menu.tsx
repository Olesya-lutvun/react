import { Link } from "react-router"

export const Menu = () =>{
    return(
        <ul>
            <li>
                <Link to='/cars'>car</Link>
            </li>
            <li>
                <Link to='/cars/create'>create</Link>
            </li>
        </ul>
    )
}