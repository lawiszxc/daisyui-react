import axios from "axios";

const instance = axios.create({
  baseURL: "https://laravel-deploy-latest-3v5q.onrender.com/api",
});

export default instance;
