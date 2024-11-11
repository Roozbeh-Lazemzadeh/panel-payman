const DangerTriangle = () => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='40' height='40' rx='10' fill='#FF3672' fill-opacity='0.2' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20 29C13.5056 29 10.9567 28.5387 10.5435 26.2033C10.1304 23.8679 12.7738 19.4774 13.5884 18.0285C16.3126 13.1841 18.1637 11 20 11C21.8363 11 23.6874 13.1841 26.4116 18.0285C27.2262 19.4774 29.8696 23.8679 29.4565 26.2033C29.0444 28.5387 26.4944 29 20 29Z'
        stroke='#FF3672'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20 16.5V20.395'
        stroke='#FF3672'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M19.9955 23.895H20.0045'
        stroke='#FF3672'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};
export default DangerTriangle;
