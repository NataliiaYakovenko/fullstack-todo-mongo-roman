import React, { useState, useEffect } from "react";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import { registerUser } from "../api";

const Home = () => {
  const [state, setState] = useState(true); //true-> SignUp, false -> SignIn
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  const buttonHandler = () => {
    setState((state) => !state);
  };

  const getData = (userData) => {
    console.log("📤 Відправляю об'єкт:", userData);
    setData(userData);
  };

  // useEffect(() => {
  //   if (data) {
  //     return registerUser(data)
  //     .then((result) => {
  //       console.log(result);
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    if (data) {
      const sendData = async () => {
        try {
          const result = await registerUser(data);
          console.log(result);
        } catch (err) {
           setError(err)
          //console.error("Register error:", err);
        }
      };

      sendData();
    }
  }, [data]);

  return (
    <div>
      <>
        <header>
          <button onClick={buttonHandler}>{state ? "SignIn" : "SignUp"}</button>
        </header>

        <main>
          {state ? (
            <SignUp sendData={getData} />
          ) : (
            <SignIn sendData={getData} />
          )}
        </main>

        {error && <div>{error}</div>}
      </>
    </div>
  );
};

export default Home;
