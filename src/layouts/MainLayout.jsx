import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      {/* Sidebar Nav */}
      <aside>
        <nav>SideNav</nav>
      </aside>
      {/* Main COntent */}
      <main>
        <nav>Navbar</nav>
        Content
        <Outlet />;
      </main>
    </div>
  );
}

export { MainLayout };
