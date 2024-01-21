import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { TableFooter } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
     backgroundColor:"#daa520",
    color: theme.palette.common.white,
    padding: 10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    padding: 12,
    color: theme.palette.common.white,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
    // backgroundColor: "#182B3A",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const tableContainer = {
  border: "0.5px solid black",
  width: "55%",
  marginLeft: "22%",
  backgroundImage: "linear-gradient(to right, #20A4F3,#182B3A)",

}

const tableContainerStyle={
  border: "0.5px solid black",
  backgroundImage: "linear-gradient(to right, #20A4F3,#182B3A)",

}



function Tables(props) {

  return (
    <TableContainer component={Paper} style={tableContainer} >
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Types</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell >{props.g1Name}</StyledTableCell>
            <StyledTableCell align="start">{props.g1Type}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell > {props.g2Name}</StyledTableCell>
            <StyledTableCell align="start" > {props.g2Type} </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function WhiteWholes(props) {
  return (
    <TableContainer component={Paper}  style={tableContainerStyle}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Grade</StyledTableCell>
            <StyledTableCell align="center">Color/ Characteristics</StyledTableCell>
            <StyledTableCell align="center">Count/454gms Size Description</StyledTableCell>
            <StyledTableCell align="center">Max Moisture%</StyledTableCell>
            <StyledTableCell align="center">Max Broken%</StyledTableCell>
            <StyledTableCell align="center">NLSG NLG Max%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName1}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount1}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">5(NLSG & SW Together)</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName2}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount2}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName3}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount3}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName4}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount4}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName5}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount5}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName6}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount6}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">5(SW)</StyledTableCell>        </StyledTableRow>
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow>
            {props.ftext}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}


function ScorchedWholes(props) {
  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Color/ Characteristics</StyledTableCell>
            <StyledTableCell align="center">Count/454gms</StyledTableCell>
            <StyledTableCell align="center">Max Moisture%</StyledTableCell>
            <StyledTableCell align="center">Max Broken%</StyledTableCell>
            <StyledTableCell align="center">NLSG NLG Max%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center" width="8%">{props.wwgName}</StyledTableCell>
            <StyledTableCell align="center" width="32%">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">7.5(SSW)</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName1}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount1}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">7.5(NLSG & SSW Together)</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName2}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount2}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName3}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount3}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName4}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount4}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName5}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount5}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell align="center">{props.wwgName6}</StyledTableCell>
            <StyledTableCell align="center">{props.color}</StyledTableCell>
            <StyledTableCell align="center">{props.wwgCount6}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">7.5(SSW)</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow>
            {props.ftext}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}

function DesertWholes(props) {

  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Trade Name</StyledTableCell>
            <StyledTableCell align="center">Count/454gms Size Description</StyledTableCell>
            <StyledTableCell align="center">Max Moisture%</StyledTableCell>
            <StyledTableCell align="center">Max Broken%</StyledTableCell>
            <StyledTableCell align="center">NLSG NLG Max%</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell >{props.dwgName1}</StyledTableCell>
            <StyledTableCell align="center">{props.tName1}</StyledTableCell>
            <StyledTableCell align="center">{props.count}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
            <StyledTableCell align="center">7.5(DW)</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow component="th" scope="row">
            <StyledTableCell >{props.dwgName2}</StyledTableCell>
            <StyledTableCell align="center">{props.tName2}</StyledTableCell>
            <StyledTableCell align="center">{props.count}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMoisture}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBroken}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function WhitePieces(props) {
  return (
    
      <TableContainer component={Paper} style={tableContainerStyle}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Grade</StyledTableCell>
              <StyledTableCell align="center">Trade Name</StyledTableCell>
              <StyledTableCell align="center">Color</StyledTableCell>
              <StyledTableCell align="center">Count/454gms Size</StyledTableCell>
              <StyledTableCell align="center">Max Moisture</StyledTableCell>
              <StyledTableCell align="center">Max Broken</StyledTableCell>
              <StyledTableCell align="center">NLSG NLG Max</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="center">{props.g1}</StyledTableCell>
              <StyledTableCell align="center">{props.tName1}</StyledTableCell>
              <StyledTableCell align="start">{props.bColo}</StyledTableCell>
              <StyledTableCell align="center">{props.count}</StyledTableCell>
              <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
              <StyledTableCell align="center">{props.maxBrok1}</StyledTableCell>
              <StyledTableCell align="center">{props.nlg1}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="center">{props.g2}</StyledTableCell>
              <StyledTableCell align="center">{props.tName2}</StyledTableCell>
              <StyledTableCell align="start">{props.sColo}</StyledTableCell>
              <StyledTableCell align="center">{props.count}</StyledTableCell>
              <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
              <StyledTableCell align="center">{props.maxBrok1}</StyledTableCell>
              <StyledTableCell align="center">{props.nlg2}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell align="center">{props.g3}</StyledTableCell>
              <StyledTableCell align="center">{props.tName3}</StyledTableCell>
              <StyledTableCell align="start">{props.lwpColo}</StyledTableCell>
              <StyledTableCell align="start">{props.lwpDescr}</StyledTableCell>
              <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
              <StyledTableCell align="center">{props.maxBrok2}</StyledTableCell>
              <StyledTableCell align="center">{props.nlg3}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell align="center">{props.g4}</StyledTableCell>
            <StyledTableCell align="center">{props.tName4}</StyledTableCell>
              <StyledTableCell align="start">{props.swpColo}</StyledTableCell>
              <StyledTableCell align="start">{props.swpDescr}</StyledTableCell>
              <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
              <StyledTableCell align="center">{props.maxBrok2}</StyledTableCell>
              <StyledTableCell align="center">{props.nlg4}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
            <StyledTableCell align="center">{props.g5}</StyledTableCell>
            <StyledTableCell align="center">{props.tName5}</StyledTableCell>
              <StyledTableCell align="start">{props.bbColo}</StyledTableCell>
              <StyledTableCell align="start">{props.bbDescr}</StyledTableCell>
              <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
              <StyledTableCell align="center">{props.maxBrok2}</StyledTableCell>
              <StyledTableCell align="center">{props.nlg5}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
   
  )
};

function ScorchedPieces(props) {
  return (
    <TableContainer component={Paper} style={tableContainerStyle}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Trade Name</StyledTableCell>
            <StyledTableCell align="center">Color</StyledTableCell>
            <StyledTableCell align="center">Count/454gms Size</StyledTableCell>
            <StyledTableCell align="center">Max Moisture%</StyledTableCell>
            <StyledTableCell align="center">Max Broken</StyledTableCell>
            <StyledTableCell align="center">NLSG NLG Max%</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">{props.g1}</StyledTableCell>
            <StyledTableCell align="center">{props.tName1}</StyledTableCell>
            <StyledTableCell align="start">{props.sbColo}</StyledTableCell>
            <StyledTableCell align="center">{props.sbcount}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok1}</StyledTableCell>
            <StyledTableCell align="center">{props.nlg1}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
          <StyledTableCell align="center">{props.g2}</StyledTableCell>
            <StyledTableCell align="center">{props.tName2}</StyledTableCell>
            <StyledTableCell align="start">{props.ssColo}</StyledTableCell>
            <StyledTableCell align="center">{props.ssCount}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok1}</StyledTableCell>
            <StyledTableCell align="center">{props.nlg2}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
          <StyledTableCell align="center">{props.g3}</StyledTableCell>
            <StyledTableCell align="center">{props.tName3}</StyledTableCell>
            <StyledTableCell align="start">{props.spColo}</StyledTableCell>
            <StyledTableCell align="start">{props.spDescr}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok2}</StyledTableCell>
            <StyledTableCell align="center">{props.nlg3}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
          <StyledTableCell align="center">{props.g4}</StyledTableCell>
            <StyledTableCell align="center">{props.tName4}</StyledTableCell>
            <StyledTableCell align="start">{props.sspColo}</StyledTableCell>
            <StyledTableCell align="start">{props.sspDescr}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok2}</StyledTableCell>
            <StyledTableCell align="center">{props.nlg4}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
};

function DessertPieces(props) {
  return (
    <TableContainer component={Paper} style={tableContainerStyle} >
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="center">Grade</StyledTableCell>
            <StyledTableCell align="center">Trade Name</StyledTableCell>
            <StyledTableCell align="center">Color</StyledTableCell>
            <StyledTableCell align="center">Count/454gms Size</StyledTableCell>
            <StyledTableCell align="center"> MaxMoisture</StyledTableCell>
            <StyledTableCell align="center">MaxBroken</StyledTableCell>
            <StyledTableCell align="center">NLSG NLG Max</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">{props.g1}</StyledTableCell>
            <StyledTableCell align="start">{props.tName1}</StyledTableCell>
            <StyledTableCell align="start">{props.spsColor}</StyledTableCell>
            <StyledTableCell align="start">{props.spsDescr}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok}</StyledTableCell>
            <StyledTableCell align="center">{props.spsNLG}</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
          <StyledTableCell align="center">{props.g2}</StyledTableCell>
            <StyledTableCell align="start">{props.tName2}</StyledTableCell>
            <StyledTableCell align="start">{props.dpColor}</StyledTableCell>
            <StyledTableCell align="start">{props.dpDescr}</StyledTableCell>
            <StyledTableCell align="center">{props.maxMois}</StyledTableCell>
            <StyledTableCell align="center">{props.maxBrok}</StyledTableCell>
            <StyledTableCell align="center">{props.dpNLG}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export {
  Tables,
  WhiteWholes,
  ScorchedWholes,
  DesertWholes,
  WhitePieces,
  ScorchedPieces,
  DessertPieces,
}
