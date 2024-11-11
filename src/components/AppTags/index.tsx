import { FC, ReactNode } from 'react';
import { Tag } from 'antd';
import styles from './styles.module.scss';

type CustomTagProps = {
  children: ReactNode;
  modifier?: string;
  className?: string;
};

export const CustomTag: FC<CustomTagProps> = ({
  children,
  modifier,
  className,
  ...rest
}) => {
  const tagClassName =
    `${styles['custom-tag']} ${modifier ? styles[`custom-tag--${modifier}`] : ''} ${className || ''}`.trim();

  return (
    <Tag className={tagClassName} {...rest}>
      {children}
    </Tag>
  );
};

export default CustomTag;
