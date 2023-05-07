import axios from "axios";
import { useEffect, useState } from "react";

export function getTeams<T = unknown>(url: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState<T | null>(null);
  const apiKey =
    "4982a75d8a59feb1df3929d79e015fe3e6055b41029252b5706b5fcdc8f6bf00";

  //   base configurations for the request
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    method: "get",
    url: url,
    params: {
      action: "get_teams",
      APIkey: apiKey,
      team_id: 73,
    },
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios(config).then((res) => {
      setData(res.data);
    });
  }, [config, url]);

  return { data };
}
