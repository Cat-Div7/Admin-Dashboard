import styles from "@styles/LandingPage.module.css";
import responsive from "@styles/Global.module.css";

// constants/testimonialsData.js
 const testimonialsData = [
  {
    id: 1,
    quote:
      "This app has completely transformed how we manage our data. The analytics are intuitive and powerful, giving us insights we never had before. Highly recommended!",
    name: "Sarah Johnson",
    position: "Project Manager, Innovate Inc.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcIFBYTsHNzNR-svqB6o19KfqfQG3_CGLFQl2cmspN1GXXzCBasLgxF7aHlCKUVbC4h6i5idn9KKGbVIQvhi06zjLQMOuBIuOcp2XJUd0nCNGcsT8LdqBqRVym1ny09mgIRviP1KRGFqIMLNEyzPKcgGQ_3JKMUXqwPTjeDRc3WmMoAIj-drQIGon0iPe4dEfvEoVENng6Z_z2x0tKEflLJ0N7SlQcGUNkEQxxakz-FRB3SIMuu-UTh9nelEHRs4jULYb5cRFsVzs2",
    avatarAlt: "Profile picture of Sarah Johnson",
  },
  {
    id: 2,
    quote:
      "As a small business owner, I need tools that are simple yet effective. This platform delivers on both fronts. User management is a breeze, and the blog helps me connect with my customers.",
    name: "Mark Chen",
    position: "Owner, Creative Goods",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC--nmiYx0RSk4tm1VNE9VqpeBkH4Idg4tI_yK7ZQdIFs9UoK1zGxobAzB-0sEDZQTffh5hURPGp-LS_ZP4bg-p09_L4Y56eDvTUG2rgBYgFHN6yRYPw-9_282tzSn6HHn4U-8ptgnB63HIDy2gb_H5rzgEUWV-1DicYp8ynMD9SzNyt7VyR5n8dLWTqcLE_iEkUfKS8eJHy-HHZ-GI_Pzgyf6tEAWGfsSRhSi5F3MEic_qm6C2EHcl-o52wD0FSWMav7JoZKFO8O22",
    avatarAlt: "Profile picture of Mark Chen",
  },
];

function LandingAbout() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={responsive.container}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>What Our Users Say</h2>
          <p className={styles.aboutSubtitle}>
            Trusted by professionals across various industries.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <blockquote className={styles.quote}>
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className={styles.author}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.avatarAlt}
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorPosition}>
                    {testimonial.position}
                  </div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { LandingAbout };
