import { useState } from "react";
import {
  User,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
  Users2,
  Trophy,
  Clock3,
} from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import type {
  Achievement,
  AchievementCategory,
  MembershipSummary,
  ProfessionalIdentity,
  VerificationBadge,
} from "../../types/domain";
import { MEMBERSHIP_ROLE_RESPONSIBILITIES } from "../../types/domain";

type ProfileTab = "profile" | "identity" | "achievements" | "membership";

const initialPreferences = [
  { label: "Preferred pace: Moderate", enabled: true },
  { label: "Learning style: Visual + interactive", enabled: true },
  { label: "Notifications: Daily summary", enabled: false },
];

// --- Mock data standing in for what would come from the Identity & Membership domain ---

const PROFESSIONAL_IDENTITY: ProfessionalIdentity = {
  personId: "person-1",
  professionalBiography:
    "Seven years teaching Arabic and English to adult professionals, with a focus on conversational fluency over rote grammar drills.",
  teachingPhilosophy:
    "Learners remember what they use. Every session pairs a short explanation with an immediate real-world task.",
  expertiseAreas: ["Conversational Arabic", "Business English", "Exam Preparation"],
  subjects: ["Arabic", "English"],
  languages: ["Arabic", "English", "French"],
  yearsOfExperience: 7,
  certifications: ["CELTA", "Arabic Language Teaching Diploma"],
  achievements: [],
  verifications: [
    { type: "Identity", status: "Verified", verifiedAt: "2024-02-11" },
    { type: "TeachingCertificate", status: "Verified", verifiedAt: "2024-02-14" },
    { type: "Degree", status: "Pending" },
  ],
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    category: "Teaching",
    title: "First Published Unit",
    description: "Published your first reusable Unit to the platform.",
    earnedAt: "2023-05-02",
  },
  {
    id: "ach-2",
    category: "Teaching",
    title: "100 Lessons Delivered",
    description: "Delivered 100 Lessons across your Learning Space.",
    earnedAt: "2024-01-18",
  },
  {
    id: "ach-3",
    category: "Learning",
    title: "Program Completed",
    description: "Completed the Arabic Language Diploma track.",
    earnedAt: "2022-11-30",
  },
  {
    id: "ach-4",
    category: "Learning",
    title: "14-Day Learning Streak",
    description: "Studied for 14 consecutive days.",
    earnedAt: "2024-03-09",
  },
  {
    id: "ach-5",
    category: "Community",
    title: "Peer Reviewer",
    description: "Reviewed 10 fellow educators' Units.",
    earnedAt: "2023-09-21",
  },
];

const MEMBERSHIP: MembershipSummary = {
  role: "Tutor",
  status: "Active",
  targetType: "LearningSpace",
  targetName: "Dody Ahmed — Personal Learning Space",
  joinedAt: "2022-08-01",
  lifecycleStage: "Active Participation",
};

const ORG_MEMBERSHIP: MembershipSummary = {
  role: "Owner",
  status: "Active",
  targetType: "Organization",
  targetName: "Dody Learning Group",
  joinedAt: "2023-01-15",
  lifecycleStage: "Active Participation",
};

const STUDENT_MEMBERSHIP: MembershipSummary = {
  role: "Student",
  status: "Active",
  targetType: "LearningSpace",
  targetName: "Nimble Academy",
  joinedAt: "2024-02-01",
  lifecycleStage: "Active Participation",
};

function membershipFor(role: UserRole): MembershipSummary {
  if (role === "Organization") return ORG_MEMBERSHIP;
  if (role === "Tutor") return MEMBERSHIP;
  return STUDENT_MEMBERSHIP;
}

function relevantAchievementCategories(role: UserRole): AchievementCategory[] {
  if (role === "Student") return ["Learning", "Community"];
  return ["Teaching", "Community"];
}

const VERIFICATION_LABEL: Record<VerificationBadge["type"], string> = {
  Identity: "Identity Verification",
  Organization: "Organization Verification",
  Degree: "Degree Verification",
  TeachingCertificate: "Teaching Certificate Verification",
  Business: "Business Verification",
};

export default function ProfilePage({ role }: { role: UserRole }) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("profile");
  const [preferences, setPreferences] = useState(initialPreferences);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [bio, setBio] = useState(
    role === "Student"
      ? "Learning Arabic and data analysis alongside a full-time job."
      : "Independent educator building a personal teaching brand."
  );

  const membership = membershipFor(role);
  const showProfessionalIdentity = role !== "Student";
  const achievementCategories = relevantAchievementCategories(role);
  const visibleAchievements = ACHIEVEMENTS.filter((a) =>
    achievementCategories.includes(a.category)
  );

  function togglePreference(index: number) {
    setPreferences((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  }

  function triggerToast(message: string) {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(null), 2400);
  }

  const tabs: { id: ProfileTab; label: string; icon: typeof User }[] = [
    { id: "profile", label: "Profile", icon: User },
    ...(showProfessionalIdentity
      ? [{ id: "identity" as const, label: "Professional Identity", icon: GraduationCap }]
      : []),
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "membership", label: "Membership", icon: Users2 },
  ];

  return (
    <div className="workspace-page">
      {toastMessage && <div className="toast-banner">{toastMessage}</div>}

      <div className="welcome-row">
        <div>
          <p className="eyebrow">IDENTITY</p>
          <h1>{role === "Student" ? "Your learner profile" : "Your identity & membership"}</h1>
          <p className="muted">
            {role === "Student"
              ? "Your personal profile stays yours regardless of which providers you learn from."
              : "Your Profile is personal and private. Professional Identity belongs to you and travels with you across every Organization you join."}
          </p>
        </div>
      </div>

      <div className="studio-tabs">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`studio-tab${activeTab === id ? " studio-tab-active" : ""}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {activeTab === "profile" && (
        <div className="studio-panel">
          <div className="studio-card">
            <h3>
              <User size={18} /> Profile
            </h3>
            <p className="muted">
              Personal information used to identify you. Some fields are public, others stay
              private.
            </p>
            <label className="studio-field">
              <span>Biography</span>
              <textarea
                className="studio-textarea"
                rows={3}
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              />
            </label>
            <div className="profile-field-row">
              <label className="studio-field">
                <span>Languages</span>
                <input className="studio-text-input" defaultValue="Arabic, English" />
              </label>
              <label className="studio-field">
                <span>Time zone</span>
                <input className="studio-text-input" defaultValue="Asia/Bangkok (GMT+7)" />
              </label>
            </div>
            <div className="modal-actions">
              <button className="primary-button" onClick={() => triggerToast("Profile saved.")}>
                Save profile
              </button>
            </div>
          </div>

          <div className="studio-card">
            <div className="profile-card-header">
              <span className="profile-icon"><Sparkles size={20} /></span>
              <div>
                <h3>Preference snapshot</h3>
                <p className="muted">Adjust your learning and workspace preferences.</p>
              </div>
            </div>
            <ul className="preferences-list">
              {preferences.map((item, index) => (
                <li key={item.label}>
                  <label className="preference-row">
                    <input
                      type="checkbox"
                      checked={item.enabled}
                      onChange={() => togglePreference(index)}
                    />
                    <span>{item.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "identity" && showProfessionalIdentity && (
        <div className="studio-panel">
          <div className="studio-card">
            <h3>
              <GraduationCap size={18} /> Professional Identity
            </h3>
            <p className="muted">
              Grows through contribution rather than self-description. Independent of any single
              Organization you belong to.
            </p>

            <div className="portfolio-about-grid" style={{ marginTop: "18px" }}>
              <div>
                <span className="metric-label">Professional biography</span>
                <p className="portfolio-body-text">{PROFESSIONAL_IDENTITY.professionalBiography}</p>
              </div>
              <div>
                <span className="metric-label">Teaching philosophy</span>
                <p className="portfolio-body-text">{PROFESSIONAL_IDENTITY.teachingPhilosophy}</p>
              </div>
            </div>

            <div className="portfolio-tag-group" style={{ marginTop: "18px" }}>
              <span className="metric-label">Areas of expertise</span>
              <div className="portfolio-tag-row">
                {PROFESSIONAL_IDENTITY.expertiseAreas.map((area) => (
                  <span key={area} className="tag portfolio-tag">{area}</span>
                ))}
              </div>
            </div>

            <div className="portfolio-columns" style={{ marginTop: "18px" }}>
              <div>
                <span className="metric-label">Subjects</span>
                <ul className="portfolio-list">
                  {PROFESSIONAL_IDENTITY.subjects.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <span className="metric-label">Certifications</span>
                <ul className="portfolio-list">
                  {PROFESSIONAL_IDENTITY.certifications.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div>
                <span className="metric-label">Years of experience</span>
                <strong style={{ display: "block", marginTop: "8px", fontSize: "18px" }}>
                  {PROFESSIONAL_IDENTITY.yearsOfExperience}
                </strong>
              </div>
            </div>
          </div>

          <div className="studio-card">
            <div className="profile-card-header">
              <span className="profile-icon"><ShieldCheck size={20} /></span>
              <div>
                <h3>Verification</h3>
                <p className="muted">
                  Confirms authenticity only — it never implies educational quality on its own.
                </p>
              </div>
            </div>
            <ul className="verification-list">
              {PROFESSIONAL_IDENTITY.verifications.map((v) => (
                <li key={v.type} className="verification-item">
                  <span className={`verification-status-dot verification-${v.status.toLowerCase()}`} />
                  <div>
                    <strong>{VERIFICATION_LABEL[v.type]}</strong>
                    <div className="muted verification-meta">
                      {v.status}
                      {v.verifiedAt ? ` · verified ${v.verifiedAt}` : ""}
                    </div>
                  </div>
                  <span className={`tag verification-tag verification-tag-${v.status.toLowerCase()}`}>
                    {v.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === "achievements" && (
        <div className="studio-card">
          <div className="profile-card-header">
            <span className="profile-icon"><Trophy size={20} /></span>
            <div>
              <h3>Achievements</h3>
              <p className="muted">
                Recognizing meaningful milestones — never the primary motivation for learning or
                teaching.
              </p>
            </div>
          </div>
          <div className="achievement-grid">
            {visibleAchievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <span className={`tag achievement-category achievement-category-${achievement.category.toLowerCase()}`}>
                  {achievement.category}
                </span>
                <strong>{achievement.title}</strong>
                <p className="muted">{achievement.description}</p>
                <span className="muted achievement-date">
                  <Clock3 size={12} /> Earned {achievement.earnedAt}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "membership" && (
        <div className="studio-panel">
          <div className="studio-card">
            <div className="profile-card-header">
              <span className="profile-icon"><BadgeCheck size={20} /></span>
              <div>
                <h3>Membership</h3>
                <p className="muted">
                  Your active relationship with a Learning Space or Organization — distinct from
                  your permanent Professional Identity.
                </p>
              </div>
            </div>
            <div className="membership-summary-card">
              <div>
                <span className="metric-label">Role</span>
                <strong>{membership.role}</strong>
              </div>
              <div>
                <span className="metric-label">Status</span>
                <strong>{membership.status}</strong>
              </div>
              <div>
                <span className="metric-label">Lifecycle stage</span>
                <strong>{membership.lifecycleStage}</strong>
              </div>
              <div>
                <span className="metric-label">{membership.targetType}</span>
                <strong>{membership.targetName}</strong>
              </div>
              <div>
                <span className="metric-label">Joined</span>
                <strong>{membership.joinedAt}</strong>
              </div>
            </div>
          </div>

          <div className="studio-card">
            <h3>What this role means</h3>
            <p className="muted">
              Roles describe business responsibilities, not software permissions.
            </p>
            <ul className="portfolio-list" style={{ marginTop: "14px" }}>
              {MEMBERSHIP_ROLE_RESPONSIBILITIES[membership.role].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
