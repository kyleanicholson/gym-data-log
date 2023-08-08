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
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Fragment } from 'react';
import PropTypes from 'prop-types';


const Workouts = ({ workouts }) => {


  return (

    <>
      {workouts.map((workout) => (

        <Accordion key={workout.objectID}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '75%', flexShrink: 0 }}>
              {workout.title}
            </Typography>


            <Typography sx={{ width: '25%', flexShrink: 0 }}>
              {workout.day_of_week}, {workout.date}

            </Typography>

          </AccordionSummary>
          <AccordionDetails>
            <List>
              {workout.exercises.map((exercise) => (
                <div key={exercise.objectID}>
                  <ListItem>
                    <ListItemText
                      primary={exercise.name}
                      primaryTypographyProps={{ variant: "h6" }}
                    />
                  </ListItem>

                  {exercise.sets.map((set, index) => (
                    <Fragment key={set.objectID}>
                      <ListItem>
                        <ListItemText
                          secondary={`${set.weight} × ${set.reps} @ ${set.rpe}`}
                        />
                      </ListItem>
                      {index !== exercise.sets.length - 1 && <Divider />} {/* Add a divider after every set except the last */}
                    </Fragment>
                  ))}

                  <Divider style={{ marginTop: '8px', marginBottom: '8px' }} /> {/* Space out exercises */}
                </div>
              ))}
            </List>



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
                    <Button>
                      <DeleteIcon sx={{ borderRadius: '4px' }} />
                    </Button>
                  </Grid>
                </ButtonGroup>
              </Grid>
            </Box>



          </AccordionDetails>
        </Accordion>
      ))
      }

    </>
  )

}

Workouts.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      day_of_week: PropTypes.string.isRequired,
      exercises: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          objectID: PropTypes.number.isRequired,
          notes: PropTypes.string,
          sets: PropTypes.arrayOf(
            PropTypes.shape({
              weight: PropTypes.number.isRequired,
              reps: PropTypes.number.isRequired,
              rpe: PropTypes.number.isRequired,
              objectID: PropTypes.number.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};


export default Workouts;
