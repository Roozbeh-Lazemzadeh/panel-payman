import { FC } from 'react';

type Props = {
  style?: { transform: string };
};
const ArrowLeft: FC<Props> = ({ style }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={style}
    >
      <path
        d='M12.9166 15.8333C12.9166 15.8333 7.08329 12.38 7.08329 10C7.08329 7.62084 12.9166 4.16667 12.9166 4.16667'
        stroke='#0072FF'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default ArrowLeft;
