import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Chart = (props) => (
  <SvgIcon
    width={29}
    height={30}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)' opacity={0.4}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.717 1.975h9.177c3.342 0 5.228 1.9 5.238 5.248v9.197c0 3.348-1.896 5.249-5.238 5.249H9.717c-3.342 0-5.238-1.9-5.238-5.249V7.223c0-3.349 1.896-5.248 5.238-5.248Zm4.637 15.617a.813.813 0 0 0 .816-.738V6.819a.804.804 0 0 0-.373-.778.824.824 0 0 0-1.259.778v10.035c.05.423.403.738.816.738Zm4.521 0a.828.828 0 0 0 .816-.738v-3.23a.822.822 0 0 0-.384-.778.822.822 0 0 0-.874 0 .794.794 0 0 0-.373.778v3.23c.039.423.392.738.815.738Zm-8.284-.738a.813.813 0 0 1-.816.738.812.812 0 0 1-.815-.738v-6.805a.829.829 0 0 1 .384-.778.807.807 0 0 1 .864 0 .83.83 0 0 1 .383.778v6.805Z'
        fill={props.color}
      />
    </g>
    <defs>
      <filter
        id='a'
        x={0.479}
        y={1.975}
        width={27.653}
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_20_718' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_20_718'
          result='shape'
        />
      </filter>
    </defs>
  </SvgIcon>
);

export default Chart;
