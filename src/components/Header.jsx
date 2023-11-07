import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import {
    AppBar, Button, Toolbar, Typography, IconButton, Drawer, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import DarkModeToggle from './DarkModeToggle';

const Header = ({onAddButtonClick, handleThemeChange, darkMode}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // State for opening and closing the Drawer
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <FitnessCenterIcon sx={{mr: 2}}/>
                <Typography variant="h5" component="div" sx={{flexGrow: 1, whiteSpace: 'nowrap'}}>
                    Gym Data Log
                </Typography>
                {isMobile ? (<>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        variant="temporary"
                        open={drawerOpen}
                        onClose={handleDrawerToggle}
                        sx={{
                            width: 'auto', // This sets the Drawer width to be automatic based on content
                            '& .MuiDrawer-paper': {width: '80%', maxWidth: 300}, // Adjust as needed for your content
                        }}
                    >
                        {/* Place your menu items here */}
                        <Button onClick={onAddButtonClick} color="inherit">Add Workout</Button>
                        <Button color="inherit">Log Out</Button>
                    </Drawer>
                </>) : (<>
                    <Button onClick={onAddButtonClick} color="inherit">Add Workout</Button>
                    <Button color="inherit">Log Out</Button>
                </>)}
                <DarkModeToggle handleThemeChange={handleThemeChange} darkMode={darkMode}/>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    onAddButtonClick: PropTypes.func,
    darkMode: PropTypes.bool.isRequired,
    handleThemeChange: PropTypes.func.isRequired,
};

export default Header;
