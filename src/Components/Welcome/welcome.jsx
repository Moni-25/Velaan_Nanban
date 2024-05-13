import "./welcome.css";
import Logo from "../../assets/Velaan Nanban Logo Tamil.png"
import { Link } from "react-router-dom";

export default function Welcome()
{
    return(
        <>
            <div className="bg"></div>

            <div className="bg-text">
                <img src={Logo} alt=""/>
                
                <h3 className="mt-3">Welcome</h3>
                <h3>To</h3>
                <h3>Velaan Nanban!!!</h3>
                <h6>Kindly Choose Your Desire Login</h6>
            
                <div className="input-group mb-3 mt-4" style={{marginLeft: "30%"}}>
                    <Link to="/admin">
                        <button className="btn btn-outline-warning" type="button"
                            style={{color: "#008000", border: "1px solid black", fontWeight: "bold"}}>
                            Admin
                        </button>
                    </Link>

                    <Link to="/people">
                        <button className="btn btn-outline-warning" type="button"
                            style={{color: "#008000", border: "1px solid black", fontWeight: "bold"}}>
                            People
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}