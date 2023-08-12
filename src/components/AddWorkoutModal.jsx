import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const AddWorkoutModal = (props) => {

  const newObjectID = Math.max(...props.existingWorkouts.map((workout) => workout.objectID)) + 1;



  const [workout, setWorkout] = useState({
    title: "",
    date: "",
    day_of_week: "",
    muscle_groups: [],
    exercises: [],
    objectID: newObjectID,
  });

  const handleClose = () => {
    props.onClose();
  };

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(workout);
    // calculate the day of the week and convert to a string for display

    setWorkout({ title: "", date: "", day_of_week: "", exercises: [] });
    // clear the form and close the modal
    handleClose();
  };


  const body = (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <DatePicker />
        </Box>

        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </Box>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

AddWorkoutModal.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  existingWorkouts: PropTypes.array.isRequired,

};



export default AddWorkoutModal;