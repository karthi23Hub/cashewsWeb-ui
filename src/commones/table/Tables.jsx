import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


 const tableContainer = {
     border:"1px solid red",
     width:"55%",
     marginLeft:"22%",
 }

export default function Tables(props) {

  return (
    <TableContainer component={Paper} style={tableContainer} >
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Grade</StyledTableCell>
            <StyledTableCell align="center">Types</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell >{props.g1Name}</StyledTableCell>
            <StyledTableCell  align="center">{props.g1Type}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell > {props.g2Name}</StyledTableCell> 
            <StyledTableCell align="center" > {props.g2Type} </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
