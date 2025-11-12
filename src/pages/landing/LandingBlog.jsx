import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";
import { BlogPost } from "@pages";

// constants/blogData.js
const blogPosts = [
  {
    id: 1,
    title: "5 Industry Trends to Watch in 2024",
    description:
      "Stay ahead of the curve with our latest analysis on the shifting digital landscape.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALyEahtnYDtbci1bRnek-Xil9S8Fae1_9kBWTpTn1uAiVwu4sKDi6vH9Pi15cYrdTWomQDNuR2ySnhMsEmz2sCcjWXst9SCqinlsT35fhthYT6kkk7-cNJdKtcz7j5X2L1gOaO12aYvupOhH7y-GLJ9LaAICruyoXOCNKWUJFVQkkWinE4Cr0xcH4upovk3w1suCioooV-uD20ZwUUgMVVlvPWNYG1X_Q3u0k9z6z32UtbPrXw042tOiM7Mf6vQ9SCiq28MHSItZuc",
    imageAlt: "Abstract colorful gradient",
  },
  {
    id: 2,
    title: "How to Boost User Engagement",
    description:
      "Discover practical tips and strategies to keep your users coming back for more.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCylIv09lsAbxdr2T4CQsvnyeALolrUYaLjZmvUzpOjfxo6HaL5_WIKDLAHiRbxxutA7LPgFsYUuokSCeCZfnPLiuizue8qMUf7FvslIsI2DzRcYn3yDq9UvgdUneKUySu2tgkSw1levgY_ykw_pxhwouO4CFD_yXaaXHhO4ZzWuXd9Grjv2P0SWA3gfwOggL9shT7CNMAaQp0XvXnuiinBbJih1RFfXXPl5r9z8lyD9WzoYuC2R6oRViOVIVowywLQxIEB3rfCMfWv",
    imageAlt: "Abstract blue and purple gradient",
  },
  {
    id: 3,
    title: "Our Latest Product Updates",
    description:
      "Check out the new features we've just rolled out to improve your experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCx_OnvKMNU4vRu0oOcwoPUaHhvQ0uAE4vA-N9UTi1ED0RriZoyDTnwHzr_X1MInoYUsBo2cUKf2VJdVI3rOuEdfAb6PI-GiTbj29_Ub-eKVtWTSahIZbLVu0CdOV-FGA5MROH8uo-chyG4cNhkcgwuVtBC8iznnJRbtMvruUNmj-WnsSwE5311OeJCqS51kdP2XK5ygHUkAaagE2sY5Rp5A5sgyng-BEnbYeaVIt16CO0y8HJneuC-hTDc6d85F6AlATHocFNwoMaB",
    imageAlt: "Abstract vibrant gradient",
  },
];

function LandingBlog() {
  const displayedPosts = blogPosts.slice(0, 3);

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
          {displayedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { LandingBlog };
