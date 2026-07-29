import {
  ArrowRight,
  BookOpen,
  BarChart3,
  ClipboardCheck,
  GraduationCap,
  MessageSquare,
} from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import type { PageId } from "../../types/ui";

type ProgramSummary = {
  title: string;
  description: string;
  progress: number;
  lessons: string;
  color: string;
};

type DashboardPageProps = {
  role: UserRole;
  programs: ProgramSummary[];
  onNavigate: (page: PageId) => void;
};

const roleConfig: Record<
  UserRole,
  { name: string; account: string; title: string; subtitle: string }
> = {
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
};

export default function DashboardPage({
  role,
  programs,
  onNavigate,
}: DashboardPageProps) {
  const config = roleConfig[role];

  return (
    <div className="workspace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">FRIDAY, JULY 24, 2026</p>
          <h1>{config.title}</h1>
          <p className="muted">{config.subtitle}</p>
        </div>
        <button className="primary-button" onClick={() => onNavigate("Programs")}> 
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
        <button className="text-button" onClick={() => onNavigate("Programs")}>View all <ArrowRight size={16} /></button>
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
        <button className="secondary-button" onClick={() => onNavigate("Units & Lessons")}>Resume lesson <ArrowRight size={16} /></button>
      </div>

      <div className="section-heading programs-heading">
        <div>
          <h2>Your programs</h2>
          <p className="muted">Track your progress across learning paths.</p>
        </div>
        <button className="text-button" onClick={() => onNavigate("Programs")}>Manage programs <ArrowRight size={16} /></button>
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
                <button aria-label={`Open ${program.title}`} onClick={() => onNavigate("Programs")}> 
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
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
