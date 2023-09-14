import Box from "@mui/material/Box";
import AddSet from "./AddSet";
import Button from "@mui/material/Button";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const AddExercise = (props) => {
  const [sets, setSets] = useState([{ weight: "", reps: "", rpe: "" }]);
  const [exercise, setExercise] = useState({
    name: "",
    notes: "",
    sets: [],
  });

  const handleChange = (field) => (event) => {
    setExercise({ ...exercise, [field]: event.target.value });
  };

  const handleAddSet = () => {
    setSets((prevSets) => [...prevSets, {}]);
  };

  const handleSetUpdate = (index, updatedSet) => {
    const updatedSets = [...sets];
    updatedSets[index] = updatedSet;
    setSets(updatedSets);
    setExercise({ ...exercise, sets: updatedSets });
  };

  const handleSaveExercise = () => {
    props.onAdd(exercise);
  };

  const handleRemoveSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index, 1);
    setSets(newSets);
  };

  return (
    <FormControl fullWidth>
      <Box mb={2} mt={2}>
        <TextField
          required
          value={exercise.name}
          placeholder="Exercise Name"
          type="text"
          onChange={handleChange("name")}
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
            <AddSet index={index} onUpdate={handleSetUpdate} />

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
          placeholder="Notes"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={exercise.notes}
          onChange={handleChange("notes")}
        />
      </Box>
      <Divider />

      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveExercise}
        >
          Save Exercise
        </Button>
      </Box>
    </FormControl>
  );
};

AddExercise.propTypes = {
  exercise: PropTypes.object,
  updateExercise: PropTypes.func,
  onUpdate: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddExercise;
