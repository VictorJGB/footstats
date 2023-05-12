import { useState } from "react";
import { Container } from "./Matches.styles";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
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

import assets from "../../assets";
import Theme from "../../styles/Theme";

import { IMatches } from "../../interface/IMatches";
import Card from "../../components/Card/Card";
import dayjs, { Dayjs } from "dayjs";

import { useMatchesRequest } from "../../services/api";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";

const MatchesPage = () => {
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs(""));
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs(""));

  const [formatFromDate, setFormatFromDate] = useState<string | null>("");
  const [formatToDate, setFormatToDate] = useState<string | null>("");

  const {
    data: matches,
    error,
    isLoading,
  } = useMatchesRequest<IMatches[]>(
    302,
    formatFromDate ?? "2022-10-01",
    formatToDate ?? "2023-02-11"
  );

  const headerCellStyle = {
    color: Theme.title.white,
    fontSize: "1.3em",
    fontWeight: 700,
    textAlign: "center",
  };

  const bodyCellStyle = {
    color: Theme.title.black,
    fontSize: "1.1em",
    fontWeight: 500,
    textAlign: "center",
  };

  return (
    <Container>
      <Title color={Theme.title.primary}>Estatística de partidas</Title>

      {/* Date box */}
      <Box
        sx={{
          margin: "5vh",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Subtitle color={Theme.title.secondary}>
          Escolha as datas das partidas
        </Subtitle>
        <DemoContainer
          sx={{
            margin: "2%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          components={["DatePicker", "DatePicker"]}
        >
          <DatePicker
            label="De"
            disableFuture
            value={fromDate}
            onChange={(fromDate) => {
              setFromDate(fromDate);
              setFormatFromDate(
                fromDate != null ? fromDate?.format("YYYY-MM-DD") : ""
              );
            }}
          />
          <DatePicker
            label="Até"
            disableFuture
            value={toDate}
            onChange={(toDate) => {
              setToDate(toDate);
              setFormatToDate(
                toDate != undefined ? toDate?.format("YYYY-MM-DD") : ""
              );
            }}
          />
        </DemoContainer>
      </Box>

      {matches != null && matches != undefined && matches.error == null ? (
        <Card width="70vw" height="60vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.secondaryBg }}>
                <TableRow>
                  <TableCell sx={headerCellStyle} title="Data da partida">
                    Data
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Mandante">
                    Mandante
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Gols mandante">
                    PTS
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Horário">
                    Horário
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Gols visitante">
                    PTS
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Visitante">
                    Visitante
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Juiz">
                    Juiz
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Estádio">
                    Estádio
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matches.map((match: IMatches) => (
                  <TableRow
                    key={match.match_id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_date != "" ? match.match_date : "-"}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.team_home_badge != "" || null ? (
                        <img
                          style={{ maxWidth: "3em" }}
                          src={match.team_home_badge}
                          alt="mandante"
                        />
                      ) : (
                        <img
                          style={{ maxWidth: "3em" }}
                          src={assets.images.logo}
                          title={match.match_hometeam_name}
                          alt="sem logo"
                        />
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_hometeam_score != ""
                        ? match.match_hometeam_score
                        : "-"}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_time != "" ? match.match_time : "-"}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_awayteam_score != ""
                        ? match.match_awayteam_score
                        : "-"}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.team_away_badge && (
                        <img
                          style={{ maxWidth: "3em" }}
                          src={match.team_away_badge}
                          title={match.match_awayteam_name}
                          alt="visitante"
                        ></img>
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_referee != "" ? match.match_referee : "-"}
                    </TableCell>
                    <TableCell component="th" scope="row" sx={bodyCellStyle}>
                      {match.match_stadium != "" ? match.match_stadium : "-"}
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

export default MatchesPage;
