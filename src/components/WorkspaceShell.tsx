import {
  BarChart3,
  BookOpen,
  Bot,
  ChevronRight,
  Compass,
  DollarSign,
  Globe2,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Menu,
  Palette,
  Search,
  Settings,
  Sparkles,
  Users,
  User,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import RoleSwitcher, { type UserRole } from "./RoleSwitcher";
import type { PageId } from "../types/ui";

type WorkspaceShellProps = {
  activePage: PageId;
  role: UserRole;
  sidebarOpen: boolean;
  onNavigate: (page: PageId) => void;
  onRoleChange: (role: UserRole) => void;
  onSidebarToggle: (open: boolean) => void;
  children: React.ReactNode;
};

const baseNavigation: { label: PageId; icon: LucideIcon }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Discover", icon: Compass },
  { label: "Pricing", icon: DollarSign },
  { label: "Members", icon: Users },
  { label: "Marketplace", icon: Globe2 },
  { label: "Provider Profile", icon: Users },
  { label: "Profile", icon: User },
  { label: "Learning Plan", icon: BookOpen },
  { label: "Enrollment", icon: Layers },
  { label: "Programs", icon: GraduationCap },
  { label: "Units & Lessons", icon: Layers },
  { label: "AI Intelligence", icon: Sparkles },
  { label: "Collaboration", icon: Users },
  { label: "Analytics", icon: BarChart3 },
];

const studioNavItem: { label: PageId; icon: LucideIcon } = {
  label: "Studio",
  icon: Palette,
};

export default function WorkspaceShell({
  activePage,
  role,
  sidebarOpen,
  onNavigate,
  onRoleChange,
  onSidebarToggle,
  children,
}: WorkspaceShellProps) {
  const navigation =
    role === "Student" ? baseNavigation : [...baseNavigation, studioNavItem];

  return (
    <div className="app">
      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          aria-label="Close navigation"
          onClick={() => onSidebarToggle(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">
            <GraduationCap size={22} />
          </div>
          <div>
            <strong>Learnwise</strong>
            <span>AI Learning Platform</span>
          </div>
          <button
            className="mobile-close"
            onClick={() => onSidebarToggle(false)}
            aria-label="Close navigation"
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        <nav className="navigation">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${activePage === label ? "active" : ""}`}
              onClick={() => {
                onNavigate(label);
                onSidebarToggle(false);
              }}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item">
            <Bot size={19} />
            <span>AI Assistance</span>
            <span className="status-dot" />
          </button>
          <button className="nav-item">
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </div>

        <div className="profile-mini">
          <div className="avatar">DA</div>
          <div>
            <strong>{role}</strong>
            <span>{role.toLowerCase()} account</span>
          </div>
          <ChevronRight size={16} />
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => onSidebarToggle(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>

          <div className="breadcrumb">
            Workspace <ChevronRight size={15} /> {activePage}
          </div>

          <div className="topbar-actions">
            <RoleSwitcher role={role} onChange={onRoleChange} />

            <label className="search">
              <Search size={17} />
              <input placeholder="Search your learning space" />
            </label>

            <div className="avatar avatar-small">DA</div>
          </div>
        </header>

        <section className="page-content">{children}</section>
      </main>
    </div>
  );
}
