// LocalStorage Keys
export const STORAGE_KEY_ACCOUNTS = "app_accounts";
export const STORAGE_KEY_USER_ID = "app_user_id";
export const STORAGE_KEY_TOKEN = "app_token";
export const STORAGE_KEY_WELCOME = "welcomeMessage";

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
import girlImg from "../assets/testimonialGirl.png";
import boylImg from "../assets/testimonialBoy.png";
export const testimonialsData = [
  {
    id: 1,
    quote:
      "This app has completely transformed how we manage our data. The analytics are intuitive and powerful, giving us insights we never had before. Highly recommended!",
    name: "Sarah Johnson",
    position: "Project Manager, Innovate Inc.",
    avatar: girlImg,
    avatarAlt: "Profile picture of Sarah Johnson",
  },
  {
    id: 2,
    quote:
      "As a small business owner, I need tools that are simple yet effective. This platform delivers on both fronts. User management is a breeze, and the blog helps me connect with my customers.",
    name: "Mark Chen",
    position: "Owner, Creative Goods",
    avatar: boylImg,
    avatarAlt: "Profile picture of Mark Chen",
  },
];

// Dashboard Page
import girlAvatar from "../assets/girlAvatar.png";
import boyAvatar from "../assets/boyAvatar.png";
import manAvatar from "../assets/manAvatar.png";

export const activityData = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia@example.com",
    avatar: girlAvatar,
    activity: "Logged In",
    status: "Successful",
    statusColor: "Green",
    date: "2024-05-22 10:30 AM",
  },
  {
    id: 2,
    name: "Liam Johnson",
    email: "liam@example.com",
    avatar: boyAvatar,
    activity: "Updated Profile",
    status: "Completed",
    statusColor: "Blue",
    date: "2024-05-22 09:15 AM",
  },
  {
    id: 3,
    name: "Noah Williams",
    email: "noah@example.com",
    avatar: manAvatar,
    activity: "Password Reset",
    status: "Pending",
    statusColor: "Yellow",
    date: "2024-05-21 03:45 PM",
  },
];

export const statsCards = [
  {
    id: "users",
    title: "Total Users",
    value: "14,284",
    change: "+2.5%",
    isPositive: true,
    svg: `<svg fill="none" height="100" preserveaspectratio="none" viewbox="-3 0 478 100" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72.6667C18.1538 72.6667 18.1538 14 36.3077 14C54.4615 14 54.4615 27.3333 72.6154 27.3333C90.7692 27.3333 90.7692 
            62 108.923 62C127.077 62 127.077 22 145.231 22C163.385 22 163.385 67.3333 181.538 67.3333C199.692 67.3333 199.692 40.6667 
            217.846 40.6667C236 40.6667 236 30 254.154 30C272.308 30 272.308 80.6667 290.462 80.6667C308.615 80.6667 308.615 99.3333 
            326.769 99.3333C344.923 99.3333 344.923 0.666656 363.077 0.666656C381.231 0.666656 381.231 54 399.385 54C417.538 54 417.538 
            86 435.692 86C453.846 86 453.846 16.6667 472 16.6667" stroke="#1313ec" stroke-linecap="round" stroke-width="3"></path>
          </svg>`,
  },
  {
    id: "sales",
    title: "Total Sales",
    value: "$256,981",
    change: "+8.1%",
    isPositive: true,
    svg: `<svg fill="none" height="100" preserveaspectratio="none" viewbox="-3 0 478 100" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 27.3333C18.1538 27.3333 18.1538 86 36.3077 86C54.4615 86 54.4615 54 72.6154 54C90.7692 54 90.7692 14 108.923 
            14C127.077 14 127.077 67.3333 145.231 67.3333C163.385 67.3333 163.385 22 181.538 22C199.692 22 199.692 72.6667 217.846 
            72.6667C236 72.6667 236 99.3333 254.154 99.3333C272.308 99.3333 272.308 40.6667 290.462 40.6667C308.615 40.6667 308.615 
            0.666656 326.769 0.666656C344.923 0.666656 344.923 62 363.077 62C381.231 62 381.231 30 399.385 30C417.538 30 417.538 80.6667 
            435.692 80.6667C453.846 80.6667 453.846 16.6667 472 16.6667" stroke="#1313ec" stroke-linecap="round" stroke-width="3"></path>
          </svg>`,
  },
  {
    id: "performance",
    title: "Performance",
    value: "99.8%",
    change: "-0.2%",
    isPositive: false,
    svg: `<svg fill="none" height="100" preserveaspectratio="none" viewbox="-3 0 478 100" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16.6667C18.1538 16.6667 18.1538 62 36.3077 62C54.4615 62 54.4615 27.3333 72.6154 27.3333C90.7692 27.3333 90.7692 
            86 108.923 86C127.077 86 127.077 54 145.231 54C163.385 54 163.385 99.3333 181.538 99.3333C199.692 99.3333 199.692 72.6667 217.846 
            72.6667C236 72.6667 236 22 254.154 22C272.308 22 272.308 0.666656 290.462 0.666656C308.615 0.666656 308.615 40.6667 326.769 
            40.6667C344.923 40.6667 344.923 14 363.077 14C381.231 14 381.231 67.3333 399.385 67.3333C417.538 67.3333 417.538 30 435.692 
            30C453.846 30 453.846 80.6667 472 80.6667" stroke="#fa6938" stroke-linecap="round" stroke-width="3"></path>
          </svg>`,
  },
  {
    id: "signups",
    title: "New Signups",
    value: "312",
    change: "+12.0%",
    isPositive: true,
    svg: `<svg fill="none" height="100" preserveaspectratio="none" viewbox="-3 0 478 100" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 62C18.1538 62 18.1538 14 36.3077 14C54.4615 14 54.4615 27.3333 72.6154 27.3333C90.7692 27.3333 90.7692 86 108.923 
            86C127.077 86 127.077 22 145.231 22C163.385 22 163.385 54 181.538 54C199.692 54 199.692 0.666656 217.846 0.666656C236 0.666656 
            236 67.3333 254.154 67.3333C272.308 67.3333 272.308 40.6667 290.462 40.6667C308.615 40.6667 308.615 99.3333 326.769 99.3333C344.923
            99.3333 344.923 72.6667 363.077 72.6667C381.231 72.6667 381.231 30 399.385 30C417.538 30 417.538 80.6667 435.692 80.6667C453.846 80.6667 
            453.846 16.6667 472 16.6667" stroke="#1313ec" stroke-linecap="round" stroke-width="3"></path>
          </svg>`,
  },
];
