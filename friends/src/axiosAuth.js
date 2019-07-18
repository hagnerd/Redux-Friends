import axios from "axios";

// We can avoid having to rewrite fetching the token from local storage and
// adding it to our axios requests via the header using the following function
// in place of normal `axios` calls for api calls taht require the header.
export default function axiosAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
}
