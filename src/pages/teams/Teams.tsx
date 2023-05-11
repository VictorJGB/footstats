import Title from "../../components/Title/Title";
import { useStandings } from "../../services/api";
import { Container } from "./Teams.styles";
import Card from "../../components/Card/Card";
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

import { IStandings } from "../../interface/IStandings";
import Subtitle from "../../components/Subtitle/Subtitle";

const TeamsPage = () => {
  const { data: teams, isLoading } = useStandings<IStandings[]>();

  const headerCellStyle = {
    color: Theme.title.white,
    fontSize: "1.3em",
    fontWeight: 700,
  };

  const bodyCellStyle = {
    color: Theme.title.black,
    fontSize: "1.1em",
    fontWeight: 500,
  };

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
        <Title color={Theme.title.primary}>Estatísticas de times</Title>
        <Subtitle color={Theme.title.secondary}>La Liga</Subtitle>
      </Box>
      {teams != null ? (
        <Card width="95vmin" height="50vmax">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.secondaryBg }}>
                <TableRow>
                  <TableCell sx={headerCellStyle}>Logo</TableCell>
                  <TableCell sx={headerCellStyle}>Posição</TableCell>
                  <TableCell sx={headerCellStyle}>Nome</TableCell>
                  <TableCell sx={headerCellStyle}>PTS</TableCell>
                  <TableCell sx={headerCellStyle}>V</TableCell>
                  <TableCell sx={headerCellStyle}>E</TableCell>
                  <TableCell sx={headerCellStyle}>D</TableCell>
                  <TableCell sx={headerCellStyle}>GM</TableCell>
                  <TableCell sx={headerCellStyle}>GC</TableCell>
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
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_position}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.team_name}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_PTS}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_W}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_D}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_L}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {team.overall_league_GF}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
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
