import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
  withCredentials: true,
});

const sonuc = axiosInstance.get().then((response) => {
  console.log(response);
});
