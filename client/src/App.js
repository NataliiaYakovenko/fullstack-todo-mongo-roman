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
import AuthByQRCode from "./pages/AuthByQRCode/AuthByQRCode";

function App(props) {
  useEffect(() => {
    setTimeout(() => {
      console.log(props.user, 444);
      if (!props.user) {
        authUserRequest();
      }
    }, 500);
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
        <Route path="/authByQRCode" element={<AuthByQRCode />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({ user, notification }) => ({ user, notification });
const mapDispatchToProps = {
  authUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

