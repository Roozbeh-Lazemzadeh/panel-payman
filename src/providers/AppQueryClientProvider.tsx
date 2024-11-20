import { QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import queryClient from 'services/queryClient';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = PropsWithChildren;

const AppQueryClientProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' /> */}
      {children}
    </QueryClientProvider>
  );
};

export default AppQueryClientProvider;
