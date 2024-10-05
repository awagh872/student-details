import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import StudentData from "./StudentData";

const StudentDetails = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false);

  const addOrUpdateName = () => {
    if (name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    if (editId) {
      const updatedDetails = details.map((student) =>
        student.id === editId ? { ...student, name } : student
      );
      setDetails(updatedDetails);
      setEditId(null);
    } else {
      const newStudentDetails = {
        id: new Date().getTime(),
        name,
      };
      setDetails([...details, newStudentDetails]);
    }
    setName("");
  };
  const deleteStudent = (id) => {
    const filteredDetails = details.filter((student) => student.id !== id);
    setDetails(filteredDetails);
  };
  const editStudent = (id) => {
    const studentToEdit = details.find((student) => student.id === id);
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEditId(id);
    }
  };
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
          <h2>Student Details Form</h2>
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
              value={name}
              error={error}
              helperText={error ? "Name cannot be empty" : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" onClick={addOrUpdateName}>
              {editId ? "Update" : "Submit"}
            </Button>
          </Box>
        </Paper>
      </Box>

      {details.length > 0 && (
        <Box sx={{ marginTop: "20px", width: "50%" }}>
          <StudentData
            studentDetails={details}
            deleteStudent={deleteStudent}
            editStudent={editStudent}
          />
        </Box>
      )}
    </Box>
  );
};

export default StudentDetails;
