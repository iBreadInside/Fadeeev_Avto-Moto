import PropTypes from 'prop-types';

export default PropTypes.shape({
  transmission: PropTypes.string.isRequired,
  power: PropTypes.number.isRequired,
  fuel: PropTypes.string.isRequired,
  drive: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  torque: PropTypes.string.isRequired,
  cyl: PropTypes.number.isRequired,
})
