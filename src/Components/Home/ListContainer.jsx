import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const rowData = [
  {
    ProjectName: "hello",
    CollegeName: "helloooooooo",
    ProjectHead: "helloo heelooo",
  },
  {
    ProjectName: "hello",
    CollegeName: "helloooooooo",
    ProjectHead: "helloo heelooo",
  },
  {
    ProjectName: "hello",
    CollegeName: "helloooooooo",
    ProjectHead: "helloo heelooo",
  },
  {
    ProjectName: "hello",
    CollegeName: "helloooooooo",
    ProjectHead: "helloo heelooo",
  },
  {
    ProjectName: "hello",
    CollegeName: "helloooooooo",
    ProjectHead: "helloo heelooo",
  },
];

const ListContainer = () => {
  return (
    <div className="border-2 border-green-500 h-full ">
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ProjectName</TableCell>
              <TableCell align="right" className="">
                CollegeName
              </TableCell>
              <TableCell align="right">ProjectHead</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <StyledTableRow key={row.ProjectName}>
                <StyledTableCell component="th" scope="row">
                  {row.ProjectName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.CollegeName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.ProjectHead}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListContainer;
