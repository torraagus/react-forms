import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function DeliveryForm() {
  const [type, setType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("far fa-eye");
  const { register, handleSubmit, errors, watch, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid fluid className="mt-5 mb-3">
      <Row center="xs">
        <Col>
          <h2 className="text-primary">New Delivery</h2>
        </Col>
      </Row>
      <Row center="xs">
        <Col lg={6} md={8} xs={10}>
          <p>To create a new delivery account complete the form below please</p>
        </Col>
      </Row>
      <Row>
        <Col
          xlOffset={4}
          xl={4}
          lgOffset={4}
          lg={4}
          mdOffset={3}
          md={6}
          smOffset={2}
          sm={8}
          xsOffset={1}
          xs={10}
        >
          <Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="border-top pt-5">Personal Data</h5>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                data-testid="name"
                type="text"
                placeholder="Enter name"
                name="name"
                ref={register({
                  required: true,
                  maxLength: 30,
                })}
              />
              <Form.Text data-testid="nameErrors" className="text-muted">
                {errors.name &&
                  errors.name.type === "required" &&
                  "The name field is required"}
                {errors.name &&
                  errors.name.type === "maxLength" &&
                  "The name max length is 30 characters"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                data-testid="lastname"
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                ref={register({
                  required: true,
                  maxLength: 30,
                })}
              />
              <Form.Text data-testid="lastnameErrors" className="text-muted">
                {errors.lastname &&
                  errors.lastname.type === "required" &&
                  "The lastname field is required"}
                {errors.password &&
                  errors.lastname.type === "maxLength" &&
                  "The lastname max length is 30 characters"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                data-testid="dni"
                type="number"
                placeholder="Enter dni"
                name="dni"
                ref={register({
                  required: true,
                  maxLength: 8,
                  minLength: 8,
                })}
              />
              <Form.Text data-testid="dniErrors" className="text-muted">
                {errors.dni &&
                  errors.dni.type === "required" &&
                  "The dni field is required"}
                {errors.dni &&
                  errors.dni.type === "minLength" &&
                  "The dni length is 8 numbers"}
                {errors.dni &&
                  errors.dni.type === "maxLength" &&
                  "The dni length is 8 numbers"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                data-testid="phone"
                type="number"
                placeholder="Enter phone"
                name="phone"
                ref={register({
                  required: true,
                  maxLength: 10,
                  minLength: 7,
                })}
              />
              <Form.Text data-testid="phoneErrors" className="text-muted">
                {errors.phone &&
                  errors.phone.type === "required" &&
                  "The phone field is required"}
                {errors.phone &&
                  errors.phone.type === "maxLength" &&
                  "The phone max length is 10 numbers"}
                {errors.phone &&
                  errors.phone.type === "minLength" &&
                  "The phone min length is 7 numbers"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Check
                type="radio"
                id="man"
                label="Man"
                name="gender"
                value="man"
                ref={register({
                  required: true,
                })}
              />
              <Form.Check
                type="radio"
                id="woman"
                label="Woman"
                name="gender"
                value="woman"
                ref={register({
                  required: true,
                })}
                />
              <Form.Check
                type="radio"
                id="other"
                label="Other"
                name="gender"
                value="other"
                ref={register({
                  required: true,
                })}
              />
              <Form.Text data-testid="genderErrors" className="text-muted">
                {errors.gender &&
                  errors.gender.type === "required" &&
                  "The gender field is required"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="profile">
              <Form.Label>Profile</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                data-testid="profile"
                placeholder="Enter profile"
                name="profile"
                ref={register({
                  required: false,
                  maxLength: 240,
                })}
              />
              <Form.Text data-testid="profileErrors" className="text-muted">
                {errors.profile &&
                  errors.profile.type === "maxLength" &&
                  "The profile max length is 240 characters"}
              </Form.Text>
            </Form.Group>
            <br />
            <h5 className="border-top pt-3">Zones</h5>
            <Form.Group controlId="deliveryZones">
              <Form.Label>Delivery zones</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="deliveryZones"
                ref={register({
                  required: true,
                })}
              >
                <option>East zone</option>
                <option>North zone</option>
                <option>Weast zone</option>
                <option>South zone</option>
              </Form.Control>
              <Form.Text
                data-testid="deliveryZonesErrors"
                className="text-muted"
              >
                {errors.deliveryZones &&
                  errors.deliveryZones.type === "required" &&
                  "The delivery zones field is required"}
              </Form.Text>
            </Form.Group>
            <br />
            <h5 className="border-top pt-3">Vehicle</h5>
            <Form.Group controlId="vehicle">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="vehicleTypes"
                ref={register({
                  required: true,
                })}
              >
                <option>Bike</option>
                <option>Motorcycle</option>
                <option>Car</option>
                <option>Minivan</option>
                <option>Truck</option>
              </Form.Control>
              <Form.Text
                data-testid="vehicleTypesErrors"
                className="text-muted"
              >
                {errors.vehicleTypes &&
                  errors.vehicleTypes.type === "required" &&
                  "The vehicle types field is required"}
              </Form.Text>
              <Form.Label className="mt-2">Model</Form.Label>
              <Form.Control
                type="number"
                data-testid="vehicle-model"
                placeholder="Enter vehicle model"
                name="vehicleModel"
                ref={register({
                  required: true,
                  maxLength: 4,
                  minLength: 4,
                })}
              />
              <Form.Text
                data-testid="vehicleTypesErrors"
                className="text-muted"
              >
                {errors.vehicleModel &&
                  errors.vehicleModel.type === "required" &&
                  "The vehicle model field is required"}
              </Form.Text>
              <Form.Label className="mt-2">Capacity (Kgrs.)</Form.Label>
              <Form.Control
                type="number"
                data-testid="vehicle-kgrms"
                placeholder="Enter vehicle capacity"
                name="vehicleCapacity"
                ref={register({
                  required: true,
                  maxLength: 4,
                  minLength: 1,
                })}
              />
              <Form.Text
                data-testid="vehicleTypesErrors"
                className="text-muted"
              >
                {errors.vehicleCapacity &&
                  errors.vehicleCapacity.type === "required" &&
                  "The vehicle capacity field is required"}
                {errors.vehicleCapacity &&
                  errors.vehicleCapacity.type === "maxLength" &&
                  "The vehicle max capacity is 9999 kg"}
                {errors.vehicleCapacity &&
                  errors.vehicleCapacity.type === "minLength" &&
                  "The vehicle min capacity is 1 kg"}
              </Form.Text>
              <Form.Label className="mt-2">
                Dimentions (large x width x height)
              </Form.Label>
              <Form.Control
                type="text"
                data-testid="vehicle-dimen"
                placeholder="Enter vehicle dimentions"
                name="vehicleDimentions"
                ref={register({
                  required: true,
                  maxLength: 12,
                  minLength: 5,
                })}
              />
              <Form.Text
                data-testid="vehicleTypesErrors"
                className="text-muted"
              >
                {errors.vehicleDimentions &&
                  errors.vehicleDimentions.type === "required" &&
                  "The vehicle dimentions field is required"}
                {errors.vehicleDimentions &&
                  errors.vehicleDimentions.type === "maxLength" &&
                  "The vehicle max length is 12"}
                {errors.vehicleDimentions &&
                  errors.vehicleDimentions.type === "minLength" &&
                  "The vehicle min length is 5"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="sendMeInfo">
              <Form.Check
                checked
                type="checkbox"
                label="Send me information about oportunities."
                name="sendMeInfo"
                ref={register()}
              />
            </Form.Group>
            <Button className="w-100" size="sm" variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <Row center="xs">
        <Col xs={10}>
          {formState.isSubmitted && formState.isValid && (
            <>
              <p>
                Form data in Raw JSON data <br />
                <small>{JSON.stringify(watch(), undefined, 4)}</small>
              </p>
            </>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
