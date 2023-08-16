// import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddSetForm from "./AddSetForm";
import Button from '@mui/material/Button';
// import TextField from "@material-ui/core/TextField";
// import { useState } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
import ExerciseLookup from "./ExerciseLookup";


const AddExerciseForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
 
      <Container mb={2}>
        <h2>Exercise</h2>
        <form onSubmit={handleSubmit}>
          <Box mb={2} mt={2}>  
            <ExerciseLookup />
          </Box>
          <Box mb={2}>
            <h3>Sets</h3>
            <AddSetForm />
          </Box>
          <Box mb={2}>
          <Button variant="contained" type="submit" fullWidth>Save Exercise</Button>
          </Box>

        </form>
      </Container>
    
  );
};

export default AddExerciseForm;
