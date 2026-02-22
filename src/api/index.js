import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

const registerApi = axios.create({
  baseURL: BASE_URL,
});

export { api, registerApi };
