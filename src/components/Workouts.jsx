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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// import Box from '@mui/material/Box';


const Workouts = () => {
  return (
    <div>

      {workouts.map((workout) => (

        <Accordion key={workout.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '75%', flexShrink: 0 }}>
              {workout.title}
            </Typography>


            <Typography sx={{ width: '25%', flexShrink: 0 }}>
              {workout.day_of_week} {workout.date}

            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            {workout.exercises.map((exercise) => (
              <List key={exercise.objectID}>
                <Typography sx={{ width: '100%', flexShrink: 0 }}>
                  {exercise.name}
                </Typography>
                <ListItem >
                  {exercise.sets.map((set) => (
                    <List key={set.objectID}>
                      <Divider />
                      <ListItem>
                        {set.weight} &times; {set.reps} @ {set.rpe}
                      </ListItem>

                    </List>
                  ))}

                </ListItem>
              </List>
            ))}


            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <EditIcon />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DeleteIcon />
              </Grid>
            </Grid>



          </AccordionDetails>
        </Accordion>
      ))
      }

    </div>
  )

}

export default Workouts;
