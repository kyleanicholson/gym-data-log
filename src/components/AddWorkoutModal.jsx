import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const AddWorkoutModal = (props) => {
  const newObjectID = Math.floor(Math.random() * 10000); // Eventually replace this with auto incrmenting ID from database
  const today = dayjs();
  const defaultDate = today.format('YYYY-MM-DD');
  const defaultDayOfWeek = today.format('dddd');


  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);
  const muscleGroups = ['Chest', 'Back', 'Legs', 'Arms', 'Abs', 'Shoulders', 'Other'];

  const handleMuscleGroupChange = (event) => {
    setSelectedMuscleGroups(event.target.value);
  };
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

    // Using the selectedMuscleGroups when setting the workout
    const finalWorkout = {
      ...workout,
      muscle_groups: selectedMuscleGroups
    };

    props.onAdd(finalWorkout);

    // clear the form and close the modal
    setWorkout({
      title: "",
      date: defaultDate,
      day_of_week: defaultDayOfWeek,
      muscle_groups: [],
      exercises: [],
      objectID: newObjectID,
    });
    setSelectedMuscleGroups([]);  // Reset the selected muscle groups too
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
            required
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            onChange={handleChange}

            autoFocus
          />
        </Box>
        <Box mb={2}>
          <DatePicker
            required
            label="Date"
            value={selectedDate}
            onChange={(date) => {
              const convertedDate = dayjs(date);
              handleDateChange(convertedDate);
              const day = convertedDate.format('dddd');
              setWorkout(prev => ({ ...prev, date: convertedDate.format('YYYY-MM-DD'), day_of_week: day }));
            }}
          />
        </Box>
        <Box mb={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="muscle-group-label">Muscle Groups</InputLabel>
            <Select
              labelId="muscle-group-label"
              multiple
              value={selectedMuscleGroups}
              onChange={handleMuscleGroupChange}
              label="Muscle Groups"
            >
              {muscleGroups.map((group) => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
        disableRestoreFocus
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