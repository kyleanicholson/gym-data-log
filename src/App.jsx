import "./App.css";
import Header from "./components/Header";
import Container from '@mui/material/Container';
import Workouts from "./components/Workouts";
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import initialWorkouts from './workoutData.js';
import AddWorkoutModal from "./components/AddWorkoutModal";



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const handleAddWorkout = (newWorkout) => {
    setWorkouts(prevWorkouts => [...prevWorkouts, newWorkout]);
  };


  return (
    <Container >
      <Header onAddButtonClick={() => setIsModalOpen(true)} />
      <AddWorkoutModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddWorkout} />
      <Stack>

        <Workouts workouts={workouts} />

      </Stack>
    </Container >


  );
};


export default App;
