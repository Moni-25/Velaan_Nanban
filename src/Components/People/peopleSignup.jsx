import { useContext, useState } from "react";
import banar from "../../assets/Velaan Main Banar.png";
import "./peopleSignup.css";
import { peopleContext } from "../../Context/peopleContext";
import { useNavigate } from "react-router-dom";

export default function PeopleSignUp()
{
    const navigate = useNavigate();
    const { people = []} = useContext(peopleContext);
    const [formData, setFormData] = useState({
        name: "",
        peopleUsername: "",
        peoplePassword: "",
        email: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    let len = 0;
    const validateForm = () => 
    {
        let isValid = true;
        const newErrors = {};
    
        // Validate Form Fields
        {people.map(peo => (formData.name === peo.peopleFullName ?  
            formData.name = "already": ""))}
        if (!formData.name) {
          newErrors.name = "Name is required";
          isValid = false;
        }
        if (formData.name === "already") {
            newErrors.name = "Name already exit";
            isValid = false;
        }

        {people.map(peo => (formData.peopleUsername === peo.people_user ?  
            formData.peopleUsername = "already": ""))}
        if (!formData.peopleUsername) {
            newErrors.peopleUsername = "Username is required";
            isValid = false;
        }
        if (formData.peopleUsername === "already") {
            newErrors.peopleUsername = "Username already exit";
            isValid = false;
        }
        
        if (!formData.peoplePassword) {
            newErrors.peoplePassword = "Password is required";
            isValid = false;
          }
        
        {people.map(peo => (formData.email === peo.email ?  
            formData.email = "already": ""))}  
        if (!formData.email) {
          newErrors.email = "Email is required";
          isValid = false;
        }
        if (formData.email === "already") {
            newErrors.email = "Email already exit";
            isValid = false;
        }

        {people.map(peo => (formData.phone === peo.phoneNumber ?  
            formData.phone = "already": ""))}  
        if (!formData.phone) {
            newErrors.phone = "Phone Number is required";
            isValid = false;
          }
         
          len = formData.phone;
          console.log(len.length)
          if (formData.phone === "already") {
              newErrors.phone = "Phone Number Already Exit";
            isValid = false;
          }
          if(len.length != 10){
            newErrors.phone = "Phone Number Invalid";
          isValid = false;
        }
         
        setErrors(newErrors);
        return isValid;
    };

    function handleInputChange(e)
    {
        //e.preventDefault();
        //console.log(e.target.value, e.target.id)      
        const { name, value } = e.target;
    
        if (e) {
            const formCopy = {
              ...formData,
              [name]: value
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }      
    }

    var msg = "";
    function createPeopleAccount(e)
    {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            //console.log("Form data:", formData);
            setSubmitted(true); // Set a submitted flag
          }
        if(formData.peopleUsername !== "already" && formData.email !== "already" && formData.phone !== "already" && len.length === 10)
        {
            fetch("http://localhost:5000/api/people/create",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "People Account Created Successfully!!!")
        {
            //console.log(msg)
            alert("People Account Created Successfully");
            navigate("/");
            window.location.reload();
        }})
        .catch((error) => console.log(error));
    }
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 login-img" style={{backgroundColor: "red", width: "50%", height: "100vh"}}></div>
                    
                    <div className="col-lg-6" style={{backgroundColor: "#aaff80"}}>
                        <div className="people-login">
                            <img src={banar} alt="" width="80%" style={{borderRadius: "80px", border: "2px solid green"}}/>

                                <h5 className="mt-3" style={{color: "#00b300", fontWeight: "700", fontSize: "21px"}}>
                                    People Registeration
                                </h5>
                        
                                <div className="card-body mt-3">
                                    <div className="mt-4 mb-3" style={{textAlign: "start", display: "flex", color: "#29a329"}}>
                                        <div className="col-lg-3">
                                            <label htmlFor="fullname" className="form-label">Full Name</label>&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="bi bi-person-fill form-control" style={{width: "50px"}}></i>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" id="peopleFullName" name="name" placeholder="Enter Your Fullname"
                                            onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                        {errors.name && 
                                        <div className="error mb-2 mt-2" style={{fontSize:"14px", fontWeight: "400", color: "red", marginLeft: "28%", textAlign: "start"}}>
                                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                            {errors.name}
                                        </div>
                                        }

                                    <div className="mt-2 mb-3" style={{textAlign: "start", display: "flex", color: "#29a329"}}>
                                        <div className="col-lg-3">
                                            <label htmlFor="email" className="form-label">Email</label>&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="bi bi-person-fill form-control" style={{width: "50px"}}></i>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" id="people_email" name="email" placeholder="Enter Your Email"
                                            onChange={handleInputChange}/>
                                        </div>
                                    </div>

                                        {errors.email && 
                                        <div className="error mb-2 mt-2" style={{fontSize:"14px", fontWeight: "400", color: "red", marginLeft: "28%", textAlign: "start"}}>
                                            <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                            {errors.email}
                                        </div>
                                        }

                                    <div className="mt-2 mb-3" style={{textAlign: "start", display: "flex", color: "#29a329"}}>
                                        <div className="col-lg-3">
                                            <label htmlFor="username" className="form-label">Username</label>&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="bi bi-person-fill form-control" style={{width: "50px"}}></i>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" id="people_user" name="peopleUsername" placeholder="Enter Your Username"
                                            onChange={handleInputChange}/>
                                        </div>
                                    </div>

                                    {errors.peopleUsername && 
                                    <div className="error mb-2 mt-2" style={{fontSize:"14px", fontWeight: "400", color: "red", marginLeft: "28%", textAlign: "start"}}>
                                        <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                        {errors.peopleUsername}
                                    </div>
                                    }

                                    <div className="mt-2 mb-3" style={{textAlign: "start", display: "flex", color: "#29a329"}}>
                                        <div className="col-lg-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="bi bi-key-fill form-control" style={{width: "50px"}}></i>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="password" className="form-control" id="people_pass" name="peoplePassword" 
                                                placeholder="Enter Your Password" onChange={handleInputChange}/>
                                        </div>
                                    </div>

                                    {errors.peoplePassword && 
                                    <div className="error mb-2 mt-2" style={{fontSize:"14px", fontWeight: "400", color: "red", marginLeft: "28%", textAlign: "start"}}> 
                                        <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                        {errors.peoplePassword}
                                    </div>
                                    }

                                    <div className="mt-2 mb-3" style={{textAlign: "start", display: "flex", color: "#29a329"}}>
                                        <div className="col-lg-3">
                                            <label htmlFor="phoneno" className="form-label">Phone No</label>&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="bi bi-person-fill form-control" style={{width: "50px"}}></i>
                                        </div>
                                        <div className="col-lg-8">
                                            <input type="text" className="form-control" id="phoneNumber" name="phone" placeholder="Enter Your Phone No"
                                            onChange={handleInputChange}/>
                                        </div>
                                    </div>

                                    {errors.phone && 
                                    <div className="error mb-2 mt-2" style={{fontSize:"14px", fontWeight: "400", color: "red", marginLeft: "28%", textAlign: "start"}}>
                                        <i className="bi bi-exclamation-circle"></i>&nbsp;&nbsp;
                                        {errors.phone}
                                    </div>
                                    }

                                    <div className="mt-3 text-center">
                                        <button type="button" className="btn" onClick={createPeopleAccount} style={{backgroundColor: "#00b300", color: "black", fontWeight: "700", fontSize: "17px"}}>
                                            Register
                                        </button>
                                    </div>
                                </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}