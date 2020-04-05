import React from "react";
import { useForm } from "react-hook-form";
import { Grid, Row, Col } from "react-flexbox-grid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  const { register, handleSubmit, errors, watch, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid fluid>
      <Row center="xs">
        <Col>
          <Form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              {/*<Form.Label>Email address</Form.Label>*/}
              <Form.Control
              data-testid="username"
                type="email"
                placeholder="Enter email"
                name="username"
                ref={register({
                  required: true,
                  pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                })}
              />
              <Form.Text className="text-muted">
                {errors.username &&
                  errors.username.type === "required" &&
                  "The username field is required"}
                {errors.username &&
                  errors.username.type === "pattern" &&
                  "The email format is wrong"}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              {/*<Form.Label>Password</Form.Label>*/}
              <Form.Control
              data-testid="password"
                type="password"
                placeholder="Enter password"
                name="password"
                ref={register({
                  required: true,
                  minLength: 8,
                })}
              />
              <Form.Text className="text-muted">
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
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          {formState.isSubmitted && formState.isValid && (
            <>
              <p>
                Your credentials in Raw JSON data <br />
                <small>{JSON.stringify(watch(), undefined, 4)}</small>
              </p>
            </>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
