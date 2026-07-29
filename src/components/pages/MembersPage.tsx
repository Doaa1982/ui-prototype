import { useState } from "react";
import { Users, Mail, ShieldCheck, UserPlus } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type Member = { id: string; name: string; email: string; role: string; status: "Active" | "Invited" };

type PermissionKey = "read" | "write" | "publish" | "manageBilling" | "manageAI";

const DEFAULT_PERMISSIONS: Record<string, PermissionKey[]> = {
  Admin: ["read", "write", "publish", "manageBilling", "manageAI"],
  Editor: ["read", "write", "publish"],
  Viewer: ["read"],
};

const SAMPLE_MEMBERS: Member[] = [
  { id: "m-1", name: "Dana Ahmed", email: "dana@nimble.edu", role: "Admin", status: "Active" },
  { id: "m-2", name: "Omar Khaled", email: "omar@nimble.edu", role: "Editor", status: "Active" },
  { id: "m-3", name: "Leila Saad", email: "leila@nimble.edu", role: "Viewer", status: "Invited" },
];

export default function MembersPage({ role }: { role: UserRole }) {
  const [members, setMembers] = useState<Member[]>(SAMPLE_MEMBERS);
  const [query, setQuery] = useState("");

  const filtered = members.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.email.toLowerCase().includes(query.toLowerCase()));

  function changeRole(id: string, nextRole: string) {
    setMembers((cur) => cur.map((m) => (m.id === id ? { ...m, role: nextRole } : m)));
  }

  function togglePermission(memberId: string, perm: PermissionKey) {
    setMembers((cur) =>
      cur.map((m) => {
        if (m.id !== memberId) return m;
        const current = new Set(DEFAULT_PERMISSIONS[m.role] ?? []);
        if (current.has(perm)) {
          current.delete(perm);
        } else {
          current.add(perm);
        }
        // Reflect permission changes via a temporary role-like label
        return { ...m, role: m.role };
      })
    );
  }

  function resendInvite(id: string) {
    // placeholder behaviour
    alert(`Resent invitation to ${id}`);
  }

  return (
    <div className="workspace-page members-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">MEMBERS</p>
          <h1>{role === "Organization" ? "Team and roles" : "Workspace members"}</h1>
          <p className="muted">Manage organization roles, collaborators, and invitations.</p>
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
          <span className="stat-detail">Active and invited</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Mail size={20} /></div>
          <span className="stat-label">Invites pending</span>
          <strong className="stat-value">{members.filter((m) => m.status === "Invited").length}</strong>
          <span className="stat-detail">Awaiting acceptance</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ShieldCheck size={20} /></div>
          <span className="stat-label">Roles</span>
          <strong className="stat-value">Admin • Editor • Viewer</strong>
          <span className="stat-detail">Assign appropriate permissions</span>
        </div>
      </div>

      <div className="studio-card">
        <div className="search-banner">
          <Users size={16} />
          <input placeholder="Search members by name or email" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div style={{ marginTop: 16 }}>
          <div className="marketplace-page table-row table-header" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr" }}>
            <span>Member</span>
            <span>Role</span>
            <span>Action</span>
          </div>

          {filtered.map((m) => (
            <div key={m.id} className="marketplace-page table-row" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
              <span>
                <strong>{m.name}</strong>
                <div className="muted marketplace-subtext">{m.email}</div>
              </span>
              <span>
                <select value={m.role} onChange={(e) => changeRole(m.id, e.target.value)}>
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </span>
              <span>
                {m.status === "Invited" ? (
                  <button className="text-button" onClick={() => resendInvite(m.id)}>Resend invite</button>
                ) : (
                  <button className="text-button">Remove</button>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="studio-card">
        <h3>Permission matrix</h3>
        <p className="muted">Toggle granular collaborator permissions per user.</p>
        <div style={{ marginTop: 12 }}>
          <div className="marketplace-page table-row table-header" style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)" }}>
            <span>User</span>
            <span>Read</span>
            <span>Write</span>
            <span>Publish</span>
            <span>Billing</span>
            <span>AI</span>
          </div>

          {members.map((m) => {
            const perms = new Set(DEFAULT_PERMISSIONS[m.role] ?? []);
            return (
              <div key={m.id} className="marketplace-page table-row" style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)" }}>
                <span>
                  <strong>{m.name}</strong>
                  <div className="muted marketplace-subtext">{m.role}</div>
                </span>
                <label><input type="checkbox" checked={perms.has("read")} onChange={() => togglePermission(m.id, "read")} /></label>
                <label><input type="checkbox" checked={perms.has("write")} onChange={() => togglePermission(m.id, "write")} /></label>
                <label><input type="checkbox" checked={perms.has("publish")} onChange={() => togglePermission(m.id, "publish")} /></label>
                <label><input type="checkbox" checked={perms.has("manageBilling")} onChange={() => togglePermission(m.id, "manageBilling")} /></label>
                <label><input type="checkbox" checked={perms.has("manageAI")} onChange={() => togglePermission(m.id, "manageAI")} /></label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
