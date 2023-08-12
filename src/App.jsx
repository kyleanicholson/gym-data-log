import "./App.css";
import Header from "./components/Header";
import Container from '@mui/material/Container';
import Workouts from "./components/Workouts";
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import exampleWorkouts from './workoutData.js';
import AddWorkoutModal from "./components/AddWorkoutModal";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [workouts, setWorkouts] = useState(exampleWorkouts);
  const handleAddWorkout = (newWorkout) => {
    setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
  };

  const handleDeleteWorkout = (workoutId) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout.objectID !== workoutId));
  };

  console.log(workouts)

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Container >
          <Header onAddButtonClick={() => setIsModalOpen(true)} />
          <AddWorkoutModal open={isModalOpen} onClose={() => setIsModalOpen(false)} existingWorkouts={workouts} onAdd={handleAddWorkout} />
          <Stack>

            <Workouts workouts={workouts} onDelete={handleDeleteWorkout} />

          </Stack>
        </Container >
      </LocalizationProvider>
    </>

  );
};


export default App;
