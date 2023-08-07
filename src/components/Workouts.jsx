import workouts from '../workoutData.js';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';


const Workouts = () => {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>

      {workouts.map((workout) => (

        <Accordion key={workout.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            color='darkblue'
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {workout.title}
            </Typography>

            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {workout.day_of_week}
            </Typography>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {workout.date}

            </Typography>

          </AccordionSummary>
          <AccordionDetails>


            {workout.exercises.map((exercise) => (
              <div key={exercise.objectID}>
                <Typography>
                  {exercise.name}
                </Typography>
                <Typography>
                  {exercise.sets.map((set) => (
                    <div key={set.objectID}>
                      {set.weight} &times; {set.reps} @ {set.rpe}

                    </div>
                  ))}
                </Typography>
              </div>
            ))}
            <Divider sx={{ my: 3 }} />

            <Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <EditIcon />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DeleteIcon />
                </Grid>
              </Grid>
            </Typography>


          </AccordionDetails>
        </Accordion>
      ))
      }
    </Paper >
  )

}

export default Workouts;
