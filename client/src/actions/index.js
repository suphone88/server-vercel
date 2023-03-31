import axios from "axios";
//import api from "../api/api";

import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  //const res = await api.get("/api/current_user");
  console.log("Actions Auth >>", res);
  dispatch({ type: FETCH_USER, payload: res.data });
};
