import { ThemeConfig } from 'antd';

const token: ThemeConfig['token'] = {
  fontFamily: 'PoppinsRegular400',
  colorText: 'rgba(16, 24, 40, 1)'
};

const components: ThemeConfig['components'] = {
  Button: {
    colorPrimary: '#0072ff',
    borderRadius: 5,
    fontWeight: 400,
    colorBgContainerDisabled: 'rgba(172, 172, 172, 0.2)',
    colorTextDisabled: 'rgba(16, 24, 40, 0.2)'
  },
  Input: {
    colorPrimary: '#0072ff',
    colorBorder: '#cdcdd0',
    borderRadius: 5,
    colorBgContainerDisabled: 'rgba(172, 172, 172, 0.2)'
  }
};

export { token, components };
