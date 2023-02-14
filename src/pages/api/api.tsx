import axios from "axios";

const api = axios.create({
  //baseURL: "https://transparencia.aparecida.go.gov.br/portal-transparencia/assets/json/faq.json",
  //baseURL: process.env.NEXT_PUBLIC_BASE_URL
  //baseURL: 'https://backsports.herokuapp.com'
  baseURL: 'http://localhost:3333'
});

export default api;