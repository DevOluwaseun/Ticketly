import {
  PresentationChartLineIcon,
  UserIcon,
  UserGroupIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="bg-background h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Main Content Area */}
        <div className="drawer-content flex flex-col">
          {/* Mobile Header with Menu Button */}
          <div className="navbar bg-white shadow-sm lg:hidden">
            <div className="flex-none">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <Bars3Icon className="h-6 w-6" />
              </label>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="mb-6">
              <h1 className="text-primary text-2xl font-bold md:text-3xl">
                Dashboard
              </h1>
              <p className="mt-2 text-gray-600">Welcome to your admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
              <div className="stat rounded-lg bg-white p-4 shadow-sm">
                <div className="stat-figure text-primary">
                  <PresentationChartLineIcon className="h-8 w-8" />
                </div>
                <div className="stat-title text-sm">Total Tickets</div>
                <div className="stat-value text-2xl md:text-3xl">89</div>
              </div>

              <div className="stat rounded-lg bg-white p-4 shadow-sm">
                <div className="stat-figure text-accent">
                  <UserIcon className="h-8 w-8" />
                </div>
                <div className="stat-title text-sm">Active Users</div>
                <div className="stat-value text-2xl md:text-3xl">124</div>
              </div>

              <div className="stat rounded-lg bg-white p-4 shadow-sm">
                <div className="stat-figure text-success">
                  <UserGroupIcon className="h-8 w-8" />
                </div>
                <div className="stat-title text-sm">Agents</div>
                <div className="stat-value text-2xl md:text-3xl">12</div>
              </div>

              <div className="stat rounded-lg bg-white p-4 shadow-sm">
                <div className="stat-figure text-warning">
                  <NewspaperIcon className="h-8 w-8" />
                </div>
                <div className="stat-title text-sm">Open Tickets</div>
                <div className="stat-value text-2xl md:text-3xl">23</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-lg bg-white p-4 shadow-sm md:p-6">
              <h2 className="mb-4 text-lg font-semibold md:text-xl">
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded p-3 hover:bg-gray-50">
                  <span className="text-sm md:text-base">
                    New ticket created by John Doe
                  </span>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                <div className="flex items-center justify-between rounded p-3 hover:bg-gray-50">
                  <span className="text-sm md:text-base">
                    Agent assigned to ticket #123
                  </span>
                  <span className="text-xs text-gray-500">5 min ago</span>
                </div>
                <div className="flex items-center justify-between rounded p-3 hover:bg-gray-50">
                  <span className="text-sm md:text-base">
                    Ticket #120 resolved
                  </span>
                  <span className="text-xs text-gray-500">10 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <aside className="min-h-full w-64 bg-white md:w-80">
            {/* Logo/Brand */}
            <div className="border-b p-4 md:p-6">
              <h1 className="text-primary text-xl font-bold md:text-2xl">
                compliX
              </h1>
              <p className="text-sm text-gray-600">Admin Panel</p>
            </div>

            {/* Navigation Menu */}
            <ul className="menu space-y-2 p-4 md:p-6">
              <li>
                <Link
                  to="/admin"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                >
                  <PresentationChartLineIcon className="h-5 w-5" />
                  <span className="text-sm md:text-base">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/tickets"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                >
                  <NewspaperIcon className="h-5 w-5" />
                  <span className="text-sm md:text-base">Tickets</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/users"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                >
                  <UserIcon className="h-5 w-5" />
                  <span className="text-sm md:text-base">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/agents"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                >
                  <UserGroupIcon className="h-5 w-5" />
                  <span className="text-sm md:text-base">Agents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/settings"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
                >
                  <Cog6ToothIcon className="h-5 w-5" />
                  <span className="text-sm md:text-base">Settings</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
