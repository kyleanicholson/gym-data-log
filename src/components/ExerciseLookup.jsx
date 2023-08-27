import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const ExerciseLookup = (exercise) => {
  return (
    <FormControl
      fullWidth
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <TextField
        required
        value={exercise.name}
        placeholder="Exercise Name"
        type="text"
      ></TextField>

      {/* https://youtu.be/KBpoBc98BwM?t=2830
      Refer to this search tutorial
. */}
    </FormControl>
  );
};

export default ExerciseLookup;
