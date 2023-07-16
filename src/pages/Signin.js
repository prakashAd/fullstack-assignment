import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { signIn} from "../api/userApi";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  let navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
      signIn (email,password)
      .then(data =>{
        if(data.error){
          setError(data.error);
        } 
        else{
          setSuccess(true);
        }
        
      });
      
  };

  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };
  const redirect =()=>{
    if(success){
      navigate('/')

    }
  }
  return (
    <>
      <Navbar />
      {showError()}
      {redirect()}
      <div className="row ">
        <div className="col-md-5">
          <form className="mx-5 my-2 table-hover">
            <div className="mb-3">
              <label for="exampleEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@email.com"
                className="form-control"
                id="exampleEmail1"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                password
              </label>
              <input
                type="password"
                placeholder="*****"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
