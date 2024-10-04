import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import StudentData from "./StudentData";

const StudentDetails = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState([]);
  const [editId, setEditId] = useState(null); // Track ID for editing

  // Add or update student details
  const addOrUpdateName = () => {
    if (editId) {
      const updatedDetails = details.map((student) =>
        student.id === editId ? { ...student, name } : student
      );
      setDetails(updatedDetails);
      setEditId(null); // Reset edit mode
    } else {
      const newStudentDetails = {
        id: new Date().getTime(),
        name,
      };
      setDetails([...details, newStudentDetails]);
    }
    setName(""); // Reset the input field
  };

  // Delete a student
  const deleteStudent = (id) => {
    const filteredDetails = details.filter((student) => student.id !== id);
    setDetails(filteredDetails);
  };

  // Edit a student
  const editStudent = (id) => {
    const studentToEdit = details.find((student) => student.id === id);
    if (studentToEdit) {
      setName(studentToEdit.name);
      setEditId(id);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={addOrUpdateName}>
          {editId ? "Update" : "Submit"}
        </Button>
      </Stack>

      {/* Pass CRUD operations to the child component */}
      <StudentData
        studentDetails={details}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </>
  );
};

export default StudentDetails;
