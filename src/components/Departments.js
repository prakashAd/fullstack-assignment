import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <>
    <div className="container">

      <div className="card-group my-4">
        <div className="card">
          <img src="./category image/Book1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><Link to ="#">Books</Link></h5>
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
          <img src="./category image/Book2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><Link to ="#">Books1</Link> </h5>
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
          <img src="./category image/Book3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><Link to ="#">Books 2</Link> </h5>
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

export default Departments;
