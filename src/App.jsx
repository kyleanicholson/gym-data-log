import "./App.css";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import WorkoutHistory from "./components/WorkoutHistory";
import Stack from "@mui/material/Stack";
import {useMemo, useState} from "react";
import exampleWorkouts from "./workoutData.js";
import AddWorkoutInline from "./components/AddWorkoutInline";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const App = () => {
    // App Theme (light/dark)
    const [darkMode, setDarkMode] = useState(false);

    const theme = useMemo(() => createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    }), [darkMode]);
    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const [isAddWorkoutInlineOpen, setIsAddWorkoutInlineOpen] = useState(false);
    const [workouts, setWorkouts] = useState(exampleWorkouts);

    const handleAddWorkout = (newWorkout) => {
        setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
    };

    const handleDeleteWorkout = (workoutId) => {
        setWorkouts((prevWorkouts) => prevWorkouts.filter((workout) => workout.objectID !== workoutId));
    };

    console.log(workouts);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Container maxWidth="md">
                        <Box
                            sx={{
                                marginTop: "2rem", marginBottom: "2rem"
                            }}
                        >
                            <Paper elevation={3}

                            >
                                <Stack>
                                    <Header onAddButtonClick={() => setIsAddWorkoutInlineOpen(true)}
                                            handleThemeChange={handleThemeChange} darkMode={darkMode}
                                    />

                                    {isAddWorkoutInlineOpen && ( // Use conditional rendering here.
                                        <AddWorkoutInline
                                            open={isAddWorkoutInlineOpen}
                                            onClose={() => setIsAddWorkoutInlineOpen(false)}
                                            existingWorkouts={workouts}
                                            onAdd={handleAddWorkout}
                                        />)}


                                    <WorkoutHistory
                                        workouts={workouts}
                                        onDelete={handleDeleteWorkout}
                                    />
                                </Stack>
                            </Paper>
                        </Box>
                    </Container>

                </LocalizationProvider>
            </ThemeProvider>
        </>);
};

export default App;
