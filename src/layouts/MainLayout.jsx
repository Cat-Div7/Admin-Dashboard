import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
    {/* Sidebar Nav */}
      <aside>
        <nav>dskkdka</nav>
      </aside>
      {/* Main COntent */}
      <main>
        <nav></nav>
        <Outlet />;
      </main>
    </div>
  );
}

export { MainLayout };
