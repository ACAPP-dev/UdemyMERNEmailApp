import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

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

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/payments/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
