import { Bold, Container, TitleContainer } from "./Home.styles";

import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

import { Box, Button } from "@mui/material";

import Theme from "../../styles/Theme";

import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Card from "../../components/Card/Card";

const btnStyle = {
  padding: "3% 5%",
  margin: "2%",
  backgroundColor: Theme.background.primary,
  color: Theme.title.white,
  transition: "0.5s ease",

  "&: hover": {
    backgroundColor: Theme.background.hoverBg,
  },
};

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
      <Card width={"70vmin"} height={"25vmax"} bgColor={Theme.background.dark}>
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
          <Button sx={btnStyle} href="/teams" startIcon={<GroupsIcon />}>
            Times
          </Button>
          <Button sx={btnStyle} href="/players" startIcon={<PersonIcon />}>
            Jogadores
          </Button>
          <Button sx={btnStyle} href="/matches" startIcon={<DateRangeIcon />}>
            Partidas
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default HomePage;
