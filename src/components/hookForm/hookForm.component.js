import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        placeholder="Name..."
        data-testid="example"
        name="example"
        ref={register({ required: true })}
      />
      <br />
      
      <br />
      {errors.example && (
        <>
          <span data-testid="error">This field is required</span>
          <br />
        </>
      )}
      {/*errors.example2 && (
        <>
          <span data-testid="error2">This field #2 is required</span>
          <br />
        </>
      )*/}
      <input data-testid="submit" type="submit" />
    </form>
  );
}
