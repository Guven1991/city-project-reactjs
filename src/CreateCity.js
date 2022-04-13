import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function CreateCity() {

  const [cityName, setCityName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [plateNumber, setPlateNumber] = useState([]);
  const [area, setArea] = useState("");


  const handleChangeCityName = (e) => setCityName(e.target.value);
  const handleChangeImageURL = (e) => setImageURL(e.target.value);
  const handleChangeArea = (e) => setArea(e.target.value);
  const handleChangePlateNumber = (e) => setPlateNumber(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const data = {
      cityName: cityName,
      imageURL: imageURL,
      plateNumber: parseInt(plateNumber),
      area: area,
    };
    axios
      .post("http://localhost:8080/city", data)
      .then((res) => console.log(res));
      window.location.reload();
  };

  return (
    <div style={{marginTop:"100px"}}>
      <Form
        className="w-50 mx-auto border bordered p-5 shadow-lg"
        onSubmit={handleOnSubmit}
      >
        <FormGroup>
          <Label for="cityName">City Name</Label>
          <Input
            id="cityName"
            name="city"
            placeholder="Add City Name"
            type="text"
            onChange={handleChangeCityName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="area">Area</Label>
          <Input
            id="area"
            name="area"
            placeholder="area"
            type="text"
            onChange={handleChangeArea}
          />
        </FormGroup>
        <FormGroup>
          <Label for="imageURL">City İmage URL</Label>
          <Input
            id="imageURL"
            name="imageURL"
            placeholder="Add City Image URL"
            type="text"
            onChange={handleChangeImageURL}
          />
        </FormGroup>
        <FormGroup>
          <Label for="plateNumber">City Plate Number</Label>
          <Input
            id="plateNumber"
            name="number"
            placeholder="Add City Plate Number"
            type="number"
            onChange={handleChangePlateNumber}
          />
        </FormGroup>
        <Link to={"/getAllCity"}>
          <Button color="primary"  className="float-end btn btn-primary">View City List</Button>  
        </Link>
        <Button color="primary" style={{marginRight:"10px"}} className=" float-end ">Add City</Button>
      </Form>
      </div>
  );
}
