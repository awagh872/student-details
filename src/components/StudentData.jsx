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
  const ActionButton = ({ onClick, label, color }) => (
    <Button variant="contained" color={color} onClick={onClick} sx={{ marginRight: "10px" }}>
      {label}
    </Button>
  );

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
      {studentDetails.length === 0 ? (
        <Typography variant="h6" align="center">
          No student data available. To add data, please enter a text and click on the submit button.
        </Typography>
      ) : (
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
            {studentDetails.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell align="right">
                  <ActionButton
                    onClick={() => editStudent(student.id)}
                    label="Edit"
                    color="primary"
                  />
                  <ActionButton
                    onClick={() => deleteStudent(student.id)}
                    label="Delete"
                    color="secondary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default StudentData;
