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
    <div className="workspace-page programs-view">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="toast-banner">
          <CheckCircle2 size={18} className="text-green" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Role-tailored Header */}
      <div className="welcome-row page-intro">
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
        <div className="page-actions">
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
      <div className="stats-grid program-metric-row">
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

      <div className="studio-panel studio-panel-grid programs-panel">
        {/* Programs Sidebar */}
        <div className="studio-card">
          <h3 className="section-heading section-title-inline">
            <GraduationCap size={18} /> 
            {role === "Student" ? "Enrolled Programs" : role === "Tutor" ? "My Programs" : "Academy Catalog"} ({programs.length})
          </h3>
          <div className="program-sidebar-list">
            {programs.map((prog) => (
              <div
                key={prog.id}
                onClick={() => {
                  setSelectedProgram(prog);
                  setExpandedCourseId(prog.courses[0]?.id || "");
                }}
                className={`program-sidebar-item ${prog.id === selectedProgram.id ? "active" : ""}`}
              >
                <div className="program-sidebar-row">
                  <span className="tag tag-pill status-pill">
                    {prog.status}
                  </span>
                  {role !== "Student" && (
                    <span className="muted muted-small">
                      {prog.studentCount} Students
                    </span>
                  )}
                </div>
                <strong>{prog.title}</strong>
                <p className="muted card-copy">
                  {prog.description.slice(0, 70)}...
                </p>

                {role === "Student" ? (
                  <div className="program-progress">
                    <div className="progress-label compact">
                      <span>My Progress</span>
                      <strong>{prog.progress}%</strong>
                    </div>
                    <div className="progress-line thin">
                      <span className="progress-bar" style={{ width: `${prog.progress}%` }} />
                    </div>
                  </div>
                ) : (
                  <div className="muted meta-row">
                    <UserCheck size={12} /> Lead: {prog.assignedTutor}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Program Details & Role-Aware Controls */}
        <div className="studio-card program-details-card">
          <div className="program-details-header">
            <div>
              <div className="program-details-meta">
                <span className="tag tag-uppercase">PROGRAM PATHWAY</span>
                {role === "Organization" && (
                  <span className="tag tag-academy">
                    Academy Branded
                  </span>
                )}
              </div>
              <h2 className="program-title">{selectedProgram.title}</h2>
              <p className="muted section-copy">{selectedProgram.description}</p>
            </div>
            
            {/* Role-specific Actions */}
            <div className="program-actions">
              {role === "Student" && (
                <button
                  className="primary-button compact-button"
                  onClick={() => setShowLessonPlayer({ title: selectedProgram.title, unitTitle: "Unit 01: Greetings & Introductions" })}
                >
                  <Play size={15} /> Resume Program
                </button>
              )}
              {role === "Tutor" && (
                <>
                  <button
                    className="secondary-button compact-button"
                    onClick={() => { setNewTitle(selectedProgram.title); setNewDesc(selectedProgram.description); setShowEditModal(true); }}
                  >
                    <Edit3 size={15} /> Edit Program
                  </button>
                  <button
                    className="primary-button compact-button"
                    onClick={() => triggerToast(`Updates for "${selectedProgram.title}" published to Marketplace!`)}
                  >
                    <Share2 size={15} /> Publish Update
                  </button>
                </>
              )}
              {role === "Organization" && (
                <>
                  <button
                    className="secondary-button compact-button"
                    onClick={() => { setSelectedEducator(selectedProgram.assignedTutor); setShowAssignModal(true); }}
                  >
                    <UserCheck size={15} /> Re-assign Educator
                  </button>
                  <button
                    className="primary-button compact-button"
                    onClick={() => triggerToast(`Academic Quality Audit Approved for ${selectedProgram.title}!`)}
                  >
                    <ShieldCheck size={15} /> Approve Quality
                  </button>
                </>
              )}
            </div>
            {selectedProgram.certificateAvailable && (
              <div className="program-footer-note">
                <Award size={14} /> Certificate Enabled
              </div>
            )}
          </div>

          <h3 className="section-heading section-title-inline">
            <BookOpen size={18} /> Curriculum Structure (Program → Course → Unit)
          </h3>

          <div className="program-course-group">
            {selectedProgram.courses.map((course, index) => {
              const isExpanded = course.id === expandedCourseId;
              return (
                <div key={course.id} className="program-course-card">
                  {/* Course Header */}
                  <div
                    onClick={() => setExpandedCourseId(isExpanded ? "" : course.id)}
                    className={`course-header${isExpanded ? " expanded" : ""}`}
                  >
                    <div className="course-summary">
                      <span className="program-course-indicator">{index + 1}</span>
                      <div>
                        <strong className="course-title">{course.title}</strong>
                        <div className="course-summary-meta muted">
                          {course.subject} · Level: {course.level} · {course.units.length} Reusable Unit(s)
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      size={18}
                      className={`course-toggle-icon ${isExpanded ? "expanded" : ""}`}
                    />
                  </div>

                  {/* Course Children Units */}
                  {isExpanded && (
                    <div className="course-body">
                      <p className="muted course-description">
                        {course.description}
                      </p>
                                  <div className="program-course-body">
                        <div className="program-course-header">
                          <h5 className="course-section-label">
                            Units in this Course:
                          </h5>
                          {role !== "Student" && (
                            <button
                              className="text-button text-button-small"
                              onClick={() => triggerToast(`Added existing Unit to ${course.title}`)}
                            >
                              + Add Existing Unit
                            </button>
                          )}
                        </div>

                        <div className="course-units">
                          {course.units.map((unit) => (
                            <div key={unit.id} className="unit-row">
                              <div className="unit-info">
                                <div className="unit-summary-row">
                                  <Layers size={15} className="text-accent" />
                                  <strong>{unit.title}</strong>
                                </div>
                                <div className="unit-meta">
                                  <span>Topic: {unit.topic}</span>
                                  <span>{unit.lessonIds.length} Lessons</span>
                                  <span className="unit-meta-time">
                                    <Clock size={12} /> {unit.estimatedDurationMinutes} mins
                                  </span>
                                </div>
                              </div>

                              <div className="unit-actions">
                                <span className="tag tag-small">
                                  {unit.difficulty}
                                </span>
                                {role === "Student" && (
                                  <button
                                    className="secondary-button unit-action-button"
                                    onClick={() => setShowLessonPlayer({ title: selectedProgram.title, unitTitle: unit.title })}
                                  >
                                    Start Unit
                                  </button>
                                )}
                                {role === "Tutor" && (
                                  <button
                                    className="secondary-button unit-action-button"
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
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>Create New Educational Program</h3>
              <button onClick={() => setShowCreateModal(false)} className="modal-close"><X size={18} /></button>
            </div>
            <div className="modal-body">
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
              <div className="modal-actions">
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
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>Edit Program Details</h3>
              <button onClick={() => setShowEditModal(false)} className="modal-close"><X size={18} /></button>
            </div>
            <div className="modal-body">
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
              <div className="modal-actions">
                <button className="secondary-button" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button className="primary-button" onClick={handleSaveEdit}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Re-assign Educator Modal */}
      {showAssignModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>Re-assign Lead Educator</h3>
              <button onClick={() => setShowAssignModal(false)} className="modal-close"><X size={18} /></button>
            </div>
            <div className="modal-body">
              <p className="muted modal-note">
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
              <div className="modal-actions">
                <button className="secondary-button" onClick={() => setShowAssignModal(false)}>Cancel</button>
                <button className="primary-button" onClick={handleAssignEducator}>Confirm Assignment</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Student Lesson Player Preview Modal */}
      {showLessonPlayer && (
        <div className="modal-overlay">
          <div className="modal-box wide">
            <div className="modal-header">
              <div>
                <span className="tag preview-tag">{showLessonPlayer.title}</span>
                <h3 className="modal-heading-small">{showLessonPlayer.unitTitle}</h3>
              </div>
              <button onClick={() => setShowLessonPlayer(null)} className="modal-close"><X size={18} /></button>
            </div>
            <div className="preview-content">
              <div className="player-preview-card">
                <Play size={48} className="lesson-player-icon" />
                <span className="player-preview-text">Interactive Video Lesson Player (Demo Preview)</span>
              </div>
              <div className="preview-question-card">
                <strong>Check for Understanding (Interactive Question):</strong>
                <p className="muted modal-note">
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
              <div className="preview-actions">
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

