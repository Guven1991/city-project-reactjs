import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function UpdateCity() {
    const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [plateNumber, setPlateNumber] = useState([]);

  const handleChangeCityName = (e) => setCityName(e.target.value);
  const handleChangeImageURL = (e) => setImageURL(e.target.value);
  const handleChangePlateNumber = (e) => setPlateNumber(e.target.value);

  const params = useParams();
  const [cityDetails, setCityDetails] = useState();

  useEffect(() => {
    async function getCityById(id) {
      try {
        const response = await axios.get(`http://localhost:8080/city/${id}`);
        console.log(response.data);
        setCityDetails(response.data);
        setCityName(response.data.cityName);
        setImageURL(response.data.imageURL);
        setPlateNumber(response.data.plateNumber);

      } catch (error) {
        console.error(error);
      }
      // window.location.reload();
    }
    getCityById(params.id);
  }, [params.id]);

  const handleOnSubmit = async (e,id) => {
    e.preventDefault();

    const data = {
      cityName: cityName,
      imageURL: imageURL,
      plateNumber: parseInt(plateNumber),
    };
    axios.put(`http://localhost:8080/city/${params.id}`, data)
      .then((res) => console.log(res));
      navigate("/getAllCity")
      window.location.reload();
  };

  return (
    <>
      <Form
        className="w-50 mx-auto border bordered p-5 shadow-lg"
        onSubmit={handleOnSubmit}
      >
        <FormGroup>
          <Label for="cityName">City Name</Label>
          <Input
            id="cityName"
            name="city"
            type="text"
            defaultValue={cityDetails?.cityName}
            onChange={handleChangeCityName}
          />
        </FormGroup>

        <FormGroup>
          <Label for="imageURL">City İmage URL</Label>
          <Input
            id="imageURL"
            name="imageURL"
            type="text"
           defaultValue={cityDetails?.imageURL}
            onChange={handleChangeImageURL}
          />
        </FormGroup>

        <FormGroup>
          <Label for="plateNumber">City Plate Number</Label>
          <Input
            id="plateNumber"
            name="number"
            type="number"
            defaultValue={cityDetails?.plateNumber}
            onChange={handleChangePlateNumber}
          />
        </FormGroup>
        <Link to={"/getAllCity"}>
          <Button color="primary" className="float-end btn btn-primary">
            View City List
          </Button>
        </Link>
        <Button
          color="primary"
          style={{ marginRight: "10px" }}
          className=" float-end "
        >
          Update City
        </Button>
      </Form>
    </>
  );
}
