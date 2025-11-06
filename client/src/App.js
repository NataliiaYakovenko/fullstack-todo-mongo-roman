import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";
import Home from "./pages/Home/Home";
import TodoPage from "./pages/TodoPage";
import history from "./BrowserHistory";
import { authUserRequest } from "./actions/actionCreater";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AuthByQRCode from "./AuthByQRCode/AuthByQRCode";

function App(props) {
  useEffect(() => {
    console.log(props.user, 444);
    if (!props.user) {
      authUserRequest();
    }
  }, []);

  useEffect(() => {
    if (props.notification) {
      toast(props.notification);
    }
  }, [props.notification]);

  return (
    <HistoryRouter history={history}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TodoPage />} />
        <Route path="/authByQR" element={<AuthByQRCode />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({ user, notification }) => ({ user, notification });
const mapDispatchToProps = {
  authUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// http://localhost:3000/authByQR/?refresh=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGQ2NTgwMTZlYTBlNDEyMGU5ZGMwOWUiLCJlbWFpbCI6InJvbGxAZ21haWwuY29tIiwiaWF0IjoxNzYyMzczODY1LCJleHAiOjE3NjIzNzc0NjV9.FQ0aEihQyonwM0jht0dNbvbonWg6qq7Dbuh3SSgrJLo
