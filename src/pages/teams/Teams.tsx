import Title from "../../components/Title/Title";
import { getTeams } from "../../services/api";
import { Container } from "./Teams.styles";
import Card from "../../components/Card/Card";
import Subtitle from "../../components/Subtitle/Subtitle";
import { ITeam } from "../../interface/ITeam";

const TeamsPage = () => {
  const { data: teams } = getTeams<ITeam[]>();

  return (
    <Container>
      <Title>Times</Title>
      <Card width="95vmin">
        <Subtitle fontSize="4vmin">Escolha seu time</Subtitle>
        <button
          onClick={() => {
            teams?.map((team) => {
              console.log(team.team_name);
            });
          }}
        >
          Get Teams
        </button>
      </Card>
    </Container>
  );
};

export default TeamsPage;
