import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default function RegistrationForm() {
  return (
    <Grid fluid className="mt-5">
      <Row center="xs">
        <Col>
          <h2>Register</h2>
        </Col>
      </Row>
      <Row center="xs">
        <Col>
          <p>Complete the form below please</p>
        </Col>
      </Row>
    </Grid>
  );
}
