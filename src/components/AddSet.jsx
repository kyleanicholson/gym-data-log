import { TextField } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import PropTypes from "prop-types";

const AddSet = ({ index, onUpdate }) => {
  const [set, setSet] = useState({
    weight: "",
    reps: "",
    rpe: "",
  });

  const handleChange = (field) => (event) => {
    const newSet = { ...set, [field]: event.target.value };
    setSet(newSet);
    onUpdate(index, newSet);
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        width: "100%",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
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
    </Stack>
  );
};

AddSet.propTypes = {
  onUpdate: PropTypes.func,
  index: PropTypes.number,
};

export default AddSet;
