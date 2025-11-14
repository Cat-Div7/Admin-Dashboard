import styles from "@styles/CardSkeleton.module.css";

/**
 * CardSkeleton Component - Basic skeleton loading state for cards
 * @param {number} lines - Number of skeleton lines (default: 2)
 * @param {boolean} showImage - Show image skeleton at top (default: false)
 * @param {boolean} showIcon - Show icon skeleton in top left (default: false)
 * @param {boolean} showAvatarImg - Show avatar with name and position below (default: false)
 */
function CardSkeleton({
  lines = 2,
  showImage = false,
  showIcon = false,
  showAvatarImg = false,
}) {
  return (
    <div className={styles.cardSkeleton}>
      {/* Image Skeleton */}
      {showImage && <div className={styles.skeletonImage} />}

      {/* Icon and Lines Container */}
      <div className={styles.contentWrapper}>
        {/* Icon Skeleton - Top Left */}
        {showIcon && <div className={styles.skeletonIcon} />}

        {/* Text Lines */}
        <div className={styles.linesWrapper}>
          {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className={styles.skeletonLine} />
          ))}

          {/* Avatar with Info Below Lines */}
          {showAvatarImg && (
            <div className={styles.avatarBelowWrapper}>
              <div className={styles.skeletonAvatarImg} />
              <div className={styles.avatarInfoWrapper}>
                <div className={styles.avatarNameSkeleton} />
                <div className={styles.avatarPositionSkeleton} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { CardSkeleton };
