import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import PropTypes from "prop-types";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AddExercise from "./AddExercise";
import Divider from "@mui/material/Divider";
import {
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from "@mui/material";

const AddWorkoutInline = (props) => {
    const newObjectID = Math.floor(Math.random() * 10000); // Eventually replace this with auto incrementing ID from database
    const today = dayjs();
    const defaultDate = today.format("YYYY-MM-DD");
    const defaultDayOfWeek = today.format("dddd");
    const bodyParts = [
        "Chest",
        "Back",
        "Legs",
        "Arms",
        "Abs",
        "Shoulders",
        "Other",
    ];

    const [isAddExerciseOpen, setIsAddExerciseOpen] = useState(false);

    const [workout, setWorkout] = useState({
        title: "",
        date: defaultDate,
        day_of_week: defaultDayOfWeek,
        muscle_groups: [],
        exercises: [],
        objectID: newObjectID,
    });

    const [muscleGroups, setMuscleGroups] = useState([]);

    const [workoutDate, setWorkoutDate] = useState(dayjs()); // defaulting to today's date

    const [exercises, setExercises] = useState([]);

    const handleAddExercise = (newExercise) => {
        setExercises([...exercises, newExercise]); // add the new exercise to the list
        setIsAddExerciseOpen(false); // close the AddExercise form
    };

    const handleClose = () => {
        props.onClose();
    };

    const handleChange = (e) => {
        setWorkout({...workout, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalWorkout = {
            ...workout,
            muscle_groups: muscleGroups,
            exercises: exercises,
        };
        console.log(
            "finalWorkout in AddWorkoutInline.jsx before calling props.onAdd:",
            finalWorkout
        );
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

        handleClose();
    };

    if (!props.open) return null;

    return (
        <Container>
            <Box mb={4}>
                <form onSubmit={handleSubmit}>
                    <Box mb={2} mt={2}>
                        <Typography variant="h4">New Workout</Typography>
                    </Box>
                    <Divider
                        sx={{
                            mb: 2,
                        }}
                    />
                    <Box
                        mb={2}
                        sx={{
                            display: "flex",
                            flexDirection: "column", // stack them vertically
                            gap: "1rem", // space between
                            width: "100%",
                        }}
                    >
                        <TextField
                            required // if the field is required
                            id="title"
                            label="Workout Title"
                            name="title"
                            value={workout.title}
                            onChange={handleChange}
                        />

                        <DatePicker
                            label="Workout Date"
                            value={workoutDate}
                            onChange={setWorkoutDate}
                            renderInput={(params) => <TextField required {...params} />} // if the field is required
                        />

                        <Box mt={2}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="muscle-group-label">Muscle Groups</InputLabel>
                                <Select
                                    labelId="muscle-group-label"
                                    multiple
                                    value={muscleGroups}
                                    onChange={(e) => setMuscleGroups(e.target.value)}
                                    label="Muscle Groups"
                                >
                                    {bodyParts.map((group) => (
                                        <MenuItem key={group} value={group}>
                                            {group}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="h5">Exercises</Typography>
                        {exercises.length > 0 ? (
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="a dense table">
                                    <TableHead
                                        sx={{
                                            backgroundColor: "#f5f5f5",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Sets</TableCell>
                                            <TableCell>Notes</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {exercises.map((exercise, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {exercise.name}
                                                </TableCell>
                                                <TableCell>
                                                    {exercise.sets.map((set, setIndex) => (
                                                        <div key={setIndex}>
                                                            {`Set ${setIndex + 1}: ${set.weight}lbs, ${
                                                                set.reps
                                                            } reps, RPE ${set.rpe}`}
                                                        </div>
                                                    ))}
                                                </TableCell>
                                                <TableCell>{exercise.notes}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography variant="body1">
                                No exercises have been added.
                            </Typography>
                        )}

                        <Box mt={2}>
                            {/* Hide Add Exercise button while the exercise form is open */}
                            {!isAddExerciseOpen && (
                                <Button
                                    onClick={() => setIsAddExerciseOpen(true)}
                                    variant="contained"
                                >
                                    Add Exercise
                                </Button>
                            )}
                        </Box>
                        <Box mt={2}>
                            {isAddExerciseOpen && (
                                <AddExercise
                                    open={isAddExerciseOpen}
                                    onClose={() => setIsAddExerciseOpen(false)}
                                    onAdd={handleAddExercise}
                                />
                            )}
                        </Box>
                    </Box>

                    <Divider/>
                    <Box
                        mt={2}
                        mb={2}
                        sx={{
                            display: "flex",
                            flexDirection: "row", // stack them vertically
                            gap: "1rem", // space between
                            width: "100%",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button type="submit" variant="contained">
                            Save
                        </Button>
                        <Button onClick={handleClose} variant="contained">
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

AddWorkoutInline.propTypes = {
    onClose: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    existingWorkouts: PropTypes.array,
};

export default AddWorkoutInline;
