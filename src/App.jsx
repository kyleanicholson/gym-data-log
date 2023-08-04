import { useState } from "react";
import "./App.css";
import PropTypes from 'prop-types';
import workouts from "./workoutData.js";

const title = "Gym Data Log";
const subtitle = "Track your workouts and progress";
const getTitle = (title) => title;
const App = () => {

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
      {props.exercise.sets.map((set, index) => (
        <p key={index} className="set-details">
          <span className="set-weight">{set.weight} * </span>
          <span className="set-reps">{set.reps} reps @ </span>
          <span className="set-rpe">RPE {set.rpe}</span>
        </p>
      ))}
      <p className="exercise-notes">Notes: {props.exercise.notes}</p>
    </div>
  </li>
);

Exercise.propTypes = {
  exercise: PropTypes.shape({
    exercise: PropTypes.string.isRequired,
    sets: PropTypes.arrayOf(
      PropTypes.shape({
        weight: PropTypes.number.isRequired,
        reps: PropTypes.number.isRequired,
        rpe: PropTypes.number.isRequired,
        objectID: PropTypes.number.isRequired,
      })
    ).isRequired,
    notes: PropTypes.string.isRequired,
    objectID: PropTypes.number.isRequired,
  }).isRequired,
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
