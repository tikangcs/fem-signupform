import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import TextField from "./components/TextField";
import Typography from "@material-ui/core/Typography";

export default function App() {
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
        <Button
          className="button1"
          text="Try it free 7 days then $20/mo. thereafter"
          color="primary"
        />
        <form>
          <TextField label="First Name" type="text" />
          <TextField label="Last Name" type="text" />
          <TextField label="Email" type="email" />
          <TextField label="Password" type="password" />
          <Button text="Claim your free trial" color="secondary" />
          <Typography variant="subtitle2">
            By clicking the button, you are agreeing to our Terms and Services
          </Typography>
        </form>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
