import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "../../navBar/navbar.component";

test("should match snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
