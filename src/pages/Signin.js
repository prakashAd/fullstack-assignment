import React from "react";
import Navbar from "../components/Navbar";

const Signin= ()=> {
  return (
    <>
      <Navbar />
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

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
