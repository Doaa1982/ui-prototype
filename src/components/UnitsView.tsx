import { useState } from "react";
import {
  Layers,
  Video,
  Plus,
  CheckCircle2,
  Play,
  X,
  Check,
  Edit3,
  BookOpen,
  ShieldCheck,
  Sparkles,
  Share2,
  Clock,
  UserCheck
} from "lucide-react";
import type { UserRole } from "./RoleSwitcher";
import type { Unit } from "../types/domain";

interface UnitWithDetails extends Unit {
  status: "Published" | "Draft" | "Approved";
  author: string;
}

const INITIAL_UNITS: UnitWithDetails[] = [
  {
    id: "unit-1",
    courseIds: ["course-arabic-a1", "course-travel-arabic"],
    providerId: "provider-1",
    title: "Unit 01: Greetings & Introductions",
    topic: "Basic Arabic Communication",
    objectives: [
      "Master common Arabic greetings (Marhaban, Ahlan)",
      "Introduce name, nationality, and profession",
      "Ask polite clarification questions"
    ],
    lessonIds: ["les-1", "les-2", "les-3"],
    resourceIds: ["res-1", "res-2"],
    estimatedDurationMinutes: 45,
    difficulty: "Beginner",
    status: "Published",
    author: "Dr. Amina Al-Mansoor"
  },
  {
    id: "unit-2",
    courseIds: ["course-arabic-a1"],
    providerId: "provider-1",
    title: "Unit 02: Everyday Vocabulary & Numbers",
    topic: "Numbers 1-100 & Common Nouns",
    objectives: [
      "Count fluently from 1 to 100 in Arabic",
      "Identify common household items and food",
      "Ask prices in local markets"
    ],
    lessonIds: ["les-4", "les-5"],
    resourceIds: ["res-3"],
    estimatedDurationMinutes: 60,
    difficulty: "Beginner",
    status: "Published",
    author: "Prof. Tariq Hassan"
  }
];

type UnitsViewProps = {
  role: UserRole;
};

export default function UnitsView({ role }: UnitsViewProps) {
  const [units, setUnits] = useState<UnitWithDetails[]>(INITIAL_UNITS);
  const [selectedUnit, setSelectedUnit] = useState<UnitWithDetails>(INITIAL_UNITS[0]);

  // UI Interactive States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLessonPlayer, setShowLessonPlayer] = useState<{ title: string; lessonTitle: string } | null>(null);

  // New Unit Form
  const [newTitle, setNewTitle] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newDuration, setNewDuration] = useState("45");
  const [newDifficulty, setNewDifficulty] = useState<"Beginner" | "Intermediate" | "Advanced">("Beginner");

  function triggerToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  }

  function handleCreateUnit() {
    if (!newTitle.trim()) return;
    const newUnit: UnitWithDetails = {
      id: `unit-${Date.now()}`,
      courseIds: ["course-1"],
      providerId: "provider-1",
      title: newTitle,
      topic: newTopic || "General Topic",
      objectives: ["Master core concept skills and practical application"],
      lessonIds: ["les-new-1", "les-new-2"],
      resourceIds: [],
      estimatedDurationMinutes: Number(newDuration) || 45,
      difficulty: newDifficulty,
      status: role === "Organization" ? "Approved" : "Draft",
      author: role === "Tutor" ? "Dody Ahmed (Tutor)" : "Academy Curriculum Team"
    };

    setUnits([newUnit, ...units]);
    setSelectedUnit(newUnit);
    setShowCreateModal(false);
    setNewTitle("");
    setNewTopic("");
    triggerToast(`Reusable Unit "${newUnit.title}" created!`);
  }

  function handleSaveEdit() {
    if (!newTitle.trim()) return;
    const updated = {
      ...selectedUnit,
      title: newTitle,
      topic: newTopic
    };
    setUnits(units.map((u) => (u.id === updated.id ? updated : u)));
    setSelectedUnit(updated);
    setShowEditModal(false);
    triggerToast(`Unit "${updated.title}" updated.`);
  }

  return (
    <div className="units-view" style={{ position: "relative" }}>
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#1e293b",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: "8px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
          fontSize: "0.9rem"
        }}>
          <CheckCircle2 size={18} className="text-green" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Role-specific Header */}
      <div className="welcome-row">
        <div>
          <p className="eyebrow">
            {role === "Student" && "MY LEARNING MODULES & LESSONS"}
            {role === "Tutor" && "REUSABLE EDUCATIONAL ASSETS — AUTHORING LIBRARY"}
            {role === "Organization" && "INSTITUTIONAL KNOWLEDGE REPOSITORY & GOVERNANCE"}
          </p>
          <h1>
            {role === "Student" && "Units & Lessons"}
            {role === "Tutor" && "Unit Authoring & Reusability Library"}
            {role === "Organization" && "Shared Academy Units & Content Governance"}
          </h1>
          <p className="muted">
            {role === "Student" && "Explore self-contained educational topic Units and interactive Lessons."}
            {role === "Tutor" && "Create reusable educational Units that can be linked across multiple Courses and Programs."}
            {role === "Organization" && "Manage organization-wide shared Units, approve standards, and monitor institutional reusability."}
          </p>
        </div>

        <div>
          {role === "Student" && (
            <button className="primary-button" onClick={() => triggerToast("Exploring available topic units...")}>
              <BookOpen size={16} /> Explore Topic Units
            </button>
          )}
          {role === "Tutor" && (
            <button className="primary-button" onClick={() => { setNewTitle(""); setNewTopic(""); setShowCreateModal(true); }}>
              <Plus size={16} /> Create New Unit
            </button>
          )}
          {role === "Organization" && (
            <button className="primary-button" onClick={() => { setNewTitle(""); setNewTopic(""); setShowCreateModal(true); }}>
              <ShieldCheck size={16} /> Add Institutional Unit
            </button>
          )}
        </div>
      </div>

      {/* Role-tailored Quick Stats */}
      <div className="stats-grid" style={{ marginTop: "20px" }}>
        {role === "Student" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><Layers size={20} /></div>
              <span className="stat-label">Available Units</span>
              <strong className="stat-value">{units.length}</strong>
              <span className="stat-detail">Enrolled courses</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Video size={20} /></div>
              <span className="stat-label">Lessons Completed</span>
              <strong className="stat-value">5 Lessons</strong>
              <span className="stat-detail">Interactive sessions</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><CheckCircle2 size={20} className="text-green" /></div>
              <span className="stat-label">Concept Mastery</span>
              <strong className="stat-value">85%</strong>
              <span className="stat-detail">Assessed mastery</span>
            </div>
          </>
        )}

        {role === "Tutor" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><Layers size={20} /></div>
              <span className="stat-label">Authored Units</span>
              <strong className="stat-value">{units.length}</strong>
              <span className="stat-detail">Reusable topics</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Share2 size={20} className="text-accent" /></div>
              <span className="stat-label">Reusability Ratio</span>
              <strong className="stat-value">1.5x</strong>
              <span className="stat-detail">Linked across courses</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Sparkles size={20} className="text-accent" /></div>
              <span className="stat-label">AI Quality Review</span>
              <strong className="stat-value">94%</strong>
              <span className="stat-detail">Pedagogically audit passed</span>
            </div>
          </>
        )}

        {role === "Organization" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><Layers size={20} /></div>
              <span className="stat-label">Shared Academy Units</span>
              <strong className="stat-value">{units.length}</strong>
              <span className="stat-detail">Institutional library</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><UserCheck size={20} /></div>
              <span className="stat-label">Active Authors</span>
              <strong className="stat-value">4 Tutors</strong>
              <span className="stat-detail">Contributing faculty</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ShieldCheck size={20} className="text-green" /></div>
              <span className="stat-label">Approved Governance</span>
              <strong className="stat-value">100%</strong>
              <span className="stat-detail">Complies with standards</span>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "24px", marginTop: "24px" }}>
        {/* Units list */}
        <div className="studio-card">
          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Layers size={18} /> 
            {role === "Student" ? "My Units" : role === "Tutor" ? "Authoring Library" : "Academy Repository"} ({units.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {units.map((unit) => (
              <div
                key={unit.id}
                onClick={() => setSelectedUnit(unit)}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  border: unit.id === selectedUnit.id ? "2px solid #3978ee" : "1px solid var(--border)",
                  background: unit.id === selectedUnit.id ? "var(--surface-hover)" : "transparent",
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "#3978ee", fontWeight: 600 }}>
                    {unit.difficulty} · {unit.estimatedDurationMinutes} mins
                  </span>
                  {role !== "Student" && (
                    <span className="tag" style={{ fontSize: "0.65rem", background: "#f1f5f9" }}>
                      {unit.status}
                    </span>
                  )}
                </div>
                <strong style={{ display: "block", marginTop: "4px" }}>{unit.title}</strong>
                <div className="muted" style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                  {role === "Student" ? `Topic: ${unit.topic}` : `Author: ${unit.author}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Unit Details & Role Controls */}
        <div className="studio-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", borderBottom: "1px solid var(--border)", paddingBottom: "14px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="tag" style={{ textTransform: "uppercase" }}>REUSABLE UNIT</span>
                {role === "Organization" && (
                  <span className="tag" style={{ background: "#dcfce7", color: "#15803d" }}>
                    Verified Standard
                  </span>
                )}
              </div>
              <h2 style={{ marginTop: "6px" }}>{selectedUnit.title}</h2>
              <p className="muted">Topic: {selectedUnit.topic} · Author: {selectedUnit.author}</p>
            </div>

            {/* Role Specific Unit Action Buttons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {role === "Student" && (
                <button
                  className="primary-button"
                  style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                  onClick={() => setShowLessonPlayer({ title: selectedUnit.title, lessonTitle: "Lesson 1: Saying Hello & Greeting Courtesy" })}
                >
                  <Play size={15} /> Resume Unit
                </button>
              )}

              {role === "Tutor" && (
                <>
                  <button
                    className="secondary-button"
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                    onClick={() => { setNewTitle(selectedUnit.title); setNewTopic(selectedUnit.topic); setShowEditModal(true); }}
                  >
                    <Edit3 size={15} /> Edit Unit
                  </button>
                  <button
                    className="primary-button"
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                    onClick={() => triggerToast(`Linked "${selectedUnit.title}" to Course!`)}
                  >
                    <Share2 size={15} /> Link to Course
                  </button>
                </>
              )}

              {role === "Organization" && (
                <>
                  <button
                    className="secondary-button"
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                    onClick={() => triggerToast(`AI Review Triggered for ${selectedUnit.title}`)}
                  >
                    <Sparkles size={15} /> Audit Quality
                  </button>
                  <button
                    className="primary-button"
                    style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                    onClick={() => triggerToast(`Unit "${selectedUnit.title}" Approved for Institution Repository!`)}
                  >
                    <ShieldCheck size={15} /> Approve Unit
                  </button>
                </>
              )}
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <h4 style={{ marginBottom: "8px" }}>Learning Objectives</h4>
            <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
              {selectedUnit.objectives.map((obj, i) => (
                <li key={i} style={{ marginBottom: "4px" }}>{obj}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h4 style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <Video size={18} /> Contained Lessons (Delivery Format)
              </h4>
              {role !== "Student" && (
                <button
                  className="text-button"
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => triggerToast(`Lesson Builder opened for ${selectedUnit.title}`)}
                >
                  + Add Lesson
                </button>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ padding: "12px", borderRadius: "8px", background: "var(--surface-hover)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>Lesson 1: Saying Hello & Greeting Courtesy</strong>
                  <div className="muted" style={{ fontSize: "0.8rem" }}>Interactive Video · 12 mins</div>
                </div>
                <button
                  className="secondary-button"
                  style={{ padding: "6px 12px", fontSize: "0.8rem" }}
                  onClick={() => setShowLessonPlayer({ title: selectedUnit.title, lessonTitle: "Lesson 1: Saying Hello & Greeting Courtesy" })}
                >
                  Preview Lesson
                </button>
              </div>

              <div style={{ padding: "12px", borderRadius: "8px", background: "var(--surface-hover)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>Lesson 2: Self Introductions & Formal Dialogue</strong>
                  <div className="muted" style={{ fontSize: "0.8rem" }}>AI Conversation Practice · 15 mins</div>
                </div>
                <button
                  className="secondary-button"
                  style={{ padding: "6px 12px", fontSize: "0.8rem" }}
                  onClick={() => setShowLessonPlayer({ title: selectedUnit.title, lessonTitle: "Lesson 2: Self Introductions & Formal Dialogue" })}
                >
                  Preview Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      {/* Create Unit Modal */}
      {showCreateModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={modalHeaderStyle}>
              <h3>Create Reusable Unit</h3>
              <button onClick={() => setShowCreateModal(false)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              <label className="studio-field">
                <span>Unit Title</span>
                <input
                  className="studio-text-input"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Unit 05: Business Email Writing"
                />
              </label>
              <label className="studio-field">
                <span>Educational Topic</span>
                <input
                  className="studio-text-input"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  placeholder="e.g. Professional Correspondence"
                />
              </label>
              <div style={{ display: "flex", gap: "12px" }}>
                <label className="studio-field" style={{ flex: 1 }}>
                  <span>Duration (mins)</span>
                  <input
                    type="number"
                    className="studio-text-input"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                  />
                </label>
                <label className="studio-field" style={{ flex: 1 }}>
                  <span>Difficulty</span>
                  <select
                    className="studio-text-input"
                    value={newDifficulty}
                    onChange={(e) => setNewDifficulty(e.target.value as any)}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button className="secondary-button" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button className="primary-button" disabled={!newTitle.trim()} onClick={handleCreateUnit}>
                  Create Unit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Unit Modal */}
      {showEditModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={modalHeaderStyle}>
              <h3>Edit Unit Details</h3>
              <button onClick={() => setShowEditModal(false)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              <label className="studio-field">
                <span>Unit Title</span>
                <input
                  className="studio-text-input"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </label>
              <label className="studio-field">
                <span>Educational Topic</span>
                <input
                  className="studio-text-input"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
              </label>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button className="secondary-button" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button className="primary-button" onClick={handleSaveEdit}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Player Modal */}
      {showLessonPlayer && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, width: "650px" }}>
            <div style={modalHeaderStyle}>
              <div>
                <span className="tag" style={{ background: "#eaf2ff", color: "#3978ee" }}>{showLessonPlayer.title}</span>
                <h3 style={{ marginTop: "4px" }}>{showLessonPlayer.lessonTitle}</h3>
              </div>
              <button onClick={() => setShowLessonPlayer(null)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div style={{ width: "100%", height: "260px", background: "#0f172a", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                <Play size={48} style={{ opacity: 0.8, marginBottom: "8px" }} />
                <span style={{ fontSize: "0.9rem" }}>Interactive Video Lesson Player (Demo Preview)</span>
              </div>
              <div style={{ marginTop: "16px", padding: "12px", background: "var(--surface-hover)", borderRadius: "8px" }}>
                <strong>Check for Understanding (Interactive Question):</strong>
                <p className="muted" style={{ fontSize: "0.85rem", marginTop: "4px" }}>
                  Which phrase is used for formal introductions in Arabic?
                </p>
                <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                  <button className="secondary-button" style={{ padding: "6px 12px", fontSize: "0.8rem" }} onClick={() => triggerToast("Correct answer! +10 XP")}>
                    <Check size={14} /> Ahlan wa Sahlan
                  </button>
                  <button className="secondary-button" style={{ padding: "6px 12px", fontSize: "0.8rem" }} onClick={() => triggerToast("Try again! Hint: Used when welcoming someone.")}>
                    Shukran
                  </button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
                <button className="primary-button" onClick={() => { setShowLessonPlayer(null); triggerToast("Lesson preview complete!"); }}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal Styles
const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modalBoxStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "14px",
  width: "480px",
  maxWidth: "90%",
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
};

const modalHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid var(--border)",
  paddingBottom: "12px"
};

const closeBtnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "var(--text-muted)"
};
