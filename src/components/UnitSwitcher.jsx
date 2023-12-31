

const UnitSwitcher = (props) => {
  const handleChange = (event) => {
    // eslint-disable-next-line react/prop-types
    props.onUnitsChange(event);
  };
  return (
    <div>
      <label htmlFor="units">Units: </label>
      <select id="units" onChange={handleChange}>
        <option value="metric">Metric (KG) </option>
        <option value="imperial">Imperial (LB) </option>
      </select>
    </div>
  );
};

export default UnitSwitcher;