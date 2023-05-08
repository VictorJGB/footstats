import { useEffect } from "react";
import Title from "../../components/Title/Title";
import { getTeams } from "../../services/api";
import { Container } from "./Teams.styles";
import Card from "../../components/Card/Card";
import Subtitle from "../../components/Subtitle/Subtitle";

const TeamsPage = () => {
  const { data: teams } = getTeams();

  useEffect(() => {
    console.log(teams);
  }, [teams]);

  return (
    <Container>
      <Title>Times</Title>
      <Card width="95vmin">
        <Subtitle fontSize="4vmin">Escolha seu time</Subtitle>
      </Card>
    </Container>
  );
};

export default TeamsPage;
