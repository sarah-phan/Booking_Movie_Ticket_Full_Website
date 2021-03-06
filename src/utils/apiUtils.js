import axios from "axios";

export const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use((config) => {
  config.headers = {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
    Authorization: localStorage.getItem("UserAccount")
      ? `Bearer ${JSON.parse(localStorage.getItem("UserAccount")).accessToken}`
      : "",
  };
  return config;
});

export const api1 = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api1.interceptors.request.use((config) => {
  config.headers = {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
    Authorization: localStorage.getItem("UserAdmin")
      ? `Bearer ${JSON.parse(localStorage.getItem("UserAdmin")).accessToken}`
      : "",
  };
  console.log(123);
  return config;
});
