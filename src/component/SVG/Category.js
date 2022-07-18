import SvgIcon from '@mui/material/SvgIcon';

import * as React from 'react';

const Category = (props) => (
  <SvgIcon
    width={25}
    height={25}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)' opacity={0.4}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.975 2.8h3.321c1.386 0 2.496 1.132 2.496 2.521v3.357A2.5 2.5 0 0 1 8.296 11.2H4.975a2.506 2.506 0 0 1-2.496-2.52V5.32c0-1.39 1.12-2.522 2.496-2.522Zm0 11.294h3.321a2.501 2.501 0 0 1 2.496 2.522v3.357c0 1.388-1.11 2.52-2.496 2.52H4.975c-1.376 0-2.496-1.132-2.496-2.52v-3.357c0-1.399 1.12-2.522 2.496-2.522ZM19.636 2.799h-3.321c-1.386 0-2.496 1.133-2.496 2.522v3.357a2.5 2.5 0 0 0 2.496 2.521h3.321a2.506 2.506 0 0 0 2.496-2.52V5.32c0-1.39-1.12-2.522-2.496-2.522Zm-3.321 11.295h3.321c1.376 0 2.496 1.123 2.496 2.522v3.357c0 1.388-1.12 2.52-2.496 2.52h-3.321c-1.386 0-2.496-1.132-2.496-2.52v-3.357a2.5 2.5 0 0 1 2.496-2.522Z'
        fill={props.color}
      />
    </g>
  </SvgIcon>
);

export default Category;