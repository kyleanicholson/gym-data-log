import { useState } from "react";
import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const ExerciseLookup = () => {
  const [search, setsearch] = useState("");
  return (
    <FormControl fullwidth sx={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",

    }} >
  
        <TextField
          required
          fullwidth
          value={search}
          onChange={(e) => {
            setsearch(e.target.value).toLowerCase();
          }}
          placeholder="Choose an Exercise"
          type="text"
        ></TextField>
   
      <Button variant="contained" color="primary" type="submit">
            Add Exercise
          </Button>

    {/* https://youtu.be/KBpoBc98BwM?t=2830
      Refer to this search tutorial
. */}
    
    </FormControl>

  );
};

export default ExerciseLookup;
