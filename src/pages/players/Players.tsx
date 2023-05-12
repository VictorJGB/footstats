import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useState } from "react";

import { Container } from "./Players.styles";

import { ITeam } from "../../interface/ITeam";
import { useTeams } from "../../services/api";

import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Theme from "../../styles/Theme";
import { IPlayer } from "../../interface/IPlayer";
import assets from "../../assets";
import TableStyle from "../../styles/TableStyle";

const PlayersPage = () => {
  const { data: teams, isLoading } = useTeams<ITeam[]>();
  const [teamSearch, setTeamSearch] = useState("");

  const filteredTeam: ITeam | undefined =
    teamSearch.length > 0
      ? teams?.find((team) => team.team_name.includes(teamSearch))
      : undefined;

  const handleChange = (event: SelectChangeEvent) => {
    setTeamSearch(event.target.value as string);
  };

  return (
    <Container>
      <Title color={Theme.title.primary} fontSize="6vmin">
        Estatísticas de jogadores
      </Title>

      {/* Select box */}
      <Box
        sx={{
          width: "20vw",
          margin: "2%",
          alignSelf: "flex-start",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="teamSelectLabel">Time</InputLabel>
          <Select
            labelId="teamSelectLabel"
            id="teamSelect"
            value={teamSearch}
            label="Team"
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  color: Theme.title.secondary,
                },
              },
            }}
          >
            {teams?.map((team: ITeam) => (
              <MenuItem key={team.team_key} value={team.team_name}>
                {team.team_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Players table */}
      {teamSearch.length > 0 ? (
        <Card width="70vw" height="60vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="players table">
              <TableHead sx={{ backgroundColor: Theme.background.dark }}>
                <TableRow>
                  <TableCell sx={TableStyle.headerCell} title="Imagem">
                    IMG
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Número">
                    Nº
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Nome">
                    Nome
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Avaliação">
                    PTS
                  </TableCell>
                  <TableCell
                    sx={TableStyle.headerCell}
                    title="Partidas jogadas"
                  >
                    PJ
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Gols marcados">
                    GM
                  </TableCell>
                  <TableCell
                    sx={TableStyle.headerCell}
                    title="Cartões amarelos"
                  >
                    CA
                  </TableCell>
                  <TableCell
                    sx={TableStyle.headerCell}
                    title="Cartões vermelhos"
                  >
                    CV
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTeam != null || ""
                  ? filteredTeam?.players.map((player: IPlayer) => (
                      <TableRow
                        key={player.player_key}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {player.player_image != "" || null ? (
                            <img
                              style={{ maxWidth: "3em" }}
                              src={player.player_image}
                              alt="player_img"
                            />
                          ) : (
                            <img
                              style={{ maxWidth: "3em" }}
                              src={assets.images.logo}
                              alt="player_img"
                            />
                          )}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_number}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_name}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_rating != ""
                            ? player.player_rating
                            : "-"}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_match_played}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_goals}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_yellow_cards}
                        </TableCell>
                        <TableCell
                          sx={TableStyle.bodyCell}
                          component="th"
                          scope="row"
                        >
                          {player.player_red_cards}
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
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

export default PlayersPage;
