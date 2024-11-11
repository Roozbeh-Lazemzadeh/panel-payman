import { FC } from 'react';

type Props = { isLoading: boolean };

const LoadingPage: FC<Props> = ({ isLoading }) => {
  return (
    <div
      style={{
        opacity: isLoading ? 1 : 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 999999999,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: isLoading ? 'all' : 'none'
      }}
    >
      Loading...
    </div>
  );
};

export default LoadingPage;
