// import CONSTANTS from "../constants";
// import { refreshSession } from "./userApi";

// export const getTasks = async () => {
//   const accesToken = localStorage.getItem("accesToken");

//   const response = await fetch(`${CONSTANTS.API_BASE}/tasks`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${accesToken}`,
//     },
//   });

//   if (response.status === 400) {
//     const error = await response.json();
//     return Promise.reject(error);
//   }

//   if (response.status === 403) {
//     await refreshSession();
//     return await getTasks();
//   }
//   return response.json();
// };

// export const createTask = async (data) => {
//   const accesToken = localStorage.getItem("accesToken");

//   const response = await fetch(`${CONSTANTS.API_BASE}/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accesToken}`,
//     },
//     body: JSON.stringify(data),
//   });
//   if (response.status === 400) {
//     const error = await response.json();
//     return Promise.reject(error);
//   }

//   if (response.status === 403) {
//     await refreshSession();
//     return await createTask(data);
//   }
//   return response.json();
// };


// export const deleteTask = async (taskId) => {
//   const accesToken = localStorage.getItem("accesToken");

//   const response = await fetch(`${CONSTANTS.API_BASE}/tasks/${taskId}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${accesToken}`,
//     },
//   });
//   if (response.status === 400) {
//     const error = await response.json();
//     return Promise.reject(error);
//   }

//   if (response.status === 403) {
//     await refreshSession();
//     return await deleteTask();
//   }
//   return response.json();
// };
