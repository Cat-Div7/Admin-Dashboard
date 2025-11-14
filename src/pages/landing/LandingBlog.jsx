import { useCallback } from "react";
import responsive from "@styles/Global.module.css";
import styles from "@styles/LandingPage.module.css";
import { blogPosts } from "@constants";
import { CardSkeleton } from "@components";
import { BlogPost } from "@pages";
import { useFetchWithDelay } from "@hooks";

function LandingBlog() {
  const fetchBlogs = useCallback(
    () => Promise.resolve(blogPosts.slice(0, 3)),
    []
  );

  const { data: blogsData, isLoading: isBlogsLoading } =
    useFetchWithDelay(fetchBlogs);

  return (
    <section className={styles.blogSection} id="blog">
      <div className={responsive.container}>
        <div className={styles.blogHeader}>
          <h2 className={styles.blogSectionTitle}>From Our Blog</h2>
          <p className={styles.blogSectionSubtitle}>
            Discover the latest industry trends, product updates, and growth
            strategies.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {isBlogsLoading ? (
            <>
              <CardSkeleton showImage={true} lines={4} />
              <CardSkeleton showImage={true} lines={4} />
              <CardSkeleton showImage={true} lines={4} />
            </>
          ) : (
            blogsData.map((post) => <BlogPost key={post.id} post={post} />)
          )}
        </div>
      </div>
    </section>
  );
}

export { LandingBlog };
