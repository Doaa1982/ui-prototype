# Enrollment & Participation Model

**Version:** 0.2

**Status:** Draft

**Changelog (0.1 → 0.2):** Resolved the previously open question on whether Enrollment extends below Unit level. Lesson is now a formal Enrollment Target (Section 2), treated as a lightweight variant of Unit Enrollment. Updated the Enrollment definition and Relationships diagram (Section 1), Completion (Section 10), and Achievement (Section 11) accordingly.

---

# About This Document

This document defines how learners join, participate in, and complete educational offerings within the AI Learning Platform.

It describes the business concepts, lifecycle, and rules governing the relationship between learners and educational content.

This document intentionally focuses on the business domain and does not describe user interface, technical implementation, or database design.

---

# Core Principles

Enrollment is more than granting access.

It establishes an educational relationship between a learner and an educational offering.

Every enrollment should support:

- Clear expectations
- Flexible learning
- Continuous progress
- Meaningful completion
- Lifelong learning

---

# Table of Contents

## SECTION I — Enrollment

1. Enrollment
2. Enrollment Targets
3. Enrollment Methods
4. Enrollment Lifecycle
5. Enrollment Status

---

## SECTION II — Participation

6. Learning Participation
7. Progress
8. Attendance
9. Engagement

---

## SECTION III — Completion

10. Completion
11. Achievement
12. Certification

---

## SECTION IV — Future Considerations

13. Cohorts
14. Waiting Lists
15. Learning Paths
16. Lifelong Learning Record

---

# SECTION I — ENROLLMENT

---

# 1. Enrollment

## Purpose

Enrollment represents the formal relationship between a learner and an educational offering.

It marks the beginning of a learner's educational journey within the platform.

---

## Definition

An Enrollment connects a Student with a Program, Course, Unit, or Lesson.

Enrollment determines which learning opportunities become available to the learner and establishes the basis for tracking participation, progress, and completion.

Enrollment does not guarantee completion.

It simply establishes the educational relationship.

---

## Characteristics

Every Enrollment:

- belongs to one Student
- references one educational offering
- has a lifecycle
- tracks participation
- records progress
- may result in certification

---

## Relationships

```text
Enrollment

├── Student

├── Program / Course / Unit / Lesson

├── Progress

├── Participation

├── Achievement

└── Certification
```

---

# 2. Enrollment Targets

The platform supports enrollment at different educational levels.

## Program Enrollment

Suitable for long-term educational journeys.

Example:

```
English Language Diploma
```

---

## Course Enrollment

Suitable for individual subjects.

Example:

```
English A1
```

---

## Unit Enrollment

Suitable for focused learning on a single topic or skill.

Example:

```
Business Email Writing
```

Unit enrollment supports micro-learning, professional development, and just-in-time learning.

---

## Lesson Enrollment

Suitable for single-session learning: one interactive video, one live session, one focused explanation — the smallest complete educational experience a Student can formally enroll in.

Example:

```
Present Perfect Tense
```

Lesson Enrollment supports true single-lesson consumption: a Student who wants only *this* lesson rather than the Unit that contains it (e.g. a free sample, a pay-per-lesson purchase, or a targeted remedial recommendation from Adaptive Learning).

**Resolved:** Lesson is the smallest formal Enrollment relationship. Lesson Enrollment is treated as a lightweight variant of Unit Enrollment rather than a fully independent mechanism:

- Enrolling in a Lesson automatically establishes an implicit, lightweight relationship to the Lesson's parent Unit, scoped only to that Lesson — the Student is not enrolled in the full Unit and gains no access to its other Lessons.
- This implicit Unit-level link exists solely so that Progress, Competency Tracking, and Analytics can reason about the Lesson consistently with everything else in the hierarchy, without requiring a second, disconnected tracking model for Lesson-only learners.
- If a Student later enrolls in the full Unit, their prior Lesson Enrollment and any recorded Progress or Completion for that Lesson carry forward rather than resetting.
- Organizations and Tutors may choose whether to offer Lesson-level Enrollment at all for a given Unit (e.g. a tightly sequenced Unit may require full Unit Enrollment, while a loosely coupled Unit of independent topics may allow Lesson-by-Lesson access).

---

# 3. Enrollment Methods

Enrollment should remain flexible.

Possible methods include:

### Self Enrollment

The learner joins independently.

---

### Tutor Invitation

A tutor invites the learner.

---

### Organization Invitation

An organization enrolls learners directly.

---

### Approval Required

Learners submit an application that requires approval before enrollment.

---

### Private Enrollment

Available only to invited learners.

---

### External Enrollment *(Future)*

Enrollment initiated through external platforms or integrations.

---

# 4. Enrollment Lifecycle

Every enrollment follows a lifecycle.

```text
Discover

↓

Apply (Optional)

↓

Enroll

↓

Begin Learning

↓

Active Learning

↓

Complete

↓

Certificate (Optional)

↓

Alumni
```

The lifecycle may vary depending on organizational policies.

---

# 5. Enrollment Status

Typical enrollment states include:

- Pending
- Approved
- Active
- Paused
- Completed
- Withdrawn
- Expired
- Archived

Organizations may introduce additional internal statuses where appropriate.

---

# SECTION II — PARTICIPATION

---

# 6. Learning Participation

Enrollment grants access.

Participation reflects actual engagement.

Learners may:

- Watch lessons
- Complete activities
- Submit assessments
- Join discussions
- Attend live sessions
- Access resources

Participation provides the foundation for meaningful analytics.

---

# 7. Progress

Progress represents a learner's advancement through an educational offering.

Progress should consider more than simple content completion.

Possible indicators include:

- Units completed
- Lessons completed
- Activities completed
- Assessment performance
- Competencies achieved
- Time invested
- Learning streaks

Progress should encourage learning rather than reward passive content consumption.

---

# 8. Attendance

Some learning experiences require attendance.

Examples include:

- Live classes
- Workshops
- Coaching sessions
- Webinars

Attendance may contribute to completion requirements depending on organizational policies.

---

# 9. Engagement

Engagement measures the quality of learner participation.

Examples include:

- Active participation
- Discussion contributions
- Practice consistency
- Assignment submissions
- Reflection activities
- Peer collaboration

High engagement often correlates with improved learning outcomes.

---

# SECTION III — COMPLETION

---

# 10. Completion

Completion indicates that a learner has satisfied the educational requirements of an enrolled offering.

Completion requirements may include:

- Required Units
- Mandatory Lessons
- Assessments
- Projects
- Attendance
- Competency mastery

Completion should represent meaningful achievement rather than simple navigation.

Completion applies at whatever granularity a Student is Enrolled at. A Student with a standalone Lesson Enrollment (see Section 2) completes when that Lesson's own requirements — e.g. watching the video, answering its embedded questions — are satisfied, without needing to complete the surrounding Unit they were never enrolled in.

---

# 11. Achievement

Achievements recognize learner accomplishments throughout their educational journey.

Examples include:

- Lesson completion
- Unit completion
- Course completion
- Program completion
- Competency mastery
- Outstanding performance
- Community contribution

Achievements provide motivation and recognize progress beyond formal certification.

---

# 12. Certification

Organizations and tutors may issue certificates after successful completion of educational requirements.

Certification policies remain under the control of the issuing tutor or organization.

Possible certificate types include:

- Completion Certificate
- Competency Certificate
- Professional Certificate
- Organization Certificate

The platform should support verification and long-term access to earned certificates.

---

# SECTION IV — FUTURE CONSIDERATIONS

---

# 13. Cohorts

Future versions of the platform may support cohort-based learning, allowing groups of learners to progress together according to shared schedules.

---

# 14. Waiting Lists

Educational offerings may optionally maintain waiting lists when enrollment capacity is limited.

---

# 15. Learning Paths

Learners may follow personalized learning paths that combine Programs, Courses, and Units from different tutors or organizations.

---

# 16. Lifelong Learning Record

The platform may maintain a learner-owned educational record that spans multiple tutors, organizations, and years of learning.

Rather than being limited to one institution, learners would build a continuous portfolio of educational achievements, competencies, certifications, and completed learning over their lifetime.