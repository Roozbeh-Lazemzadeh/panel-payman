import { FC } from 'react';
import AppModal from './AppModals';
import { Flex } from 'antd';
import styles from './styles.module.scss';
type ConfirmModalProps = {
  status: 'success' | 'error' | 'warning';
};

const ConfirmModal: FC<ConfirmModalProps> = ({ status }) => {
  const Icon =
    status === 'success' ? (
      <img src='/assets/pics/SuccessIcon.svg' alt='' />
    ) : null;

  return (
    <AppModal status={status}>
      <Flex className={styles['confirm-modal__icon']} justify='center'>
        {Icon}
      </Flex>
      <Flex>
        <p className={styles['confirm-modal__p']}>وضعیت تراکنش:</p>
        ........................................{status}
      </Flex>
      <Flex>
        <p className={styles['confirm-modal__p']}>تاریخ ثبت استعلام:</p>
        .................................... ۱۴۰۲/۱۱/۱۶
      </Flex>
    </AppModal>
  );
};

export default ConfirmModal;
