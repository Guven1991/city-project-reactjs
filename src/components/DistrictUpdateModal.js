import axios from "axios";
import React, { useEffect, useState } from "react";
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

export const DistrictUpdateModal = ({district}) => {

  const [modal, setModal] = useState(false);
  const [districtName, setDistrictName] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e) => {
    setDistrictName(e.target.value);
  };

  useEffect(() => {
    if(district){
    setDistrictName(district.districtName);
    }
  }, [district]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios    
      .put(`http://localhost:8080/district/${district.id}`, {districtName})
      window.location.reload();
      
  };

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={closeModal}></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex align-items-center">
              <Label for="createDistrict" className="me-2"></Label>
              <Input
                type="text"
                name="text"
                id="createDistrict"
                defaultValue={district?.districtName}
                onChange={handleChange}
              />
            </FormGroup>
            <ModalFooter>
              <Button onClick={toggle} type="submit" color="primary" >Edit</Button>{" "}
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
