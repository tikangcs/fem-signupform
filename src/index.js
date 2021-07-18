import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import TextField from "./components/TextField";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="app-container">
      <div className="container-left">
        <header className="header">Learn to code by watching others</header>
        <p className="paragraph">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <main className="main-content">
        <button className="button1" type="button">
          Try it free 7 days then $20/mo. thereafter
        </button>

        <form id="signup" className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className={errors.firstName ? "input-error" : "input"}
            placeholder="First name"
            {...register("firstName", {
              required: {
                value: true,
                message: "First name cannot be empty",
              },
              minLength: { value: 3, message: "Min length: 3" },
              maxLength: { value: 20, message: "Max length: 20" },
            })}
          />
          {errors.firstName && (
            <div className="error__message">
              <p>{errors.firstName.message}</p>
            </div>
          )}

          <input
            type="text"
            className={errors.lastName ? "input-error" : "input"}
            placeholder="Last name"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last name cannot be empty",
              },
              minLength: { value: 3, message: "Min length: 3" },
              maxLength: { value: 20, message: "Max length: 20" },
            })}
          />
          {errors.lastName && (
            <div className="error__message">
              <p>{errors.lastName.message}</p>
            </div>
          )}

          <input
            type="email"
            className={errors.email ? "input-error" : "input"}
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email cannot be empty",
              },
              minLength: { value: 3, message: "Min length: 3" },
              maxLength: { value: 50, message: "Max length: 50" },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Looks like this is not an email",
              },
            })}
          />
          {errors.email && (
            <div className="error__message">
              <p>{errors.email.message}</p>
            </div>
          )}
          <input
            type="password"
            className={errors.password ? "input-error" : "input"}
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password cannot be empty" },
              min: { value: 3, message: "Min length: 3" },
              maxLength: { value: 12, message: "Max length: 12" },
            })}
          />
          {errors.password && (
            <div className="error__message">
              <p>{errors.password.message}</p>
            </div>
          )}
          <input
            type="submit"
            form="signup"
            value="CLAIM YOUR FREE TRIAL"
            className="button2"
          />
          <div className="subtext">
            By clicking the button, you are agreeing to our{" "}
            <a href="#" className="terms">
              Terms and Services
            </a>
          </div>
        </form>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
