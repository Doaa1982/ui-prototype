import { Search, Compass, Sparkles, Users } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type DiscoverPageProps = {
  role: UserRole;
};

const DISCOVERY_CARDS = [
  {
    title: "Recommended programs",
    description: "Personalized pathways based on your interests and recent progress.",
    metric: "6 new matches",
  },
  {
    title: "Popular tutors",
    description: "Discover educators with strong learner reviews and proven outcomes.",
    metric: "Top-rated this week",
  },
  {
    title: "AI learning prompts",
    description: "Quick suggestions for better learning habits and study sessions.",
    metric: "3 actionable insights",
  },
];

export default function DiscoverPage({ role }: DiscoverPageProps) {
  return (
    <div className="workspace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">DISCOVER</p>
          <h1>
            {role === "Student"
              ? "Find your next learning path"
              : "Explore new learning opportunities"}
          </h1>
          <p className="muted">
            {role === "Student"
              ? "Search for programs, courses, tutors, and learning resources tailored to you."
              : "Explore how your content and offerings reach learners across the platform."}
          </p>
        </div>
      </div>

      <div className="studio-card">
        <div className="search-banner">
          <Search size={18} />
          <input placeholder="Search courses, tutors, programs, or topics" />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Compass size={20} /></div>
          <span className="stat-label">Discovery focus</span>
          <strong className="stat-value">Personalized</strong>
          <span className="stat-detail">Relevance-based ranking</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Users size={20} /></div>
          <span className="stat-label">Trusted providers</span>
          <strong className="stat-value">24</strong>
          <span className="stat-detail">Active this week</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Sparkles size={20} /></div>
          <span className="stat-label">AI recommendations</span>
          <strong className="stat-value">7</strong>
          <span className="stat-detail">Ready to explore</span>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Discovery snapshot</h2>
          <p className="muted">Quick entry points for what matters most.</p>
        </div>
      </div>

      <div className="program-grid">
        {DISCOVERY_CARDS.map((card) => (
          <article className="program-card" key={card.title}>
            <div className="program-cover blue">
              <span>DISCOVERY</span>
            </div>
            <div className="program-body">
              <h3>{card.title}</h3>
              <p className="muted">{card.description}</p>
              <div className="program-footer">
                <span>{card.metric}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
