import { BarChart3, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type AnalyticsPageProps = {
  role: UserRole;
};

export default function AnalyticsPage({ role }: AnalyticsPageProps) {
  const insights = role === "Student"
    ? ["Weekly momentum", "Skill growth", "Next best action"]
    : ["Engagement by program", "Outcome quality", "Governance review"];

  return (
    <div className="workspace-page analytics-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">ANALYTICS</p>
          <h1>{role === "Student" ? "Learning performance" : "Provider insights"}</h1>
          <p className="muted">
            {role === "Student"
              ? "Track your progress, strengths, and recommendations for next steps."
              : "Monitor course engagement, learner outcomes, and content quality across your programs."}
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><BarChart3 size={20} /></div>
          <span className="stat-label">Progress score</span>
          <strong className="stat-value">87%</strong>
          <span className="stat-detail">On track</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={20} /></div>
          <span className="stat-label">Growth trend</span>
          <strong className="stat-value">+12%</strong>
          <span className="stat-detail">Last 30 days</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ShieldCheck size={20} /></div>
          <span className="stat-label">Quality rating</span>
          <strong className="stat-value">4.8 / 5</strong>
          <span className="stat-detail">Learner trust</span>
        </div>
      </div>

      <div className="studio-card grid-stack">
        <div>
          <h3>Analytics quick view</h3>
          <p className="muted">
            {role === "Student"
              ? "Use these insights to focus on your next learning goal and improve weaker skill areas."
              : "See which programs have the most momentum and which learning assets need review."}
          </p>
        </div>
        <div className="discover-provider-list">
          {insights.map((item) => (
            <div className="workstream-card" key={item}>
              <div>
                <strong>{item}</strong>
                <p className="muted">Updated with the latest learner or program signal.</p>
              </div>
              <span className="page-pill"><CheckCircle2 size={14} /> Active</span>
            </div>
          ))}
        </div>
        <button className="secondary-button">
          Explore insights <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
