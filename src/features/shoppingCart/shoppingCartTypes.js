import PropTypes from 'prop-types'

export default {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  units: PropTypes.number.isRequired,
};


