import { useState } from "react";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const ExerciseLookup = () => {
  const [search, setsearch] = useState("");
  return (
    <FormControl fullwidth sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "2rem",
      

    }} >
  
        <TextField
          required
          value={search}
          onChange={(e) => {
            setsearch(e.target.value).toLowerCase();
          }}
          placeholder="Enter Exercise Name"
          type="text"
        ></TextField>
  

    {/* https://youtu.be/KBpoBc98BwM?t=2830
      Refer to this search tutorial
. */}
    
    </FormControl>

  );
};

export default ExerciseLookup;
