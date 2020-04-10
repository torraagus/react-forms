import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, fireEvent, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import LoginForm from "../loginForm.component";

beforeEach(cleanup);

it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("calls onSubmit with the email and password when submit is clicked", async () => {
  const { getByTestId } = render(<LoginForm />);
  const user = {email: 'test@gmail.com', password: 'passtest'}
  
  await act( async () => {
    fireEvent.change(getByTestId("email"), { target: { value: user.email } });
  });
  expect(getByTestId("email").value).toBe(user.email);

  await act( async () => {
    fireEvent.change(getByTestId("password"), {
      target: { value: user.password },
    });
  });
  expect(getByTestId("password").value).toBe(user.password);
  
  await act( async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("emailErrors").textContent).toBe("");
  expect(getByTestId("passwordErrors").textContent).toBe("");
});

test("shows an error message when submit is clicked and no email is provided", async () => {
  const { getByTestId } = render(<LoginForm />);

  await act( async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("email").value).toBe("");
  expect(getByTestId("emailErrors").textContent).toBe("The email field is required");
});

test("shows an error message when submit is clicked and email format is wrong", async () => {
  const { getByTestId } = render(<LoginForm />);

  await act( async () => {
    fireEvent.change(getByTestId("email"), { target: { value: "test" } });
  });
  expect(getByTestId("email").value).toBe("test");
  
  await act( async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("emailErrors").textContent).toBe("The email format is wrong");
});

test("shows an error message when submit is clicked and no password is provided", async () => {
  const { getByTestId } = render(<LoginForm />);

  await act( async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("password").value).toBe("");
  expect(getByTestId("passwordErrors").textContent).toBe("The password field is required");
});

test("shows an error message when submit is clicked and the password provided have less than 8 characters", async () => {
  const { getByTestId } = render(<LoginForm />);
  
  await act( async () => {
    fireEvent.change(getByTestId("password"), { target: { value: "pass" } });
  });
  expect(getByTestId("password").value).toBe("pass");
  
  await act( async () => {
    fireEvent.submit(getByTestId("form"));
  });
  expect(getByTestId("passwordErrors").textContent).toBe("The password must have at least 8 characters");
});

test("shows the password", async () => {
  const { getByTestId } = render(<LoginForm />);

  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  expect(getByTestId("password").type).toBe('text');
});

test("hide the password", async () => {
  const { getByTestId } = render(<LoginForm />);

  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  await act( async () => {
    fireEvent.click(getByTestId("togglePassword"));
  });

  expect(getByTestId("password").type).toBe('password');
});