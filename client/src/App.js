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

function App(props) {
  useEffect(() => {
    console.log(props.user, 444);
    if (!props.user) {
      authUserRequest();
    }
  }, []);
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TodoPage />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = {
  authUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
