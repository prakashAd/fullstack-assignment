import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { userRegister } from '../api/userApi'


const Register = () => {
  let [username,setUsername] =useState('')
  let [email,setEmail] =useState('')
  let [password,setPassword] =useState('')
  let [error,setError] =useState('')
  let [success,setSuccess] =useState('false')


 const handleSubmit = (e)=>{
  e.preventDefault()
  userRegister(username,email,password)
  .then(data=>{
    if(data.error){
      setError(data.error)
      setSuccess(false)
    }
    else{
      setSuccess(true)
      setError('')
    }
  })

  }
  const showError =()=>{

    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }

  const showSuccess =()=>{

    if(success){
      return <div className='alert alert-success'>User registered sucesssfully</div>
    }
  }
  return (
    <>
    <Navbar/>
    {showError()}
    {showSuccess()}
 <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <form className="mx-5 my-2 table-hover">
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  user Name
                </label>
                <input
                  type="name"
                  placeholder="Enter First Name"
                  className="form-control"
                  id="firstName"onChange={(e)=>{setUsername(e.target.value)}}
                ></input>
                {/* <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  placeholder="Enter Last Name"
                  className="form-control"
                  id="exampleEmail1"
                ></input> */}
                <label for="exampleEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email@email.com"
                  className="form-control"
                  id="exampleEmail1" onChange={(e)=>setEmail(e.target.value)}
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
                  id="exampleFormControlInput1" onChange={(e)=>setPassword(e.target.value)}
                ></input>
              </div>
              <label for="radio" className="form-label mx-1">
                Gender
              </label>

              <div class="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineCheckbox1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineCheckbox2">
                  Others
                </label>
              </div>

            </form>
              <button type="submit" className="btn btn-primary mx-5" onClick={handleSubmit}>
                Submit
              </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Register