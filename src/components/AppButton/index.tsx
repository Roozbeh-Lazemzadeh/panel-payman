import { FC, ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';
import styles from './styles.module.scss';

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
  modifier?: string;
};

const AppButton: FC<CustomButtonProps> = ({
  children,
  modifier,
  className,
  ...rest
}) => {
  const buttonClassName =
    `${styles['custom-btn']} ${modifier ? styles[`custom-btn--${modifier}`] : ''} ${className || ''}`.trim();

  return (
    <Button className={buttonClassName} {...rest}>
      {children}
    </Button>
  );
};

export default AppButton;
