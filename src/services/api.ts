import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://apiv3.apifootball.com/",
  timeout: 1000,
});

const apiKey =
  "4982a75d8a59feb1df3929d79e015fe3e6055b41029252b5706b5fcdc8f6bf00";

export function getTeams<T = unknown>() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);
  const config: AxiosRequestConfig = {
    params: {
      action: "get_teams",
      APIkey: apiKey,
      league_id: 300, //Spain league
    },
  };

  //   base configurations for the request

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    api.get("", config).then((res) => {
      setData(res.data);
    });
  }, [config]);

  return { data };
}
