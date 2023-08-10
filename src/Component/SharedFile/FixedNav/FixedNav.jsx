import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FixedNav.css';
import logo from '../../../assets/Image/logo.png';

const Fixedbar = () => {
    return (
        <div className="mt-2">
                <div className="upperNav">
                    <h1><FontAwesomeIcon icon={faPhone} /><span className="ml-1">Phone: 01785412</span></h1>
                    <h2><FontAwesomeIcon icon={faEnvelope} /><span className="ml-1">Email: newschool@gmail.com</span></h2>
                    <h3>Help Line: 0127856399</h3>
            </div>
            <div className="midNavbar">
                <div className="midNavbarOne">
                    <img src={logo} className="w-16 h-20 rounded-md" alt="" />
                    <h1 className="mt-3 text-xl font-bold text-white">ONLINE 20 MINUTE SCHOOL.<br/>
                    Mirpur-11,Dhaka,Bangladesh.
                    </h1>
                </div>
                <div>
                <button className="btn font-bold text-white bg-green-600">Log In</button>
                </div>
            </div>

        </div>
    );
};

export default Fixedbar;