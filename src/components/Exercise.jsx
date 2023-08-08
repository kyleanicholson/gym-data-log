import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Set from './Set';
import PropTypes from 'prop-types'

const Exercise = ({ exercise }) => {
  return (
    <div key={exercise.objectID}>
      <ListItem>
        <ListItemText
          primary={exercise.name}
          primaryTypographyProps={{ variant: "h6" }}
        />
      </ListItem>

      {exercise.sets.map((set, index) => (
        <Set key={set.objectID} set={set} isLast={index === exercise.sets.length - 1} />
      ))}

      <Divider style={{ marginTop: '8px', marginBottom: '8px' }} /> {/* Space out exercises */}
    </div>
  )
}

Exercise.propTypes = {
  exercise: PropTypes.object,
}

export default Exercise