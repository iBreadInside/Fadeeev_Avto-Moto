import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  positive: PropTypes.string,
  negative: PropTypes.string,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number,
})
