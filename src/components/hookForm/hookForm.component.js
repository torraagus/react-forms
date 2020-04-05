import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const { register, handleSubmit, errors, watch, formState } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username..."
          data-testid="username"
          name="username"
          ref={register({ required: true })}
        />
        {errors.username &&
          errors.username.type === "required" &&
          "The username field is required"}
        <br />
        <input
          placeholder="Password..."
          data-testid="password"
          name="password"
          type="password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password &&
          errors.password.type === "required" &&
          "The password field is required"}
        {errors.password &&
          errors.password.type === "minLength" &&
          "The password must have at least 8 characters"}
        <br />
        <br />
        <input type="submit" value="Send" />
      </form>
      {formState.isSubmitted && formState.isValid && (
        <p>
          Your data <br />
          {JSON.stringify(watch(), undefined, 4)}
        </p>
      )}
    </div>
  );
}
