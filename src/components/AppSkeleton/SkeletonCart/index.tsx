import styles from './style.module.scss';

const SkeletonCart: React.FC = () => {
  return (
    <>
      <div className={styles['skeleton-cart']}>
        <div className={styles['skeleton-cart__description']}>
          <div className={styles['description__one']}></div>
          <div className={styles['description__two']}></div>
          <div className={styles['description__three']}></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCart;
