import axios from "axios";

export default axios.create({
  baseURL: "https://besner-blog-backend.herokuapp.com/api/v1",
  //baseURL: "http://localhost:3000/api/v1",
  headers: {},
});
