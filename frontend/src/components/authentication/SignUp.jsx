import NavBar from "../NavBar";
import './SignUp.css'; // Import CSS file for SignUp component

const SignUp = () => {
  return (
    <>
      <NavBar currentPage='signup'/>
      <div className="signup-container">
        <div className="signup-form">
          <h1 className="signup-title">Sign Up</h1>
          <form className="form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="input-field"/>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="input-field"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="input-field"/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" className="input-field"/>
            </div>
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;
