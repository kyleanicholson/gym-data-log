import { useState } from "react";
import "./App.css";
import PropTypes from 'prop-types';

const title = "The Workout Tracker";
const getTitle = (title) => title;
// const exercise_list = [
//   {
//     exercise: "Bench Press",
//     sets: 3,
//     reps: 10,
//     weight: 135,
//     objectID: 0,
//   },
//   {
//     exercise: "Squats",
//     sets: 4,
//     reps: 8,
//     weight: 185,
//     objectID: 1,
//   },
//   {
//     exercise: "Deadlift",
//     sets: 2,
//     reps: 5,
//     weight: 225,
//     objectID: 2,
//   },
// ];



const App = () => {
  const workouts = [
  {
    title: "Bench Day",
    muscle_groups: "Chest and Shoulders",
    day_of_week: "Monday",
    date: "2023-07-15",
    exercises: [
      "Bench Press",
      "Tricep Extension",
      "Chin Ups",
      "Side Lateral Raise",
    ],
    objectID: 0,
  },
  {
    title: "Leg Day",
    muscle_groups: "Legs",
    day_of_week: "Wednesday",
    date: "2023-07-19",
    exercises: ["Squats", "Leg Press", "Lunges", "Calf Raises"],
    objectID: 1,
  },
  {
    title: "Back Day",
    muscle_groups: "Back, Biceps",
    day_of_week: "Friday",
    date: "2023-07-21",
    exercises: ["Deadlift", "Pull Ups", "Bent Over Row", "Bicep Curls"],
    objectID: 2,
  },

];
const handleSearch = (event) => {
  console.log(event.target.value);
};
return (
    <div>
      <h1>Welcome to {getTitle(title)}!</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <div id="workout-list">
        <WorkoutList workouts={workouts} />
      </div>
    </div>
  );
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
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      muscle_groups: PropTypes.string.isRequired,
      day_of_week: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      exercises: PropTypes.arrayOf(PropTypes.string).isRequired,
      objectID: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Workout = (props) => (
  <li className="workout-item">
    <h4 className="workout-title">{props.workout.title}</h4>
    <div className="workout-details">
      <p className="workout-muscle-groups">Muscle Groups: {props.workout.muscle_groups}</p>
      <p className="workout-date">Date: {props.workout.day_of_week}, {props.workout.date}</p>
    </div>
    <ul className="workout-exercises">
      {props.workout.exercises.map((exercise, index) => (
        <li key={index} className="workout-exercise">
          {exercise}
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
    exercises: PropTypes.arrayOf(PropTypes.string).isRequired,
    objectID: PropTypes.number.isRequired,
  }).isRequired,
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
