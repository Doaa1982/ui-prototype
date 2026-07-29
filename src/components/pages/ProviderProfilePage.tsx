import { Globe2, ShieldCheck, Star, Layers, Users, BookOpen, Award, Clock3 } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import type { EducationalProvider, EducationalPortfolio } from "../../types/domain";

type ProviderProfilePageProps = {
  role: UserRole;
  providerId: string;
};

type ProviderRecord = EducationalProvider & {
  growthStage: "Seed" | "Growth" | "Mature";
  staffSize: string;
  headquarters: string;
  established: string;
  keyFocus: string;
  brandTagline: string;
};

const PROVIDER_PROFILES: Record<string, ProviderRecord> = {
  "prov-1": {
    id: "prov-1",
    name: "Nimble Academy",
    type: "Academy",
    description:
      "A modern learning provider focused on fast-moving digital skills, hybrid delivery, and employer-aligned pathways.",
    brandColors: { primary: "#3978ee", accent: "#eaf2ff" },
    logoUrl: "",
    ownerPersonId: "owner-1",
    learningSpaceId: "space-1",
    reputationScore: 92,
    verificationStatus: "Verified",
    growthStage: "Growth",
    staffSize: "48 educators",
    headquarters: "Cairo, Egypt",
    established: "2019",
    keyFocus: "Blended tech and language pathways for working professionals.",
    brandTagline: "Turning talent into ready-to-work learners",
  },
  "prov-2": {
    id: "prov-2",
    name: "Bright Skills",
    type: "TrainingCentre",
    description:
      "An agile provider specializing in micro-credentials for marketing, design, and applied AI learning.",
    brandColors: { primary: "#8465d9", accent: "#f4eefb" },
    logoUrl: "",
    ownerPersonId: "owner-2",
    learningSpaceId: "space-2",
    reputationScore: 88,
    verificationStatus: "Pending",
    growthStage: "Seed",
    staffSize: "24 educators",
    headquarters: "Dubai, UAE",
    established: "2021",
    keyFocus: "Rapidly deployable skills credentials for high-demand roles.",
    brandTagline: "Learning built for fast-moving careers",
  },
};

// Educational Portfolio (EducationalProviderModel4.md §12, identityAndMembership.md §10).
// Distinct from Reputation/Verification: this is the curated "evidence of work" block —
// biography, teaching philosophy, published content, and career statistics.
const PROVIDER_PORTFOLIOS: Record<string, EducationalPortfolio> = {
  "prov-1": {
    providerId: "prov-1",
    biography:
      "Nimble Academy was founded by a team of working engineers and language educators who believed professional upskilling shouldn't feel like a lecture hall. The teaching team blends industry practitioners with instructional designers.",
    teachingPhilosophy:
      "Learners retain what they practice, not what they're told. Every Unit pairs a short explanation with an immediate, real-world task.",
    expertiseAreas: ["Full-Stack Development", "Applied AI", "Professional Arabic", "Data Analytics"],
    languages: ["English", "Arabic", "French"],
    yearsOfExperience: 7,
    certifications: ["ISO 21001 Educational Organization", "AWS Academy Partner"],
    achievements: [
      "1,000+ students taught",
      "96 Reputation Score, top 5% of Academies",
      "Featured Marketplace Partner, 2025",
    ],
    publishedProgramTitles: ["Full Stack Developer Bootcamp", "Arabic for Business Professionals"],
    publishedCourseTitles: ["Arabic Level A1", "Arabic Level A2", "Python for Data Analysis"],
    publishedUnitTitles: ["Greetings & Introductions", "Pandas & DataFrames", "Travel & Dining Out"],
    statistics: {
      studentsTaught: 1240,
      unitsPublished: 34,
      completionRate: 84,
      averageRating: 4.8,
      responseTimeHours: 3,
    },
  },
  "prov-2": {
    providerId: "prov-2",
    biography:
      "Bright Skills is a small, fast-moving training team specializing in short, outcome-focused micro-credentials for marketing and design professionals.",
    teachingPhilosophy:
      "Busy professionals need proof of skill, not a semester. Every credential maps to one job-relevant outcome.",
    expertiseAreas: ["Digital Marketing", "UX Design", "Applied AI for Marketers"],
    languages: ["English"],
    yearsOfExperience: 3,
    certifications: ["Google Digital Marketing Certified Trainer"],
    achievements: ["300+ credentials issued", "88 Reputation Score"],
    publishedProgramTitles: ["AI-Powered Marketing Micro-credential"],
    publishedCourseTitles: ["Marketing Analytics Fundamentals"],
    publishedUnitTitles: ["Writing High-Converting Ad Copy"],
    statistics: {
      studentsTaught: 310,
      unitsPublished: 9,
      completionRate: 77,
      averageRating: 4.5,
      responseTimeHours: 6,
    },
  },
};

export default function ProviderProfilePage({ role, providerId }: ProviderProfilePageProps) {
  const provider = PROVIDER_PROFILES[providerId] ?? PROVIDER_PROFILES["prov-1"];
  const portfolio = PROVIDER_PORTFOLIOS[providerId] ?? PROVIDER_PORTFOLIOS["prov-1"];

  return (
    <div className="workspace-page provider-profile-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">PROVIDER PROFILE</p>
          <h1>{role === "Organization" ? "Your organization identity" : "Provider brand overview"}</h1>
          <p className="muted">
            {role === "Organization"
              ? "Review the provider identity, brand positioning, and growth stage for your academy."
              : "Explore the provider’s brand, type, and marketplace readiness at a glance."}
          </p>
        </div>
      </div>

      <div className="studio-card provider-profile-card">
        <div className="provider-profile-header" style={{ background: provider.brandColors.accent }}>
          <div className="provider-profile-logo" style={{ background: provider.brandColors.primary }}>
            <span>{provider.name.split(" ").map((word) => word[0]).join("")}</span>
          </div>
          <div>
            <p className="eyebrow">Provider Identity</p>
            <h2>{provider.name}</h2>
            <p className="muted">{provider.brandTagline}</p>
          </div>
        </div>

        <div className="provider-profile-grid">
          <div className="profile-metric-card">
            <span className="metric-label">Provider type</span>
            <strong>{provider.type}</strong>
          </div>
          <div className="profile-metric-card">
            <span className="metric-label">Growth stage</span>
            <strong>{provider.growthStage}</strong>
          </div>
          <div className="profile-metric-card">
            <span className="metric-label">Reputation score</span>
            <strong>{provider.reputationScore}</strong>
          </div>
          <div className="profile-metric-card">
            <span className="metric-label">Status</span>
            <strong>{provider.verificationStatus}</strong>
          </div>
        </div>

        <div className="provider-profile-highlights">
          <div className="provider-highlight">
            <div className="highlight-icon"><Globe2 size={18} /></div>
            <div>
              <p className="metric-label">Headquarters</p>
              <strong>{provider.headquarters}</strong>
            </div>
          </div>
          <div className="provider-highlight">
            <div className="highlight-icon"><Users size={18} /></div>
            <div>
              <p className="metric-label">Team size</p>
              <strong>{provider.staffSize}</strong>
            </div>
          </div>
          <div className="provider-highlight">
            <div className="highlight-icon"><Layers size={18} /></div>
            <div>
              <p className="metric-label">Established</p>
              <strong>{provider.established}</strong>
            </div>
          </div>
        </div>

        <div className="studio-card grid-stack">
          <div>
            <h3>Brand profile</h3>
            <p className="muted">{provider.description}</p>
          </div>
          <div className="profile-metric-row">
            <div>
              <span className="metric-label">Verification</span>
              <p>
                <ShieldCheck size={14} /> {provider.verificationStatus}
              </p>
            </div>
            <div>
              <span className="metric-label">Reputation</span>
              <p>
                <Star size={14} /> {provider.reputationScore}/100
              </p>
            </div>
          </div>
          <p className="portfolio-verification-note muted">
            Verification confirms authenticity only — it does not imply educational quality.
            Reputation reflects trust earned through Reviews and educational contribution over time.
          </p>
        </div>
      </div>

      {/* --- Educational Portfolio (EducationalProviderModel4.md §12) --- */}
      <div className="studio-card portfolio-section">
        <div className="profile-card-header">
          <span className="profile-icon"><BookOpen size={20} /></span>
          <div>
            <h3>Educational Portfolio</h3>
            <p className="muted">
              Curated evidence of educational work — biography, philosophy, and published content —
              distinct from the raw Reputation Score above.
            </p>
          </div>
        </div>

        <div className="portfolio-about-grid">
          <div>
            <span className="metric-label">Biography</span>
            <p className="portfolio-body-text">{portfolio.biography}</p>
          </div>
          <div>
            <span className="metric-label">Teaching philosophy</span>
            <p className="portfolio-body-text">{portfolio.teachingPhilosophy}</p>
          </div>
        </div>

        <div className="portfolio-tag-group">
          <span className="metric-label">Areas of expertise</span>
          <div className="portfolio-tag-row">
            {portfolio.expertiseAreas.map((area) => (
              <span key={area} className="tag portfolio-tag">{area}</span>
            ))}
          </div>
        </div>

        <div className="portfolio-tag-group">
          <span className="metric-label">Languages</span>
          <div className="portfolio-tag-row">
            {portfolio.languages.map((lang) => (
              <span key={lang} className="tag portfolio-tag portfolio-tag-muted">{lang}</span>
            ))}
          </div>
        </div>

        <div className="portfolio-columns">
          <div>
            <span className="metric-label">
              <Award size={13} /> Certifications
            </span>
            <ul className="portfolio-list">
              {portfolio.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="metric-label">
              <Star size={13} /> Achievements
            </span>
            <ul className="portfolio-list">
              {portfolio.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="portfolio-columns">
          <div>
            <span className="metric-label">Published Programs</span>
            <ul className="portfolio-list">
              {portfolio.publishedProgramTitles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="metric-label">Published Courses</span>
            <ul className="portfolio-list">
              {portfolio.publishedCourseTitles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="metric-label">Published Units</span>
            <ul className="portfolio-list">
              {portfolio.publishedUnitTitles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="portfolio-stats-grid">
          <div className="stat-card">
            <div className="stat-icon"><Users size={20} /></div>
            <span className="stat-label">Students taught</span>
            <strong className="stat-value">{portfolio.statistics.studentsTaught}</strong>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Layers size={20} /></div>
            <span className="stat-label">Units published</span>
            <strong className="stat-value">{portfolio.statistics.unitsPublished}</strong>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><ShieldCheck size={20} /></div>
            <span className="stat-label">Completion rate</span>
            <strong className="stat-value">{portfolio.statistics.completionRate}%</strong>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Star size={20} /></div>
            <span className="stat-label">Average rating</span>
            <strong className="stat-value">{portfolio.statistics.averageRating}/5</strong>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Clock3 size={20} /></div>
            <span className="stat-label">Response time</span>
            <strong className="stat-value">{portfolio.statistics.responseTimeHours}h</strong>
          </div>
        </div>
        <p className="muted portfolio-stats-note">
          Statistics provide context rather than competition, per the Tutor Portfolio guidance.
        </p>
      </div>
    </div>
  );
}
