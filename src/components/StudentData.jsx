import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const StudentData = ({ studentDetails, deleteStudent, editStudent }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "20px",
        width: "100%",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography variant="h6" align="center">
                Student Data
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentDetails.length > 0 ? (
            studentDetails.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => editStudent(student.id)}
                    sx={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No student data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentData;
