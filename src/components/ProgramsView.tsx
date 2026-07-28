import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Layers,
  Award,
  ChevronRight,
  Plus,
  Clock,
  UserCheck,
  Edit3,
  Users,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Share2,
  X,
  Play,
  Check
} from "lucide-react";
import type { UserRole } from "./RoleSwitcher";
import type { Program, Course, Unit } from "../types/domain";

interface ProgramWithDetails extends Program {
  progress: number;
  status: "Active" | "Completed" | "Draft" | "Published";
  studentCount: number;
  assignedTutor: string;
  courses: (Course & { units: Unit[] })[];
}

const MOCK_TEACHERS = [
  "Dr. Amina Al-Mansoor",
  "Prof. Tariq Hassan",
  "Sarah Jenkins (Senior Instructional Designer)",
  "Dr. Marcus Vance",
  "Fatima El-Sayed"
];

const INITIAL_PROGRAMS: ProgramWithDetails[] = [
  {
    id: "prog-1",
    providerId: "prov-1",
    title: "Arabic Language Track",
    description: "A comprehensive long-term pathway taking learners from basic greetings (A1) to confident conversational fluency (B1).",
    courseIds: ["course-1", "course-2"],
    certificateAvailable: true,
    completionCriteria: "Pass all course assessments with >= 80% score.",
    progress: 68,
    status: "Published",
    studentCount: 142,
    assignedTutor: "Dr. Amina Al-Mansoor",
    courses: [
      {
        id: "course-1",
        programId: "prog-1",
        providerId: "prov-1",
        title: "Arabic Level A1: Foundations",
        description: "Master essential alphabet, phonics, greetings, and numbers.",
        unitIds: ["unit-1", "unit-2"],
        subject: "Arabic Language",
        level: "Beginner",
        units: [
          {
            id: "unit-1",
            courseIds: ["course-1"],
            providerId: "prov-1",
            title: "Unit 01: Greetings & Introductions",
            topic: "Social Etiquette & Phonics",
            objectives: ["Say hello & goodbye", "Introduce yourself", "State origin"],
            lessonIds: ["l1", "l2", "l3"],
            resourceIds: [],
            estimatedDurationMinutes: 45,
            difficulty: "Beginner"
          },
          {
            id: "unit-2",
            courseIds: ["course-1"],
            providerId: "prov-1",
            title: "Unit 02: Numbers & Marketplace Phrases",
            topic: "Vocabulary & Counting",
            objectives: ["Count 1-100", "Ask prices in markets"],
            lessonIds: ["l4", "l5"],
            resourceIds: [],
            estimatedDurationMinutes: 60,
            difficulty: "Beginner"
          }
        ]
      },
      {
        id: "course-2",
        programId: "prog-1",
        providerId: "prov-1",
        title: "Arabic Level A2: Daily Conversations",
        description: "Learn past/future tenses, directions, and ordering food.",
        unitIds: ["unit-3"],
        subject: "Arabic Language",
        level: "Intermediate",
        units: [
          {
            id: "unit-3",
            courseIds: ["course-2"],
            providerId: "prov-1",
            title: "Unit 03: Travel & Dining Out",
            topic: "Situational Dialogue",
            objectives: ["Order meals", "Ask directions in airports"],
            lessonIds: ["l6", "l7"],
            resourceIds: [],
            estimatedDurationMinutes: 90,
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  },
  {
    id: "prog-2",
    providerId: "prov-1",
    title: "Data Science Bootcamp",
    description: "Full professional track covering Python, statistics, data visualization, and applied machine learning.",
    courseIds: ["course-3"],
    certificateAvailable: true,
    completionCriteria: "Complete capstone project submission.",
    progress: 34,
    status: "Published",
    studentCount: 88,
    assignedTutor: "Prof. Tariq Hassan",
    courses: [
      {
        id: "course-3",
        programId: "prog-2",
        providerId: "prov-1",
        title: "Python for Data Analysis",
        description: "Learn NumPy, Pandas, and Matplotlib hands-on.",
        unitIds: ["unit-4"],
        subject: "Data Science",
        level: "Beginner",
        units: [
          {
            id: "unit-4",
            courseIds: ["course-3"],
            providerId: "prov-1",
            title: "Unit 01: Pandas & DataFrames",
            topic: "Data Wrangling",
            objectives: ["Load CSV/JSON data", "Filter and clean missing values"],
            lessonIds: ["l8", "l9"],
            resourceIds: [],
            estimatedDurationMinutes: 120,
            difficulty: "Intermediate"
          }
        ]
      }
    ]
  }
];

type ProgramsViewProps = {
  role: UserRole;
};

export default function ProgramsView({ role }: ProgramsViewProps) {
  const [programs, setPrograms] = useState<ProgramWithDetails[]>(INITIAL_PROGRAMS);
  const [selectedProgram, setSelectedProgram] = useState<ProgramWithDetails>(INITIAL_PROGRAMS[0]);
  const [expandedCourseId, setExpandedCourseId] = useState<string>(INITIAL_PROGRAMS[0].courses[0].id);

  // UI Modal & Toast States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [showLessonPlayer, setShowLessonPlayer] = useState<{ title: string; unitTitle: string } | null>(null);

  // Form States for Modals
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [selectedEducator, setSelectedEducator] = useState(MOCK_TEACHERS[0]);

  function triggerToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  }

  function handleCreateProgram() {
    if (!newTitle.trim()) return;
    const newProg: ProgramWithDetails = {
      id: `prog-${Date.now()}`,
      providerId: "prov-1",
      title: newTitle,
      description: newDesc || "Newly created educational program pathway.",
      courseIds: [],
      certificateAvailable: true,
      progress: 0,
      status: "Draft",
      studentCount: 0,
      assignedTutor: selectedEducator,
      courses: [
        {
          id: `course-${Date.now()}`,
          providerId: "prov-1",
          title: `${newTitle} — Level 1`,
          description: "Initial foundational course.",
          unitIds: [],
          subject: "General Education",
          level: "Beginner",
          units: [
            {
              id: `unit-${Date.now()}`,
              courseIds: [],
              providerId: "prov-1",
              title: "Unit 01: Getting Started",
              topic: "Introduction & Setup",
              objectives: ["Understand program structure"],
              lessonIds: ["l-new"],
              resourceIds: [],
              estimatedDurationMinutes: 30,
              difficulty: "Beginner"
            }
          ]
        }
      ]
    };

    setPrograms([newProg, ...programs]);
    setSelectedProgram(newProg);
    setShowCreateModal(false);
    setNewTitle("");
    setNewDesc("");
    triggerToast(`Program "${newProg.title}" successfully created!`);
  }

  function handleSaveEdit() {
    if (!newTitle.trim()) return;
    const updated = {
      ...selectedProgram,
      title: newTitle,
      description: newDesc
    };
    setPrograms(programs.map((p) => (p.id === updated.id ? updated : p)));
    setSelectedProgram(updated);
    setShowEditModal(false);
    triggerToast(`Program "${updated.title}" updated.`);
  }

  function handleAssignEducator() {
    const updated = {
      ...selectedProgram,
      assignedTutor: selectedEducator
    };
    setPrograms(programs.map((p) => (p.id === updated.id ? updated : p)));
    setSelectedProgram(updated);
    setShowAssignModal(false);
    triggerToast(`Re-assigned Lead Educator to "${selectedEducator}".`);
  }

  return (
    <div className="programs-view" style={{ position: "relative" }}>
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

      {/* Role-tailored Header */}
      <div className="welcome-row">
        <div>
          <p className="eyebrow">
            {role === "Student" && "MY ENROLLED LEARNING PATHWAYS"}
            {role === "Tutor" && "TUTOR STUDIO — CURRICULUM AUTHORING"}
            {role === "Organization" && "ACADEMIC GOVERNANCE & PROGRAM MANAGEMENT"}
          </p>
          <h1>
            {role === "Student" && "My Programs & Courses"}
            {role === "Tutor" && "Published Programs & Curriculum Editor"}
            {role === "Organization" && "Institutional Offerings & Teaching Staff"}
          </h1>
          <p className="muted">
            {role === "Student" && "Track your progress, access your courses, and earn certificates across learning tracks."}
            {role === "Tutor" && "Design programs, organize courses and reusable units, and track student outcomes."}
            {role === "Organization" && "Oversee academy programs, assign teaching staff, and ensure educational standards."}
          </p>
        </div>
        <div>
          {role === "Student" && (
            <button className="primary-button" onClick={() => triggerToast("Exploring global Marketplace catalog...")}>
              <BookOpen size={16} /> Discover New Programs
            </button>
          )}
          {role === "Tutor" && (
            <button className="primary-button" onClick={() => { setNewTitle(""); setNewDesc(""); setShowCreateModal(true); }}>
              <Plus size={16} /> Create New Program
            </button>
          )}
          {role === "Organization" && (
            <button className="primary-button" onClick={() => { setNewTitle(""); setNewDesc(""); setShowCreateModal(true); }}>
              <ShieldCheck size={16} /> New Institutional Track
            </button>
          )}
        </div>
      </div>

      {/* Role-tailored Quick Stats */}
      <div className="stats-grid" style={{ marginTop: "20px" }}>
        {role === "Student" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><GraduationCap size={20} /></div>
              <span className="stat-label">Enrolled Programs</span>
              <strong className="stat-value">{programs.length}</strong>
              <span className="stat-detail">Active learning paths</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Award size={20} className="text-green" /></div>
              <span className="stat-label">Certificates Eligible</span>
              <strong className="stat-value">2</strong>
              <span className="stat-detail">Upon 100% completion</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><TrendingUp size={20} /></div>
              <span className="stat-label">Average Progress</span>
              <strong className="stat-value">51%</strong>
              <span className="stat-detail">+8% this week</span>
            </div>
          </>
        )}

        {role === "Tutor" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><GraduationCap size={20} /></div>
              <span className="stat-label">Published Programs</span>
              <strong className="stat-value">{programs.length}</strong>
              <span className="stat-detail">Public in Marketplace</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users size={20} /></div>
              <span className="stat-label">Total Students Enrolled</span>
              <strong className="stat-value">230</strong>
              <span className="stat-detail">Across all programs</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><CheckCircle2 size={20} className="text-green" /></div>
              <span className="stat-label">Completion Rate</span>
              <strong className="stat-value">84%</strong>
              <span className="stat-detail">Above platform avg</span>
            </div>
          </>
        )}

        {role === "Organization" && (
          <>
            <div className="stat-card">
              <div className="stat-icon"><GraduationCap size={20} /></div>
              <span className="stat-label">Academy Programs</span>
              <strong className="stat-value">{programs.length}</strong>
              <span className="stat-detail">Branded tracks</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><UserCheck size={20} /></div>
              <span className="stat-label">Assigned Educators</span>
              <strong className="stat-value">8 Tutors</strong>
              <span className="stat-detail">Active faculty</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ShieldCheck size={20} className="text-green" /></div>
              <span className="stat-label">Academic Quality Audit</span>
              <strong className="stat-value">Passed</strong>
              <span className="stat-detail">100% Governance aligned</span>
            </div>
          </>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "24px", marginTop: "24px" }}>
        {/* Programs Sidebar */}
        <div className="studio-card">
          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <GraduationCap size={18} /> 
            {role === "Student" ? "Enrolled Programs" : role === "Tutor" ? "My Programs" : "Academy Catalog"} ({programs.length})
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {programs.map((prog) => (
              <div
                key={prog.id}
                onClick={() => {
                  setSelectedProgram(prog);
                  setExpandedCourseId(prog.courses[0]?.id || "");
                }}
                style={{
                  padding: "14px",
                  borderRadius: "10px",
                  border: prog.id === selectedProgram.id ? "2px solid #3978ee" : "1px solid var(--border)",
                  background: prog.id === selectedProgram.id ? "var(--surface-hover)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span className="tag" style={{ background: "#eaf2ff", color: "#3978ee", fontSize: "0.7rem" }}>
                    {prog.status}
                  </span>
                  {role !== "Student" && (
                    <span className="muted" style={{ fontSize: "0.75rem" }}>
                      {prog.studentCount} Students
                    </span>
                  )}
                </div>
                <strong style={{ display: "block", fontSize: "0.95rem" }}>{prog.title}</strong>
                <p className="muted" style={{ fontSize: "0.8rem", margin: "6px 0 10px", lineHeight: "1.3" }}>
                  {prog.description.slice(0, 70)}...
                </p>

                {role === "Student" ? (
                  <div className="program-progress">
                    <div className="progress-label" style={{ fontSize: "0.75rem", marginBottom: "4px" }}>
                      <span>My Progress</span>
                      <strong>{prog.progress}%</strong>
                    </div>
                    <div className="progress-line" style={{ height: "5px" }}>
                      <span style={{ width: `${prog.progress}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="muted" style={{ fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "4px" }}>
                    <UserCheck size={12} /> Lead: {prog.assignedTutor}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Program Details & Role-Aware Controls */}
        <div className="studio-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid var(--border)", paddingBottom: "16px", marginBottom: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="tag" style={{ textTransform: "uppercase" }}>PROGRAM PATHWAY</span>
                {role === "Organization" && (
                  <span className="tag" style={{ background: "#fef3c7", color: "#d97706" }}>
                    Academy Branded
                  </span>
                )}
              </div>
              <h2 style={{ marginTop: "6px", fontSize: "1.4rem" }}>{selectedProgram.title}</h2>
              <p className="muted" style={{ marginTop: "4px" }}>{selectedProgram.description}</p>
            </div>
            
            {/* Role-specific Actions */}
            <div style={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "flex-end" }}>
              {role === "Student" && (
                <button
                  className="primary-button"
                  style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                  onClick={() => setShowLessonPlayer({ title: selectedProgram.title, unitTitle: "Unit 01: Greetings & Introductions" })}
                >
                  <Play size={15} /> Resume Program
                </button>
              )}
              {role === "Tutor" && (
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    className="secondary-button"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    onClick={() => { setNewTitle(selectedProgram.title); setNewDesc(selectedProgram.description); setShowEditModal(true); }}
                  >
                    <Edit3 size={15} /> Edit Program
                  </button>
                  <button
                    className="primary-button"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    onClick={() => triggerToast(`Updates for "${selectedProgram.title}" published to Marketplace!`)}
                  >
                    <Share2 size={15} /> Publish Update
                  </button>
                </div>
              )}
              {role === "Organization" && (
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    className="secondary-button"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    onClick={() => { setSelectedEducator(selectedProgram.assignedTutor); setShowAssignModal(true); }}
                  >
                    <UserCheck size={15} /> Re-assign Educator
                  </button>
                  <button
                    className="primary-button"
                    style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                    onClick={() => triggerToast(`Academic Quality Audit Approved for ${selectedProgram.title}!`)}
                  >
                    <ShieldCheck size={15} /> Approve Quality
                  </button>
                </div>
              )}
              {selectedProgram.certificateAvailable && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#16a34a", fontSize: "0.8rem", fontWeight: 600 }}>
                  <Award size={14} /> Certificate Enabled
                </div>
              )}
            </div>
          </div>

          <h3 style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <BookOpen size={18} /> Curriculum Structure (Program → Course → Unit)
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {selectedProgram.courses.map((course, index) => {
              const isExpanded = course.id === expandedCourseId;
              return (
                <div
                  key={course.id}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    background: "var(--surface)"
                  }}
                >
                  {/* Course Header */}
                  <div
                    onClick={() => setExpandedCourseId(isExpanded ? "" : course.id)}
                    style={{
                      padding: "14px 18px",
                      background: isExpanded ? "var(--surface-hover)" : "transparent",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "#3978ee",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.85rem",
                          fontWeight: 700
                        }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <strong style={{ fontSize: "1rem" }}>{course.title}</strong>
                        <div className="muted" style={{ fontSize: "0.8rem", marginTop: "2px" }}>
                          {course.subject} · Level: {course.level} · {course.units.length} Reusable Unit(s)
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={18}
                      style={{
                        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease"
                      }}
                    />
                  </div>

                  {/* Course Children Units */}
                  {isExpanded && (
                    <div style={{ padding: "16px 18px", borderTop: "1px solid var(--border)", background: "#fafafa" }}>
                      <p className="muted" style={{ fontSize: "0.85rem", marginBottom: "12px" }}>
                        {course.description}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <h5 style={{ textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.5px", color: "var(--text-muted)", margin: 0 }}>
                          Units in this Course:
                        </h5>
                        {role !== "Student" && (
                          <button
                            className="text-button"
                            style={{ fontSize: "0.8rem" }}
                            onClick={() => triggerToast(`Added existing Unit to ${course.title}`)}
                          >
                            + Add Existing Unit
                          </button>
                        )}
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {course.units.map((unit) => (
                          <div
                            key={unit.id}
                            style={{
                              padding: "12px",
                              borderRadius: "8px",
                              border: "1px solid var(--border)",
                              background: "#ffffff",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <Layers size={15} className="text-accent" />
                                <strong>{unit.title}</strong>
                              </div>
                              <div className="muted" style={{ fontSize: "0.8rem", marginTop: "4px", paddingLeft: "23px" }}>
                                Topic: {unit.topic} · {unit.lessonIds.length} Lessons · <Clock size={12} style={{ verticalAlign: "middle" }} /> {unit.estimatedDurationMinutes} mins
                              </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <span className="tag" style={{ fontSize: "0.75rem" }}>
                                {unit.difficulty}
                              </span>
                              {role === "Student" && (
                                <button
                                  className="secondary-button"
                                  style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                                  onClick={() => setShowLessonPlayer({ title: selectedProgram.title, unitTitle: unit.title })}
                                >
                                  Start Unit
                                </button>
                              )}
                              {role === "Tutor" && (
                                <button
                                  className="secondary-button"
                                  style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                                  onClick={() => triggerToast(`Opened Editor for ${unit.title}`)}
                                >
                                  Edit Unit
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- MODALS FOR INTERACTIVE UI PROTOTYPE --- */}

      {/* Create Program Modal */}
      {showCreateModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={modalHeaderStyle}>
              <h3>Create New Educational Program</h3>
              <button onClick={() => setShowCreateModal(false)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              <label className="studio-field">
                <span>Program Title</span>
                <input
                  className="studio-text-input"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Graphic Design Professional Track"
                />
              </label>
              <label className="studio-field">
                <span>Description & Learning Pathway Goal</span>
                <textarea
                  className="studio-textarea"
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Explain what learners will achieve upon completion..."
                />
              </label>
              <label className="studio-field">
                <span>Assign Lead Educator</span>
                <select
                  className="studio-text-input"
                  value={selectedEducator}
                  onChange={(e) => setSelectedEducator(e.target.value)}
                >
                  {MOCK_TEACHERS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button className="secondary-button" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button className="primary-button" disabled={!newTitle.trim()} onClick={handleCreateProgram}>
                  Create Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Program Modal */}
      {showEditModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={modalHeaderStyle}>
              <h3>Edit Program Details</h3>
              <button onClick={() => setShowEditModal(false)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              <label className="studio-field">
                <span>Program Title</span>
                <input
                  className="studio-text-input"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </label>
              <label className="studio-field">
                <span>Description</span>
                <textarea
                  className="studio-textarea"
                  rows={3}
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
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

      {/* Re-assign Educator Modal */}
      {showAssignModal && (
        <div style={modalOverlayStyle}>
          <div style={modalBoxStyle}>
            <div style={modalHeaderStyle}>
              <h3>Re-assign Lead Educator</h3>
              <button onClick={() => setShowAssignModal(false)} style={closeBtnStyle}><X size={18} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              <p className="muted" style={{ fontSize: "0.85rem" }}>
                Select a certified educator from your organization roster to lead <strong>{selectedProgram.title}</strong>:
              </p>
              <label className="studio-field">
                <span>Faculty Roster</span>
                <select
                  className="studio-text-input"
                  value={selectedEducator}
                  onChange={(e) => setSelectedEducator(e.target.value)}
                >
                  {MOCK_TEACHERS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button className="secondary-button" onClick={() => setShowAssignModal(false)}>Cancel</button>
                <button className="primary-button" onClick={handleAssignEducator}>Confirm Assignment</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Student Lesson Player Preview Modal */}
      {showLessonPlayer && (
        <div style={modalOverlayStyle}>
          <div style={{ ...modalBoxStyle, width: "650px" }}>
            <div style={modalHeaderStyle}>
              <div>
                <span className="tag" style={{ background: "#eaf2ff", color: "#3978ee" }}>{showLessonPlayer.title}</span>
                <h3 style={{ marginTop: "4px" }}>{showLessonPlayer.unitTitle}</h3>
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
                <button className="primary-button" onClick={() => { setShowLessonPlayer(null); triggerToast("Lesson completed! Progress saved."); }}>
                  Complete Lesson & Continue
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
