import { FC } from 'react';

type DangerSquareProps = {
  className?: string;
};

const DangerSquare: FC<DangerSquareProps> = ({ className }) => {
  return (
    <svg
      width='15'
      className={className}
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M1.71875 7.50012C1.71875 3.1645 3.16438 1.71887 7.5 1.71887C11.8356 1.71887 13.2812 3.1645 13.2812 7.50012C13.2812 11.8357 11.8356 13.2814 7.5 13.2814C3.16438 13.2814 1.71875 11.8357 1.71875 7.50012Z'
        stroke='#FF683B'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7.5 5.06567V7.50005'
        stroke='#FF683B'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M7.49719 9.6875H7.50281'
        stroke='#FF683B'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
export default DangerSquare;
