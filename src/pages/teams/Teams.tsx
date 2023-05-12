import { useStandings } from "../../services/api";

import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Subtitle from "../../components/Subtitle/Subtitle";

// MUI IMPORTS
import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Theme from "../../styles/Theme";
import TableStyle from "../../styles/TableStyle";
import { Container } from "./Teams.styles";

import { IStandings } from "../../interface/IStandings";

const TeamsPage = () => {
  const { data: teams, isLoading } = useStandings<IStandings[]>();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          gap: "0.5em",
        }}
      >
        <Title color={Theme.title.primary} fontSize="6vmin">
          Estatísticas de times
        </Title>
        <Subtitle color={Theme.title.secondary} fontSize="4vmin">
          La Liga
        </Subtitle>
      </Box>
      {teams != null ? (
        <Card width="70vw" height="50vmax">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.background.dark }}>
                <TableRow>
                  <TableCell sx={TableStyle.headerCell} title="Logo do time">
                    Logo
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Posição">
                    Posição
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Nome do time">
                    Nome
                  </TableCell>
                  <TableCell
                    sx={TableStyle.headerCell}
                    title="Pontuação do time"
                  >
                    PTS
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Vitórias">
                    V
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Empates">
                    E
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Derrotas">
                    D
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Gols Marcados">
                    GM
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Gols Contra">
                    GC
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teams?.map((team: IStandings) => (
                  <TableRow
                    key={team.team_id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ maxWidth: "3em" }}
                        src={team.team_badge}
                        alt="team_logo"
                      />
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_position}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.team_name}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_PTS}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_W}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_D}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_L}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_GF}
                    </TableCell>
                    <TableCell
                      sx={TableStyle.bodyCell}
                      component="th"
                      scope="row"
                    >
                      {team.overall_league_GA}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      ) : (
        // Skeleton while the request is being made
        isLoading && (
          <Skeleton variant="rounded" width={"70vw"} height={"60vh"} />
        )
      )}
    </Container>
  );
};

export default TeamsPage;
