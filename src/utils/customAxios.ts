import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://ably-frontend-assignment-server.vercel.app",
  headers: { "Content-Type": "application/json" },
});

export default customAxios;
