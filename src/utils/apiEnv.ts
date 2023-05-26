import axios from "axios";

export const apiKey =
  "2846f9c860ddf04191db568ead7ba15f34a885be021049a636e9ce18ecebac75";

export const apiBaseConfig = axios.create({
  baseURL: "https://apiv3.apifootball.com/",
});
