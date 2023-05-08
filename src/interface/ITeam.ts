import { ICoach } from "./ICoach";
import { IPlayer } from "./IPlayer";

export interface ITeam {
  team_key: string;
  team_name: string;
  team_badge: string;
  players: IPlayer[];
  coaches: ICoach[];
}
