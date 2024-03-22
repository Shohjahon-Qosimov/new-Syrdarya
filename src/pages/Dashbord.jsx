import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(tartib_raqami, name, calories, fat, carbs, protein) {
//   return { tartib_raqami, name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData(ism)
//   createData(
//     1,
//     "Miraziz",
//     "sud masalalari",
//     "Boyovut tumani",
//     8925429 - 47,
//     "ko'rib chiqilmoqda"
//   ),
//   createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData(3, "Eclair", 262, 16.0, 24, 6.0),
//   createData(4, "Cupcake", 305, 3.7, 67, 4.3),
//   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
// ];

const Dashbord = () => {
  //   fetch("https://sirdarya777.pythonanywhere.com/api/")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((object) => {
  //       console.log(object);
  //       //   let ism = "";
  //       //   object.map((values) => {
  //       //     ism = `${values.fish}`;
  //       //     console.log(ism);
  //       //   });
  //     });

  const [murojat, setMurojat] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const emailData = localStorage.getItem("emailData");
  //   console.log(emailData);

  //   const user = murojat.filter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://sirdarya777.pythonanywhere.com/api/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        const array = [];

        const emailArray = Object.keys(result);
        emailArray.forEach(function (key) {
          array.push(result[key]);
        });
        // console.log(array);

        const filtered = array.filter((item) => item.user == emailData);
        // console.log(filtered);

        setMurojat(filtered);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="container">
      <TableContainer className="mt-[80px] " component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            {/* <TableRow>
              <TableCell align="center">Sizning Murojaatlaringiz</TableCell>
            </TableRow> */}
            <StyledTableRow style={{ fontStyle: "bold" }}>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="left">F.I.SH</StyledTableCell>
              <StyledTableCell align="right">Ariza turi</StyledTableCell>
              <StyledTableCell align="right">Telefon_raqam</StyledTableCell>
              <StyledTableCell align="right">Manzil</StyledTableCell>
              <StyledTableCell align="right">STATUS</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          {murojat.length === 0 ? (
            <StyledTableCell>Siz hali murojaat yubormagansiz!</StyledTableCell>
          ) : (
            <TableBody>
              {murojat.map((row) => (
                <StyledTableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.fish}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.ariza_mazmuni}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.telefonraqami}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Yashashmanzili}
                  </StyledTableCell>
                  <StyledTableCell align="right">{`${
                    row.korish === false
                      ? "Ko'rib chiqilmoqda"
                      : "Ko'rib chiqildi"
                  }`}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashbord;
