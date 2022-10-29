import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page Not FOund .....</p>
            <Link to="/">Click here to go back to home page</Link>
        </div>
     );
}
 
export default NotFound;