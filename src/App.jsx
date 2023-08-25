import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import WorkoutHistory from "./components/WorkoutHistory";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import exampleWorkouts from "./workoutData.js";
import AddWorkoutInline from "./components/AddWorkoutInline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Paper from "@mui/material/Paper";

const App = () => {
  const [isAddWorkoutInlineOpen, setIsAddWorkoutInlineOpen] = useState(false);
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
          <Header onAddButtonClick={() => setIsAddWorkoutInlineOpen(true)} />

          <Stack>
            <Paper>
              {isAddWorkoutInlineOpen && ( // Use conditional rendering here.
                <AddWorkoutInline
                  open={isAddWorkoutInlineOpen}
                  onClose={() => setIsAddWorkoutInlineOpen(false)}
                  existingWorkouts={workouts}
                  onAdd={handleAddWorkout}
                />
              )}
            </Paper>

            <WorkoutHistory
              workouts={workouts}
              onDelete={handleDeleteWorkout}
            />
          </Stack>
        </Container>
      </LocalizationProvider>
    </>
  );
};

export default App;
