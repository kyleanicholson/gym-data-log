import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ onAddButtonClick }) => {

  return (
    <AppBar position="static">
      <Toolbar>
        <FitnessCenterIcon sx={{ mr: 2 }} />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Gym Data Log
        </Typography>
        <Button onClick={onAddButtonClick} color="inherit">Add Workout</Button>
        <Button color="inherit">Log Out</Button>
      </Toolbar>
    </AppBar>

  )
}

Header.propTypes = {
  onAddButtonClick: PropTypes.func,
}



export default Header