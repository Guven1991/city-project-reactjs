import { React } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ cities }) {
  console.log(cities);
  return (
    <div
      style={{ marginTop: "150px"}}
      className="container"
    >
      <div className=" row ">
        <div className="d-flex justify-content-center">
          <h1>Welcome to The City App</h1>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="createCity">
            <button style={{ marginRight: "10px" }} className="btn btn-primary">
              Add City
            </button>
          </Link>
          <Link to="getAllCity">
            <button className="btn btn-primary">View City List</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
