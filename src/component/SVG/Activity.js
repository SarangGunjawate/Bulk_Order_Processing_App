import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Activity = (props) => (
  <SvgIcon
    width={29}
    height={31}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)' opacity={0.4}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.396 5.047a2.372 2.372 0 0 1 2.368-2.374 2.372 2.372 0 0 1 2.368 2.374 2.372 2.372 0 0 1-2.368 2.373 2.372 2.372 0 0 1-2.368-2.373Zm-3.784 10.19 2.84-3.671-.04.02a.739.739 0 0 0-.519-1.172.754.754 0 0 0-.689.305L14.827 13.8l-2.723-2.147a.775.775 0 0 0-.56-.157.76.76 0 0 0-.491.294l-2.908 3.792-.06.089a.737.737 0 0 0 .207.935.825.825 0 0 0 .452.148c.227.01.442-.11.58-.295l2.466-3.182 2.8 2.108.089.059c.314.167.707.09.933-.207Zm2.083-10.81c-.039.246-.058.492-.058.738a3.998 3.998 0 0 0 3.99 4.007c.245 0 .48-.029.726-.068v7.946c0 3.339-1.965 5.318-5.306 5.318h-7.26c-3.343 0-5.308-1.98-5.308-5.318V9.764c0-3.348 1.965-5.338 5.307-5.338h7.91Z'
        fill={props.color}
      />
    </g>
    <defs>
      <filter
        id='a'
        x={0.479}
        y={2.673}
        width={27.653}
        height={27.695}
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_20_685' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_20_685'
          result='shape'
        />
      </filter>
    </defs>
  </SvgIcon>
);

export default Activity;
