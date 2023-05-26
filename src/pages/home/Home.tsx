import { Bold, Container, TitleContainer } from "./Home.styles";

import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

import { Box, Button } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";

import Theme from "../../styles/Theme";

import { homeBtnStyle } from "./config/stylesConfig";

import Card from "../../components/Card/Card";

const HomePage = () => {
  return (
    // Container
    <Container>
      {/* Title box */}
      <TitleContainer>
        <Title fontSize="3rem" color={Theme.title.black}>
          Bem vindo ao <Bold>Footstats</Bold>
        </Title>
        <Subtitle color={Theme.title.black}>
          Seu site de estatísticas esportivas
        </Subtitle>
      </TitleContainer>

      {/* Buttons box */}
      <Card width={"70%"} height={"40%"} bgColor={Theme.background.dark}>
        <Subtitle fontSize="2.5rem" color={Theme.title.white}>
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
          <Button sx={homeBtnStyle} href="/teams" startIcon={<GroupsIcon />}>
            Times
          </Button>
          <Button sx={homeBtnStyle} href="/players" startIcon={<PersonIcon />}>
            Jogadores
          </Button>
          <Button
            sx={homeBtnStyle}
            href="/matches"
            startIcon={<DateRangeIcon />}
          >
            Partidas
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default HomePage;
