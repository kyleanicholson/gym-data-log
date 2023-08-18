import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";

const AddSetForm = () => {
  return (
    <Stack sx = {{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      width: "100%",
    }}>
    <FormControl sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: "1rem",
      }}
    >
      <TextField label="Weight" type="number"></TextField>
      <TextField label="Reps" type="number"></TextField>
      <TextField label="RPE" type="number"></TextField>
      <Button type="submit" variant="contained" color="primary">
      
        <AddIcon></AddIcon>
      </Button>
       </FormControl>
       
      

   
    </Stack>
  );
};

export default AddSetForm;
