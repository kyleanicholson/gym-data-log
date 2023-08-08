import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import PropTypes from 'prop-types';


const AddWorkoutModal = (props) => {

  const [workout, setWorkout] = useState({
    title: "",
    date: "",
    day_of_week: "",
    exercises: [],
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
    // clear the form and close the modal
    setWorkout({ title: "", date: "", day_of_week: "", exercises: [] });
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
          <TextField
            fullWidth
            type="date"
            variant="outlined"
            name="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Day of Week"
            variant="outlined"
            name="day_of_week"
            onChange={handleChange}
          />
        </Box>
        {/* For the sake of brevity, I'm not adding the dynamic exercises and sets here. You can add another button that opens a new modal to capture exercise details and sets. */}
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

};



export default AddWorkoutModal;