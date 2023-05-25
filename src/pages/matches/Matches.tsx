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
import SearchIcon from "@mui/icons-material/Search";

import assets from "../../assets";
import Theme from "../../styles/Theme";

import { IMatches } from "../../interface/IMatches";
import Card from "../../components/Card/Card";
import dayjs, { Dayjs } from "dayjs";

import { useMatchesRequest } from "../../services/api";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import TableStyle from "../../styles/TableStyle";
import { LoadingButton } from "@mui/lab";

const MatchesPage = () => {
  // Defining variables
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

  // Styles variables
  const LoadingBtnStyle = {
    padding: "1.5% 3%",
    margin: "2%",
    backgroundColor: Theme.background.primary,
    color: Theme.title.white,
    transition: "0.5s ease",

    "&: hover": {
      backgroundColor: Theme.background.hoverBg,
    },
  };

  function searchMatches() {
    setFormatFromDate(fromDate != null ? fromDate?.format("YYYY-MM-DD") : "");
    setFormatToDate(toDate != undefined ? toDate?.format("YYYY-MM-DD") : "");
    console.log(matches);
  }

  return (
    <Container>
      {/* TItle Box */}
      <Title color={Theme.title.primary} fontSize={"6vmin"}>
        Estatística de partidas
      </Title>

      {/* Date box */}
      <Box
        sx={{
          margin: "3vh",
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Subtitle color={Theme.title.secondary} fontSize={"3vmin"}>
          Escolha as datas das partidas
        </Subtitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DemoContainer
            sx={{
              margin: "1.5%",
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
              }}
            />
            <DatePicker
              label="Até"
              disableFuture
              value={toDate}
              onChange={(toDate) => {
                setToDate(toDate);
              }}
            />
          </DemoContainer>

          <LoadingButton
            sx={LoadingBtnStyle}
            size="large"
            onClick={searchMatches}
            endIcon={<SearchIcon />}
            loading={isLoading}
            loadingPosition="end"
            variant="contained"
            disabled={
              fromDate?.isValid() === false && toDate?.isValid() === false
                ? true
                : false
            }
          >
            <span>Buscar</span>
          </LoadingButton>
        </Box>
      </Box>

      {/* Main Content */}
      {matches != null && isLoading === false && error === null ? (
        <Card width="70vw" height="65vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.background.dark }}>
                <TableRow>
                  <TableCell sx={TableStyle.headerCell} title="Data da partida">
                    Data
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Mandante">
                    Mandante
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Gols mandante">
                    PTS
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Horário">
                    Horário
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Gols visitante">
                    PTS
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Visitante">
                    Visitante
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Juiz">
                    Juiz
                  </TableCell>
                  <TableCell sx={TableStyle.headerCell} title="Estádio">
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
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.match_date != "" ? match.match_date : "-"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
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
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.match_hometeam_score != ""
                        ? match.match_hometeam_score
                        : "-"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.match_time != "" ? match.match_time : "-"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.match_awayteam_score != ""
                        ? match.match_awayteam_score
                        : "-"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.team_away_badge && (
                        <img
                          style={{ maxWidth: "3em" }}
                          src={match.team_away_badge}
                          title={match.match_awayteam_name}
                          alt="visitante"
                        ></img>
                      )}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
                      {match.match_referee != "" ? match.match_referee : "-"}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={TableStyle.bodyCell}
                    >
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
