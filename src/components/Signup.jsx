import React, { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () =>{
    //initialize the hooks
    const [username, setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("")
    return(
        <div className="row justify-content-center mt-4">
            <div className="card col-md-6 shadow p-4">
                <h1 className="text-align">Sign up</h1>

                <form>
                    <input type="text"
                    placeholder="Enter the Username"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required /> <br />


            

                    <input type="email"
                    placeholder="Enter the email address"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}
                    required /> <br />

                    {/* {email} */}
                    
                    <input type="password"
                    placeholder="Enter the password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /> <br />

                    {/* {password} */}


                    <input type="number" 
                    placeholder="Enter your Mobile Number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}/> <br />

                    {/* {phone} */}

                    <input type="button" value="Signup" className="btn btn-primary" /> <br /> <br />

                    Already have an account?<Link to={'/signin'}>Signin</Link>




                </form>
            </div>
        </div>
    )
}

export default Signup;
// research on axios module in react.js