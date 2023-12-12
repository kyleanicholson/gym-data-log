import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Set from "./Set";
import PropTypes from "prop-types";
import {Box} from "@mui/material";

const Exercise = ({exercise}) => {
    return (
        // Darken box background color
        <Box
            sx={{
                padding: "8px",
                border: "1px solid",
                borderRadius: "8px",
            }}
        >
            <ListItem>
                <ListItemText
                    primary={exercise.name}
                />
            </ListItem>
            <Divider style={{marginTop: "8px", marginBottom: "8px"}}></Divider>
            {exercise.sets.map((set, index) => (
                <Set
                    key={set.objectID}
                    set={set}
                    isLast={index === exercise.sets.length - 1}
                />
            ))}

            {/* Refactor this to use a table?  */}
        </Box>
    );
};

Exercise.propTypes = {
    exercise: PropTypes.object,
};

export default Exercise;
