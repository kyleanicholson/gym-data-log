import Container from '@mui/material/Container'


const UnitSwitcher = (props) => {
  const handleChange = (event) => {
    // eslint-disable-next-line react/prop-types
    props.onUnitsChange(event);
  };
  return (
    <Container maxWidth="md" sx={{ p: 2 }} >
      <div>
        <label htmlFor="units">Units: </label>
        <select id="units" onChange={handleChange}>
          <option value="metric">Metric (KG) </option>
          <option value="imperial">Imperial (LB) </option>
        </select>
      </div>
    </Container>
  );
};

export default UnitSwitcher;