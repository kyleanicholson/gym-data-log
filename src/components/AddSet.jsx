import {TextField} from "@mui/material";

import FormControl from "@mui/material/FormControl";
import {useState} from "react";
import PropTypes from "prop-types";

const AddSet = ({index, onUpdate}) => {
    const [set, setSet] = useState({
        weight: "",
        reps: "",
        rpe: "",
    });

    const handleChange = (field) => (event) => {
        const newSet = {...set, [field]: event.target.value};
        setSet(newSet);
        onUpdate(index, newSet);
    };

    return (

        <FormControl
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                gap: "1rem",
                padding: ".5rem 0px "
            }}
        >
            <TextField
                label="Weight"
                type="number"
                value={set.weight}
                onChange={handleChange("weight")}
            />
            <TextField
                label="Reps"
                type="number"
                value={set.reps}
                onChange={handleChange("reps")}
            />
            <TextField
                label="RPE"
                type="number"
                value={set.rpe}
                onChange={handleChange("rpe")}
            />
        </FormControl>

    );
};

AddSet.propTypes = {
    onUpdate: PropTypes.func,
    index: PropTypes.number,
};

export default AddSet;
