import { Globe2, ShieldCheck, Star, Layers, Users } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import type { EducationalProvider } from "../../types/domain";

type ProviderProfilePageProps = {
  role: UserRole;
  providerId: string;
};

const PROVIDER_PROFILES: Record<
  string,
  EducationalProvider & {
    growthStage: "Seed" | "Growth" | "Mature";
    staffSize: string;
    headquarters: string;
    established: string;
    keyFocus: string;
    brandTagline: string;
  }
> = {
  "prov-1": {
    id: "prov-1",
    name: "Nimble Academy",
    type: "Academy",
    description: "A modern learning provider focused on fast-moving digital skills, hybrid delivery, and employer-aligned pathways.",
    brandColors: {
      primary: "#3978ee",
      accent: "#eaf2ff",
    },
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
    description: "An agile provider specializing in micro-credentials for marketing, design, and applied AI learning.",
    brandColors: {
      primary: "#8465d9",
      accent: "#f4eefb",
    },
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

export default function ProviderProfilePage({ role, providerId }: ProviderProfilePageProps) {
  const provider = PROVIDER_PROFILES[providerId] ?? PROVIDER_PROFILES["prov-1"];
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
        </div>
      </div>
    </div>
  );
}
