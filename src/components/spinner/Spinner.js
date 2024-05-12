import './Spinner.css'
import {ClipLoader} from "react-spinners";

function Spinner({isSpin}) {

    return (
        <div className={`spinner ${isSpin ? `active` : ''}`}>
            <ClipLoader className="spinner_object" speedMultiplier={0.8} color="#36d7b7" size={110}/>
        </div>
    );

}

export default Spinner;