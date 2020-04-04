import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

import HookForm from "../hookForm.component";

beforeEach(cleanup);

it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HookForm />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<HookForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("if form was correctly submited when no errors are present", async () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<HookForm onSubmit={onSubmit} />);
  await fireEvent.change(getByTestId("example"), { target: { value: "test" } });
  expect(getByTestId("example").value).toBe("test");
  await fireEvent.submit(getByTestId("form"));
});

test("if form was correctly submited when some errors are present", async () => {
  const { getByTestId } = render(<HookForm />);
  await fireEvent.submit(getByTestId("form"));
  expect(getByTestId("error").textContent).toBe("This field is required");
});
