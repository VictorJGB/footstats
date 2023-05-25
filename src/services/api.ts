import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://apiv3.apifootball.com/",
});

const apiKey =
  "2846f9c860ddf04191db568ead7ba15f34a885be021049a636e9ce18ecebac75";

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

    api
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

    api
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

export function useMatchesRequest<T = unknown>(
  leagueId: number,
  fromDate: string,
  toDate: string
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<number | null>(null);

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

    api
      .get("", config)
      .then((res) => {
        setData(res.data);
        if (res.data.error) {
          setError(res.data.error);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error(err.response.data);
          setError(err.response.status);
        }
      })
      .finally(() => setIsLoading(false));
  }, [fromDate, leagueId, toDate]);

  return { data, isLoading, error };
}
