import './App.css'


function getTitle(title) {
  return title
}
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


function App() {
  return (
    <div>
      <h1>
        Welcome to {getTitle('The Workout Tracker')}!
      </h1>
      <hr />
      <ul>
        {exercise_list.map(function(exercise) {
          return (
            <li key={exercise.objectID}>
              {exercise.exercise}: {exercise.sets} sets of {exercise.reps} reps, {exercise.weight} lbs
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default App;