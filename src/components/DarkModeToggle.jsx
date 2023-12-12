import {IconButton} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";


const DarkModeToggle = ({darkMode, handleThemeChange}) => {

    return (
        <>
            <Tooltip title="Toggle light/dark theme">
                <IconButton onClick={handleThemeChange} color="inherit">
                    {darkMode ? <Brightness7Icon/> : <Brightness4Icon/>}
                </IconButton>
            </Tooltip>
        </>
    )
}

DarkModeToggle.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    handleThemeChange: PropTypes.func.isRequired,
}

export default DarkModeToggle;
