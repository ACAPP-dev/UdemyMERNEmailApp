import axios from "axios";
import { FETCH_USER } from "./types";

// Refactored using async / await
// export const fetchUser = () => {
//   return function (dispatch) {
//     axios
//       .get("/users/current_user")
//       .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
//   };
// };

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/users/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
