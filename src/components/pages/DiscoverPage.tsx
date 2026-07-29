import { Search, Compass, Sparkles, Users, ShieldCheck, Star, ArrowRight } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type DiscoverPageProps = {
  role: UserRole;
};

const DISCOVERY_CARDS = [
  {
    title: "Recommended programs",
    description: "Personalized pathways based on your interests and recent progress.",
    metric: "6 new matches",
    badge: "AI MATCH",
  },
  {
    title: "Popular tutors",
    description: "Discover educators with strong learner reviews and proven outcomes.",
    metric: "Top-rated this week",
    badge: "TRUSTED",
  },
  {
    title: "AI learning prompts",
    description: "Quick suggestions for better learning habits and study sessions.",
    metric: "3 actionable insights",
    badge: "INSIGHT",
  },
];

export default function DiscoverPage({ role }: DiscoverPageProps) {
  const providerSignals = role === "Student"
    ? [
        { name: "Amina Academy", focus: "Verified Arabic instruction", status: "High demand" },
        { name: "Northstar Tutors", focus: "Career-aligned learning tracks", status: "New this week" },
      ]
    : [
        { name: "Learnwise Verified Providers", focus: "Institutional trust signals", status: "Publishing ready" },
        { name: "Peer-reviewed content teams", focus: "Governance and quality assurance", status: "Approved" },
      ];

  return (
    <div className="workspace-page discover-page">
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
        <div className="discovery-filter-bar">
          <label className="filter-field search-field">
            <span className="label-uppercase">Search</span>
            <div className="search-input-row">
              <Search size={16} />
              <input placeholder="Search courses, tutors, programs, or topics" />
            </div>
          </label>
          <div className="discover-tag-row">
            {[
              { label: "Verified", icon: ShieldCheck },
              { label: "High demand", icon: Star },
              { label: "AI match", icon: Sparkles },
            ].map((tag) => {
              const Icon = tag.icon;
              return (
                <span className="trust-badge" key={tag.label}>
                  <Icon size={14} /> {tag.label}
                </span>
              );
            })}
          </div>
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

      <div className="studio-card">
        <div className="section-title-row">
          <div>
            <h2>Discovery snapshot</h2>
            <p className="muted">Quick entry points for what matters most.</p>
          </div>
          <span className="page-pill">Role-aware recommendations</span>
        </div>

        <div className="program-grid discover-grid">
          {DISCOVERY_CARDS.map((card) => (
            <article className="program-card" key={card.title}>
              <div className="program-cover blue">
                <span>{card.badge}</span>
              </div>
              <div className="program-body">
                <h3>{card.title}</h3>
                <p className="muted">{card.description}</p>
                <div className="program-footer">
                  <span>{card.metric}</span>
                  <button className="text-button">
                    View <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="studio-card">
        <div className="section-title-row">
          <div>
            <h2>Verified provider signals</h2>
            <p className="muted">Marketplace and provider visibility stay aligned with trust and quality.</p>
          </div>
        </div>
        <div className="discover-provider-list">
          {providerSignals.map((provider) => (
            <div className="workstream-card" key={provider.name}>
              <div>
                <strong>{provider.name}</strong>
                <p className="muted">{provider.focus}</p>
              </div>
              <span className="page-pill">{provider.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
