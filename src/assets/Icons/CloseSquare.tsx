const CloseSquare = ({ onClick }: { onClick?: () => void }) => {
  return (
    <svg
      onClick={onClick}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.9953 6.99561L7.00195 10.9889'
        stroke='#FF3672'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 10.9941L7 6.99414'
        stroke='#FF3672'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.29199 9.00008C1.29199 14.7809 3.21949 16.7084 9.00033 16.7084C14.7812 16.7084 16.7087 14.7809 16.7087 9.00008C16.7087 3.21925 14.7812 1.29175 9.00033 1.29175C3.21949 1.29175 1.29199 3.21925 1.29199 9.00008Z'
        stroke='#FF3672'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default CloseSquare;
