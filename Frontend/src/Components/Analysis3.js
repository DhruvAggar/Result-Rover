import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ButtonAppBar from "./ButtonAppBar";

function Analysis3() {
  return (
    <Container>
      <ButtonAppBar />
      <Table sx={{ border: 1, mt: 5, mb: 5 }}>
        <TableRow>
          <TableCell>Total no. of students</TableCell>
          <TableCell>84</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of pass students</TableCell>
          <TableCell>84</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of fail students</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "1" back</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "2" back</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "3" back</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "4" back</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "5" back</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total no. of students with "6" back</TableCell>
          <TableCell>0</TableCell>
        </TableRow>
      </Table>

      <Table sx={{ border: 1}}>
        <TableHead>
          <TableRow>
            <TableCell>S. No.</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Subject Code</TableCell>
            <TableCell>Number of Backs</TableCell>
            <TableCell>Maximum Marks</TableCell>
            <TableCell>Pass Percentage</TableCell>
          </TableRow>
        </TableHead>

        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Information Securtity</TableCell>
          <TableCell>ETCS-401</TableCell>
          <TableCell>0</TableCell>
          <TableCell>88</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Software Testing and Quality Assurance</TableCell>
          <TableCell>ETCS-403</TableCell>
          <TableCell>0</TableCell>
          <TableCell>86</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Wireless Communication</TableCell>
          <TableCell>ETCS-405</TableCell>
          <TableCell>0</TableCell>
          <TableCell>84</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Data Mining and Business Intelligence</TableCell>
          <TableCell>ETCS-413</TableCell>
          <TableCell>0</TableCell>
          <TableCell>84</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Advanced DBMS</TableCell>
          <TableCell>ETCS-423</TableCell>
          <TableCell>1</TableCell>
          <TableCell>85</TableCell>
          <TableCell>98.8</TableCell>
        </TableRow>
      </Table>

      <Table sx={{ border: 1, mt: 5 }}>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Enrollment No. </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>2118002719</TableCell>
          <TableCell>Gursha Gosal</TableCell>
          <TableCell>88</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>1318002719</TableCell>
          <TableCell>Gaurav Chadha</TableCell>
          <TableCell>87</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>35618002719</TableCell>
          <TableCell>Ananya Singh</TableCell>
          <TableCell>86</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
}

export default Analysis3;
