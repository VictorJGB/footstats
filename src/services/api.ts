import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { apiKey, apiBaseConfig } from "../utils/apiEnv";

export function useStandings<T = unknown>() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  //   base configurations for the request
  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        action: "get_standings",
        APIkey: apiKey,
        league_id: 302, //La Liga
      },
    };

    apiBaseConfig
      .get("", config)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
}

export function useTeams<T = unknown>(teamId?: number) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);

  //   base configurations for the request
  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        action: "get_teams",
        APIkey: apiKey,
        team_id: teamId ?? "",
        league_id: 302, //La Liga
      },
    };

    apiBaseConfig
      .get("", config)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [teamId]);

  return { data, isLoading };
}
