import axios from "axios";

const instance = axios.create({
  baseURL: "https://laravel-deploy-latest-dfoq.onrender.com/api",
});

export default instance;
