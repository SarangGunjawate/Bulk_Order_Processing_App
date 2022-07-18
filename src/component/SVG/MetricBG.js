import * as React from 'react';

const MetricBG = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='60'
    height='60'
    fill='none'
    viewBox='0 0 60 60'
  >
    <path
      fill={props.color}
      d='M0 30C0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30z'
      opacity='0.1'
    ></path>
  </svg>
);

export default MetricBG;
