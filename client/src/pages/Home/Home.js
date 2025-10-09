import React, { useState } from "react";
import { connect } from "react-redux";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = (props) => {
  const [state, setState] = useState(false); //true-> SignUp, false -> SignIn

  const buttonHandler = () => {
    setState((state) => !state);
  };

  return (
    <div className={styles.container}>
      <>
        <header>
          <button onClick={buttonHandler}>{state ? "SignIn" : "SignUp"}</button>
        </header>

        <main className={styles.formWrapper}>
          {state ? <SignUp /> : <SignIn />}

          {props.error && (
            <div className={styles.errorContainer}>{props.error.message}</div>
          )}
        </main>
      </>
    </div>
  );
};
const mapStateToProps = ({ error }) => ({ error });

export default connect(mapStateToProps)(Home);
