import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';
import theme from 'theme';
import faIR from 'antd/locale/fa_IR';
import 'theme/global.scss';

type Props = PropsWithChildren;

const AppAntdProvider: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider direction='rtl' theme={theme} locale={faIR}>
      {children}
    </ConfigProvider>
  );
};

export default AppAntdProvider;
