import styles from "@styles/Pagination.module.css";
import { paginationIcons } from "@utils";
import { FontIcon } from "@components";

function Pagination(props) {
  const { rowsPerPage, onPageChange, currentPage, onRowsChange, totalItems } =
    props;

  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const maxButtons = 4;
  let startPage = Math.max(currentPage - 1, 1);
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <span>Rows:</span>
        <div className={styles.selectWrapper}>
          <select
            value={rowsPerPage}
            onChange={(e) => onRowsChange(Number(e.target.value))}
            className={styles.select}
          >
            {[3, 5, 7].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <div className={styles.selectIcon}>
            <span className={styles.chevron}>
              <FontIcon icon={paginationIcons.downSingle} />
            </span>
          </div>
        </div>
        <span>
          {startItem}-{endItem} of {totalItems}
        </span>
      </div>

      {/* Panigation */}
      <nav>
        <div className={styles.paginationList}>
          <button
            className={styles.navButton}
            disabled={currentPage === 1}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
            <FontIcon icon={paginationIcons.leftSingle} />
          </button>

          {startPage > 1 && <span className={styles.ellipsis}>…</span>}

          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`${styles.numButton} ${
                page === currentPage ? styles.active : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ))}

          {endPage < totalPages && <span className={styles.ellipsis}>…</span>}

          <button
            className={styles.navButton}
            disabled={currentPage === totalPages}
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
          >
            <FontIcon icon={paginationIcons.rightSingle} />
          </button>
        </div>
      </nav>
    </div>
  );
}

export { Pagination };
