// import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Button from '@mui/material/Button';
// import TextField from "@material-ui/core/TextField";
// import { useState } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import Paper from "@mui/material/Paper";
import ExerciseLookup from "./ExerciseLookup";
// import Exercise from "./Exercise";

const AddExerciseForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
 
      <Container mb={2}>
        <h2>Add Exercise</h2>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <FormControl fullWidth>
              <ExerciseLookup />
            </FormControl>

          </Box>
          
        </form>
      </Container>
    
  );
};

export default AddExerciseForm;
