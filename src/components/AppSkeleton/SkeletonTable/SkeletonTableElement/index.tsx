import styles from '../style.module.scss';

const SkeletonTableElement = () => {
  return (
    <>
      <div className={styles['skeleton-table-element']}>
        <div className={styles['skeleton-table__element']}></div>
      </div>
    </>
  );
};

export default SkeletonTableElement;
