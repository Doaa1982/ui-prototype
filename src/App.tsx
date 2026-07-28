import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Palette,
  Search,
  Settings,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import RoleSwitcher, {
  type UserRole,
} from "./components/RoleSwitcher";
import StudioPage from "./components/Studio/StudioPage";
import EducationalIntelligencePanel from "./components/EducationalIntelligencePanel";
import UnitsView from "./components/UnitsView";
import ProgramsView from "./components/ProgramsView";

const programs = [
  {
    title: "Arabic Language Track",
    description: "Build practical Arabic communication skills.",
    progress: 68,
    lessons: "24 of 36 lessons",
    color: "blue",
  },
  {
    title: "Data Science Bootcamp",
    description: "Learn data analysis and machine learning fundamentals.",
    progress: 34,
    lessons: "12 of 35 lessons",
    color: "purple",
  },
  {
    title: "English for Business",
    description: "Improve communication in professional environments.",
    progress: 82,
    lessons: "18 of 22 lessons",
    color: "green",
  },
];

const baseNavigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Programs", icon: GraduationCap },
  { label: "Units & Lessons", icon: Layers },
  { label: "AI Intelligence", icon: Sparkles },
  { label: "Collaboration", icon: Users },
  { label: "Analytics", icon: BarChart3 },
];

const studioNavItem = { label: "Studio", icon: Palette };

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [role, setRole] = useState<UserRole>("Student");
  const navigation =
    role === "Student" ? baseNavigation : [...baseNavigation, studioNavItem];

  function handleRoleChange(nextRole: UserRole) {
    setRole(nextRole);
    if (nextRole === "Student" && activePage === "Studio") {
      setActivePage("Dashboard");
    }
  }
  const roleConfig = {
    Student: {
      name: "Dody Ahmed",
      account: "Student account",
      title: "Good morning, Dody.",
      subtitle: "Continue your learning journey and make progress today.",
    },
    Tutor: {
      name: "Dody Ahmed",
      account: "Tutor account",
      title: "Welcome back, Dody.",
      subtitle: "Create better lessons and support your learners.",
    },
    Organization: {
      name: "Dody Learning Group",
      account: "Organization account",
      title: "Welcome to your organization.",
      subtitle: "Manage learning spaces, members, and educational outcomes.",
    },
  }[role];
  return (
    <div className="app">
      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
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
                setActivePage(label);
                setSidebarOpen(false);
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
           <strong>{roleConfig.name}</strong>
<span>{roleConfig.account}</span>
          </div>
          <ChevronRight size={16} />
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>

          <div className="breadcrumb">
            Workspace <ChevronRight size={15} /> {activePage}
          </div>

          <div className="topbar-actions">
 <RoleSwitcher role={role} onChange={handleRoleChange} />

  <label className="search">
    <Search size={17} />
    <input placeholder="Search your learning space" />
  </label>

  <div className="avatar avatar-small">DA</div>
          </div>
        </header>

        <section className="page-content">
          {activePage === "Studio" && <StudioPage />}
          {activePage === "Programs" && <ProgramsView role={role} />}
          {activePage === "Units & Lessons" && <UnitsView />}
          {activePage === "AI Intelligence" && <EducationalIntelligencePanel />}
          {activePage !== "Studio" && activePage !== "Programs" && activePage !== "Units & Lessons" && activePage !== "AI Intelligence" && (
            <>
          <div className="welcome-row">
            <div>
              <p className="eyebrow">FRIDAY, JULY 24, 2026</p>
            <h1>{roleConfig.title}</h1>
<p className="muted">{roleConfig.subtitle}</p>
            </div>
            <button className="primary-button" onClick={() => setActivePage("Programs")}>
              Explore programs <ArrowRight size={17} />
            </button>
          </div>

          <div className="stats-grid">
            <StatCard
              icon={<BookOpen size={20} />}
              label="Active programs"
              value="3"
              detail="+1 this month"
            />
            <StatCard
              icon={<ClipboardCheck size={20} />}
              label="Lessons completed"
              value="54"
              detail="+8 this week"
            />
            <StatCard
              icon={<BarChart3 size={20} />}
              label="Learning streak"
              value="12 days"
              detail="Personal best"
            />
            <StatCard
              icon={<MessageSquare size={20} />}
              label="Community activity"
              value="18"
              detail="New discussions"
            />
          </div>

          <div className="section-heading">
            <div>
              <h2>Continue learning</h2>
              <p className="muted">Pick up where you left off.</p>
            </div>
            <button className="text-button" onClick={() => setActivePage("Programs")}>View all <ArrowRight size={16} /></button>
          </div>

          <div className="continue-card">
            <div className="course-icon blue-icon"><BookOpen size={25} /></div>
            <div className="continue-info">
              <span className="tag">ARABIC LANGUAGE TRACK</span>
              <h3>Unit 04 · Everyday Conversations</h3>
              <p className="muted">Lesson 3 of 6 · Asking for directions</p>
              <div className="progress-line">
                <span style={{ width: "68%" }} />
              </div>
            </div>
            <button className="secondary-button" onClick={() => setActivePage("Units & Lessons")}>Resume lesson <ArrowRight size={16} /></button>
          </div>

          <div className="section-heading programs-heading">
            <div>
              <h2>Your programs</h2>
              <p className="muted">Track your progress across learning paths.</p>
            </div>
            <button className="text-button" onClick={() => setActivePage("Programs")}>Manage programs <ArrowRight size={16} /></button>
          </div>

          <div className="program-grid">
            {programs.map((program) => (
              <article className="program-card" key={program.title}>
                <div className={`program-cover ${program.color}`}>
                  <GraduationCap size={28} />
                  <span>PROGRAM</span>
                </div>
                <div className="program-body">
                  <h3>{program.title}</h3>
                  <p className="muted">{program.description}</p>
                  <div className="program-progress">
                    <div className="progress-label">
                      <span>Progress</span>
                      <strong>{program.progress}%</strong>
                    </div>
                    <div className="progress-line">
                      <span style={{ width: `${program.progress}%` }} />
                    </div>
                  </div>
                  <div className="program-footer">
                    <span>{program.lessons}</span>
                    <button aria-label={`Open ${program.title}`} onClick={() => setActivePage("Programs")}>
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      <span className="stat-detail">{detail}</span>
    </div>
  );
}

export default App;