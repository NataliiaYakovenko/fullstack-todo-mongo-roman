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
        theme='dark'
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TodoPage />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({ user, notification }) => ({ user, notification });
const mapDispatchToProps = {
  authUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
