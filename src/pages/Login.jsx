import { useState } from "react";
import { auth } from "./../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
      e.preventDefault();

      try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("./profile");
      } catch {
          setNotice("You entered a wrong username or password.");
      }
  }

  return(
      <div className = "container">
          <div>
              <form>
                  { "" !== notice &&
                      <div className = "alert alert-warning" role = "alert">
                          { notice }    
                      </div>
                  }                  
                  <div>
                      <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                      <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                  </div>
                  <div>
                      <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                      <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                  </div>
                  <div>
                      <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                  </div>
                  <div>
                      <span>Need to sign up for an account? <Link to = "./signup">Click here.</Link></span>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Login