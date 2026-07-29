import { useState } from "react";
import { User, Target, Clock3, HeartHandshake, Sparkles, ShieldCheck, BadgeCheck, ArrowRight } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

const initialPreferences = [
  { label: "Preferred pace: Moderate", enabled: true },
  { label: "Learning style: Visual + interactive", enabled: true },
  { label: "Notifications: Daily summary", enabled: false },
];

const roleActions: Record<
  UserRole,
  { label: string; button: string; detail: string; toast: string }[]
> = {
  Student: [
    {
      label: "Set a new milestone",
      button: "Add milestone",
      detail: "Capture your next learning goal.",
      toast: "New milestone created!",
    },
    {
      label: "Request tutor support",
      button: "Ask for help",
      detail: "Get personalized guidance from a tutor.",
      toast: "Tutor help requested.",
    },
  ],
  Tutor: [
    {
      label: "Update teaching profile",
      button: "Edit profile",
      detail: "Refine your public teaching presence.",
      toast: "Teaching profile editor opened.",
    },
    {
      label: "Review student feedback",
      button: "View feedback",
      detail: "See learner comments and ratings.",
      toast: "Loading student feedback...",
    },
  ],
  Organization: [
    {
      label: "Open governance report",
      button: "View report",
      detail: "Inspect institutional quality metrics.",
      toast: "Governance report ready.",
    },
    {
      label: "Invite instructor",
      button: "Send invite",
      detail: "Grow your teaching team with new experts.",
      toast: "Instructor invitation sent.",
    },
  ],
};

export default function ProfilePage({ role }: { role: UserRole }) {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const identityHighlights = role === "Student"
    ? ["Goal tracking", "Tutor support", "Progress insights"]
    : role === "Tutor"
    ? ["Teaching profile", "Learner feedback", "Curriculum preferences"]
    : ["Governance controls", "Institutional settings", "Quality assurance"];

  function togglePreference(index: number) {
    setPreferences((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  }

  function triggerToast(message: string) {
    setToastMessage(message);
    window.clearTimeout((triggerToast as any).timeout);
    (triggerToast as any).timeout = window.setTimeout(() => setToastMessage(null), 2400);
  }

  return (
    <div className="workspace-page profile-page">
      {toastMessage && (
        <div className="toast-banner">{toastMessage}</div>
      )}

      <div className="welcome-row">
        <div>
          <p className="eyebrow">PROFILE</p>
          <h1>{role === "Student" ? "Your learner profile" : "Your workspace profile"}</h1>
          <p className="muted">
            {role === "Student"
              ? "Manage your learning goals, preferences, and progress overview."
              : role === "Tutor"
              ? "Review your educator profile, feedback, and curriculum preferences."
              : "Oversee institutional settings, permissions, and educator governance."}
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><User size={20} /></div>
          <span className="stat-label">Identity</span>
          <strong className="stat-value">{role === "Student" ? "Learner" : role}</strong>
          <span className="stat-detail">Personalized experience</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Target size={20} /></div>
          <span className="stat-label">Role focus</span>
          <strong className="stat-value">
            {role === "Student" ? "Goal mastery" : role === "Tutor" ? "Instructional delivery" : "Governance oversight"}
          </strong>
          <span className="stat-detail">Aligned to your role</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Clock3 size={20} /></div>
          <span className="stat-label">Session rhythm</span>
          <strong className="stat-value">4 sessions / week</strong>
          <span className="stat-detail">Your current schedule</span>
        </div>
      </div>

      <div className="profile-actions">
        {roleActions[role].map((action) => (
          <button
            key={action.button}
            className="secondary-button"
            onClick={() => triggerToast(action.toast)}
          >
            {action.button}
          </button>
        ))}
      </div>

      <div className="studio-card">
        <div className="profile-card-header">
          <span className="profile-icon">
            {role === "Student" ? <Sparkles size={20} /> : role === "Tutor" ? <HeartHandshake size={20} /> : <ShieldCheck size={20} />}
          </span>
          <div>
            <h3>Preference snapshot</h3>
            <p className="muted">
              Adjust your learning and workspace preferences in one place.
            </p>
          </div>
        </div>
        <div className="profile-badges">
          {identityHighlights.map((item) => (
            <span className="trust-badge" key={item}>
              <BadgeCheck size={14} /> {item}
            </span>
          ))}
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

      <div className="studio-card grid-stack">
        <div>
          <h3>Role-specific guidance</h3>
          <p className="muted">
            {role === "Student"
              ? "Focus on your next milestone and connect with tutors if you want personalized support."
              : role === "Tutor"
              ? "Keep your educator profile current and respond to student feedback to improve outcomes."
              : "Ensure your institution’s learning standards are reflected across all programs and staff."}
          </p>
        </div>
        <div className="profile-guidance">
          {role === "Student" && (
            <div className="alert-card">
              <strong>Study tip:</strong> Schedule two focused sessions this week to keep your progress steady.
            </div>
          )}
          {role === "Tutor" && (
            <div className="alert-card">
              <strong>Instructor tip:</strong> Use peer feedback to adapt your next lesson plan.
            </div>
          )}
          {role === "Organization" && (
            <div className="alert-card">
              <strong>Governance tip:</strong> Review your compliance dashboard before the next accreditation cycle.
            </div>
          )}
          <div className="workstream-card profile-action-card">
            <div>
              <strong>Next best action</strong>
              <p className="muted">Keep your profile aligned with current goals and visible signals.</p>
            </div>
            <button className="secondary-button">
              Review profile <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
