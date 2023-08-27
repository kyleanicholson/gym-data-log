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
import AddExercise from "./AddExercise";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

const AddWorkoutInline = (props) => {
  const newObjectID = Math.floor(Math.random() * 10000); // Eventually replace this with auto incrementing ID from database
  const today = dayjs();
  const defaultDate = today.format("YYYY-MM-DD");
  const defaultDayOfWeek = today.format("dddd");
  const [workout, setWorkout] = useState({
    title: "",
    date: defaultDate,
    day_of_week: defaultDayOfWeek,
    muscle_groups: [],
    exercises: [],
    objectID: newObjectID,
  });

  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);

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

  const handleAddExercise = () => {
    setWorkout((prev) => ({
      ...prev,
      exercises: [
        ...prev.exercises,
        {
          objectID: Math.floor(Math.random() * 10000),
          name: "",
          sets: [],
          notes: "",
        },
      ],
    }));
  };

  const handleUpdateExercise = (index, updatedExercise) => {
    const updatedExercises = [...workout.exercises];
    updatedExercises[index] = updatedExercise;
    setWorkout((prev) => ({ ...prev, exercises: updatedExercises }));
  };

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
    console.log(
      "finalWorkout in AddWorkoutInline.jsx before calling props.onAdd:",
      finalWorkout
    );
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
    // setSelectedMuscleGroups([]);
    handleClose();
  };

  if (!props.open) return null;

  return (
    <Container>
      <Box mb={4}>
        <form onSubmit={handleSubmit}>
          <Box mb={2} mt={2}>
            <Typography variant="h4">New Workout</Typography>
          </Box>
          <Divider
            sx={{
              mb: 2,
            }}
          />
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
              label="Workout Title"
              name="title"
              value={workout.title}
              onChange={handleChange}
            />

            <DatePicker
              label="Workout Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField required {...params} />} // if the field is required
            />

            <Box mt={2}>
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
            <Typography variant="h5">Exercises</Typography>

            {workout.exercises.map((exercise) => (
              <AddExercise
                key={exercise.id}
                exercise={exercise}
                onUpdate={handleUpdateExercise}
              />
            ))}

            <Box mt={2}>
              <Button
                onClick={handleAddExercise}
                variant="contained"
                color="primary"
              >
                Add Exercise
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box
            mt={2}
            mb={2}
            sx={{
              display: "flex",
              flexDirection: "row", // stack them vertically
              gap: "1rem", // space between
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
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
  existingWorkouts: PropTypes.array,
};

export default AddWorkoutInline;
