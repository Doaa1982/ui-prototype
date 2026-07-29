import { useMemo, useState } from "react";
import { Search, Globe2, TrendingUp, ShieldCheck, UserCheck, Award } from "lucide-react";
import type { PageId } from "../../types/ui";
import type { UserRole } from "../RoleSwitcher";

type MarketplacePageProps = {
  role: UserRole;
  onNavigate: (page: PageId) => void;
  onSelectProvider: (providerId: string) => void;
};

const MARKETPLACE_LISTINGS = [
  {
    providerId: "prov-1",
    provider: "Nimble Academy",
    offering: "Full Stack Developer Bootcamp",
    type: "Program",
    rank: 1,
    score: "96",
    price: "Subscription",
    participation: "Approved",
    rankingSignals: ["Learner reviews", "Completion rate", "Curriculum freshness"],
  },
  {
    providerId: "prov-2",
    provider: "Bright Skills",
    offering: "AI-Powered Marketing Micro-credential",
    type: "Micro-credential",
    rank: 2,
    score: "91",
    price: "Pay per learner",
    participation: "Pending",
    rankingSignals: ["Demand signal", "Tutor ratings", "Program relevancy"],
  },
  {
    providerId: "prov-3",
    provider: "Open Learning Co.",
    offering: "Enterprise Data Fluency Pathway",
    type: "Program",
    rank: 3,
    score: "89",
    price: "Awarded",
    participation: "Enabled",
    rankingSignals: ["Adoption velocity", "Provider reputation", "Active enrollments"],
  },
];

export default function MarketplacePage({ role, onNavigate, onSelectProvider }: MarketplacePageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [providerType, setProviderType] = useState("All");
  const [scoreRange, setScoreRange] = useState("All");
  const [participationState, setParticipationState] = useState("All");

  const filteredListings = useMemo(
    () =>
      MARKETPLACE_LISTINGS.filter((listing) => {
        const query = searchTerm.trim().toLowerCase();
        const matchesSearch =
          !query ||
          [listing.provider, listing.offering, listing.type, listing.price, listing.participation]
            .some((value) => value.toLowerCase().includes(query));
        const matchesType = providerType === "All" || listing.type === providerType;
        const scoreValue = Number(listing.score);
        const matchesScore =
          scoreRange === "All" ||
          (scoreRange === "90+" && scoreValue >= 90) ||
          (scoreRange === "85+" && scoreValue >= 85) ||
          (scoreRange === "80+" && scoreValue >= 80);
        const matchesParticipation =
          participationState === "All" || listing.participation === participationState;

        return matchesSearch && matchesType && matchesScore && matchesParticipation;
      }),
    [searchTerm, providerType, scoreRange, participationState]
  );

  return (
    <div className="workspace-page marketplace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">MARKETPLACE</p>
          <h1>{role === "Student" ? "Discover curated learning partners" : "Manage your marketplace presence"}</h1>
          <p className="muted">
            {role === "Student"
              ? "Search provider offerings, compare ranking signals, and join marketplace-ready programs."
              : "Monitor provider listings, participation status, and the signals that matter for discoverability."}
          </p>
        </div>
      </div>

      <div className="studio-card">
        <div className="search-banner">
          <Search size={18} />
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search provider, program, or credential"
          />
        </div>
      </div>

      <div className="studio-card marketplace-filter-toolbar">
        <div className="filter-field">
          <label>Provider type</label>
          <select value={providerType} onChange={(event) => setProviderType(event.target.value)}>
            <option>All</option>
            <option>Program</option>
            <option>Micro-credential</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Ranking score</label>
          <select value={scoreRange} onChange={(event) => setScoreRange(event.target.value)}>
            <option>All</option>
            <option>90+</option>
            <option>85+</option>
            <option>80+</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Participation state</label>
          <select value={participationState} onChange={(event) => setParticipationState(event.target.value)}>
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Enabled</option>
          </select>
        </div>

        <div className="filter-summary">
          <span>{filteredListings.length} listing{filteredListings.length === 1 ? "" : "s"} matched</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Globe2 size={20} /></div>
          <span className="stat-label">Provider listings</span>
          <strong className="stat-value">{MARKETPLACE_LISTINGS.length}</strong>
          <span className="stat-detail">Live and audited</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={20} /></div>
          <span className="stat-label">Top signal</span>
          <strong className="stat-value">Quality score</strong>
          <span className="stat-detail">Learner ratings + completion</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ShieldCheck size={20} /></div>
          <span className="stat-label">Marketplace state</span>
          <strong className="stat-value">Participation</strong>
          <span className="stat-detail">Approved, pending, enabled</span>
        </div>
      </div>

      <div className="studio-card marketplace-listing-card">
        <div className="studio-card-header">
          <div>
            <h3>Listings & discovery rank</h3>
            <p className="muted">Browse provider offers with transparent ranking signals and status.</p>
          </div>
          <button className="primary-button">
            <UserCheck size={16} /> Join Marketplace
          </button>
        </div>

        <div className="marketplace-table">
          <div className="table-row table-header">
            <span>Rank</span>
            <span>Provider</span>
            <span>Offering</span>
            <span>Type</span>
            <span>Score</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {filteredListings.map((listing) => (
            <div key={listing.providerId + listing.offering} className="table-row">
              <span>{listing.rank}</span>
              <span>
                <strong>{listing.provider}</strong>
                <div className="muted marketplace-subtext">{listing.price}</div>
              </span>
              <span>{listing.offering}</span>
              <span>{listing.type}</span>
              <span>{listing.score}</span>
              <span>
                <span className={`tag ${listing.participation === "Pending" ? "tag-warning" : listing.participation === "Approved" ? "tag-success" : "tag-info"}`}>
                  {listing.participation}
                </span>
              </span>
              <span>
                <button
                  className="text-button view-profile-button"
                  onClick={() => {
                    onSelectProvider(listing.providerId);
                    onNavigate("Provider Profile");
                  }}
                >
                  View profile
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Ranking signals</h2>
          <p className="muted">Understand what improves your visibility on the marketplace.</p>
        </div>
      </div>

      <div className="program-grid marketplace-signals-grid">
        {filteredListings.map((listing) => (
          <article className="program-card" key={listing.offering}>
            <div className="program-cover green">
              <span>SIGNAL</span>
            </div>
            <div className="program-body">
              <h3>{listing.offering}</h3>
              <p className="muted">{listing.provider}</p>
              <ul className="marketplace-signals-list">
                {listing.rankingSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
              <div className="program-footer">
                <Award size={16} />
                <span>{listing.participation}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
