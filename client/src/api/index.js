import CONSTANTS from "../constants";

export const registerUser = (date) => {
return fetch(`${CONSTANTS.API_BASE}/users/registration`, {
    method: "POST",
    headers: {
      " Content-Type": "application/json",
    },
    body: JSON.stringify(date),
  })
  .then((response) => response.json());
};
