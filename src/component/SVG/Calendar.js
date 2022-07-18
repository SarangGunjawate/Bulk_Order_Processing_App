import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Calendar = (props) => (
  <SvgIcon
    width={27}
    height={31}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)' opacity={0.4}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.64 3.255v.739c2.708.212 4.496 2.06 4.499 4.895l.01 8.297c.004 3.09-1.933 4.992-5.039 4.997l-7.586.01c-3.086.004-5.048-1.943-5.051-5.042l-.011-8.2C4.458 6.098 6.183 4.254 8.89 4.005l-.001-.738a.734.734 0 0 1 .746-.759.735.735 0 0 1 .748.757v.69l5.764-.009-.001-.689a.735.735 0 0 1 .746-.758.74.74 0 0 1 .748.756Zm-11.683 6 14.689-.02v-.344c-.042-2.116-1.102-3.226-3.003-3.392v.758a.747.747 0 0 1-.745.76.74.74 0 0 1-.748-.758l-.001-.797-5.763.008v.796a.74.74 0 0 1-.745.759.74.74 0 0 1-.748-.757l-.001-.758C7 5.7 5.953 6.814 5.956 8.95l.001.305Zm10.532 4.474v.01a.8.8 0 0 0 .826.787.81.81 0 0 0 .775-.839.816.816 0 0 0-.806-.785.814.814 0 0 0-.795.827Zm.802 4.419a.834.834 0 0 1-.808-.836.82.82 0 0 1 .795-.838h.01a.83.83 0 0 1 .825.835.83.83 0 0 1-.822.839Zm-4.799-4.404c.02.453.39.806.835.787a.81.81 0 0 0 .766-.848.803.803 0 0 0-.806-.786.84.84 0 0 0-.795.847Zm.84 4.36a.81.81 0 0 1-.836-.787.84.84 0 0 1 .795-.847.802.802 0 0 1 .806.785.81.81 0 0 1-.766.848Zm-4.837-4.325c.02.453.389.807.835.786a.808.808 0 0 0 .765-.847.801.801 0 0 0-.806-.787.839.839 0 0 0-.794.848Zm.84 4.33a.809.809 0 0 1-.836-.787.84.84 0 0 1 .794-.847.802.802 0 0 1 .807.786.808.808 0 0 1-.766.847Z'
        fill={props.color}
      />
    </g>
    <defs>
      <filter
        id='a'
        x={0.462}
        y={2.499}
        width={25.688}
        height={27.694}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_20_694' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_20_694'
          result='shape'
        />
      </filter>
    </defs>
  </SvgIcon>
);

export default Calendar;
