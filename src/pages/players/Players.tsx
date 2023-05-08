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

import { Container, StyledInput } from "./Players.styles";

import { ITeam } from "../../interface/ITeam";
import { getTeams } from "../../services/api";

import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Theme from "../../styles/Theme";
import { IPlayer } from "../../interface/IPlayer";

const PlayersPage = () => {
  const { data: teams } = getTeams<ITeam[]>();
  const [team, setTeam] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTeam(event.target.value as string);
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
  };
  const teamsDetails = [
    {
      "Atletico Madrid": "73",
    },
    {
      "Real Madrid": "76",
    },
    {
      team_key: "89",
      team_name: "Sevilla",
    },
    {
      team_key: "97",
      team_name: "Barcelona",
    },
    {
      team_key: "153",
      team_name: "Real Sociedad",
    },
    {
      team_key: "162",
      team_name: "Villarreal",
    },
    {
      team_key: "7258",
      team_name: "Athletic Bilbao",
    },
    {
      team_key: "7260",
      team_name: "Almeria",
    },
    {
      team_key: "7261",
      team_name: "Real Betis",
    },
    {
      team_key: "7262",
      team_name: "Real Valladolid",
    },
    {
      team_key: "7263",
      team_name: "Girona",
    },
    {
      team_key: "7264",
      team_name: "Rayo Vallecano",
    },
    {
      team_key: "7268",
      team_name: "Espanyol",
    },
    {
      team_key: "7269",
      team_name: "Osasuna",
    },
    {
      team_key: "7272",
      team_name: "Valencia",
    },
    {
      team_key: "7274",
      team_name: "Elche",
    },
    {
      team_key: "7277",
      team_name: "Cadiz",
    },
    {
      team_key: "7285",
      team_name: "Mallorca",
    },
    {
      team_key: "7288",
      team_name: "Getafe",
    },
    {
      team_key: "7290",
      team_name: "Celta Vigo",
    },
  ];

  return (
    <Container>
      <Title>Estatísticas de jogadores</Title>
      <Box
        sx={{
          width: "50%",
          "&::value": { color: "black" },
          margin: "2%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="teamSelectLabel">Escolha seu time</InputLabel>
          <Select
            labelId="teamSelectLabel"
            id="teamSelect"
            value={team}
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
      <Card width="95vmin">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: "80%" }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: Theme.secondaryBg }}>
              <TableRow>
                <TableCell sx={headerCellStyle}>IMG</TableCell>
                <TableCell sx={headerCellStyle}>Nº</TableCell>
                <TableCell sx={headerCellStyle}>Nome</TableCell>
                <TableCell sx={headerCellStyle}>PTS</TableCell>
                <TableCell sx={headerCellStyle}>PJ</TableCell>
                <TableCell sx={headerCellStyle}>GM</TableCell>
                <TableCell sx={headerCellStyle}>CA</TableCell>
                <TableCell sx={headerCellStyle}>CV</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams?.map((team: ITeam) => {
                return team.players.map((player: IPlayer) => (
                  <TableRow
                    key={player.player_key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        style={{ maxWidth: "3em" }}
                        src={player.player_image}
                        alt="player_img"
                      />
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_number}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_name}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_rating}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_match_played}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_goals}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_yellow_cards}
                    </TableCell>
                    <TableCell sx={bodyCellStyle} component="th" scope="row">
                      {player.player_red_cards}
                    </TableCell>
                  </TableRow>
                ));
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default PlayersPage;
