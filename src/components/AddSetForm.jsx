import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const AddSetForm = () => {
  return (
    <form onSubmit={console.log("Set Submitted")}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "1rem",
        }}
      >
        <TextField label="Weight" type="number"></TextField>
        <TextField label="Repetitions" type="number"></TextField>
        <TextField label="RPE" type="number"></TextField>
      <Button 
      type="submit"
      variant="contained"
      color="primary"

      >Add Set</Button>
      </FormControl>
    </form>
  );
};

export default AddSetForm;
