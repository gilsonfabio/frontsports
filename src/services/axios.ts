import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://apps.aparecida.go.gov.br/backend-gce'
  })

  api.interceptors.request.use(config => {
    //console.log(config);
    return config;
  })

  if (token) {
    api.defaults.headers['x-access-token'] = `${token}`;
  }

  return api;
}