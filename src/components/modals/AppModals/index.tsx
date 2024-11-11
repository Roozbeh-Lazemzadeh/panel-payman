import { FC, PropsWithChildren } from 'react';
import { Button, Modal } from 'antd';
import styles from './styles.module.scss';
import Header from './Header';
import { modalAtom } from 'store/modal-atoms';
import { useAtom } from 'jotai';

type Props = PropsWithChildren<{
  title?: string;
  onClose?: () => void;
  status?: string;
}>;

const AppModal: FC<Props> = ({ children, title, onClose, status }) => {
  const [open, setOpen] = useAtom(modalAtom);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      <Modal
        title={title ? '' : null}
        centered
        closeIcon={title ? null : ''}
        open={open}
        onOk={handleClose}
        onCancel={handleClose}
        width={title ? 782 : 375}
        className={styles['details-modal']}
        style={{
          borderRadius: '10px',
          borderTop: status === 'success' ? '4px solid #00E261' : undefined
        }}
        footer={
          !title
            ? [
                <Button
                  className={styles['details-modal__btn-right']}
                  type='primary'
                  onClick={handleClose}
                >
                  تایید و بستن
                </Button>,
                <Button className={styles['details-modal__btn-left']} href=''>
                  استعلام مجدد
                </Button>
              ]
            : ''
        }
      >
        {title && <Header title={title} onClose={handleClose} />}
        {children}
      </Modal>
    </>
  );
};

export default AppModal;
