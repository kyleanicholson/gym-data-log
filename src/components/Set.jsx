import { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";

const Set = ({ set, isLast }) => {
  return (
    <Fragment key={set.objectID}>
      <ListItem>
        <ListItemText secondary={`${set.weight} × ${set.reps} @ ${set.rpe}`} />
      </ListItem>
      {!isLast && <Divider />}
    </Fragment>
  );
};

Set.propTypes = {
  set: PropTypes.object,
  isLast: PropTypes.bool,
};

export default Set;
