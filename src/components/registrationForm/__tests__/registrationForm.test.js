import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

import RegistrationForm from "../registrationForm.component";

beforeEach(cleanup);

test("render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RegistrationForm />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<RegistrationForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onSubmit with the username, email and password when submit is clicked", async () => {
  const { getByTestId } = render(<RegistrationForm />);
  const user = {
    username: "test",
    email: "test@gmail.com",
    password: "passtest",
  };

  await act(async () => {
    fireEvent.change(getByTestId("username"), {
      target: { value: user.username },
    });
  });
  expect(getByTestId("username").value).toBe(user.username);

  await act(async () => {
    fireEvent.change(getByTestId("email"), {
      target: { value: user.email },
    });
  });
  expect(getByTestId("email").value).toBe(user.email);

  await act(async () => {
    fireEvent.change(getByTestId("password"), {
      target: { value: user.password },
    });
  });
  expect(getByTestId("password").value).toBe(user.password);

  await act(async () => {
    fireEvent.submit(getByTestId("form"));
  });
});

test("shows error messages in each field when submit is clicked before complete the form", async () => {
  const { getByTestId } = render(<RegistrationForm />);

  await act(async () => {
    fireEvent.submit(getByTestId("form"));
  });

  expect(getByTestId("username").value).toBe("");
  expect(getByTestId("usernameErrors").textContent).toBe(
    "The username field is required"
  );

  expect(getByTestId("email").value).toBe("");
  expect(getByTestId("emailErrors").textContent).toBe(
    "The email field is required"
  );

  expect(getByTestId("password").value).toBe("");
  expect(getByTestId("passwordErrors").textContent).toBe(
    "The password field is required"
  );
});

test("shows error messages in each field when submit is clicked after complete the form", async () => {
  const { getByTestId } = render(<RegistrationForm />);

  await act(async () => {
    fireEvent.change(getByTestId("username"), {
      target: { value: "this is a username really really long" },
    });
  });
  expect(getByTestId("username").value).toBe(
    "this is a username really really long"
  );

  await act(async () => {
    fireEvent.change(getByTestId("email"), { target: { value: "test@" } });
  });
  expect(getByTestId("email").value).toBe("test@");

  await act(async () => {
    fireEvent.change(getByTestId("password"), { target: { value: "pass" } });
  });
  expect(getByTestId("password").value).toBe("pass");

  await act(async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("usernameErrors").textContent).toBe(
    "The username max length is 30 characters"
  );
  expect(getByTestId("emailErrors").textContent).toBe(
    "The email format is wrong"
  );
  expect(getByTestId("passwordErrors").textContent).toBe(
    "The password must have at least 8 characters"
  );
});

test("show password when toggle password button is pressed", async () => {
  const { getByTestId } = render(<RegistrationForm/>);

  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  expect(getByTestId("password").type).toBe("text");
});

test("hide password when toggle password button is pressed", async () => {
  const { getByTestId } = render(<RegistrationForm/>);

  //show password
  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  //hide password
  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  expect(getByTestId("password").type).toBe("password");
});
