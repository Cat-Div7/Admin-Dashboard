import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontIcon } from "@components";
import { getUserData, themeIcons, sidebarIcons } from "@utils";
import { CollapseContext, ThemeContext } from "@context";
import { STORAGE_KEY_TOKEN, LOGIN_PATH } from "@constants";
import { toast, Toaster } from "sonner";
import styles from "@styles/Sidebar.module.css";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: sidebarIcons.dashboard,
    path: "/home",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: sidebarIcons.analytics,
    path: "/home/analytics",
  },
  {
    id: "profile",
    label: "Profile",
    icon: sidebarIcons.adminProfile,
    path: "/home/profile",
  },
  {
    id: "users",
    label: "Users",
    icon: sidebarIcons.users,
    path: "/home/users",
    children: [
      {
        id: "user-profile",
        label: "User Profile",
        icon: sidebarIcons.userProfile,
        path: null,
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    icon: sidebarIcons.blog,
    path: "/home/blog",
    children: [
      {
        id: "blog-details",
        label: "Blog Details",
        icon: sidebarIcons.blogDetails,
        path: null,
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    icon: sidebarIcons.settings,
    path: "/home/settings",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const user = getUserData();
  const { pathname } = useLocation();
  const { isCollapsed, toggleCollapse } = useContext(CollapseContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setSmallScreen]);

  const handleLogout = async () => {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    toast.warning("Logging out..!");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate(LOGIN_PATH);
  };

  const subNav = (item, isActive, currentId, requiredId, path) => {
    return (
      item.children &&
      isActive &&
      currentId && (
        <div className={styles.submenu}>
          {item.children.map((child) => {
            // Only show link if viewing a specific something
            if (child.id === requiredId && !currentId) return null; // Don't show if no ID in URL
            const childIcon = child.icon;

            return (
              <NavLink
                key={child.id}
                title={child.label}
                to={currentId ? `${path}${currentId}` : child.path}
                end={true}
                className={({ isActive }) =>
                  isActive ? styles.submenuItemActive : styles.submenuItem
                }
              >
                <FontIcon icon={childIcon} className={styles.icon} />
                {!isCollapsed && (
                  <p className={styles.navLabel}>{child.label}</p>
                )}
              </NavLink>
            );
          })}
        </div>
      )
    );
  };

  return (
    <div className={styles.container}>
      {/* Logo Section */}
      <div className={`${styles.logoSection} ${isCollapsed ? styles.jcc : ""}`}>
        <div className={styles.logo}>{user.avatarLetter}</div>
        {!isCollapsed && (
          <div className={styles.logoText}>
            <h1 className={styles.title}>{user.firstTwoNames}</h1>
            <p className={styles.subtitle}>{user.email}</p>
          </div>
        )}
      </div>
      {/* Navigation */}
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          // Check if users route is active by looking at the current path
          const isUsersActive =
            item.id === "users" && pathname.startsWith("/home/users");
          const isBlogActive =
            item.id === "blog" && pathname.startsWith("/home/blog");

          // Extract user ID from pathname (e.g., /home/users/123 -> 123)
          const userIdMatch = pathname.match(/\/home\/users\/(\d+)/);
          const currentUserId = userIdMatch ? userIdMatch[1] : null;

          const blogIdMatch = pathname.match(/\/home\/blog\/(\d+)/);
          const currentBlogId = blogIdMatch ? blogIdMatch[1] : null;

          return (
            <div key={item.id}>
              <NavLink
                to={item.path}
                title={item.label}
                end={item.id === "dashboard"}
                className={({ isActive }) =>
                  [
                    isActive ? styles.navItemActive : styles.navItem,
                    isCollapsed && styles.jccP4,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <FontIcon icon={Icon} />
                {!isCollapsed && (
                  <p className={styles.navLabel}>{item.label}</p>
                )}
              </NavLink>

              {/* Sub Navs */}
              {subNav(
                item,
                isUsersActive,
                currentUserId,
                "user-profile",
                "/home/users/"
              )}
              {subNav(
                item,
                isBlogActive,
                currentBlogId,
                "blog-details",
                "/home/blog/"
              )}
            </div>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className={styles.buttons}>
        <button
          onClick={toggleTheme}
          className={`${styles.toggleButton} ${
            isCollapsed ? styles.jccP4 : ""
          }`}
        >
          <FontIcon icon={isDark ? themeIcons.sun : themeIcons.moon} />
          {!isCollapsed && (
            <p className={styles.navLabel}>{isDark ? "Light" : "Dark"}</p>
          )}
        </button>

        {!smallScreen && (
          <button
            onClick={toggleCollapse}
            className={`${styles.toggleButton} ${
              isCollapsed ? styles.jccP4 : ""
            }`}
          >
            <FontIcon
              icon={sidebarIcons.dobuleAngle}
              style={isCollapsed ? { transform: "rotate(180deg)" } : {}}
            />
            {!isCollapsed && "Collapse"}
          </button>
        )}

        <button
          onClick={handleLogout}
          className={`${styles.toggleButton} ${
            isCollapsed ? styles.jccP4 : ""
          } ${styles.logoutBtn}`}
        >
          <FontIcon icon={sidebarIcons.logout} />
          {!isCollapsed && <p className={styles.label}>Logout</p>}
        </button>
      </div>

      <Toaster
        position="top-center"
        richColors
        closeButton
        duration={2500}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "var(--background)",
          },
        }}
      />
    </div>
  );
}

export { Sidebar };
