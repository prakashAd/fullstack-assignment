import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <>
    <div className="container">

      <div className="card-group my-4">
        <div className="card">
          <img src="./category image/personal MBA.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            {/* <h5 className="card-title"><Link to ="#">Novel</Link></h5> */}
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./category image/Reminders of him.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            {/* <h5 className="card-title"><Link to ="#">Finance</Link> </h5> */}
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./category image/The-Hobbit.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            {/* <h5 className="card-title"><Link to ="#">Fiction</Link> </h5> */}
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
       
      </div>
    </div>

    </>
  );
};

export default Modal;
