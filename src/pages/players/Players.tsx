import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
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
import { getTeams } from "../../services/api";

import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Theme from "../../styles/Theme";
import { IPlayer } from "../../interface/IPlayer";
import assets from "../../assets";

const PlayersPage = () => {
  const { data: teams } = getTeams<ITeam[]>();
  const [teamSearch, setTeamSearch] = useState("");

  const filteredTeam: ITeam | undefined =
    teamSearch.length > 0
      ? teams?.find((team) => team.team_name.includes(teamSearch))
      : undefined;

  const handleChange = (event: SelectChangeEvent) => {
    setTeamSearch(event.target.value as string);
  };

  const headerCellStyle = {
    color: Theme.title.white,
    fontSize: "1.3em",
    fontWeight: 700,
  };

  const bodyCellStyle = {
    color: Theme.title.black,
    fontSize: "1.1em",
    fontWeight: 500,
    textAlign: "center",
  };

  return (
    <Container>
      <Title>Estatísticas de jogadores</Title>
      <Box
        sx={{
          width: "25%",
          "&::value": { color: "black" },
          margin: "2%",
          alignSelf: "flex-start",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="teamSelectLabel">Escolha seu time</InputLabel>
          <Select
            labelId="teamSelectLabel"
            id="teamSelect"
            value={teamSearch}
            label="Team"
            onChange={handleChange}
          >
            {teams?.map((team: ITeam) => (
              <MenuItem key={team.team_key} value={team.team_name}>
                {team.team_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {teamSearch.length > 0 ? (
        <Card width="70vw" height="60vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.secondaryBg }}>
                <TableRow>
                  <TableCell sx={headerCellStyle} title="Imagem">
                    IMG
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Número">
                    Nº
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Nome">
                    Nome
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Avaliação">
                    PTS
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Partidas jogadas">
                    PJ
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Gols marcados">
                    GM
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Cartões amarelos">
                    CA
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Cartões vermelhos">
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
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_number}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_name}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_rating != ""
                            ? player.player_rating
                            : "-"}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_match_played}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_goals}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
                          component="th"
                          scope="row"
                        >
                          {player.player_yellow_cards}
                        </TableCell>
                        <TableCell
                          sx={bodyCellStyle}
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
      ) : null}
    </Container>
  );
};

export default PlayersPage;
