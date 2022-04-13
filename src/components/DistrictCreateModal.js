import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  ModalFooter,
} from "reactstrap";

export const DistrictCreateModal = ({ selectedCity }) => {
  console.log(selectedCity);

  const [modal, setModal] = useState(false);
  const [district, setDistrict] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios    
      .post(`http://localhost:8080/district/${selectedCity.id}`, {districtName: district})
      
  };

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Add District
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={closeModal}>{selectedCity.cityName}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex align-items-center">
              <Label for="createDistrict" className="me-2"></Label>
              <Input
                type="text"
                name="text"
                id="createDistrict"
                placeholder="Add District"
                onChange={handleChange}
              />
            </FormGroup>
            <ModalFooter>
              <Button onClick={toggle} type="submit" color="primary" >Add</Button>{" "}
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
