import axios from "axios";

export default axios.create({
  baseURL: "https://dim-sum-cart.herokuapp.com/api/v1/blog",
  headers: {},
});
