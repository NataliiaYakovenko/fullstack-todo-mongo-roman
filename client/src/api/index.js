import CONSTANTS from "../constants";
import axios from "axios";

export const registerUser = (data) => {
return fetch(`${CONSTANTS.API_BASE}/users/registration`, {
    method: "POST",
    headers: {
      " Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json());
};

// export const registerUser = async (data) => {
//   try {
//     const response = await axios.post(
//       `${CONSTANTS.API_BASE}/users/registration`,
//       data,
//       {
//         headers: {
//           " Content-Type":"application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
