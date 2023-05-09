import { useState } from "react";
import { Container } from "./Matches.styles";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  Paper,
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

import { getMatches } from "../../services/api";

const MatchesPage = () => {
  const { data: matches } = getMatches<IMatches[]>(
    302,
    formatFromDate,
    formatToDate
  );
  const [fromDate, setFromDate] = useState<Dayjs | null>(dayjs(""));
  const [toDate, setToDate] = useState<Dayjs | null>(dayjs(""));

  const [formatFromDate, setFormatFromDate] = useState<string | null>("");
  const [formatToDate, setFormatToDate] = useState<string | null>("");

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
      <h1>MatchesPage works!!</h1>

      {/* Date box */}
      <DemoContainer
        sx={{
          margin: "3vh",
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
        components={["DatePicker", "DatePicker"]}
      >
        <DatePicker
          label="Data inicial"
          disableFuture
          value={fromDate}
          onChange={(fromDate) => {
            setFromDate(fromDate);
            setFormatFromDate(
              fromDate != undefined ? fromDate?.format("YYYY-MM-DD") : ""
            );
          }}
          slotProps={{
            textField: {
              helperText: "YYYY/MM/DD",
            },
          }}
        />
        <DatePicker
          label="Data final"
          disableFuture
          value={toDate}
          onChange={(toDate) => {
            setToDate(toDate);
            setFormatToDate(
              toDate != undefined ? toDate?.format("YYYY-MM-DD") : ""
            );
          }}
          slotProps={{
            textField: {
              helperText: "YYYY/MM/DD",
            },
          }}
        />
      </DemoContainer>

      {formatFromDate?.length > 0 && formatToDate?.length > 0 ? (
        <Card width="70vw" height="60vh">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "80%" }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: Theme.secondaryBg }}>
                <TableRow>
                  <TableCell sx={headerCellStyle} title="Data da partida">
                    Data
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Vistante">
                    Visitante
                  </TableCell>
                  <TableCell sx={headerCellStyle} title="Horário">
                    Horário
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matches != null || matches != ""
                  ? matches?.map((match: IMatches) => (
                      <TableRow
                        key={match.match_id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {match.match_date != "" ? match.match_date : "-"}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {match.team_home_badge != "" || null ? (
                            <img
                              style={{ maxWidth: "3em" }}
                              src={match.team_home_badge}
                              alt="visitante"
                            />
                          ) : (
                            <img
                              style={{ maxWidth: "3em" }}
                              src={assets.images.logo}
                              alt="sem logo"
                            />
                          )}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {match.match_time != "" ? match.match_time : "-"}
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

export default MatchesPage;
