import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Exercise from './Exercise';
import PropTypes from 'prop-types'
import dayjs from 'dayjs';

const Workout = ({ workout, onDelete }) => {

  const handleDelete = () => {
    onDelete(workout.objectID)
  }

  return (
    <Accordion key={workout.objectID} >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ width: '75%', flexShrink: 0 }}>
          {workout.title}
        </Typography>


        <Typography sx={{ width: '25%', flexShrink: 0 }}>
          {workout.day_of_week}, {dayjs(workout.date).format("MM/DD/YYYY")}

        </Typography>

      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={3}>
          {workout.exercises.map((exercise) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={exercise.objectID}>
              <Exercise key={exercise.objectID} exercise={exercise} />
            </Grid>
          ))}
        </Grid>



        <Divider sx={{ my: 3 }} />
        <Box sx={{ flexGrow: 1, }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <ButtonGroup variant="text" aria-label="outlined primary button group">
              <Grid item  >
                <Button>
                  <EditIcon sx={{ borderRadius: '4px' }} />
                </Button>
              </Grid>
              <Grid item >
                <Button onClick={handleDelete}>
                  <DeleteIcon sx={{ borderRadius: '4px' }} />
                </Button>
              </Grid>
            </ButtonGroup>
          </Grid>
        </Box>



      </AccordionDetails>
    </Accordion>
  )
}

Workout.propTypes = {
  workout: PropTypes.object,
  onDelete: PropTypes.func,
}

export default Workout