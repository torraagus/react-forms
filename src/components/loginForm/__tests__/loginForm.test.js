import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
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

test("calls onSubmit with the username and password when submit is clicked", async () => {
  const { getByTestId } = render(<LoginForm />);
  const user = {username: 'test@gmail.com', password: 'passtest'}
  
  await fireEvent.change(getByTestId("username"), { target: { value: user.username } });
  expect(getByTestId("username").value).toBe(user.username);
  
  await fireEvent.change(getByTestId("password"), {
    target: { value: user.password },
  });
  expect(getByTestId("password").value).toBe(user.password);
  
  await fireEvent.submit(getByTestId("form"));
});

test("shows an error message when submit is clicked and no username is provided", async () => {
  const { getByTestId } = render(<LoginForm />);

  await fireEvent.submit(getByTestId("form"));
  expect(getByTestId("username").value).toBe("");
});

test("shows an error message when submit is clicked and username format is wrong", async () => {
  const { getByTestId } = render(<LoginForm />);

  await fireEvent.change(getByTestId("username"), { target: { value: "test" } });
  expect(getByTestId("username").value).toBe("test");
  
  await fireEvent.submit(getByTestId("form"));
});

test("shows an error message when submit is clicked and no password is provided", async () => {
  const { getByTestId } = render(<LoginForm />);

  await fireEvent.submit(getByTestId("form"));
  expect(getByTestId("password").value).toBe("");
});

test("shows an error message when submit is clicked and the password provided have less than 8 characters", async () => {
  const { getByTestId } = render(<LoginForm />);
  
  await fireEvent.change(getByTestId("password"), { target: { value: "pass" } });
  expect(getByTestId("password").value).toBe("pass");
  
  await fireEvent.submit(getByTestId("form"));
});