import { Users, MessageSquare, Share2 } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type CollaborationPageProps = {
  role: UserRole;
};

export default function CollaborationPage({ role }: CollaborationPageProps) {
  return (
    <div className="workspace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">COLLABORATION</p>
          <h1>
            {role === "Student" ? "Learning communities" : "Team collaboration"}
          </h1>
          <p className="muted">
            {role === "Student"
              ? "Join discussions, stay connected with tutors, and collaborate on your learning journey."
              : "Coordinate with your team, share assets, and keep everyone aligned across learning initiatives."}
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Users size={20} /></div>
          <span className="stat-label">Active groups</span>
          <strong className="stat-value">8</strong>
          <span className="stat-detail">Recent engagement</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><MessageSquare size={20} /></div>
          <span className="stat-label">Messages</span>
          <strong className="stat-value">24</strong>
          <span className="stat-detail">Unread conversations</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Share2 size={20} /></div>
          <span className="stat-label">Shared resources</span>
          <strong className="stat-value">13</strong>
          <span className="stat-detail">Collaboration-ready</span>
        </div>
      </div>

      <div className="studio-card grid-stack">
        <div>
          <h3>Collaboration snapshot</h3>
          <p className="muted">
            {role === "Student"
              ? "Find active study groups, upcoming sessions, and shared notes from your learning community."
              : "Review team activity, open authoring requests, and shared curriculum drafts in one place."}
          </p>
        </div>
        <button className="secondary-button">Visit workspace</button>
      </div>
    </div>
  );
}
