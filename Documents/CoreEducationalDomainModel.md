# Business Domain Model

**Version:** 0.1  
**Status:** Draft

---

# About This Document

This document defines the core business concepts of the AI Learning Platform.

Its purpose is to establish a shared vocabulary and a common understanding of how the platform is organized from an educational and business perspective.

The concepts described here are independent of technology, implementation, and user interface.

They represent the language of the business and should remain stable as the platform evolves.

---

# Core Principles

The Business Domain Model should remain valid even if:

- The technology changes.
- The user interface is redesigned.
- New AI capabilities are introduced.
- New integrations become available.

Every concept described here represents a **business concept**, not a software feature.

---

# Table of Contents

## SECTION I — Platform

1. Platform
2. Learning Space
3. Organization
4. Tutor
5. Student

---

## SECTION II — Learning

1. Program
2. Course
3. Unit
4. Lesson
5. Activity
6. Resource
7. Assessment
8. Competency *(Planned)*

---

## SECTION III — Community

1. Membership
2. Collaboration
3. Reviews
4. Marketplace

---

## SECTION IV — Intelligence

1. Intelligent Assistance
2. Organizational Knowledge
3. Learning Insights

---

## SECTION V — Supporting Concepts

1. Branding
2. Certification
3. Terminology

---

# SECTION I — PLATFORM

## 1. Platform

## Purpose

The Platform provides the environment where educators, organizations, and learners create, deliver, discover, and continuously improve education.

It connects every business concept into one educational ecosystem.

---

## Definition

The Platform is the highest-level business concept.

It enables tutors, organizations, and students to collaborate through structured learning while supporting educational growth with intelligent assistance.

The Platform is not an educational institution itself.

Instead, it empowers educational institutions and educators to operate successfully.

---

## Responsibilities

The Platform exists to:

- Connect educators and learners.
- Support both independent tutors and organizations.
- Encourage educational collaboration.
- Promote reusable educational content.
- Improve learning through intelligent assistance.
- Help educators build trusted professional identities.
- Enable continuous improvement through analytics.

---

## Relationships

```text
Platform
│
├── Learning Spaces
├── Organizations
├── Tutors
├── Students
├── Marketplace
├── Collaboration
├── Intelligent Assistance
└── Analytics
```

---

# 2. Learning Space

## Purpose

A Learning Space is where educational work happens.

Every educational activity belongs to one Learning Space.

---

## Definition

A Learning Space is an educational environment owned by either:

- an independent tutor, or
- an organization.

It contains everything required to create, manage, deliver, and improve education.

---

## Types

### Personal Learning Space

Owned by a tutor.

Supports independent teaching and business growth.

---

### Organization Learning Space

Owned by an organization.

Supports collaborative teaching, shared educational resources, and organizational management.

---

## Characteristics

Every Learning Space represents a unique educational identity.

It grows over time as new educational content, resources, and knowledge are created.

A Learning Space may evolve from a single tutor into a collaborative organization without changing its purpose.

---

## Contains

A Learning Space may contain:

- Programs
- Courses
- Units
- Resources
- Students
- Tutors *(Organization Spaces)*
- Collaboration
- Reviews
- Analytics

---

## Relationships

```text
Learning Space
│
├── Programs
├── Courses
├── Units
├── Resources
├── Collaboration
├── Students
└── Analytics
```

---

# 3. Organization

## Purpose

Organizations allow multiple educators to collaborate under a shared educational identity.

---

## Definition

An Organization represents any educational institution operating on the platform.

Examples include:

- Academy
- School
- Training Center
- Institute
- Coaching Center
- Corporate Learning Team

Organizations create a collaborative environment while preserving the identity of each tutor.

---

## Characteristics

Organizations may:

- Invite tutors.
- Employ tutors.
- Organize educational programs.
- Build shared resource libraries.
- Develop educational standards.
- Publish branded learning content.
- Build a public reputation.
- Collaborate internally.

Organizations may consist of two tutors or thousands of educators.

---

## Relationships

```text
Organization
│
├── Learning Space
├── Tutors
├── Students
├── Programs
├── Courses
├── Shared Resources
└── Brand
```

---

# 4. Tutor

## Purpose

Tutors design, deliver, and continuously improve education.

They are the primary creators of educational value within the platform.

---

## Definition

A Tutor is an educator who creates learning content and guides learners.

A tutor may work:

- Independently
- Within one organization
- Across multiple organizations *(Future Consideration)*

Regardless of affiliation, every tutor owns an independent professional identity.

---

## Responsibilities

Tutors may:

- Create Programs.
- Create Courses.
- Design Units.
- Teach Lessons.
- Create Activities.
- Manage Resources.
- Review educational content.
- Mentor students.
- Collaborate with other tutors.

---

## Growth Journey

```text
New Tutor

↓

Independent Tutor

↓

Experienced Tutor

↓

Organization Founder

↓

Educational Leader
```

The platform should support this journey without requiring tutors to migrate to another product.

---

# 5. Student

## Purpose

Students participate in learning experiences to achieve educational, personal, or professional goals.

---

## Definition

A Student is a learner who engages with educational content created by tutors or organizations.

Students may learn from:

- Independent tutors.
- Organizations.
- Multiple learning providers simultaneously.

---

## Characteristics

Students may:

- Enroll in Programs.
- Enroll in Courses.
- Complete Units.
- Attend Lessons.
- Participate in Activities.
- Access Resources.
- Submit Assessments.
- Receive AI recommendations.
- Review tutors and organizations.

---

## Relationships

```text
Student

↓

Programs

↓

Courses

↓

Units

↓

Lessons

↓

Activities
```

Student success is measured by learning progress, competency development, engagement, and educational achievement rather than content consumption alone.

---
# SECTION II — LEARNING

This section defines the educational structure of the platform.

Unlike traditional Learning Management Systems (LMS), the platform is built around reusable educational Units rather than static courses.

Programs organize Courses.

Courses organize Units.

Units contain Lessons, Activities, Resources, and Assessments.

This approach allows educators and organizations to reuse educational content, continuously improve it, and build larger learning pathways without unnecessary duplication.

---

# 6. Program

## Purpose

A Program represents the highest level of structured learning within the platform.

Programs organize multiple related Courses into a complete educational pathway that helps learners achieve a broader educational goal.

Programs are typically used for long-term learning journeys, certifications, or comprehensive educational offerings.

---

## Definition

A Program is an organized collection of Courses designed to guide learners through a complete curriculum.

Programs define learning pathways rather than individual learning content.

---

## Examples

- English Language Diploma
- Arabic Language Program
- High School Mathematics
- Data Science Bootcamp
- Graphic Design Professional Track
- Corporate Leadership Program

---

## Characteristics

A Program may:

- contain one or more Courses
- have admission requirements
- define completion criteria
- award certificates
- belong to a Tutor or Organization

---

## Relationships

```text
Program
│
├── Courses
├── Learners
├── Tutors
└── Certificates
```

---

# 7. Course

## Purpose

A Course groups related Units into a coherent subject or learning level.

It provides structure while allowing Units to remain independently reusable.

---

## Definition

A Course is an organized collection of Units focused on a specific subject, skill level, or educational objective.

Unlike traditional LMS platforms, a Course does not own educational content.

Instead, it references Units.

---

## Examples

Program

English Language Diploma

↓

Courses

• English A1

• English A2

• English B1

---

Another example

Programming Bootcamp

↓

Courses

• HTML Fundamentals

• CSS Fundamentals

• JavaScript Basics

---

## Characteristics

A Course may:

- contain many Units
- belong to one or more Programs
- be taught by one or more Tutors
- include assessments
- evolve over time

---

## Relationships

```text
Course
│
├── Units
├── Tutors
├── Students
└── Assessments
```

---

# 8. Unit

## Purpose

A Unit is the primary educational building block of the platform.

Every meaningful learning experience is represented by a Unit.

Everything else exists to organize, deliver, support, or improve Units.

---

## Definition

A Unit is a complete educational topic focused on a single concept, objective, or skill.

Unlike traditional chapters, Units are fully reusable and self-contained. While a Unit is the primary *reusable building block* of curriculum design, the **Lessons** contained within a Unit serve as the primary *delivery experiences* through which students consume content.

A Unit may include:

- Lessons
- Activities
- Resources
- Assessments
- Discussions
- Learning objectives
- AI recommendations
- Analytics

---

## Why Units?

Traditional educational platforms often organize learning around Courses.

This makes content difficult to reuse.

The platform instead centers learning around Units because they naturally represent complete educational topics that can be reused across Courses and Programs.

---

## Characteristics

Every Unit should define:

- learning objectives
- expected outcomes
- estimated duration
- target audience
- prerequisites (optional)
- difficulty level
- completion requirements

---

## Example

```text
Course

English A1

│

├── Unit

Greetings

│

├── Lesson

Introducing Yourself

│

├── Lesson

Common Greetings

│

├── Speaking Activity

│

├── Vocabulary Quiz

│

└── Worksheet
```

---

## Reusability

A Unit may appear in multiple Courses.

Example

```text
Course

English A1

↓

Unit

Greetings



Course

Travel English

↓

Unit

Greetings
```

The Unit exists only once while supporting multiple educational journeys.

---

## Lifecycle

```text
Idea

↓

Planning

↓

Creation

↓

Review

↓

Publishing

↓

Teaching

↓

Feedback

↓

Analytics

↓

Improvement

↓

New Version
```

---

## Relationships

```text
Unit
│
├── Lessons
├── Activities
├── Resources
├── Assessments
├── Discussions
├── Competencies
└── Analytics
```

---

# 9. Lesson

## Purpose

A Lesson delivers educational content within a Unit.

Lessons explain concepts, demonstrate skills, and prepare learners for active participation.

---

## Definition

A Lesson is an instructional session contained within a Unit.

Lessons focus on teaching rather than assessment.

Multiple Lessons may belong to a single Unit.

---

## Lesson Types

Lessons are intentionally flexible.

Examples include:

- Interactive Video
- Live Session
- Reading Lesson
- Whiteboard Lesson
- Presentation
- Audio Lesson
- AI Conversation
- Demonstration
- Coding Lesson
- Workshop

Future lesson types should integrate naturally without changing the business model.

---

## Characteristics

Lessons should:

- support Unit objectives
- provide clear explanations
- encourage engagement
- prepare learners for Activities

---

## Relationships

```text
Lesson
│
├── Activities
├── Resources
└── Assessments
```

---

# 10. Activity

## Purpose

Activities transform learning into participation.

They help learners practice, apply, and reinforce knowledge.

---

## Definition

An Activity is any learner interaction designed to support or evaluate learning.

Activities may appear throughout a Lesson or after it.

---

## Examples

- Multiple Choice
- Open Question
- Fill in the Blank
- Matching
- Flashcards
- Drag and Drop
- Reflection
- Speaking Practice
- Coding Exercise
- Project
- Discussion
- Peer Review

---

## Characteristics

Activities should:

- encourage active learning
- provide feedback
- reinforce understanding
- increase engagement

---

## Relationships

```text
Activity
│
├── Resources
├── Assessments
└── Learning Insights
```

---

# 11. Resource

## Purpose

Resources provide the supporting materials required for teaching and learning.

Unlike Lessons or Activities, Resources are reference materials that enrich the educational experience.

---

## Definition

A Resource is any reusable educational material that supports a Unit, Lesson, or Activity.

Resources are designed for reuse across the platform.

---

## Examples

- Documents
- PDFs
- Images
- Videos
- Audio
- Worksheets
- Presentations
- Templates
- External Links
- AI Prompt Templates

---

## Characteristics

Resources should:

- be reusable
- be searchable
- support multiple educational contexts
- evolve through continuous improvement

---

## Relationships

```text
Resource

↓

Units

↓

Lessons

↓

Activities
```

---

# 12. Assessment

## Purpose

Assessments measure learner understanding and educational outcomes.

---

## Definition

An Assessment is a structured evaluation of learner performance.

Assessments may be formative or summative.

They may assess knowledge, practical skills, competencies, or project outcomes.

---

## Assessment Types

Examples include:

- Quiz
- Practical Assignment
- Speaking Assessment
- Coding Challenge
- Project Evaluation
- Oral Examination
- Final Examination
- Peer Assessment

---

## Relationships

```text
Assessment
│
├── Units
├── Lessons
├── Activities
├── Competencies
└── Learning Insights
```

---

# 13. Competency

## Purpose

Competencies define what learners should know, understand, or be able to do after completing learning.

Unlike Courses or Units, Competencies describe outcomes rather than content.

---

## Definition

A Competency represents a measurable skill, knowledge area, or behavior that learners are expected to develop.

Competencies provide a common language for curriculum design, assessments, analytics, and personalized learning.

---

## Examples

- Fractions
- Present Perfect Tense
- Public Speaking
- Critical Thinking
- Problem Solving
- HTML Forms
- CSS Flexbox
- Python Functions

---

## Relationships

```text
Competency

↑

Measured by Assessments

↑

Developed through Activities

↑

Taught within Lessons

↑

Organized inside Units
```

Competencies allow the platform to evaluate learning based on mastery rather than simple completion and provide a foundation for intelligent recommendations, adaptive learning, and meaningful progress tracking.