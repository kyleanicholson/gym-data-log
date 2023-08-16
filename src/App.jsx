import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Workouts from "./components/Workouts";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import exampleWorkouts from "./workoutData.js";
import AddWorkoutModal from "./components/AddWorkoutModal";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddExerciseForm from "./components/AddExerciseForm";
import Paper from "@mui/material/Paper";


const App = () => {
  const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

  const [workouts, setWorkouts] = useState(exampleWorkouts);
  const handleAddWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  const handleDeleteWorkout = (workoutId) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((workout) => workout.objectID !== workoutId)
    );
  };

  console.log(workouts);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Header onAddButtonClick={() => setIsWorkoutModalOpen(true)} />
          <AddWorkoutModal
            open={isWorkoutModalOpen}
            onClose={() => setIsWorkoutModalOpen(false)}
            existingWorkouts={workouts}
            onAdd={handleAddWorkout}
          />
          <Stack>
            <Paper>
              <AddExerciseForm></AddExerciseForm>
            </Paper>

            <Workouts workouts={workouts} onDelete={handleDeleteWorkout} />
          </Stack>
        </Container>
      </LocalizationProvider>
    </>
  );
};

export default App;
