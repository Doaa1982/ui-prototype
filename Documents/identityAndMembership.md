# Identity & Membership Model

**Version:** 0.1

**Status:** Draft

---

# About This Document

This document defines how people exist, identify themselves, build professional identities, and participate within the AI Learning Platform.

It describes the business concepts related to identity, membership, reputation, and organizational affiliation.

This document intentionally excludes authentication, authorization, security, and technical account implementation.

---

# Guiding Principles

People are at the center of the platform.

Roles may change throughout a person's journey.

Professional identity belongs to the individual.

Organizations provide collaboration rather than ownership of personal identity.

Membership creates relationships.

Trust is earned through participation, contribution, and educational quality.

---

# Table of Contents

SECTION I — Identity

1. Person
2. Account
3. Profile

SECTION II — Membership

1. Membership
2. Membership Types
3. Learning Space Membership
4. Organization Membership
5. Membership Lifecycle

SECTION III — Professional Identity

1. Professional Identity
2. Tutor Portfolio
3. Organization Portfolio
4. Reputation
5. Verification

SECTION IV — Growth

1. Achievements
2. Professional History
3. Public Presence

---

# SECTION I — IDENTITY

---

# 1. Person

## Purpose

A Person represents an individual participating in the platform.

Everything else builds upon this concept.

---

## Definition

A Person is the fundamental human entity within the platform.

A person may participate in different educational roles throughout their lifetime without creating multiple identities.

Roles are temporary.

Identity is permanent.

---

## Examples

A person may be:

- Student

- Tutor

- Organization Owner

- Academy Manager

- Parent *(Future)*

- Mentor *(Future)*

- Reviewer

---

## Characteristics

A Person:

- owns one identity
- may have multiple memberships
- may participate in multiple organizations
- builds a long-term educational history
- owns achievements and reputation

---

## Relationships

```text
Person

│

├── Account

├── Professional Identity

├── Memberships

├── Learning History

└── Reputation
```

---

# 2. Account

## Purpose

An Account allows a person to access the platform.

It represents the platform relationship rather than the educational identity.

---

## Definition

An Account connects a Person to the platform.

Every person owns one account.

An account enables participation but does not define educational roles.

Roles are determined through memberships.

---

## Characteristics

An Account:

- belongs to one person
- supports one or more memberships
- maintains platform preferences
- enables access to learning spaces

---

## Relationships

```text
Account

↓

Person

↓

Memberships
```

---

# 3. Profile

## Purpose

A Profile stores the personal information required for participation.

It represents who the person is rather than what they teach.

---

## Definition

A Profile contains personal information that helps identify the individual within the platform.

Some information may be public while other information remains private.

---

## Examples

Examples may include:

- Name
- Biography
- Languages
- Country
- Time Zone
- Profile Photo

The exact information may evolve over time.

---

## Characteristics

Profiles should:

- remain editable
- support multiple languages
- support public and private information
- evolve with the person

---

# SECTION II — MEMBERSHIP

---

# 4. Membership

## Purpose

Membership defines how a Person participates within a specific educational context on the platform.

While identity belongs permanently to the Person, membership creates structured relationships with Learning Spaces, Organizations, and Educational Offerings.

---

## Definition

A Membership is an active relationship between a Person and an educational entity (such as a Learning Space or Organization).

Membership defines a person's rights, responsibilities, and role within that specific context.

A Person may hold multiple memberships simultaneously.

---

## Characteristics

Membership:

- connects a Person to a specific Learning Space or Organization
- defines contextual roles (e.g. Student, Tutor, Admin, Owner)
- grants access to educational assets, spaces, and resources
- maintains a distinct lifecycle (Invited, Active, Paused, Terminated)
- preserves personal identity upon departure or role change

---

## Relationships

```text
Person
  │
  ├── Membership A (Personal Learning Space)
  ├── Membership B (Academy Organization - Tutor)
  └── Membership C (Community Organization - Student)
```

---

# 5. Membership Types

## Purpose

Different educational interactions require different levels of responsibility and access.

Membership Types categorize participation based on educational activity.

---

## Types

### Student Membership

Engages with educational content, completes units and assessments, and tracks personal learning progress.

---

### Tutor Membership

Creates, teaches, reviews, and manages educational assets within a Learning Space or Organization.

---

### Organization Member

Participates in organizational activities, collaborative content creation, or governance roles (e.g., Owner, Administrator, Educational Manager).

---

### Guest / External Member

Participates temporarily or with limited visibility in specific educational spaces or events.

---

## Characteristics

A person may hold different Membership Types in different spaces simultaneously (e.g. Tutor in Academy A, Student in Academy B).

---

# 6. Learning Space Membership

## Purpose

Learning Space Membership governs how individuals access and contribute to a specific Learning Space.

---

## Definition

A Learning Space Membership binds a Person to a Personal or Organization Learning Space.

It determines what educational assets the person can view, edit, teach, or manage within that space.

---

## Characteristics

- Personal Learning Space Membership: Owned and controlled by the individual tutor.
- Organization Learning Space Membership: Governed by organization policies and membership roles.

---

# 7. Organization Membership

## Purpose

Organization Membership allows educators and staff to collaborate within a shared organizational identity.

---

## Definition

An Organization Membership links a Person to an Organization.

It establishes organizational affiliation, academic responsibility, administrative governance, and access to shared organizational assets.

---

## Characteristics

- Does not transfer ownership of personal professional identity to the organization.
- Can be created via invitation or application.
- Can be revoked or modified by organization owners without altering the person's independent platform account or historical portfolio.

---

# 8. Membership Lifecycle

## Purpose

Memberships evolve over time as relationships begin, change, and end.

---

## Definition

The Membership Lifecycle defines the stages of a person's affiliation with a Learning Space or Organization.

---

## Stages

```text
Invitation / Application
        │
        ▼
   Onboarding
        │
        ▼
 Active Participation
        │
     ┌──┴──┐
     ▼     ▼
  Paused  Role Change
     │     │
     └──┬──┘
        ▼
    Departure
```

1. **Invitation / Application**: A person is invited to join or applies for membership.
2. **Onboarding**: Setting up contextual profile details.
3. **Active Participation**: Full involvement in learning, teaching, or administration.
4. **Paused / Inactive**: Temporary suspension or hiatus.
5. **Departure / Offboarding**: Ending membership while retaining historical achievements and personal identity.

---

# SECTION III — PROFESSIONAL IDENTITY

Professional Identity represents how educators and organizations are recognized, discovered, and trusted within the platform.

Unlike personal identity, Professional Identity is built over time through educational contributions, collaboration, learner feedback, and continuous professional development.

Professional Identity belongs to the individual educator.

Organizations contribute to it but do not own it.

---

# 9. Professional Identity

## Purpose

Professional Identity represents an educator's educational presence within the platform.

It helps learners discover the right educator while enabling organizations to showcase the expertise of their teaching teams.

Professional Identity grows through contribution rather than self-description.

---

## Definition

Professional Identity is a public representation of an educator's educational career, expertise, achievements, and reputation.

Unlike a personal profile, Professional Identity focuses on educational value.

---

## Characteristics

Professional Identity:

- belongs to one Person
- evolves throughout the educator's career
- remains independent of organizational changes
- reflects educational contribution
- builds learner trust
- supports educator branding

---

## May Include

- Professional Biography
- Teaching Philosophy
- Areas of Expertise
- Subjects
- Languages
- Years of Experience
- Certifications
- Professional Achievements
- Portfolio
- Reviews
- Verification
- Published Educational Content

---

## Relationships

```text
Professional Identity

├── Portfolio

├── Reviews

├── Reputation

├── Verification

├── Achievements

├── Educational Content

└── Organization Memberships
```

---

# 10. Tutor Portfolio

## Purpose

The Tutor Portfolio showcases an educator's work, experience, and educational contributions.

It demonstrates educational capability through evidence rather than claims.

---

## Definition

A Tutor Portfolio is a curated collection of professional information and educational work.

It evolves continuously as the tutor teaches, creates, collaborates, and improves.

---

## May Include

### About

- Biography
- Teaching Philosophy
- Expertise
- Languages

---

### Experience

- Teaching History
- Organizations
- Industries
- Years of Experience

---

### Educational Content

- Programs
- Courses
- Units
- Resources
- Public Lessons

---

### Achievements

- Certifications
- Awards
- Milestones

---

### Community

- Reviews
- Testimonials
- Followers *(Future)*
- Educational Contributions

---

### Statistics

Examples include:

- Students Taught
- Units Published
- Completion Rates
- Average Rating
- Response Time

Statistics should provide context rather than competition.

---

## Relationships

```text
Tutor Portfolio

├── Professional Identity

├── Educational Content

├── Reviews

├── Achievements

└── Reputation
```

---

# 11. Organization Portfolio

## Purpose

Organizations require a public educational identity independent of their individual tutors.

The Organization Portfolio communicates educational mission, quality, and credibility.

---

## Definition

An Organization Portfolio represents the public face of an academy, school, institute, or training center.

It combines organizational branding with educational reputation.

---

## May Include

### Organization

- Name
- Logo
- Brand Colors
- Mission
- Description

---

### Educational Offering

- Programs
- Courses
- Subjects
- Learning Levels

---

### Teaching Team

- Tutors
- Specialists
- Educational Leaders

---

### Community

- Reviews
- Testimonials
- Student Success Stories

---

### Statistics

Examples include:

- Active Students
- Tutors
- Programs
- Graduation Rate
- Years of Operation

---

## Relationships

```text
Organization Portfolio

├── Brand

├── Tutors

├── Programs

├── Reviews

├── Reputation

└── Verification
```

---

# 12. Reputation

## Purpose

Reputation reflects the trust earned through consistent educational quality and meaningful contribution.

It cannot be created manually.

It must be earned.

---

## Definition

Reputation represents the community's confidence in an educator or organization.

It develops through experience, transparency, and educational excellence.

---

## Sources

Reputation may develop through:

- Student Reviews
- Organization Reviews
- Published Educational Content
- Years of Teaching
- Community Contributions
- Educational Collaboration
- Verified Credentials

---

## Characteristics

Reputation should:

- evolve gradually
- reward consistency
- encourage quality
- remain transparent
- resist manipulation

---

## Relationships

```text
Reputation

↑

Reviews

↑

Educational Quality

↑

Learning Outcomes
```

---

# 13. Verification

## Purpose

Verification confirms authenticity.

It helps learners distinguish trusted educators and organizations.

Verification supports trust but does not replace reputation.

---

## Definition

Verification confirms that a person or organization has successfully demonstrated the authenticity of specific information.

Verification may apply to identity, education, professional qualifications, or organizational legitimacy.

---

## Examples

- Identity Verification
- Organization Verification
- Degree Verification
- Teaching Certificate Verification
- Business Verification

---

## Characteristics

Verification:

- increases trust
- remains independent of reviews
- may expire
- may require renewal
- supports organizational credibility

Verification should never imply educational quality.

It simply confirms authenticity.
---

# SECTION IV — GROWTH

Growth recognizes that learning platforms should support the long-term development of both learners and educators.

Rather than storing isolated achievements, the platform should build a continuous educational journey throughout a person's lifetime.

---

# 14. Achievements

## Purpose

Achievements recognize meaningful milestones reached through educational participation and contribution.

They encourage continuous improvement without becoming the primary motivation for learning.

---

## Definition

Achievements represent accomplishments earned through teaching, learning, collaboration, or community contribution.

Achievements may be personal, organizational, or community-based.

---

## Examples

### Teaching

- First Published Unit
- 100 Lessons Delivered
- 1,000 Students Taught

### Learning

- Program Completed
- Competency Mastered
- Learning Streak

### Community

- Mentor Recognition
- Peer Reviewer
- Top Contributor

---

## Characteristics

Achievements should:

- reward meaningful contribution
- encourage long-term engagement
- remain transparent
- avoid unhealthy competition

---

# 15. Professional History

## Purpose

Professional History documents an educator's career and educational contributions over time.

It provides context for experience rather than simply listing accomplishments.

---

## Definition

Professional History is a chronological record of educational activities, organizational affiliations, teaching experience, and professional development.

Unlike a résumé, it continues to grow throughout the educator's career.

---

## May Include

- Organizations
- Roles
- Programs
- Courses
- Units
- Certifications
- Conferences
- Educational Projects
- Research
- Publications

Professional History remains associated with the individual regardless of changes in employer or organization.

---

# 16. Public Presence

## Purpose

Public Presence represents everything visible to other members of the platform when discovering educators or organizations.

It combines identity, reputation, achievements, and educational contributions into one discoverable representation.

---

## Definition

Public Presence is the outward-facing view of a Person or Organization within the platform.

Its purpose is to support trust, discovery, and informed educational decisions.

---

## Components

Public Presence may include:

- Professional Identity
- Portfolio
- Reviews
- Reputation
- Verification
- Published Educational Content
- Achievements
- Organization Memberships

The exact information displayed may vary depending on privacy settings and organizational policies.

---

# Summary

The Identity & Membership domain establishes how people exist, participate, collaborate, and grow within the platform.

Identity remains stable throughout a person's journey.

Membership defines participation.

Professional Identity reflects educational contribution.

Reputation is earned through trust.

Public Presence enables meaningful discovery while preserving the independence of educators and organizations.