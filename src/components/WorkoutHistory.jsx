import Workout from "./Workout";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
const WorkoutHistory = ({ workouts, onDelete }) => {
  return (
    <>
      <Paper>
        <Container>
        <h2>Workout History</h2>
        {workouts.map((workout) => (
          <Workout
            key={workout.objectID}
            workout={workout}
            onDelete={onDelete}
          />
        ))}
        </Container>
      </Paper>

    </>
  );
};

WorkoutHistory.propTypes = {
  workouts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default WorkoutHistory;
