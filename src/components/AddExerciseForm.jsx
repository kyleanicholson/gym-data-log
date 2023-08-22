import Box from "@mui/material/Box";
import AddSetForm from "./AddSetForm";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import ExerciseLookup from "./ExerciseLookup";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

const AddExerciseForm = ({ exercise, updateExercise }) => {
  const [currentExercise, setCurrentExercise] = useState(exercise);
  const [sets, setSets] = useState([{ weight: "", reps: "", rpe: "" }]);
  const handleAddSet = () => {
    setSets((prevSets) => [...prevSets, {}]);
  };

  useEffect(() => {
    updateExercise(currentExercise);
  }, [currentExercise, updateExercise]);

  const handleSetUpdate = (index, updatedSet) => {
    const updatedSets = [...sets];
    updatedSets[index] = updatedSet;
    setSets(updatedSets);
  };
  const handleRemoveSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index, 1);
    setSets(newSets);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <Typography variant="h5">Add Exercise</Typography>
      </Box>
      
      <Box mb={2} mt={2}>
        <ExerciseLookup
          onExerciseSelect={(name) =>
            setCurrentExercise({ ...currentExercise, name: name })
          }
        />
      </Box>

      <Box mb={2}>
        <Typography variant="h6">Sets</Typography>
        {sets.map((set, index) => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            key={index}
          >
            <AddSetForm index={index} onUpdate={handleSetUpdate} />
            
            <Button onClick={() => handleRemoveSet(index)} color="secondary">
              <DeleteIcon />
            </Button>
         
            {index === sets.length - 1 && (
              <Button onClick={handleAddSet} variant="contained">
                <AddIcon />
              </Button>
            )}
          </Box>
        ))}
      </Box>

      <Box mb={2}>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          defaultValue="Exercise Notes"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Divider />

      <Box mb={2}>
        <Button variant="contained" type="submit" fullWidth>
          Save Exercise
        </Button>
      </Box>
    </form>
  );
};

AddExerciseForm.propTypes = {
  exercise: PropTypes.object,
  updateExercise: PropTypes.func,
};

export default AddExerciseForm;
