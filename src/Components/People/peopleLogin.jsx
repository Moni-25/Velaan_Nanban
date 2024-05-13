import { Link, useNavigate } from "react-router-dom";
import banar from "../../assets/Velaan Main Banar.png"
import { useContext, useState } from "react";
import { peopleContext } from "../../Context/peopleContext";

export default function PeopleLogin()
{
    const { people = []} =useContext(peopleContext);
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        peopleUsername: "",
        peoplepassword: ""
      });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
          ...formData,
          [name]: value
        });
    };

    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate email
        if (!formData.peopleUsername) {
          newErrors.peopleUsername = "Username is required";
          isValid = false;
        }
    
        // Validate password
        if (!formData.peoplePassword) {
          newErrors.peoplePassword = "Password is required";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    // Login Submission
    var login_status = "false";
    function handleButton(e)
    {
        e.preventDefault();
        let users = "";
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            //console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
        //console.log("Form data:", formData);
        const user = formData.peopleUsername;
        const pass = formData.peoplePassword;
        //console.log(user, pass, "Admin", admin);
        people.map((peopleData, index) => {
            if(user === peopleData.people_user && pass === peopleData.people_pass){
                login_status = "true";
                users = peopleData.people_user;
            }
        }
        )
        const data = users
        //console.log(login_status)
        if(login_status === "true"){
            //console.log(`${users} Login Successfully!!!`);
            alert(`${users} Login Successfully!!!`);
            navigate("/main_access_page", {state:{ fromHome: { data }}});
        }
        else{
            alert("Username or Password Incorrect");
        }
        //console.log(studentLogin)
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 login-img" style={{backgroundColor: "red", width: "50%", height: "100vh"}}>
                        
                    </div>
                    <div className="col-lg-6" style={{backgroundColor: "#aaff80"}}>
                        <div className="login">
                            <img src={banar} alt="" width="80%" style={{borderRadius: "80px", border: "2px solid green"}}/>

                                <h5 className="mt-3" style={{color: "#00b300", fontWeight: "700", fontSize: "21px"}}>
                                    People Login
                                </h5>
                        
                                <div className="card-body">
                                    <div className="label">
                                        <label htmlFor="username" className="form-label">Username</label>
                                    </div>

                                    <div className="mb-3" style={{display: "flex"}}>
                                        <i className="bi bi-person-fill form-control" style={{width: "50px"}}></i>
                                        <input type="text" className="form-control" id="people_username" name="peopleUsername" placeholder="Username"
                                           onChange={handleInputChange}/>
                                    </div>

                                    {errors.peopleUsername && 
                                        <div className="error mb-2 ms-2" style={{textAlign: "start", fontSize:"13px", color: "red"}}>
                                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                            {errors.peopleUsername}
                                    </div>}
                                  
                                    <div className="mb-1 label">
                                        <label htmlFor="password" className="form-label">Password</label>
                                    </div>

                                    <div className="mb-3" style={{display: "flex"}}>
                                        <i className="bi bi-key-fill form-control" style={{width: "50px"}}></i>
                                        <input type="password" className="form-control" id="people_password" name="peoplePassword" 
                                            placeholder="Password" onChange={handleInputChange} />
                                    </div>

                                    {errors.peoplePassword && 
                                        <div className="error mb-2 ms-2" style={{textAlign: "start", fontSize:"13px", color: "red"}}>
                                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                            {errors.peoplePassword}
                                    </div>}

                                    <div className="mt-3 text-center">
                                        <button type="button" className="btn" onClick={handleButton} style={{backgroundColor: "#00b300", color: "black", fontWeight: "700", fontSize: "17px"}}>
                                            Login
                                        </button>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <Link to="/people_signup" style={{fontSize: "15px", color: "black", fontWeight: "600",textDecoration: "none"}}>
                                            New User? Sign Up Here....!!!
                                        </Link>
                                    </div>
                                </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}