import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { apiKey, apiBaseConfig } from "../utils/apiEnv";

export function useMatches<T = unknown>(
  leagueId: number,
  fromDate: string,
  toDate: string
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  //   base configurations for the request
  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        action: "get_events",
        APIkey: apiKey,
        league_id: leagueId,
        from: fromDate,
        to: toDate,
      },
    };

    apiBaseConfig
      .get("", config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.error(err.response.data);
          setError(err.response);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading, error };
}
