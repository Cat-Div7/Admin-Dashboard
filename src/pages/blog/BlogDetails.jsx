import { useFetch } from "@hooks";
import { BLOGS_API_URL } from "@constants";
import { useParams } from "react-router-dom";
import { BackButton, FontIcon } from "@components";
import { blogDetailsIcons } from "@utils";
import styles from "@styles/BlogDetails.module.css";
import { useState } from "react";

function BlogDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(BLOGS_API_URL);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      author: "John Smith",
      time: "2 days ago",
      text: "Great overview! I've been experimenting with Glassmorphism in my latest project and the results are fantastic.",
    },
    {
      author: "Sarah Lee",
      time: "1 day ago",
      text: "Accessibility is a huge concern with Neumorphism. Glad you pointed that out. A hybrid approach sounds like the most sensible path forward.",
    },
  ]);

  const handleSubmitComment = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        { author: "You", time: "just now", text: comment },
      ]);
      setComment("");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts.</p>;

  const posts = data?.posts?.map((p) => ({
    ...p,
    thumbnail: `https://picsum.photos/seed/post-${p.id}/500/300`,
  }));
  const article = posts?.find((p) => p.id.toString() === id);

  if (!article) {
    return (
      <div className={styles.notFoundBox}>
        <FontIcon
          icon={blogDetailsIcons.warning}
          className={styles.notFoundIcon}
        />
        <h3 className={styles.notFoundTitle}>Article Not Found</h3>
        <p className={styles.notFoundText}>
          The article you're looking for doesn't exist or may have been removed.
        </p>

        <BackButton absoliute={true} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BackButton />
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.breadcrumb}>
            Home / Blogs / The Future of UI Design
          </div>
          <h1 className={styles.title}>
            The Future of UI Design: Glassmorphism and Neumorphism
          </h1>
          <div className={styles.meta}>
            <span className={styles.author}>Jane Doe</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>Published on Oct 26, 2023</span>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>8 min read</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <article className={styles.article}>
          <p className={styles.intro}>
            In the ever-evolving landscape of user interface design, two trends
            have recently captured the attention of designers and developers
            alike: Glassmorphism and Neumorphism. These styles, while distinct,
            both aim to create more tactile, intuitive, and visually engaging
            experiences for users. Let's delve into what they are and what they
            mean for the future of UI.
          </p>

          {/* Glassmorphism Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What is Glassmorphism?</h2>
            <div className={styles.card}>
              <p>
                Glassmorphism is characterized by its frosted-glass effect. It
                creates a sense of depth and hierarchy by making background
                elements blur through a semi-transparent foreground. Key
                features include transparency, a multi-layered approach, vivid
                colors to highlight the blurred background, and a subtle light
                border on translucent objects.
              </p>
              <p>
                This style feels modern and ethereal, making interfaces look
                clean and organized. It's particularly effective for dashboards
                and applications where information needs to be layered
                logically.
              </p>
            </div>
          </section>

          {/* Neumorphism Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>And What About Neumorphism?</h2>
            <p>
              Neumorphism, a portmanteau of "new" and "skeuomorphism," takes a
              different approach. Instead of layers, it creates a soft, extruded
              plastic look where elements appear to be connected to the
              background. This is achieved through clever use of shadows and
              highlights on elements that share the same color as the
              background.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                It creates a soft, light, and tactile user interface.
              </div>
              <div className={styles.feature}>
                Buttons and cards look like they are being pushed into the
                background.
              </div>
              <div className={styles.feature}>
                Requires subtle color palettes and careful shadow management to
                be effective.
              </div>
            </div>
            <p className={styles.warning}>
              While visually interesting, Neumorphism has faced criticism for
              its potential accessibility issues, as the low contrast can make
              it difficult for some users to distinguish interactive elements.
            </p>
          </section>

          {/* Hybrid Approach Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              The Future is a Hybrid Approach
            </h2>
            <div className={styles.cardHighlight}>
              <p>
                The future of UI design likely won't be dominated by one style
                alone. Instead, we'll see designers taking the best elements of
                each. Imagine the clean, layered structure of Glassmorphism
                combined with the soft, tactile feel of Neumorphism buttons for
                key interactions. This hybrid approach allows for both aesthetic
                appeal and functional clarity, paving the way for interfaces
                that are not only beautiful but also accessible and a delight to
                use.
              </p>
            </div>
          </section>
        </article>

        {/* Comments Section */}
        <section className={styles.commentsSection}>
          <h3 className={styles.commentsTitle}>Comments ({comments.length})</h3>

          <div className={styles.commentForm}>
            <textarea
              className={styles.commentInput}
              placeholder="Share your thoughts..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmitComment} className={styles.submitBtn}>
              Submit Comment
            </button>
          </div>

          <div className={styles.commentsList}>
            {comments.map((c, idx) => (
              <div key={idx} className={styles.comment}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentAuthor}>{c.author}</span>
                  <span className={styles.commentTime}>{c.time}</span>
                </div>
                <p className={styles.commentText}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        <section className={styles.relatedSection}>
          <h3 className={styles.relatedTitle}>You might also like</h3>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <h4>Top 5 UI Design Trends for 2024</h4>
              <p>
                A look at the most influential trends shaping digital interfaces
                in the coming year.
              </p>
              <a href="#" className={styles.readMore}>
                Read More →
              </a>
            </div>
            <div className={styles.relatedCard}>
              <h4>Designing for Accessibility: A Beginner's Guide</h4>
              <p>
                Learn the fundamental principles of accessible design to create
                inclusive products.
              </p>
              <a href="#" className={styles.readMore}>
                Read More →
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export { BlogDetails };
