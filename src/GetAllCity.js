import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Button } from "reactstrap";
import CityDetails from "./CityDetails";
import { DistrictCreateModal } from "./components/DistrictCreateModal";

export default function GetAllCity({ cities }) {
  const [selectedCity, setSelectedCity] = useState([]);

  const handleSelected = (city) => {
    setSelectedCity(city);
  };

  const handleDelete = async (id) => {
    axios
      .delete(`http://localhost:8080/city/${id}`)
      .then(() => console.log("Delete successful"));
    console.log(id);
    window.location.reload();
  };

  const city = cities.map((city) => {
    return (
      <tr key={city.id}>
        <th scope="row">{city.id}</th>
        <td>{city.cityName}</td>
        <td>{city.plateNumber}</td>
        <td>
          <div className="d-flex " style={{ width: "400px" }}>
            <Button
              style={{ marginRight: "10px" }}
              color="danger"
              onClick={() => handleDelete(city.id)}
            >
              Delete
            </Button>
            <Link to={`/updateCity/${city.id}`}>
              <Button style={{ marginRight: "10px" }} color="success">
                Edit
              </Button>
            </Link>
            <Link to={`/cityDetails/${city.id}`}>
              <Button style={{ marginRight: "10px" }} color="warning">
                Details
              </Button>
            </Link>
            <div onClick={() => handleSelected(city)}>
              <DistrictCreateModal selectedCity={selectedCity} />
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div
        style={{ marginTop: "250px", flexDirection: "column" }}
        className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle"
      >
        <div>
          <Table responsive hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>CITY NAME</th>
                <th>PLATE NUMBER</th>
              </tr>
            </thead>
            <tbody>{city}</tbody>
          </Table>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className="float-right"
        >
          <Link to="/createCity">
            <button className=" btn btn-primary">Add City</button>
          </Link>
        </div>
      </div>
    </>
  );
}
