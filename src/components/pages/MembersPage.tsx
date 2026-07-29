import { useState } from "react";
import { Users, Mail, ShieldCheck, UserPlus, ChevronDown, ChevronRight } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import type { MembershipRole, MembershipStatus } from "../../types/domain";
import { MEMBERSHIP_ROLE_RESPONSIBILITIES } from "../../types/domain";

type Member = {
  id: string;
  name: string;
  email: string;
  role: MembershipRole;
  status: MembershipStatus;
  joinedAt: string;
};

const ROLE_ORDER: MembershipRole[] = [
  "Owner",
  "Administrator",
  "EducationalManager",
  "Tutor",
  "Student",
  "Guest",
];

const ROLE_DISPLAY_NAME: Record<MembershipRole, string> = {
  Owner: "Owner",
  Administrator: "Administrator",
  EducationalManager: "Educational Manager",
  Tutor: "Tutor",
  Student: "Student",
  Guest: "Guest",
};

const STATUS_ORDER: MembershipStatus[] = ["Invited", "Pending", "Active", "Paused", "Terminated"];

const SAMPLE_MEMBERS: Member[] = [
  { id: "m-1", name: "Dana Ahmed", email: "dana@nimble.edu", role: "Owner", status: "Active", joinedAt: "2021-03-02" },
  { id: "m-2", name: "Omar Khaled", email: "omar@nimble.edu", role: "EducationalManager", status: "Active", joinedAt: "2022-06-14" },
  { id: "m-3", name: "Leila Saad", email: "leila@nimble.edu", role: "Tutor", status: "Invited", joinedAt: "2024-05-01" },
  { id: "m-4", name: "Marcus Vance", email: "marcus@nimble.edu", role: "Tutor", status: "Paused", joinedAt: "2022-11-20" },
  { id: "m-5", name: "Sarah Jenkins", email: "sarah@nimble.edu", role: "Administrator", status: "Active", joinedAt: "2021-09-09" },
  { id: "m-6", name: "Guest Reviewer", email: "reviewer@partner.org", role: "Guest", status: "Pending", joinedAt: "2024-07-11" },
];

export default function MembersPage({ role }: { role: UserRole }) {
  const [members, setMembers] = useState<Member[]>(SAMPLE_MEMBERS);
  const [query, setQuery] = useState("");
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);

  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.email.toLowerCase().includes(query.toLowerCase())
  );

  function changeRole(id: string, nextRole: MembershipRole) {
    setMembers((current) => current.map((m) => (m.id === id ? { ...m, role: nextRole } : m)));
  }

  function changeStatus(id: string, nextStatus: MembershipStatus) {
    setMembers((current) => current.map((m) => (m.id === id ? { ...m, status: nextStatus } : m)));
  }

  function resendInvite(id: string) {
    const member = members.find((m) => m.id === id);
    if (member) alert(`Resent invitation to ${member.name}`);
  }

  return (
    <div className="workspace-page members-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">MEMBERSHIP</p>
          <h1>{role === "Organization" ? "Team and roles" : "Workspace members"}</h1>
          <p className="muted">
            Roles describe business responsibilities within this Organization, not software
            permissions — and never replace a member's independent professional identity.
          </p>
        </div>
        <div>
          <button className="primary-button">
            <UserPlus size={14} /> Invite member
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Users size={20} /></div>
          <span className="stat-label">Total members</span>
          <strong className="stat-value">{members.length}</strong>
          <span className="stat-detail">Across all lifecycle stages</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Mail size={20} /></div>
          <span className="stat-label">Invites pending</span>
          <strong className="stat-value">
            {members.filter((m) => m.status === "Invited" || m.status === "Pending").length}
          </strong>
          <span className="stat-detail">Awaiting onboarding</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ShieldCheck size={20} /></div>
          <span className="stat-label">Roles in use</span>
          <strong className="stat-value">
            {new Set(members.map((m) => m.role)).size} of {ROLE_ORDER.length}
          </strong>
          <span className="stat-detail">Owner → Guest</span>
        </div>
      </div>

      <div className="studio-card">
        <div className="search-banner">
          <Users size={16} />
          <input
            placeholder="Search members by name or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="members-table">
          <div className="members-table-row members-table-header">
            <span>Member</span>
            <span>Role</span>
            <span>Lifecycle status</span>
            <span>Action</span>
          </div>

          {filtered.map((m) => {
            const isExpanded = expandedMemberId === m.id;
            return (
              <div key={m.id} className="members-table-group">
                <div className="members-table-row">
                  <span className="members-name-cell">
                    <button
                      className="members-expand-toggle"
                      onClick={() => setExpandedMemberId(isExpanded ? null : m.id)}
                      aria-label="Show role responsibilities"
                    >
                      {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    </button>
                    <span>
                      <strong>{m.name}</strong>
                      <div className="muted marketplace-subtext">{m.email}</div>
                    </span>
                  </span>
                  <span>
                    <select
                      className="studio-text-input members-select"
                      value={m.role}
                      onChange={(e) => changeRole(m.id, e.target.value as MembershipRole)}
                    >
                      {ROLE_ORDER.map((r) => (
                        <option key={r} value={r}>{ROLE_DISPLAY_NAME[r]}</option>
                      ))}
                    </select>
                  </span>
                  <span>
                    <select
                      className={`studio-text-input members-select members-status-${m.status.toLowerCase()}`}
                      value={m.status}
                      onChange={(e) => changeStatus(m.id, e.target.value as MembershipStatus)}
                    >
                      {STATUS_ORDER.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </span>
                  <span>
                    {m.status === "Invited" || m.status === "Pending" ? (
                      <button className="text-button" onClick={() => resendInvite(m.id)}>
                        Resend invite
                      </button>
                    ) : (
                      <button className="text-button danger-text">Remove</button>
                    )}
                  </span>
                </div>

                {isExpanded && (
                  <div className="members-role-detail">
                    <span className="metric-label">
                      What {ROLE_DISPLAY_NAME[m.role]} is responsible for
                    </span>
                    <ul className="portfolio-list">
                      {MEMBERSHIP_ROLE_RESPONSIBILITIES[m.role].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="studio-card">
        <h3>Membership lifecycle</h3>
        <p className="muted">
          Every membership moves through the same stages, regardless of role.
        </p>
        <div className="lifecycle-stage-row">
          {["Invitation / Application", "Onboarding", "Active Participation", "Paused / Role Change", "Departure"].map(
            (stage, index, arr) => (
              <div key={stage} className="lifecycle-stage-chip-wrap">
                <span className="lifecycle-stage-chip">{stage}</span>
                {index < arr.length - 1 && <ChevronRight size={14} className="lifecycle-arrow" />}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
