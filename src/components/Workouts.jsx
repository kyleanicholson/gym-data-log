
import Workout from './Workout';
import PropTypes from 'prop-types';

const Workouts = ({ workouts, onDelete }) => {


  return (

    <>
      {workouts.map((workout) => (

        <Workout key={workout.objectID} workout={workout} onDelete={onDelete} />
      ))
      }

    </>
  )

}

Workouts.propTypes = {
  workouts: PropTypes.array,
  onDelete: PropTypes.func,
}

export default Workouts