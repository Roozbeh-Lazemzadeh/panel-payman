import { FC, useState } from 'react';
import { Tooltip } from 'antd';
import styles from '../styles.module.scss';
import { ReportsGetResponse } from 'services/rest/dashboard/types';
import DangerSquare from 'assets/Icons/DangerSquare';

type CardProps = {
  dataMock?: ReportsGetResponse['result'];
};

const Card: FC<CardProps> = ({ dataMock }) => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);

  const handleTooltipToggle = (id: string) => {
    setVisibleTooltip((prevId) => (prevId === id ? null : id));
  };

  return dataMock?.map(({ id, title, amount, updated_at, alert }) => (
    <div key={id} className={styles['dashboard-report__cart-item']}>
      {alert.length > 0 && (
        <Tooltip
          placement='right'
          style={{ color: '#fff' }}
          overlayClassName={styles['danger-square__tooltip-panel']}
          title={alert}
          align={{ offset: [15, 0] }}
          visible={visibleTooltip === id}
          onVisibleChange={(visible) => setVisibleTooltip(visible ? id : null)}
        >
          <span
            style={{ width: 15, height: 15, position: 'absolute', left: '0' }}
            onClick={() => handleTooltipToggle(id)}
          >
            <DangerSquare className={styles['danger-square']} />
          </span>
        </Tooltip>
      )}
      <div className={styles['cart-item__title']}>{title}</div>
      <div className={styles['cart-item__amount']}>{amount}</div>
      <div className={styles['cart-item__update-message']}>
        آخرین آپدیت :{' '}
        {new Date(updated_at).toLocaleString('fa-IR', {
          hour: '2-digit',
          minute: '2-digit'
        })}{' '}
        دقیقه
      </div>
    </div>
  ));
};

export default Card;
