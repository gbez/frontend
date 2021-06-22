import axios from "axios";

export default axios.create({
  //baseURL: "http://dim-sum-cart.herokuapp.com/api/v1/blogpost",
  baseURL: "http://localhost:3000/api/v1",
  headers: {},
});
