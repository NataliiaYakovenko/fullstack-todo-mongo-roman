import React from "react";
import {
  authQRUserRequest,
  emptyUserObjectRequest,
} from "../../actions/actionCreater";
import { connect } from "react-redux";

const AuthByQRCode = (props) => {
  props.emptyUserObjectRequest();

  const refresh = new URLSearchParams(window.location.search).get("refresh");

  props.authQRUserRequest(refresh);

  return <div>{refresh}</div>;
};

const mapDispatchToPrips = {
  authQRUserRequest,
  emptyUserObjectRequest,
};

export default connect(null, mapDispatchToPrips)(AuthByQRCode);
