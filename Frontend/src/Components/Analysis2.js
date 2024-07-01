import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function Analysis2() {
  return (
    <Container>
      <Table sx={{ border: 1, ml:-3 }}>
        <TableHead>
          <TableRow>
            <TableCell>S. No.</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Faculty</TableCell>
            <TableCell>Number of Backs</TableCell>
            <TableCell>Maximum Marks</TableCell>
            <TableCell>Pass Percentage</TableCell>
          </TableRow>
        </TableHead>

        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Software Engineering</TableCell>
          <TableCell>Ms. Nidhi Sharma</TableCell>
          <TableCell>0</TableCell>
          <TableCell>95</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Algorithm Design And Analysis</TableCell>
          <TableCell>Ms. Umnah</TableCell>
          <TableCell>2</TableCell>
          <TableCell>80</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Java programming</TableCell>
          <TableCell>Mr. Vivek Mishra</TableCell>
          <TableCell>1</TableCell>
          <TableCell>90</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Complier Design</TableCell>
          <TableCell>Ms. Chaitali Bhowmik </TableCell>
          <TableCell>1</TableCell>
          <TableCell>80</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Operating System</TableCell>
          <TableCell>Ms. Karshima Arora</TableCell>
          <TableCell>2</TableCell>
          <TableCell>70</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>6</TableCell>
          <TableCell>Database Management System</TableCell>
          <TableCell>Ms. Upasna</TableCell>
          <TableCell>1</TableCell>
          <TableCell>75</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
      </Table>

      <Table sx={{ border: 1, mt: 5,ml:-3 }}>
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
          <TableCell>02718002720</TableCell>
          <TableCell>Ashish Bhandari</TableCell>
          <TableCell>95.6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Dhruv Agarwal</TableCell>
          <TableCell>90.2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Abhishek Panda</TableCell>
          <TableCell>85.5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Ashish James</TableCell>
          <TableCell>95.6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Harsh Rajput</TableCell>
          <TableCell>80.6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>6</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Harsh Mishra</TableCell>
          <TableCell>90.6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>7</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Aman Dhiman</TableCell>
          <TableCell>88.7</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>8</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Aman Sahu</TableCell>
          <TableCell>78.2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>9</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Aryan Kaushik</TableCell>
          <TableCell>86.8</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>10</TableCell>
          <TableCell>02718002720</TableCell>
          <TableCell>Aman Kumar Singh</TableCell>
          <TableCell>90</TableCell>
        </TableRow>
      </Table>
    </Container>
  );
}

export default Analysis2;
