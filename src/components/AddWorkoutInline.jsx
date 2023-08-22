// This fullscreen form allows a user to enter a new workout which contains the following:
// H1 containing the words "New Workout"
// Input field for the title of the workout
// Date picker for the date of the workout which defaults to today's date
// Select field to allow the user to choose from a list of muscle groups ( Chest, Back, Legs, Arms, Abs, Shoulders, Other )
// H2 containing the words "Exercises"
// Button to add a new exercise to the workout
// When the add button is clicked, a new exercise form is added to the workout (above the button)
// Each exercise form contains the following:
// Input field for the name of the exercise (lookup autocomplete)
// Add Set button to add a new set to the exercise
// When the Add Set button is clicked, a new set is added to the exercise (above the button)
// Each set contains the following:
// Input field for the weight of the set
// Input field for the number of reps of the set
// Input field for the number of seconds of rest after the set
// Button to delete the set
// Button to delete the exercise
// Notes field for the exercise (full width)
// Button to submit the workout
// Button to cancel the workout
// When the submit button is clicked, the workout is added to the workout history and the form is closed

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AddExerciseForm from "./AddExerciseForm";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const AddWorkoutInline = (props) => {
  const newObjectID = Math.floor(Math.random() * 10000); // Eventually replace this with auto incrementing ID from database
  const today = dayjs();
  const defaultDate = today.format("YYYY-MM-DD");
  const defaultDayOfWeek = today.format("dddd");

  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);

  // State varible to track whether the Add Exercise form is open
  const [isAddExerciseFormOpen, setIsAddExerciseFormOpen] = useState(false);

  const muscleGroups = [
    "Chest",
    "Back",
    "Legs",
    "Arms",
    "Abs",
    "Shoulders",
    "Other",
  ];

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroups(event.target.value);
  };

  const addExercise = () => {
    setIsAddExerciseFormOpen(true);
    setWorkout((prev) => ({
      ...prev,
      exercises: [...prev.exercises, { name: "", sets: [] }],
    }));
  };
  const handleExerciseUpdate = (index, updatedExercise) => {
    const updatedExercises = [...workout.exercises];
    updatedExercises[index] = updatedExercise;
    setWorkout((prev) => ({ ...prev, exercises: updatedExercises }));
  };

  const [workout, setWorkout] = useState({
    title: "",
    date: defaultDate,
    day_of_week: defaultDayOfWeek,
    muscle_groups: [],
    exercises: [],
    objectID: newObjectID,
  });

  const [selectedDate, handleDateChange] = useState(dayjs()); // defaulting to today's date

  const handleClose = () => {
    props.onClose();
  };

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();

    // Using the selectedMuscleGroups when setting the workout
    const finalWorkout = {
      ...workout,
      muscle_groups: selectedMuscleGroups,
    };

    props.onAdd(finalWorkout);

    // clear the form and close the modal
    setWorkout({
      title: "",
      date: defaultDate,
      day_of_week: defaultDayOfWeek,
      muscle_groups: [],
      exercises: [],
      objectID: newObjectID,
    });
    setSelectedMuscleGroups([]);
    handleClose();
  };

  if (!props.open) return null;

  return (
    <Container>
      <Box mb={4}>
        <form onSubmit={handleSubmit}>
          <Box mb={2}  mt={2}>
            <Typography variant="h4">New Workout</Typography>
          </Box>
          <Divider />
          <Box
            mb={2}
        
            sx={{
              display: "flex",
              flexDirection: "column", // stack them vertically
              gap: "1rem", // space between
              width: "100%",
            }}
          >
            <TextField
              required // if the field is required
              id="title"
              label="Title"
              name="title"
              value={workout.title}
              onChange={handleChange}
            />

            <DatePicker
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField required {...params} />} // if the field is required
            />

            <Box mt={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="muscle-group-label">Muscle Groups</InputLabel>
                <Select
                  labelId="muscle-group-label"
                  multiple
                  value={selectedMuscleGroups}
                  onChange={handleMuscleGroupChange}
                  label="Muscle Groups"
                >
                  {muscleGroups.map((group) => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mb={2}>

            {workout.exercises.map((exercise, index) => (
              <AddExerciseForm
                key={index}
                exercise={exercise}
                updateExercise={(updatedExercise) =>
                  handleExerciseUpdate(index, updatedExercise)
                }
              />
            ))}

            
            { !isAddExerciseFormOpen && (<Button variant="contained" fullWidth onClick={addExercise}>
              Add Exercise
            </Button>
            )  
          }
            
          </Box>
        </form>
      </Box>
    </Container>
  );
};

AddWorkoutInline.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  existingWorkouts: PropTypes.array
};

export default AddWorkoutInline;
