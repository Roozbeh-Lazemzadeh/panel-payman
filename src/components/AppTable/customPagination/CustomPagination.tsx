import React from 'react';
import { Pagination } from 'antd';
import styles from './styles.module.scss';
import ArrowRightActive from 'assets/Icons/ArrowRightActive';
import ArrowRightInactive from 'assets/Icons/ArrowRightInactive';
import ArrowLeftActive from 'assets/Icons/ArrowLeftActive';
import ArrowLeftInactive from 'assets/Icons/ArrowLeftInactive';

type CustomPaginationProps = {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize?: number) => void;
  selectedItemsCount: number;
};

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  total,
  pageSize,
  onChange,
  selectedItemsCount
}) => {
  const itemRender = (
    _page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactNode
  ) => {
    const isLastPage = current === Math.ceil(total / pageSize);

    if (type === 'prev') {
      return current === 1 ? <ArrowLeftInactive /> : <ArrowLeftActive />;
    }
    if (type === 'next') {
      return isLastPage ? <ArrowRightInactive /> : <ArrowRightActive />;
    }
    return originalElement;
  };
  return (
    <div className={styles['custom-pagination']}>
      <div className={styles['custom-pagination__selected-items']}>
        تعداد موارد انتخاب شده :
        <div className={styles['custom-pagination__number-container']}>
          <span
            className={`${styles['custom-pagination__number']} ${selectedItemsCount === 100 ? styles['custom-pagination__number--long'] : ''}`}
          >
            {selectedItemsCount}
          </span>
          <span>عدد</span>
        </div>
      </div>
      <Pagination
        style={{ direction: 'ltr' }}
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={false}
        showQuickJumper={false}
        className={styles['custom-pagination__component']}
        itemRender={itemRender}
      />
      <div className={styles['custom-pagination__total-items']}>
        کل لیست : {total}
      </div>
    </div>
  );
};

export default CustomPagination;
