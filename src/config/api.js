import axios from "axios";

//base url
export const API = axios.create({
  baseURL: "http://localhost:3039/api/v1/",
});

// set auth token
export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
