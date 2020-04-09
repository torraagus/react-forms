import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  const [type, setType] = useState("password");
  const [eyeIcon, setEyeIcon] = useState("far fa-eye");
  const { register, handleSubmit, errors, watch, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid fluid className="mt-5">
      <Row center="xs">
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row center="xs">
        <Col>
          <p>Complete the form below please</p>
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                data-testid="email"
                type="email"
                placeholder="Enter email"
                name="email"
                ref={register({
                  required: true,
                  pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                })}
              />
              <Form.Text data-testid="emailErrors" className="text-muted">
                {errors.email &&
                  errors.email.type === "required" &&
                  "The email field is required"}
                {errors.email &&
                  errors.email.type === "pattern" &&
                  "The email format is wrong"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Row middle="xs">
                <Col xs={11}>
                  <Form.Control
                    data-testid="password"
                    type={type}
                    placeholder="Enter password"
                    name="password"
                    ref={register({
                      required: true,
                      minLength: 8,
                    })}
                  />
                </Col>
                <Col xs={1} className="pl-0">
                  <Button
                    size="sm"
                    variant="light"
                    type="button"
                    onClick={() => {
                      setType(type == "password" ? "text" : "password");
                      setEyeIcon(type == "password" ? "far fa-eye-slash" : "far fa-eye");
                    }}
                  >
                    <i className={eyeIcon}></i>
                  </Button>
                </Col>
              </Row>
              <Form.Text data-testid="passwordErrors" className="text-muted">
                {errors.password &&
                  errors.password.type === "required" &&
                  "The password field is required"}
                {errors.password &&
                  errors.password.type === "minLength" &&
                  "The password must have at least 8 characters"}
              </Form.Text>
            </Form.Group>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              defaultChecked
              ref={register()}
            />
            <label className="ml-2" htmlFor="rememberMe">
              Remember me
            </label>
            <br />
            <Button className="w-100" size="sm" variant="primary" type="submit">
              Get in
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <Row center="xs">
        <Col>
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
