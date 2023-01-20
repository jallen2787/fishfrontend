import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://fishes-api-production.up.railway.app/fishes/",
  development: "https://fishes-api-production.up.railway.app/fishes/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
