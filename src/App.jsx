import './App.css'

const title = 'The Workout Tracker';
const getTitle = (title) => title;
const exercise_list = [
  {
    exercise: 'Bench Press',
    sets: 3,
    reps: 10,
    weight: 135,
    objectID: 0,
  },
  {
    exercise: 'Squats',
    sets: 4,
    reps: 8,
    weight: 185,
    objectID: 1,
  },
  {
    exercise: 'Deadlift',
    sets: 2,
    reps: 5,
    weight: 225,
    objectID: 2,
  },
];


const App = () => (
  <div>
    <h1>
      Welcome to {getTitle(title)}!
    </h1>
    <Search />
    <hr />
    <List />
  </div>
);

const List = () => (
  <ul>
    {exercise_list.map((exercise) => (
      <li key={exercise.objectID}>
        {exercise.exercise}: {exercise.sets} sets of {exercise.reps} reps at {exercise.weight} lbs
      </li>
    ))}
  </ul>
);

const Search = () => {
  // perform a task in response to an event
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return(
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />
  </div>
  );
};

export default App;