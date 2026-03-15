import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  //define the two hooks for storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //declare the hooks
  const[loading, setLoading] = useState("");
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");

  // below we have the use navigate  hook to direct us to a new page
  const navigate = useNavigate()

  //come up withfunction to handle the signin action
  const handlesubmit = async (e) =>{
    //on the handle func prevent site from reloading
    e.preventDefault()
   //update the loading hook with a message
    setLoading("Please wait as while we authenticate your account...")
    try{
      // create a form data object
      const formdata = new FormData()
      //insert the email and password on formdata
      formdata.append("email", email)
      formdata.append("password", password)
      //interact with axios module that will hekp you connect to https protocal as you pass in url and data
      const response = await axios.post("https://vanessawambui.alwaysdata.net/api/signin",formdata);
      //set the loading hook back to default
      setLoading("");
      //when a person enter the correct credentials the details of user trying to login are given on apis. we can make some desicions
      //check whether the user exists as part of response from the API
      if(response.data.user){

      //if user is there the details entered are corresct
        // setSuccess("Login successful")
        //if suuccessful be redirected to a new page
        navigate("/");
      }
      else{
        //user not found ,,credentials entered incorrect
        setError("Login failed. Please try again")
      }

    }
    catch(error){
      //setloading to default
      setLoading("");

      // update the error hook
      setError("Oops something went wrong...")

    }
 
  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h1 className='text-primary'>Sign in</h1>

        {/* binding */}
        <h5 className="text-info">{loading}</h5>
        <h5 className="text-success">{success}</h5>
        <h5 className="text-danger">{error}</h5>


        <form onSubmit={handlesubmit}>   
          <input type="email"
          placeholder='Enter your email address'
          className='form-control'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} /> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter your password'
          className='form-control'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />

          {/* {password} */}

          <input type="submit"
          value="Signin"
          className='btn btn-primary' />
        </form>

      </div>
    </div>
  )
}

export default Signin;

//how can you store the user
