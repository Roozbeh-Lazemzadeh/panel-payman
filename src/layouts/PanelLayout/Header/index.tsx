import { Flex } from 'antd';
import { useEffect, useState, type FC } from 'react';
import Filimo from 'assets/Icons/Filimo';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';

const Header: FC = () => {
  const [border, setBorder] = useState(true);
  const location = useLocation().pathname;

  useEffect(() => {
    if (location.includes('panel/reports')) {
      setBorder(false);
    } else {
      setBorder(true);
    }
  }, [location]);

  return (
    <>
      <Flex
        component='header'
        className={`${styles.header} ${!border ? styles['header--no-space'] : ''}`}
      >
        <Filimo />
        <span className={styles['header__name']}>مهدی دریس خوش آمدید</span>
      </Flex>
      {border && <div className={styles['header--border']} />}
    </>
  );
};

export default Header;
