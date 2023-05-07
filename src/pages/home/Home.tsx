import { Container } from "./Home.styles";
import { getTeams } from "../../services/api";

type Teams = {
  team_key: string;
  team_name: string;
  team_badge: string;
};

const HomePage = () => {
  const baseUrl = "https://apiv3.apifootball.com/";

  // Request handling
  const { data: teams } = getTeams<Teams[]>(baseUrl);

  return <Container>Home Page</Container>;
};

export default HomePage;
