// LocalStorage Keys
export const STORAGE_KEY_ACCOUNTS = "app_accounts";
export const STORAGE_KEY_USER_ID = "app_user_id";
export const STORAGE_KEY_TOKEN = "app_token";
export const STORAGE_KEY_THEME_MODE = "theme_mode";
export const STORAGE_KEY_COLLAPSE_NAV = "collapse_nav";
export const STORAGE_KEY_WELCOME = "welcome_message";
export const STORAGE_KEY_ACCENT_COLOR = "accent_color";
export const STORAGE_KEY_USERS = "app_users";

// Routing Path
export const REGISTER_PATH = "/register";
export const LOGIN_PATH = "/login";
export const HOME_PATH = "/home";

// Blogs URL
export const BLOGS_API_URL = "https://dummyjson.com/posts/";

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

// Users data
// Merged Dashboard Data - كل يوزر معاه كل الـ activities بتاعته
import girlAvatar from "../assets/girlAvatar.png";
import boyAvatar from "../assets/boyAvatar.png";
import manAvatar from "../assets/manAvatar.png";

export const usersData = [
  {
    id: 1,
    firstName: "Ahmed",
    lastName: "Mohamed",
    fullName: "Ahmed Mohamed",
    email: "ahmedmohamed1@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Logged In",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-16 10:30 AM",
      },
    ],
  },
  {
    id: 2,
    firstName: "Fatima",
    lastName: "Ahmed",
    fullName: "Fatima Ahmed",
    email: "fatimaahmed2@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Profile",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-16 09:15 AM",
      },
    ],
  },
  {
    id: 3,
    firstName: "Mohamed",
    lastName: "Hassan",
    fullName: "Mohamed Hassan",
    email: "mohamedhassan3@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Password Reset",
        status: "Pending",
        statusColor: "Yellow",
        date: "2025-11-15 03:45 PM",
      },
    ],
  },
  {
    id: 4,
    firstName: "Aisha",
    lastName: "Ali",
    fullName: "Aisha Ali",
    email: "aishali4@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Downloaded Report",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-15 02:20 PM",
      },
    ],
  },
  {
    id: 5,
    firstName: "Ahmed",
    lastName: "Khan",
    fullName: "Ahmed Khan",
    email: "ahmedkhan5@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Uploaded Document",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-14 11:00 AM",
      },
    ],
  },
  {
    id: 6,
    firstName: "Layla",
    lastName: "Ibrahim",
    fullName: "Layla Ibrahim",
    email: "laylaibrahim6@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Changed Settings",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-14 08:45 AM",
      },
    ],
  },
  {
    id: 7,
    firstName: "Hassan",
    lastName: "Mohammed",
    fullName: "Hassan Mohammed",
    email: "hassanmohammed7@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Shared File",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-13 04:30 PM",
      },
    ],
  },
  {
    id: 8,
    firstName: "Noor",
    lastName: "Rahman",
    fullName: "Noor Rahman",
    email: "noorrahman8@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Deleted Account",
        status: "Pending",
        statusColor: "Yellow",
        date: "2025-11-13 01:15 PM",
      },
    ],
  },
  {
    id: 9,
    firstName: "Ali",
    lastName: "Malik",
    fullName: "Ali Malik",
    email: "alimalik9@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Verified Email",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-12 10:00 AM",
      },
    ],
  },
  {
    id: 10,
    firstName: "Sara",
    lastName: "Hussain",
    fullName: "Sara Hussain",
    email: "sarahussain10@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Billing",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-12 09:30 AM",
      },
    ],
  },
  {
    id: 11,
    firstName: "Karim",
    lastName: "Farrah",
    fullName: "Karim Farrah",
    email: "karimfarrah11@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Created Project",
        status: "Failed",
        statusColor: "Red",
        date: "2025-11-11 05:45 PM",
      },
    ],
  },
  {
    id: 12,
    firstName: "Leila",
    lastName: "Jamil",
    fullName: "Leila Jamil",
    email: "leilajamil12@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Invited User",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-11 03:20 PM",
      },
    ],
  },
  {
    id: 13,
    firstName: "Ibrahim",
    lastName: "Mansour",
    fullName: "Ibrahim Mansour",
    email: "ibrahimmansour13@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Exported Data",
        status: "In Progress",
        statusColor: "Purple",
        date: "2025-11-10 02:00 PM",
      },
    ],
  },
  {
    id: 14,
    firstName: "Mariam",
    lastName: "Nassar",
    fullName: "Mariam Nassar",
    email: "mariam nassar14@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Photo",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-10 11:15 AM",
      },
    ],
  },
  {
    id: 15,
    firstName: "Khalid",
    lastName: "Rashid",
    fullName: "Khalid Rashid",
    email: "khalidri15@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Logged In",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-09 10:45 AM",
      },
    ],
  },
  {
    id: 16,
    firstName: "Hana",
    lastName: "Saad",
    fullName: "Hana Saad",
    email: "hanasaad16@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Profile",
        status: "Pending",
        statusColor: "Yellow",
        date: "2025-11-09 08:30 AM",
      },
    ],
  },
  {
    id: 17,
    firstName: "Jamal",
    lastName: "Saleh",
    fullName: "Jamal Saleh",
    email: "jamalsaleh17@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Password Reset",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-08 04:15 PM",
      },
    ],
  },
  {
    id: 18,
    firstName: "Dina",
    lastName: "Salam",
    fullName: "Dina Salam",
    email: "dinasalam18@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Downloaded Report",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-08 02:50 PM",
      },
    ],
  },
  {
    id: 19,
    firstName: "Samir",
    lastName: "Samad",
    fullName: "Samir Samad",
    email: "samirsamad19@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Uploaded Document",
        status: "Failed",
        statusColor: "Red",
        date: "2025-11-07 01:00 PM",
      },
    ],
  },
  {
    id: 20,
    firstName: "Reem",
    lastName: "Sami",
    fullName: "Reem Sami",
    email: "reemsami20@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Changed Settings",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-07 10:30 AM",
      },
    ],
  },
  {
    id: 21,
    firstName: "Tariq",
    lastName: "Samir",
    fullName: "Tariq Samir",
    email: "tariqsamir21@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Shared File",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-06 09:45 AM",
      },
    ],
  },
  {
    id: 22,
    firstName: "Yasmin",
    lastName: "Tamer",
    fullName: "Yasmin Tamer",
    email: "yasmintamer22@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Deleted Account",
        status: "In Progress",
        statusColor: "Purple",
        date: "2025-11-06 03:20 PM",
      },
    ],
  },
  {
    id: 23,
    firstName: "Adel",
    lastName: "Tariq",
    fullName: "Adel Tariq",
    email: "adeltariq23@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Verified Email",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-05 11:00 AM",
      },
    ],
  },
  {
    id: 24,
    firstName: "Zainab",
    lastName: "Yasir",
    fullName: "Zainab Yasir",
    email: "zainabyasir24@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Billing",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-05 08:15 AM",
      },
    ],
  },
  {
    id: 25,
    firstName: "Bilal",
    lastName: "Youssef",
    fullName: "Bilal Youssef",
    email: "bialyoussef25@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Created Project",
        status: "Pending",
        statusColor: "Yellow",
        date: "2025-11-04 05:30 PM",
      },
    ],
  },
  {
    id: 26,
    firstName: "Salma",
    lastName: "Zahra",
    fullName: "Salma Zahra",
    email: "salmazahra26@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Invited User",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-04 02:45 PM",
      },
    ],
  },
  {
    id: 27,
    firstName: "Rashid",
    lastName: "Zaki",
    fullName: "Rashid Zaki",
    email: "rashidzaki27@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Exported Data",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-03 01:30 PM",
      },
    ],
  },
  {
    id: 28,
    firstName: "Amira",
    lastName: "Zayed",
    fullName: "Amira Zayed",
    email: "amirazayed28@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Photo",
        status: "Failed",
        statusColor: "Red",
        date: "2025-11-03 10:00 AM",
      },
    ],
  },
  {
    id: 29,
    firstName: "Youssef",
    lastName: "Zein",
    fullName: "Youssef Zein",
    email: "youssefzein29@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Logged In",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-02 09:20 AM",
      },
    ],
  },
  {
    id: 30,
    firstName: "Nadia",
    lastName: "Ziad",
    fullName: "Nadia Ziad",
    email: "nadiaziad30@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Profile",
        status: "In Progress",
        statusColor: "Purple",
        date: "2025-11-02 07:45 AM",
      },
    ],
  },
  {
    id: 31,
    firstName: "Faisal",
    lastName: "Nasser",
    fullName: "Faisal Nasser",
    email: "faisalnasser31@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Password Reset",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-11-01 04:00 PM",
      },
    ],
  },
  {
    id: 32,
    firstName: "Huda",
    lastName: "Nabil",
    fullName: "Huda Nabil",
    email: "hudanabil32@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Downloaded Report",
        status: "Successful",
        statusColor: "Green",
        date: "2025-11-01 02:30 PM",
      },
    ],
  },
  {
    id: 33,
    firstName: "Emad",
    lastName: "Nawaf",
    fullName: "Emad Nawaf",
    email: "emadnawaf33@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Uploaded Document",
        status: "Pending",
        statusColor: "Yellow",
        date: "2025-10-31 01:15 PM",
      },
    ],
  },
  {
    id: 34,
    firstName: "Iman",
    lastName: "Nizar",
    fullName: "Iman Nizar",
    email: "imamnizar34@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Changed Settings",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-10-31 10:45 AM",
      },
    ],
  },
  {
    id: 35,
    firstName: "Hazem",
    lastName: "Osama",
    fullName: "Hazem Osama",
    email: "hazemsama35@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Shared File",
        status: "Failed",
        statusColor: "Red",
        date: "2025-10-30 09:30 AM",
      },
    ],
  },
  {
    id: 36,
    firstName: "Lily",
    lastName: "Owais",
    fullName: "Lily Owais",
    email: "lilyowais36@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Deleted Account",
        status: "Successful",
        statusColor: "Green",
        date: "2025-10-30 08:00 AM",
      },
    ],
  },
  {
    id: 37,
    firstName: "Nadir",
    lastName: "Qadir",
    fullName: "Nadir Qadir",
    email: "nadirqadir37@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: manAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Verified Email",
        status: "In Progress",
        statusColor: "Purple",
        date: "2025-10-29 03:50 PM",
      },
    ],
  },
  {
    id: 38,
    firstName: "Maya",
    lastName: "Qasim",
    fullName: "Maya Qasim",
    email: "mayaqasim38@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Updated Billing",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-10-29 02:20 PM",
      },
    ],
  },
  {
    id: 39,
    firstName: "Rafiq",
    lastName: "Radi",
    fullName: "Rafiq Radi",
    email: "rafiqradi39@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: boyAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Created Project",
        status: "Successful",
        statusColor: "Green",
        date: "2025-10-28 11:30 AM",
      },
    ],
  },
  {
    id: 40,
    firstName: "Sophia",
    lastName: "Rahim",
    fullName: "Sophia Rahim",
    email: "sophirahim40@example.com",
    password:
      "3ea87a56da3844b420ec2925ae922bc731ec16a4fc44dcbeafdad49b0e61d39c",
    avatar: girlAvatar,
    createdAt: "2025-11-16T14:48:10.513Z",
    activities: [
      {
        activity: "Invited User",
        status: "Completed",
        statusColor: "Blue",
        date: "2025-10-28 09:15 AM",
      },
    ],
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
