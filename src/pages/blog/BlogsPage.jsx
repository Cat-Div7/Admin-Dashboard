import { useFetch } from "@hooks";
import { BLOGS_API_URL } from "@constants";
import { useState } from "react";
import styles from "@styles/BlogsPage.module.css";
import { Link } from "react-router-dom";

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetch(BLOGS_API_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  const posts = data?.posts?.map((p) => ({
    ...p,
    thumbnail: `https://picsum.photos/seed/post-${p.id}/500/300`,
  }));

  // Pagination Logic
  const rowsPerPage = 6;
  const start = (currentPage - 1) * rowsPerPage;
  const paginatedPosts = posts.slice(start, start + rowsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Blog Articles</h2>
        <p className={styles.subtitle}>
          Manage, create, and publish your articles from here.
        </p>
      </div>

      <div className={styles.grid}>
        {paginatedPosts.map((article) => (
          <Link key={article.id} to={`${article.id}`} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url("${article.thumbnail}")` }}
            />
            <div className={styles.content}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.description}>
                {article.body.substring(0, 120)}...
              </p>
            </div>
            <div className={styles.footer}>
              <div className={styles.date}>
                <span className={styles.icon}>📅</span>
                <span>{article.date || "—"}</span>
              </div>
              <span className={styles.badge}>
                {article.tags?.[0] || "General"}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.pagination}>
        <nav className={styles.nav}>
          <button
            className={styles.pageBtn}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span className={styles.pageInfo}>
            Page {currentPage} of {Math.ceil(posts.length / rowsPerPage)}
          </span>

          <button
            className={styles.pageBtn}
            disabled={currentPage === Math.ceil(posts.length / rowsPerPage)}
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(Math.ceil(posts.length / rowsPerPage), p + 1)
              )
            }
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}

export { BlogsPage };
