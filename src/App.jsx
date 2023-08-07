import "./App.css";
import Header from "./components/Header";
import Container from '@mui/material/Container';
// import CreateWorkout from "./components/CreateWorkout";
import Workouts from "./components/Workouts";
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const App = () => {


  return (
    <Container >
      <Header />

      <Stack spacing={3}>

        <Workouts />

      </Stack>
    </Container >


  );
};


export default App;
