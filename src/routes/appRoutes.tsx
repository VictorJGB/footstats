import { RouteType } from "./config";

import HomePage from "../pages/home/Home";
import PlayersPage from "../pages/players/Players";
import TeamsPage from "../pages/teams/Teams";
import MatchesPage from "../pages/matches/Matches";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/teams",
    element: <TeamsPage />,
    state: "teams",
    sidebarProps: {
      displayText: "Teams",
      icon: <GroupsIcon />,
    },
  },
  {
    path: "/players",
    element: <PlayersPage />,
    state: "players",
    sidebarProps: {
      displayText: "Players",
      icon: <PersonIcon />,
    },
  },
  {
    path: "/matches",
    element: <MatchesPage />,
    state: "matches",
    sidebarProps: {
      displayText: "Matches",
      icon: <DateRangeIcon />,
    },
  },
];

export default appRoutes;
