import { useState } from "react";
import NavBar from "../NavBar";
import './SignUp.css'; // Import CSS file for SignUp component

const SignUp = () => {
  const [errorExists, setErrorExists] = useState("");
  const [formData, setFormData] = useState({
      fname:'',
      lname:'',
      email:'',
      password:'',
      
  })
  const [password2, setPassword2] = useState();
  
  const [validateFname, setValidateFname] = useState(false);


  const [passwordMatch, setPasswordMatch] = useState(false)

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

  const handleSubmit = (e)=>{

    if(!validateEmail(formData.email)){
      setErrorExists(...errorExists,"Enter email in correct Format \n")
    }
    e.preventDefault();
    if(formData.password!==password2){
      setErrorExists(...errorExists,"Password are not matching! \n")
    }
  }

  return (
    <>
      <NavBar currentPage='signup'/>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-title">Sign Up</h1>
          <form className="form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="input-field" value={formData.fname} onChange={(e)=>{
                if(e.target.value===" "){
                  setValidateFname(true);
                }
                setFormData({fname:e.target.value})
                if(formData.fname==="")setValidateFname(true);
                setFormData({fname:e.target.value})
              }}/>
              {
                validateFname && <h1>Enter valid first name!</h1>
              }
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="input-field" value={formData.lname} onChange={(e)=>{
                setFormData({lname:e.target.value})
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field" value={formData.email} onChange={(e)=>{
                setFormData({email:e.target.value})
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field" onChange={(e)=>{
                setFormData({password:e.target.value})
              }}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="text" id="confirmPassword" className="input-field" value={password2} onChange={(e)=>{
                setPassword2(e.target.value)
              }}/>
            </div>
            <div style={{alignItems:"center"}}>
            {
              errorExists && <div>{errorExists}</div>
            }
            </div>
           
            <button type="submit" className="submit-button" onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;
