import axios from "axios";
import { DistrictUpdateModal } from "./components/DistrictUpdateModal";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  Button,
  CardTitle,
  Table,
} from "reactstrap";

export default function CityDetails() {
  const [cityDetails, setCityDetails] = useState();
  const params = useParams();

  useEffect(() => {
    async function getCityById(id) {
      try {
        const response = await axios.get(`http://localhost:8080/city/${id}`);
        console.log(response.data);
        setCityDetails(response.data);
      } catch (error) {
        console.error(error);
      }
      // window.location.reload();
    }
    getCityById(params.id);
  }, [params.id]);

  if (!cityDetails) {
    return <div>Loading</div>;
  }

  const detail = (
    <Card>
      <CardBody>
        <CardTitle tag="h1">{cityDetails.cityName}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h3">
          Plate Number : {cityDetails.plateNumber}
        </CardSubtitle>
      </CardBody>
      <img
        alt="Card image cap"
        src={cityDetails.imageURL}
        width="1200px"
        height="720px"
      />
    </Card>
  );

  const districts = cityDetails.districtList.map((district) => {
    return (
      <tr key={district.id}>
        <th scope="row">{district.id}</th>
        <th>{district.districtName}</th>
        <td>
          <div className="d-flex " style={{ width: "400px" }}>
            <Button style={{ marginRight: "10px" }} color="danger">
              Delete
            </Button>
            <DistrictUpdateModal district ={district}/>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div
      style={{ margin: "60px", flexDirection: "column" }}
      className="d-flex justify-content-center "
    >
      {detail}
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>DISTRICT NAME</th>
          </tr>
        </thead>
        <tbody>{districts}</tbody>
      </Table>
    </div>
  );
}
