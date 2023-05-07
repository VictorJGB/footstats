import {
  Bold,
  ButtonsBox,
  Container,
  IconButton,
  SubTitle,
  Title,
  TitleContainer,
} from "./Home.styles";
import { getTeams } from "../../services/api";
import { Box, Button } from "@mui/material";

import Theme from "../../styles/Theme";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";

type Teams = {
  team_key: string;
  team_name: string;
  team_badge: string;
};

const HomePage = () => {
  const baseUrl = "https://apiv3.apifootball.com/";

  // Request handling
  const { data: teams } = getTeams<Teams[]>(baseUrl);

  return (
    // Container
    <Container>
      {/* Title box */}
      <TitleContainer>
        <Title color={Theme.title.black}>
          Bem vindo ao <Bold>Footstats</Bold>
        </Title>
        <SubTitle color={Theme.title.black}>
          Seu site de estatísticas esportivas
        </SubTitle>
      </TitleContainer>

      {/* Buttons box */}
      <ButtonsBox>
        <SubTitle color={Theme.title.white}>Escolha uma ação</SubTitle>
        <Box>
          <IconButton variant="contained" startIcon={<GroupsIcon />}>
            Times
          </IconButton>
          <IconButton variant="contained" startIcon={<PersonIcon />}>
            Jogadores
          </IconButton>
          <IconButton variant="contained" startIcon={<DateRangeIcon />}>
            Partidas
          </IconButton>
        </Box>
      </ButtonsBox>
    </Container>
  );
};

export default HomePage;
