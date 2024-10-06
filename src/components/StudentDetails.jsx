import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StudentData from "./StudentData";

const StudentDetails = () => {
  const [studentName, setStudentName] = useState("");
  const [studentDetails, setStudentDetails] = useState([]);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNameChange = (e) => {
    setStudentName(e.target.value);
    if (errorMsg) setErrorMsg("");
  };

  const handleFormSubmit = () => {
    if (!studentName.trim()) {
      setErrorMsg("Name cannot be empty");
      return;
    }

    if (editingStudentId) {
      const updatedDetails = studentDetails.map((student) =>
        student.id === editingStudentId ? { ...student, name: studentName } : student
      );
      setStudentDetails(updatedDetails);
      setEditingStudentId(null);
    } else {
      const newStudent = {
        id: new Date().getTime(),
        name: studentName,
      };
      setStudentDetails((prevDetails) => [...prevDetails, newStudent]);
    }
    setStudentName("");
  };

  const deleteStudent = useCallback((id) => {
    setStudentDetails((prevDetails) =>
      prevDetails.filter((student) => student.id !== id)
    );
  }, []);

  const editStudent = useCallback(
    (id) => {
      const studentToEdit = studentDetails.find((student) => student.id === id);
      if (studentToEdit) {
        setStudentName(studentToEdit.name);
        setEditingStudentId(id);
      }
    },
    [studentDetails]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "20px", width: "100%" }}
    >
      <Box sx={{ width: "50%" }}>
        <Paper sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 1 }}>
          <Typography variant="h5" align="center" gutterBottom>
            {editingStudentId ? "Edit Student Details" : "Student Details Form"}
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              value={studentName}
              error={!!errorMsg}
              helperText={errorMsg}
              onChange={handleNameChange}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Button variant="contained" onClick={handleFormSubmit}>
              {editingStudentId ? "Update" : "Submit"}
            </Button>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ marginTop: "20px", width: "50%" }}>
        <StudentData
          studentDetails={studentDetails}
          deleteStudent={deleteStudent}
          editStudent={editStudent}
        />
      </Box>
    </Box>
  );
};

export default StudentDetails;
