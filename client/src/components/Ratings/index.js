import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Ratings() {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Custom icon and color</Typography> */}
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Burger${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}
