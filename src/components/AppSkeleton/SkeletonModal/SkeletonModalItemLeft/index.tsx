import styles from './style.module.scss';

const SkeletonModalItemLeft: React.FC = () => {
  return (
    <>
      <div className={styles['Skeleton-table']}>
        <div className={styles['skeleton-cart__element']}></div>
      </div>
    </>
  );
};

export default SkeletonModalItemLeft;
