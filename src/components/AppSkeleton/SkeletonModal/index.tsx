// import SkeletonTableString from '../SkeletonTable/SkeletonTableString';
import SkeletonModalItemLeft from './SkeletonModalItemLeft';
import SkeletonModalItemRight from './SkeletonModalItemRight';
import styles from './styles.module.scss';
const SkeletonModal = () => {
  return (
    <div className={styles['detailsModal']}>
      <div className={styles['detailsModal__side-left']}>
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} className={styles['detailsModal__item']}>
            <SkeletonModalItemRight />
          </div>
        ))}
      </div>
      <div className={styles['detailsModal__divider']}></div>
      <div className={styles['detailsModal__side-right']}>
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className={styles['detailsModal__item']}>
            <SkeletonModalItemLeft />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonModal;
