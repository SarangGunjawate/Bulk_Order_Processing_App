import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Document = (props) => (
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
        d='M9.188 2.324h8.236c3.035 0 4.725 1.753 4.725 4.756v10.172c0 3.053-1.69 4.766-4.725 4.766H9.188c-2.987 0-4.726-1.713-4.726-4.766V7.08c0-3.003 1.74-4.756 4.726-4.756Zm.266 4.589v-.01h2.937c.423 0 .767.344.767.767a.77.77 0 0 1-.767.779H9.454a.768.768 0 0 1 0-1.536Zm0 5.987h7.704a.768.768 0 0 0 0-1.537H9.454a.769.769 0 0 0 0 1.537Zm0 4.5h7.704a.77.77 0 0 0 .688-.768.772.772 0 0 0-.688-.778H9.454a.77.77 0 0 0-.737.364.784.784 0 0 0 0 .827.763.763 0 0 0 .737.355Z'
        fill={props.color}
      />
    </g>
    <defs>
      <filter
        id='a'
        x={0.462}
        y={2.324}
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
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_20_708' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_20_708'
          result='shape'
        />
      </filter>
    </defs>
  </SvgIcon>
);

export default Document;
