import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

// Login  credentials
const data = {
  name: "Salman K",
  email: "mskhan2920@gmail.com",
  password: "12345",
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Form will be validated upon submit button
  const validation = () => {
    if (
      name === data.name &&
      email === data.email &&
      password === data.password
    ) {
      setIsLoggedIn(true);
    }
    // In case validation fails
    else alert("Wrong Credentials");
  };
  if (isLoggedIn) {
    console.log("welcome");
    return <Welcome name={data.name} />;
  }
  // initially isLoggedIn is false, so Form Page will be rendered
  return (
    <>
      <Form setEmail={setEmail} setPassword={setPassword} setName={setName} />
      <button onClick={validation}>Submit</button>
    </>
  );
}
function Welcome({ name }) {
  return <h1>Welcome, {name}</h1>;
}

function Form({ setEmail, setPassword, setName }) {
  return (
    <form>
      <div className="data-box">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="data-box">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="data-box">
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));