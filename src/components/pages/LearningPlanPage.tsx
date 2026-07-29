import { BookOpen, Sparkles, Target } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

interface LearningPlanPageProps {
  role: UserRole;
}

const stats = [
  {
    label: "Next objective",
    value: "Finish core concept units",
    detail: "3 units remain",
    icon: BookOpen,
  },
  {
    label: "Current momentum",
    value: "2 sessions this week",
    detail: "+30% engagement",
    icon: Sparkles,
  },
  {
    label: "Skills targeted",
    value: "Communication, analysis, reflection",
    detail: "Aligned to role pathways",
    icon: Target,
  },
];

const milestones = [
  {
    title: "Concept Mastery",
    description: "Complete foundational units and evidence-based practice.",
    status: "In progress",
  },
  {
    title: "Peer Review",
    description: "Collect feedback from peers and mentors.",
    status: "Ready",
  },
  {
    title: "Portfolio Launch",
    description: "Publish outcomes to your learning showcase.",
    status: "Upcoming",
  },
];

function LearningPlanPage({ role }: LearningPlanPageProps) {
  return (
    <div className="workspace-page plan-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">LEARNING PLAN</p>
          <h1>
            {role === "Student"
              ? "Your learning pathway"
              : role === "Tutor"
              ? "Teaching plan and course roadmap"
              : "Institutional learning strategy"}
          </h1>
          <p className="muted">
            {role === "Student"
              ? "Review milestones, goals, and your next units in a single learning plan."
              : role === "Tutor"
              ? "Align your lesson design with learner milestones and course outcomes."
              : "Coordinate institutional learning pathways across programs and teams."}
          </p>
        </div>
        <button className="primary-button">Refresh goals</button>
      </div>

      <div className="plan-summary-grid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="stat-card" key={item.label}>
              <div className="stat-icon">
                <Icon size={20} />
              </div>
              <span className="stat-label">{item.label}</span>
              <strong className="stat-value">{item.value}</strong>
              <span className="stat-detail">{item.detail}</span>
            </div>
          );
        })}
      </div>

      <div className="section-heading">
        <div>
          <h2>Milestone roadmap</h2>
          <p className="muted">Track progress across your most important learning goals.</p>
        </div>
      </div>

      <div className="program-grid">
        {milestones.map((item) => (
          <article className="program-card" key={item.title}>
            <div className="program-body">
              <div className="progress-label progress-label-row">
                <span>{item.title}</span>
                <span className="tag">{item.status}</span>
              </div>
              <p className="muted plan-action-detail">{item.description}</p>
              <div className="program-footer">
                <span>Plan actions</span>
                <button className="secondary-button">View</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="studio-card next-step-card">
        <div className="next-step-header">
          <div>
            <p className="eyebrow">NEXT STEP</p>
            <h3>{role === "Student" ? "Continue with Unit 04" : role === "Tutor" ? "Finalize the next course plan" : "Approve the institutional milestone"}</h3>
            <p className="muted">
              {role === "Student"
                ? "Finish the next core concept unit and keep your momentum." 
                : role === "Tutor"
                ? "Publish the next course module and share it with learners." 
                : "Confirm the next organizational learning objective."}
            </p>
          </div>
          <button className="secondary-button plan-button">
            Start next step
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearningPlanPage;
