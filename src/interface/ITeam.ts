import { IPlayer } from "./IPlayer";

export interface ITeam {
  team_key: string;
  team_name: string;
  team_badge: string;
  players: IPlayer[];
  coaches: {
    coach_name: string;
    coache_country: string;
    coach_age: string;
  };
}
