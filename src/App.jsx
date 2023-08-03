import { useState } from "react";
import "./App.css";
import PropTypes from 'prop-types';

const title = "Gym Data Log";
const subtitle = "Track your workouts and progress";
const getTitle = (title) => title;
const App = () => {

  // Example data
  const workouts = [
  {
    title: "Bench Day",
    muscle_groups: "Chest and Shoulders",
    day_of_week: "Monday",
    date: "2023-07-15",
    exercises: [
     {
      exercise:"Bench Press",
      sets: 3,
      reps: 10,
      weight: 135,
      notes: "This is a note",
      objectID: 0,
      },{
      exercise: "Tricep Extension",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
      objectID: 1,
      },{
      exercise: "Shoulder Press",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
      objectID: 2,
      },
    ],
    objectID: 0,
  },
  {
    title: "Leg Day",
    muscle_groups: "Legs",
    day_of_week: "Wednesday",
    date: "2023-07-19",
    exercises: [
      {
      exercise: "Squats",
      sets: 4,
      reps: 8,
      weight: 185,
      notes: "This is a note",
      objectID: 0,
      },{
      exercise: "Leg Press",
      sets: 3,
      reps: 10,
      weight: 225,
      notes: "This is a note",
      objectID: 1,
      },{
      exercise: "Leg Extension",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
      objectID: 2,
      },{
      exercise: "Leg Curl",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
      objectID: 3,
      },
    ],
    objectID: 1,
  },
  {
    title: "Back Day",
    muscle_groups: "Back, Biceps",
    day_of_week: "Friday",
    date: "2023-07-21",
    exercises:[ 
      {
      exercise:"Deadlift",
      sets: 2,
      reps: 5,
      weight: 225,
      notes: "This is a note",
      objectID: 0,
      },
      {exercise: "Lat Pulldown",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
      objectID: 1,
      },
      {exercise: "Bicep Curl",
      sets: 3,
      reps: 10,
      weight: 50,
      notes: "This is a note",
    },
    ],
   
    objectID: 2,
  },

];
const handleSearch = (event) => {
  console.log(event.target.value);
};
return (
    <div>
      <h1>Welcome to {getTitle(title)}!</h1>
      <h2>{subtitle}</h2>
      <Search onSearch={handleSearch} />
      <h2>My Workouts</h2>
      <button>Add Workout</button>
      <div id="workout-list">
        <WorkoutList workouts={workouts} />
      </div>
    </div>
  );
};

const Exercise = (props) => (
  <li className="exercise-item">
    <h4 className="exercise-title">{props.exercise.exercise}</h4>
    <div className="exercise-details">
      <span className="exercise-weight"> {props.exercise.weight} * </span>
      <span className="exercise-sets"> {props.exercise.sets} sets of </span>
      <span className="exercise-reps"> {props.exercise.reps} reps </span>
      <p className="exercise-notes">Notes: {props.exercise.notes} </p>
    </div>
  </li>
);

Exercise.propTypes = {
  exercise: PropTypes.string.isRequired,
  sets: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  notes: PropTypes.string.isRequired,
  objectID: PropTypes.number.isRequired,
};
const Workout = (props) => (
  <li className="workout-item">
    <hr />
    <h3 className="workout-title">{props.workout.title}</h3>
    <h4 className="workout-date">{props.workout.day_of_week}, {props.workout.date}</h4>
    <hr />
    <div className="workout-details">
      <p className="workout-muscle-groups">Muscle Groups: {props.workout.muscle_groups}</p>
    </div>
    <ul className="workout-exercises">
      {props.workout.exercises.map((exercise, index) => (
        <li key={index} className="workout-exercise">
          <Exercise exercise={exercise} />
        </li>
      ))}
    </ul>
  </li>
);
Workout.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    muscle_groups: PropTypes.string.isRequired,
    day_of_week: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape(Exercise.propTypes)).isRequired,
    objectID: PropTypes.number.isRequired,
  }).isRequired,
};
const WorkoutList = (props) => (
  <ul>
    {props.workouts.map((workout) => (
      <Workout key={workout.objectID} workout={workout} />
    ))}
  </ul>
);

WorkoutList.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape(Workout.Proptypes)).isRequired,
};

const Search = (props) => {
  // perform a task in response to an event
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
  setSearchTerm(event.target.value);
    // eslint-disable-next-line react/prop-types
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Find Workout: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default App;
