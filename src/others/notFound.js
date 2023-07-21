import { useNavigate } from "react-router-dom";
import { urlNavigation } from "../utils/helper";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBack =()=>{
        urlNavigation(navigate)
    }

    return (
        <div className="notFound">
            <div>
                <span>Page Not Found !!!!!</span>
                <div>
                    <button onClick={handleBack}>BACK</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;