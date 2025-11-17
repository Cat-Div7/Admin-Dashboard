import { Calendar } from "lucide-react";
import { getUserData } from "@utils";
import styles from "@styles/AnalyticsPage.module.css";

const stats = [
  {
    title: "Total Users",
    value: "15,230",
    trend: "+2.5%",
    positive: true,
  },
  {
    title: "Total Revenue",
    value: "$97,450",
    trend: "+5.8%",
    positive: true,
  },
  {
    title: "New Signups",
    value: "1,210",
    trend: "+12%",
    positive: true,
  },
  {
    title: "Bounce Rate",
    value: "45.2%",
    trend: "-1.5%",
    positive: false,
  },
];

function AnalyticsPage() {
  const user = getUserData();

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Welcome back, {user.firstName}!</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Home /
            <span style={{ color: "var(--text-primary)" }}> Analytics</span>
          </p>
        </div>
        <button className={styles.dateButton}>
          <Calendar size={18} />
          <span>Last 30 Days</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className={styles.chartsGrid}>
        {/* Line Chart */}
        <div
          className={styles.chartCard + " " + styles.lineChartCard}
          style={{
            gridColumn: "span 2 / span 2",
          }}
        >
          <div className={styles.chartHeader}>
            <div>
              <p className={styles.chartTitle}>Website Traffic</p>
              <p className={styles.chartValue}>1.2M Visitors</p>
            </div>
            <div className={styles.chartMeta}>
              <p className={styles.chartDate}>Last 30 Days</p>
              <p className={styles.trendPositive}>+15.2%</p>
            </div>
          </div>
          <LineChart />
        </div>

        {/* Pie Chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <p className={styles.chartTitle}>User Demographics</p>
              <p className={styles.chartValue}>By Country</p>
            </div>
            <div className={styles.chartMeta}>
              <p className={styles.chartDate}>Last 30 Days</p>
              <p className={styles.trendPositive}>+3.4%</p>
            </div>
          </div>
          <PieChart />
        </div>
      </div>

      {/* Bar Chart */}
      <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
          <div>
            <p className={styles.chartTitle}>Traffic Sources</p>
            <p className={styles.chartValue}>98K Sources</p>
          </div>
          <div className={styles.chartMeta}>
            <p className={styles.chartDate}>Last 30 Days</p>
            <p className={styles.trendPositive}>+8.1%</p>
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  return (
    <div className={styles.statCard}>
      <p className={styles.statTitle}>{stat.title}</p>
      <p className={styles.statValue}>{stat.value}</p>
      <p
        className={stat.positive ? styles.trendPositive : styles.trendNegative}
      >
        {stat.trend}
      </p>
    </div>
  );
}

function LineChart() {
  return (
    <div className={styles.chartContainer}>
      <svg
        fill="none"
        height="100%"
        preserveAspectRatio="none"
        viewBox="-3 0 478 150"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 
          41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385
          33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 
          254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769
          149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538
          81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
          fill="url(#paint0_linear_chart)"
        ></path>
        <path
          d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 
          41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 
          33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154
          45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923
          149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 
          435.692 129C453.846 129 453.846 25 472 25"
          stroke="var(--primary)"
          strokeLinecap="round"
          strokeWidth="3"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_chart"
            x1="236"
            x2="236"
            y1="1"
            y2="149"
          >
            <stop stopColor="var(--primary)" stopOpacity="0.3"></stop>
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PieChart() {
  return (
    <div className={styles.pieContainer}>
      <div className={styles.pieChart}>
        <svg className={styles.pieSvg} viewBox="0 0 36 36">
          <circle
            className={styles.pieRing1}
            cx="18"
            cy="18"
            fill="none"
            r="15.9155"
            strokeWidth="3.8"
          ></circle>
          <circle
            className={styles.pieRing2}
            cx="18"
            cy="18"
            fill="none"
            r="15.9155"
            strokeDasharray="85, 15"
            strokeDashoffset="25"
            strokeWidth="3.8"
          ></circle>
          <circle
            className={styles.pieRing3}
            cx="18"
            cy="18"
            fill="none"
            r="15.9155"
            strokeDasharray="55, 45"
            strokeDashoffset="-20"
            strokeWidth="3.8"
          ></circle>
        </svg>
        <div className={styles.pieLabel}>
          <span className={styles.pieValue}>75%</span>
          <span className={styles.pieText}>EGP</span>
        </div>
      </div>
    </div>
  );
}

function BarChart() {
  const bars = [
    { label: "Referral", height: "60%" },
    { label: "Organic", height: "80%" },
    { label: "Social", height: "100%" },
    { label: "Direct", height: "40%" },
  ];

  return (
    <div className={styles.barChart}>
      {bars.map((bar, index) => (
        <div key={index} className={styles.barColumn}>
          <div className={styles.barBackground}>
            <div
              className={styles.barFill}
              style={{ height: bar.height }}
            ></div>
          </div>
          <p className={styles.barLabel}>{bar.label}</p>
        </div>
      ))}
    </div>
  );
}

export { AnalyticsPage };
