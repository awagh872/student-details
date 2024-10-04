import './App.css'
import StudentDetails from './components/StudentDetails'

function App() {

  return (
    <>
      <StudentDetails />
    </>
  )
}

export default App


// import React from "react";
// import {
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
//   Checkbox,
//   Button,
//   Autocomplete,
// } from "@mui/material";
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

// const StudentDetails = () => {
//   const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     gender: Yup.string().required("Gender is required"),
//     subjects: Yup.array().min(1, "At least one subject must be selected"),
//     city: Yup.string().required("City is required"),
//   });
//   const subjectOptions = ["Math", "Science", "History", "Geography", "Art"];
//   return (
//     <>
//       return (
//       <Formik
//         initialValues={{
//           firstName: "",
//           lastName: "",
//           gender: "",
//           subjects: [],
//           city: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log("Form Submitted: ", values);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           setFieldValue,
//         }) => (
//           <Form>
//             {/* First Name */}
//             <TextField
//               fullWidth
//               label="First Name"
//               name="firstName"
//               value={values.firstName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.firstName && !!errors.firstName}
//               helperText={touched.firstName && errors.firstName}
//               margin="normal"
//             />

//             {/* Last Name */}
//             <TextField
//               fullWidth
//               label="Last Name"
//               name="lastName"
//               value={values.lastName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               error={touched.lastName && !!errors.lastName}
//               helperText={touched.lastName && errors.lastName}
//               margin="normal"
//             />

//             {/* Gender */}
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend">Gender</FormLabel>
//               <RadioGroup
//                 row
//                 name="gender"
//                 value={values.gender}
//                 onChange={handleChange}
//               >
//                 <FormControlLabel
//                   value="male"
//                   control={<Radio />}
//                   label="Male"
//                 />
//                 <FormControlLabel
//                   value="female"
//                   control={<Radio />}
//                   label="Female"
//                 />
//                 <FormControlLabel
//                   value="other"
//                   control={<Radio />}
//                   label="Other"
//                 />
//               </RadioGroup>
//               {touched.gender && errors.gender && (
//                 <div style={{ color: "red" }}>{errors.gender}</div>
//               )}
//             </FormControl>

//             {/* Subjects */}
//             <FormControl component="fieldset" margin="normal">
//               <FormLabel component="legend">Subjects</FormLabel>
//               {subjectOptions.map((subject) => (
//                 <FormControlLabel
//                   key={subject}
//                   control={
//                     <Checkbox
//                       checked={values.subjects.includes(subject)}
//                       onChange={(e) => {
//                         if (e.target.checked) {
//                           setFieldValue("subjects", [
//                             ...values.subjects,
//                             subject,
//                           ]);
//                         } else {
//                           setFieldValue(
//                             "subjects",
//                             values.subjects.filter((s) => s !== subject)
//                           );
//                         }
//                       }}
//                     />
//                   }
//                   label={subject}
//                 />
//               ))}
//               {touched.subjects && errors.subjects && (
//                 <div style={{ color: "red" }}>{errors.subjects}</div>
//               )}
//             </FormControl>

//             {/* City (AutoComplete) */}
//             <Autocomplete
//               options={[
//                 "New York",
//                 "Los Angeles",
//                 "Chicago",
//                 "Houston",
//                 "Phoenix",
//               ]}
//               getOptionLabel={(option) => option}
//               fullWidth
//               onChange={(event, value) => setFieldValue("city", value)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="City"
//                   margin="normal"
//                   error={touched.city && !!errors.city}
//                   helperText={touched.city && errors.city}
//                 />
//               )}
//             />

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               style={{ marginTop: "16px" }}
//             >
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default StudentDetails;
