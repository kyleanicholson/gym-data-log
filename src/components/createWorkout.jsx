// Generate a form to allow the user to record a new workout 
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';

const CreateWorkout = () => {
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [muscleGroups, setMuscleGroups] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [date, setDate] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState([]);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rpe, setRpe] = useState('');
  const [notes, setNotes] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const onWorkoutTitleChange = (event) => {
    setWorkoutTitle(event.target.value);
  };
  const onMuscleGroupsChange = (event) => {
    setMuscleGroups(event.target.value);
  };
  const onDayOfWeekChange = (event) => {
    setDayOfWeek(event.target.value);
  };
  const onDateChange = (event) => {
    setDate(event.target.value);
  };
  const onExerciseChange = (event) => {
    setExercise(event.target.value);
  };
  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const onRepsChange = (event) => {
    setReps(event.target.value);
  };
  const onRpeChange = (event) => {
    setRpe(event.target.value);
  };
  const onNotesChange = (event) => {
    setNotes(event.target.value);
  };
  const onAddExercise = (event) => {
    event.preventDefault();
    const newExercise = {
      exercise: exercise,
      sets: sets,
      notes: notes,
    };
    setExercises(exercises.concat(newExercise));
    setExercise('');
    setSets([]);
    setNotes('');
  };
  const onAddSet = (event) => {
    event.preventDefault();
    const newSet = {
      weight: weight,
      reps: reps,
      rpe: rpe,
    };
    setSets(sets.concat(newSet));
    setWeight('');
    setReps('');
    setRpe('');
  };
  const onAddWorkout = (event) => {
    event.preventDefault();
    const newWorkout = {
      title: workoutTitle,
      muscle_groups: muscleGroups,
      day_of_week: dayOfWeek,
      date: date,
      exercises: exercises,
    };
    setWorkouts(workouts.concat(newWorkout));
    setWorkoutTitle('');
    setMuscleGroups('');
    setDayOfWeek('');
    setDate('');
    setExercises([]);
  };
  return (
    <div className="create-workout">
      <h1>Create Workout</h1>
      <form onSubmit={onAddWorkout}>
        <Stack spacing={2}>
          <TextField
            label="Workout Title"
            variant="outlined"
            value={workoutTitle}
            onChange={onWorkoutTitleChange}
          />
          <TextField
            label="Muscle Groups"
            variant="outlined"
            value={muscleGroups}
            onChange={onMuscleGroupsChange}
          />
          <TextField
            label="Day of Week"
            variant="outlined"
            value={dayOfWeek}
            onChange={onDayOfWeekChange}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            value={date}
            onChange={onDateChange}
          />
          <h2>Exercises</h2>
          <TextField
            label="Exercise"
            variant="outlined"
            value={exercise}
            onChange={onExerciseChange}
          />
          <TextField
            label="Weight"
            variant="outlined"
            value={weight}
            onChange={onWeightChange}
          />
          <TextField
            label="Reps"
            variant="outlined"
            value={reps}
            onChange={onRepsChange}
          />
          <TextField
            label="RPE"
            variant="outlined"
            value={rpe}
            onChange={onRpeChange}
          />
          <TextField
            label="Notes"
            variant="outlined"
            value={notes}
            onChange={onNotesChange}
          />
          <Button variant="contained" onClick={onAddSet}>Add Set</Button>
          <Button variant="contained" onClick={onAddExercise}>Add Exercise</Button>
          <Button variant="contained" type="submit">Add Workout</Button>
        </Stack>
      </form>
    </div>
  );
};

export default CreateWorkout;