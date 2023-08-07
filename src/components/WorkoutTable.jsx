import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(title, date, day_of_week, muscle_groups) {
  return {
    title,
    date,
    day_of_week,
    muscle_groups,
    exercises: [
      { exercise: 'Bench Press', sets: [{ weight: 135, reps: 5, rpe: 8 }, { weight: 135, reps: 5, rpe: 8 }, { weight: 135, reps: 5, rpe: 8 }], notes: 'Correct weights' },
      { exercise: 'Squat', sets: [{ weight: 135, reps: 5, rpe: 5 }, { weight: 135, reps: 5, rpe: 6 }, { weight: 135, reps: 5, rpe: 6 }], notes: 'Too easy' },
      { exercise: 'Deadlift', sets: [{ weight: 135, reps: 5, rpe: 8 }, { weight: 135, reps: 5, rpe: 8 }, { weight: 135, reps: 5, rpe: 8 }], notes: 'Missed the last rep on set 3' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (

    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right"> {row.day_of_week}</TableCell>
        <TableCell align="right">{row.muscle_groups.join(', ')}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Exercises
              </Typography>
              <Table size="small" aria-label="exercises">
                <TableHead>
                  <TableRow>
                    <TableCell>Exercise</TableCell>
                    <TableCell align="right">Weight</TableCell>
                    <TableCell align="right">Repetitions</TableCell>
                    <TableCell align="right">RPE </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.exercises.map((exerciseRow) => (
                    <>
                      {exerciseRow.sets.map((set, index) => (
                        <TableRow key={`${exerciseRow.exercise}-${index}`}>
                          <TableCell component="th" scope="row">
                            {index === 0 ? exerciseRow.exercise : ''}
                          </TableCell>
                          <TableCell align="right">{set.weight}</TableCell>
                          <TableCell align="right">{set.reps}</TableCell>
                          <TableCell align="right">{set.rpe}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow key={`${exerciseRow.exercise}-notes`}>
                        <TableCell style={{ fontWeight: 'bold' }} component="th" scope="row" >
                          Notes:
                        </TableCell>
                        <TableCell colSpan={3}>{exerciseRow.notes}</TableCell>

                      </TableRow>

                    </>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment >
  );
}


Row.propTypes = {
  row: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day_of_week: PropTypes.string.isRequired,
    muscle_groups: PropTypes.arrayOf(PropTypes.string), // or another appropriate type
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        exercise: PropTypes.string.isRequired,
        sets: PropTypes.arrayOf(
          PropTypes.shape({
            weight: PropTypes.number.isRequired,
            reps: PropTypes.number.isRequired,
            rpe: PropTypes.number.isRequired,
          })
        ).isRequired,
        notes: PropTypes.string,

      })
    ).isRequired,
  }).isRequired,
};


const rows = [
  createData('Workout 1', '2021-10-01', 'Friday', ['Chest', 'Triceps', 'Shoulders']),
  createData('Workout 2', '2021-10-02', 'Saturday', ['Back', 'Biceps', 'Forearms']),
  createData('Workout 3', '2021-10-03', 'Sunday', ['Legs', 'Calves', 'Abs']),
];

export default function WorkoutTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Workout Title</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Day of Week</StyledTableCell>
            <StyledTableCell align="right">Muscle Groups</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
