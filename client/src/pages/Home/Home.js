import React, { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ sendUser }) => {
  const [state, setState] = useState(false); //true-> SignUp, false -> SignIn
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const buttonHandler = () => {
    setState((state) => !state);
  };

  const getData = ({ callback, values }) => {
    const sendData = async () => {
      try {
        const result = await callback(values);

        localStorage.setItem("token", result.tokens.token);

        navigate("/tasks");
        sendUser(result.data);
      } catch (error) {
        setError(error.message || JSON.stringify(error));
      }
    };

    sendData();
  };

  return (
    <div className={styles.container}>
      <>
        <header>
          <button onClick={buttonHandler}>{state ? "SignIn" : "SignUp"}</button>
        </header>

        <main className={styles.formWrapper}>
          {state ? (
            <SignUp sendData={getData} />
          ) : (
            <SignIn sendData={getData} />
          )}

          {error && <div className={styles.errorContainer}>{error}</div>}
        </main>
      </>
    </div>
  );
};

export default Home;
