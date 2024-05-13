import bannar from "../assets/Velaan Main Banar.png";
import "./mainAccessPage.css";

export default function MainPage()
{
    return(
        <>
            <div className="container-fluid back-img">
                <img src={bannar} alt="" className="center pt-5"/>
                <h2 style={{textAlign: "center", marginTop: "20px", color: "red", fontWeight: "700"}}>
                    Welcome To Velaan Nanban !!!!
                </h2>
            </div>
        </>
    )
}