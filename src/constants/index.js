// LocalStorage Keys
export const STORAGE_KEY_ACCOUNTS = "app_accounts";
export const STORAGE_KEY_USER_ID = "app_user_id";
export const STORAGE_KEY_TOKEN = "app_token";
export const STORAGE_KEY_WELCOME = 'welcomeMessage'

// Routing Path
export const REGISTER_PATH = "/register";
export const LOGIN_PATH = "/login";
export const HOME_PATH = "/home";

// Landing Sections
// Features Data Factory
export const getFeatureData = async () => {
  const { featureIcons } = await import("@utils");

  return [
    {
      icon: featureIcons.analytics,
      title: "Insightful Analytics",
      description:
        "Visualize your data with our easy-to-understand charts and dashboards to make smarter decisions.",
    },
    {
      icon: featureIcons.group,
      title: "Effortless User Management",
      description:
        "Onboard, manage, and assign roles to your users with a simple and intuitive interface.",
    },
    {
      icon: featureIcons.tune,
      title: "Customizable Settings",
      description:
        "Tailor the platform to your needs with extensive settings and configuration options.",
    },
  ];
};

// Blog Data
export const blogPosts = [
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

// About Data
export const testimonialsData = [
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
