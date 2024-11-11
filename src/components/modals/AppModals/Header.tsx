import { FC } from 'react';
import { Flex } from 'antd';
import styles from './styles.module.scss';
import CloseSquare from 'assets/Icons/CloseSquare';

type HeaderProps = {
  title: string;
  onClose?: () => void;
};

const Header: FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <Flex
      justify='space-between'
      align='center'
      className={styles['modal-header']}
    >
      <div className={styles['modal-header__title']}>{title}</div>
      <CloseSquare onClick={onClose} />
    </Flex>
  );
};

export default Header;
