import React from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div>
      <header>Learn to code by watching others</header>
      <main>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
        <button>Try it free 7 days then $20/mo. thereafter</button>
        <form>
          <input type="text" placeholder="First Name" required></input>
          <input type="text" placeholder="Last Name" required></input>
          <input type="email" placeholder="Email Address" required></input>
          <input type="password" placeholder="Password" required></input>
          <input type="submit" value="Claim your free trial"></input>
        </form>
        By clicking the button, you are agreeing to our Terms and Services
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
