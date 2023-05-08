import { Bold, ButtonsBox, Container, TitleContainer } from "./Home.styles";

import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

import { Box } from "@mui/material";

import Theme from "../../styles/Theme";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import IconButton from "../../components/IconButton/IconButton";

const HomePage = () => {
  return (
    // Container
    <Container>
      {/* Title box */}
      <TitleContainer>
        <Title fontSize={"5vmin"} color={Theme.title.black}>
          Bem vindo ao <Bold>Footstats</Bold>
        </Title>
        <Subtitle color={Theme.title.black}>
          Seu site de estatísticas esportivas
        </Subtitle>
      </TitleContainer>

      {/* Buttons box */}
      <ButtonsBox>
        <Subtitle fontSize={"2.5em"} color={Theme.title.white}>
          Escolha uma ação
        </Subtitle>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton href="/teams" startIcon={<GroupsIcon />}>
            Times
          </IconButton>
          <IconButton href="/players" startIcon={<PersonIcon />}>
            Jogadores
          </IconButton>
          <IconButton href="/matches" startIcon={<DateRangeIcon />}>
            Partidas
          </IconButton>
        </Box>
      </ButtonsBox>
    </Container>
  );
};

export default HomePage;
