import { FC, PropsWithChildren } from 'react';
import { Provider } from 'jotai';
import store from 'store';

type Props = PropsWithChildren;

const AppJotaiProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppJotaiProvider;
