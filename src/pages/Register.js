import React from 'react'
import Navbar from '../components/Navbar'


const Register = () => {
  return (
    <>
    <Navbar/>
 <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <form className="mx-5 my-2 table-hover">
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="name"
                  placeholder="Enter First Name"
                  className="form-control"
                  id="firstName"
                ></input>
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  placeholder="Enter Last Name"
                  className="form-control"
                  id="exampleEmail1"
                ></input>
                <label for="exampleEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email@email.com"
                  className="form-control"
                  id="exampleEmail1"
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
              <button type="submit" className="btn btn-primary mx-5">
                Submit
              </button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Register