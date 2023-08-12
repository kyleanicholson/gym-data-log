import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';



const AddWorkoutModal = (props) => {

  const newObjectID = Math.max(...props.existingWorkouts.map((workout) => workout.objectID)) + 1;
  const today = dayjs();
  const defaultDate = today.format('YYYY-MM-DD');
  const defaultDayOfWeek = today.format('dddd');

  const [workout, setWorkout] = useState({
    title: "",
    date: defaultDate,
    day_of_week: defaultDayOfWeek,
    muscle_groups: [],
    exercises: [],
    objectID: newObjectID,
  });

  const [selectedDate, handleDateChange] = useState(dayjs()); // defaulting to today's date

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
    setWorkout({ title: "", date: "", day_of_week: "", muscle_groups: [], exercises: [] });
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
          <DatePicker
            label="Date"
            value={selectedDate}
            onChange={(date) => {
              console.log(date);
              const convertedDate = dayjs(date);
              console.log("Converted date: ", convertedDate);
              handleDateChange(convertedDate);
              const day = convertedDate.format('dddd');
              setWorkout(prev => ({ ...prev, date: convertedDate.format('YYYY-MM-DD'), day_of_week: day }));
            }}
          />
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