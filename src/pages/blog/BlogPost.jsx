import styles from "@styles/BlogPost.module.css";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <article className={styles.blogCard}>
      <div
        className={styles.blogImage}
        style={{ backgroundImage: `url(${post.image})` }}
        role="img"
        aria-label={post.imageAlt}
      ></div>
      <div className={styles.blogContent}>
        <div className={styles.blogText}>
          <h3 className={styles.blogTitle}>{post.title}</h3>
          <p className={styles.blogDescription}>{post.description}</p>
        </div>
        <Link to={`home/blog/${post.id}`} className={styles.blogLink}>
          Read More
          <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </article>
  );
}

export { BlogPost };
