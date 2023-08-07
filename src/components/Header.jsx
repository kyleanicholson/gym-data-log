import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <FitnessCenterIcon sx={{ mr: 2 }} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Gym Data Log
        </Typography>
        <Button onClick={onClick} color="inherit">Add Workout</Button>
        <Button color="inherit">Log Out</Button>
      </Toolbar>
    </AppBar>

  )
}

export default Header