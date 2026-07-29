import type { UserRole } from "../RoleSwitcher";

type EnrollmentPageProps = {
  role: UserRole;
};

const enrollments = [
  {
    title: "Arabic Language Track",
    description: "Week 4: Everyday Conversations",
    progress: 68,
    status: "In progress",
    detail: "Lesson 3 of 6",
    coverColor: "blue",
  },
  {
    title: "Data Science Bootcamp",
    description: "Course onboarding and data fundamentals",
    progress: 34,
    status: "Active",
    detail: "Module 2 of 8",
    coverColor: "purple",
  },
  {
    title: "English for Business",
    description: "Professional writing and presentation skills",
    progress: 82,
    status: "Almost complete",
    detail: "Unit 5 of 6",
    coverColor: "green",
  },
];

export default function EnrollmentPage({ role }: EnrollmentPageProps) {
  const heading =
    role === "Student"
      ? "Manage your enrollments"
      : "Track learner participation";

  const subtitle =
    role === "Student"
      ? "Review your active learning commitments and progress across enrolled programs."
      : "Monitor learner enrollment status, participation, and completion across your offerings.";

  return (
    <div className="workspace-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">ENROLLMENT</p>
          <h1>{heading}</h1>
          <p className="muted">{subtitle}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">E</div>
          <span className="stat-label">Enrolled programs</span>
          <strong className="stat-value">3</strong>
          <span className="stat-detail">Active this term</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">P</div>
          <span className="stat-label">Participation rate</span>
          <strong className="stat-value">91%</strong>
          <span className="stat-detail">Completion focus</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">C</div>
          <span className="stat-label">Completion goals</span>
          <strong className="stat-value">2</strong>
          <span className="stat-detail">Due soon</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon">S</div>
          <span className="stat-label">Status updates</span>
          <strong className="stat-value">4</strong>
          <span className="stat-detail">Recent changes</span>
        </div>
      </div>

      <div className="studio-card grid-stack">
        <div>
          <h3>Enrollment snapshot</h3>
          <p className="muted">
            {role === "Student"
              ? "Keep your learning commitments visible and stay on track with current progress."
              : "See how learners are enrolled, where they are engaged, and which cohorts need attention."}
          </p>
        </div>
        <div className="status-pill-row">
          <span className="status-pill">In progress</span>
          <span className="status-pill">Pending</span>
          <span className="status-pill">Completed</span>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Active enrollments</h2>
          <p className="muted">A quick view of your current learning commitments.</p>
        </div>
      </div>

      <div className="program-grid">
        {enrollments.map((item) => (
          <article className="program-card" key={item.title}>
            <div className={`program-cover ${item.coverColor}`}>
              <span>{item.status.toUpperCase()}</span>
            </div>
            <div className="program-body">
              <h3>{item.title}</h3>
              <p className="muted">{item.description}</p>
              <div className="program-progress">
                <div className="progress-label">
                  <span>{item.detail}</span>
                  <strong>{item.progress}%</strong>
                </div>
                <div className="progress-line">
                  <span style={{ width: `${item.progress}%` }} />
                </div>
              </div>
              <div className="program-footer">
                <span>{item.status}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
