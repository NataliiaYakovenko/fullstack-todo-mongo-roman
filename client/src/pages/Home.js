import React, { useState } from "react";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

const Home = () => {
  const [state, setState] = useState(true); //true-> SignUp, false -> SignIn

  const buttonHandler = () => {
    setState((state) => !state);
  };

  return (
    <div>
      <>
        <header>
          <button onClick={buttonHandler}>{state ? "SignIn" : "SignUp"}</button>
        </header>

        <main>{state ? <SignUp /> : <SignIn />}</main>
      </>
    </div>
  );
};

export default Home;
