import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://apiv3.apifootball.com/",
});

const apiKey =
  "4982a75d8a59feb1df3929d79e015fe3e6055b41029252b5706b5fcdc8f6bf00";

export function getStandings<T = unknown>() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);

  //   base configurations for the request
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config: AxiosRequestConfig = {
    params: {
      action: "get_standings",
      APIkey: apiKey,
      league_id: 302, //La Liga
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    api.get("", config).then((res) => {
      setData(res.data);
    });
  }, [config]);

  return { data };
}

export function getTeams<T = unknown>(teamId?: number) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);

  //   base configurations for the request
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config: AxiosRequestConfig = {
    params: {
      action: "get_teams",
      APIkey: apiKey,
      team_id: teamId ?? "",
      league_id: 302, //La Liga
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    api.get("", config).then((res) => {
      setData(res.data);
    });
  }, [config]);

  return { data };
}

export function getMatches<T = unknown>(
  leagueId: number,
  fromDate: string,
  toDate: string
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  //   base configurations for the request
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config: AxiosRequestConfig = {
    params: {
      action: "get_events",
      APIkey: apiKey,
      league_id: leagueId,
      from: fromDate,
      to: toDate,
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    api
      .get("", config)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [config]);

  return { data, isLoading };
}
