import { PlusCircle, Sparkles, Layers } from "lucide-react";

export default function StudioPage() {
  return (
    <div className="workspace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">STUDIO</p>
          <h1>Content creation & curriculum design</h1>
          <p className="muted">
            Create reusable programs, courses, units, and lessons with AI support and collaboration tools.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><PlusCircle size={20} /></div>
          <span className="stat-label">Draft assets</span>
          <strong className="stat-value">7</strong>
          <span className="stat-detail">In progress</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Sparkles size={20} /></div>
          <span className="stat-label">AI reviews</span>
          <strong className="stat-value">4</strong>
          <span className="stat-detail">Pending suggestions</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Layers size={20} /></div>
          <span className="stat-label">Reusable units</span>
          <strong className="stat-value">12</strong>
          <span className="stat-detail">Ready to publish</span>
        </div>
      </div>

      <div className="studio-card">
        <h3>Studio overview</h3>
        <p className="muted">
          Build and refine learning journeys with shared pedagogical assets, review workflows, and quality checks.
        </p>
      </div>
    </div>
  );
}
