# Learner Domain

Version: 0.1

Status: Draft

---

# About This Document

## Purpose

This document defines the Learner as a core business entity within the educational ecosystem.

While the Educational Provider Model describes how education is created and delivered, the Learner Domain describes how learners participate in education, develop over time, and build a lifelong educational identity.

The Learner Domain establishes the business concepts that represent learner growth, educational goals, learning preferences, achievements, and educational development independently of any single Program, Course, Unit, or Educational Provider.

---

## Scope

This document defines:

- Learner
- Learner Profile
- Learning Preferences
- Learning Goals
- Learning Portfolio
- Learning Insights
- Educational Evidence
- Learner Growth
- Learner Development

---

## Out of Scope

The following topics are documented elsewhere.

| Topic | Document |
|---------|----------|
| Authentication | Identity & Membership |
| Enrollment | Enrollment & Participation |
| Educational Structure | Core Educational Domain |
| Educational Providers | Educational Provider Model |
| Learning Journey | Learning Experience Domain |
| Educational Intelligence | Educational Intelligence Domain |
| Analytics | Analytics Domain |

---

# Relationship to Other Domains

```text
Identity & Membership
        │
        ▼
      Learner
        │
        ▼
  Learner Profile
        │
 ┌──────┼─────────────┐
 │      │             │
 ▼      ▼             ▼

Goals Preferences Portfolio
        │
        ▼
Educational Evidence
        │
        ▼
Learning Insights
```

The Learner Domain acts as the central educational identity for every learner.

Other business domains contribute information to the Learner Domain or consume information from it.

---

# Guiding Principles

## Learners Grow Continuously

Learners evolve through every educational experience.

The platform should preserve this growth rather than treating learning as isolated events.

---

## The Learner is More Than an Account

Authentication identifies who can access the platform.

The Learner Domain represents educational identity, educational growth, and lifelong development.

---

## Educational Data Has Context

Educational achievements, assessments, reflections, and recommendations should always be interpreted within the learner's educational journey.

---

## Learning is Lifelong

The learner's educational identity continues beyond completing a Program or leaving an Organization.

The platform should preserve long-term educational history.

---

## Human Ownership

Learners own their educational journey.

Educational Providers, Organizations, and Educational Intelligence support that journey but do not replace learner ownership.

---

# Table of Contents

## SECTION I — Learner Foundation

1. Learner
2. Learner Philosophy
3. Learner Profile
4. Learning Goals
5. Learning Preferences

---

## SECTION II — Educational Development

6. Educational Evidence
7. Learning Insights
8. Learner Growth
9. Learning Portfolio
10. Reflection

---

## SECTION III — Personalisation

11. Preferences
12. Recommendations
13. Learning Plans
14. Accessibility
15. Communication Preferences

---

## SECTION IV — Lifelong Learning

15. Competencies
16. Career & Personal Development
17. Lifelong Learning Pathways
18. Continuous Development

---

# SECTION I — Learner Foundation

The learner is the central participant within the educational ecosystem.

Every educational experience, recommendation, assessment, and interaction ultimately exists to support learner development.

Rather than viewing learners as consumers of educational content, the platform recognises learners as active participants who continuously build knowledge, skills, competencies, and experience throughout their educational journey.

---

# 1. Learner

## Purpose

The Learner represents an individual who participates in one or more educational experiences offered through the platform.

A learner may study independently, enrol in organisational programmes, participate in collaborative learning, or pursue lifelong personal and professional development.

The Learner is a core business entity that exists independently of any specific Educational Provider or Organization.

---

## Definition

A Learner is an educational participant whose knowledge, skills, competencies, achievements, and educational history evolve through continuous participation in learning experiences.

Unlike an account, which provides platform access, the Learner represents an educational identity that develops over time.

---

## Characteristics

Every Learner:

- has a unique educational identity
- owns their educational journey
- may participate in multiple educational experiences
- may learn from multiple providers
- develops continuously
- accumulates educational evidence
- builds a lifelong educational record

---

## Learner Lifecycle

```text
Join Platform

↓

Create Educational Identity

↓

Participate in Learning

↓

Generate Educational Evidence

↓

Develop Competencies

↓

Build Educational History

↓

Continue Lifelong Learning
```

The learner remains the same individual throughout this lifecycle, regardless of changes in providers, organisations, memberships, or educational goals.

---

# 2. Learner Philosophy

The platform believes that learning is an active, lifelong process rather than a series of isolated educational events.

Learners develop through participation, practice, reflection, collaboration, and continuous improvement.

Educational Providers, Organizations, and Educational Intelligence exist to support this development while respecting learner ownership and autonomy.

---

## Educational Beliefs

### Every Learner is Unique

Each learner brings different experiences, motivations, strengths, challenges, and aspirations.

Educational experiences should adapt to support these differences while maintaining educational quality.

---

### Growth Matters More Than Completion

Completing a Unit or earning a certificate represents progress, but meaningful educational growth includes developing understanding, confidence, skills, and the ability to apply knowledge.

---

### Educational History Has Value

Every educational experience contributes to future learning.

The platform should preserve educational history as part of the learner's lifelong development.

---

### Reflection Supports Growth

Reflection transforms educational experiences into lasting understanding.

Learners should be encouraged to review progress, recognise achievements, identify challenges, and set future goals.

---

### Lifelong Development

Learning continues beyond formal education.

The platform supports continuous personal and professional growth throughout the learner's educational journey.

# 3. Learner Profile

## Purpose

The Learner Profile represents the learner's educational identity, aspirations, and personal learning preferences.

Unlike the Identity Profile, which enables authentication and platform access, the Learner Profile exists to personalise educational experiences and support lifelong learning.

The Learner Profile is owned by the learner and may evolve throughout their educational journey.

---

## Definition

A Learner Profile is a collection of learner-defined educational information that helps the platform, Educational Providers, and Educational Intelligence better understand how to support the learner.

The Learner Profile represents intentions rather than achievements.

It describes who the learner wants to become rather than what the learner has already accomplished.

---

## Design Principles

The Learner Profile should:

- belong to the learner
- remain independent of any Educational Provider
- support lifelong learning
- evolve over time
- preserve learner ownership
- support personalisation
- never duplicate Educational Record data

---

## Learner-Owned Information

Examples include:

### Personal Learning Goals

- Learn a new language
- Prepare for an examination
- Change career
- Improve professional skills
- Personal enrichment

---

### Areas of Interest

Examples include:

- Mathematics
- Languages
- Programming
- Design
- Business
- Islamic Studies
- Science
- Arts

Interests help personalise recommendations without restricting learner exploration.

---

### Preferred Languages

Examples:

- Native language
- Preferred learning language
- Preferred communication language

---

### Learning Preferences

Examples include:

- Preferred study schedule
- Session duration
- Online or blended learning
- Individual or collaborative learning
- Preferred assessment style

These preferences guide recommendations but do not limit available learning opportunities.

---

### Accessibility Preferences

Examples include:

- Captions
- Larger text
- Screen reader compatibility
- High-contrast mode
- Reduced motion
- Extended assessment time

Accessibility preferences should be respected across the platform.

---

### Communication Preferences

Examples include:

- Email notifications
- Mobile notifications
- Weekly learning summaries
- Reminder frequency
- Organization announcements
- Tutor communications

---

### Privacy Preferences

Learners control how their educational identity is shared.

Examples include:

- Public profile visibility
- Certificate visibility
- Achievement visibility
- Portfolio visibility
- Community participation
- Search discoverability

---

## Profile Evolution

The Learner Profile evolves through intentional learner updates.

Examples include:

- changing educational goals
- updating interests
- adding preferred languages
- changing accessibility requirements
- modifying communication preferences

Unlike the Educational Record, these changes reflect learner intentions rather than educational outcomes.

---

## Relationship to Other Domains

The Learner Profile contributes to:

- Educational Intelligence
- Marketplace recommendations
- Learning Experience personalisation
- Organization onboarding
- Analytics personalisation

The Learner Profile does **not** contain educational achievements, assessment results, enrolments, certificates, or completed learning activities.

Those belong to the Educational Record.

# 4. Learning Goals

## Purpose

Learning Goals represent the educational aspirations that motivate and guide a learner throughout their educational journey.

They provide direction for learning decisions, influence personalized recommendations, and help Educational Intelligence understand the learner's intentions beyond their current enrollments.

Learning Goals belong to the learner and may evolve over time as interests, priorities, and circumstances change.

---

## Definition

A Learning Goal is a learner-defined educational objective that expresses what the learner wants to achieve.

Unlike Learning Objectives, which are created by Educational Providers for specific educational assets, Learning Goals are personal and may span multiple Programs, Courses, Organizations, or Educational Providers.

---

## Guiding Principles

Learning Goals should:

- be learner-owned
- support lifelong learning
- evolve over time
- remain independent of any Educational Provider
- support personalization
- guide Educational Intelligence recommendations
- encourage meaningful educational progress

---

## Types of Learning Goals

A learner may define one or more goals simultaneously.

### Knowledge Goals

Focus on acquiring new knowledge or understanding.

Examples:

- Learn conversational Arabic
- Understand data science fundamentals
- Study Islamic history
- Improve financial literacy

---

### Skill Development Goals

Focus on developing practical skills.

Examples:

- Improve public speaking
- Master Python programming
- Develop leadership skills
- Improve academic writing

---

### Academic Goals

Support formal education.

Examples:

- Complete a diploma
- Prepare for university admission
- Achieve a target examination score
- Complete a certification pathway

---

### Professional Goals

Support career development.

Examples:

- Qualify for promotion
- Prepare for a new career
- Earn an industry certification
- Develop workplace competencies

---

### Personal Development Goals

Support lifelong personal growth.

Examples:

- Learn a new language
- Improve communication skills
- Build confidence
- Develop critical thinking

---

### Organization Goals

Goals that originate from an Educational Provider or Organization.

Examples:

- Complete mandatory training
- Finish employee onboarding
- Meet annual compliance requirements
- Complete internal certification

Learners may choose to combine organization goals with their own personal goals.

---

## Goal Attributes

Each Learning Goal may include information such as:

- title
- description
- category
- priority
- target completion date
- current status
- related competencies
- related interests
- preferred learning pace

The platform should remain flexible and avoid requiring all attributes.

---

## Goal Lifecycle

Learning Goals evolve throughout the learner's journey.

```text
Create Goal

↓

Plan Learning

↓

Participate

↓

Track Progress

↓

Adjust Goal

↓

Achieve Goal

↓

Create New Goal
```

Learning is continuous.

Completing one goal often leads to defining another.

---

## Goal Progress

Learning Goals should support progress tracking.

Progress may be based on:

- completed Units
- completed Courses
- competency development
- assessment outcomes
- Educational Evidence
- learner reflections

Progress should reflect meaningful advancement rather than only completion percentages.

---

## Educational Intelligence

Educational Intelligence may use Learning Goals to:

- recommend Programs
- recommend Courses
- recommend Units
- identify learning gaps
- suggest study plans
- recommend Educational Providers
- identify prerequisite knowledge
- personalize learning pathways

Educational Intelligence should never modify learner goals without explicit learner approval.

---

## Relationship to Other Domains

Learning Goals contribute to:

- Learning Experience personalization
- Educational Intelligence
- Marketplace recommendations
- Learning plans
- Analytics
- Competency development

Learning Goals remain independent of enrollments, assessments, and educational achievements.

Those outcomes are recorded within the Educational Record.

---

# 5. Learning Preferences

## Purpose

Learning Preferences describe how a learner prefers to engage with educational experiences.

They help Educational Providers and Educational Intelligence personalize learning experiences while preserving learner choice and educational quality.

Learning Preferences are learner-owned and may evolve over time as learners develop new skills, habits, and goals.

Unlike Learning Goals, which define *what* a learner wants to achieve, Learning Preferences describe *how* the learner prefers to learn.

---

## Definition

Learning Preferences are learner-defined characteristics that influence the delivery, organization, and recommendation of educational experiences.

Preferences guide personalization but never restrict educational opportunities or provider-defined learning requirements.

---

## Guiding Principles

Learning Preferences should:

- belong to the learner
- be optional
- evolve over time
- support personalization
- never reduce educational quality
- never override educational requirements
- remain independent of Educational Providers

---

# Preference Categories

## Learning Schedule

Learners may define when they typically prefer to study.

Examples include:

- Morning
- Afternoon
- Evening
- Late Night
- Weekdays
- Weekends
- Flexible Schedule

Educational Intelligence may use these preferences when generating study plans and reminders.

---

## Study Session Preferences

Learners may indicate preferred study durations.

Examples include:

- Short sessions (10–20 minutes)
- Medium sessions (20–45 minutes)
- Long sessions (45–90 minutes)

These preferences assist in planning learning activities but do not change the educational content itself.

---

## Learning Pace

Learners may express how they prefer to progress.

Examples include:

- Self-paced
- Guided pace
- Intensive learning
- Flexible progression

Educational Providers may still define minimum pacing requirements for structured Programs.

---

## Content Format Preferences

Learners may indicate preferred learning formats.

Examples include:

- Video
- Reading
- Interactive Activities
- Live Sessions
- Recorded Sessions
- Practical Exercises
- Audio Lessons

These preferences influence recommendations rather than limiting available content.

---

## Assessment Preferences

Learners may express preferred methods of demonstrating learning.

Examples include:

- Quizzes
- Practical Projects
- Discussions
- Written Assignments
- Oral Assessments

Educational Providers determine official assessment methods.

Preferences help Educational Intelligence recommend additional practice opportunities.

---

## Communication Preferences

Learners may specify how they prefer educational communication.

Examples include:

- Tutor feedback
- Organization announcements
- Weekly summaries
- Achievement notifications
- Reminder frequency
- Community activity

Communication preferences improve learner engagement without affecting official educational communications.

---

## Accessibility Preferences

Accessibility preferences help ensure inclusive learning experiences.

Examples include:

- Closed captions
- High contrast mode
- Larger text
- Reduced motion
- Screen reader compatibility
- Extended assessment time
- Alternative resource formats

Accessibility preferences should be respected throughout the platform whenever possible.

---

## Collaboration Preferences

Learners may indicate how they prefer to participate in collaborative learning.

Examples include:

- Individual learning
- Small groups
- Community discussions
- Peer review
- Collaborative projects
- Study circles

Educational Providers may require collaborative activities where appropriate.

---

# Preference Lifecycle

Learning Preferences may change throughout the learner's educational journey.

```text
Initial Preferences

↓

Educational Experiences

↓

Reflection

↓

Preference Updates

↓

Improved Personalization
```

Educational Intelligence should continuously adapt recommendations based on updated preferences and educational evidence.

---

# Relationship to Educational Intelligence

Educational Intelligence uses Learning Preferences to improve personalization.

Examples include:

- recommending suitable Educational Providers
- suggesting relevant Programs
- proposing study schedules
- recommending learning resources
- planning revision sessions
- improving reminder timing

Educational Intelligence should never assume that a learner's preferences are permanent.

Recommendations should adapt as educational evidence grows.

---

# Relationship to Other Domains

Learning Preferences contribute to:

- Learning Experience
- Educational Intelligence
- Marketplace & Discovery
- Analytics
- Study Planning
- Notification Services

Learning Preferences do not represent educational achievement, competency, or progress.

Those belong to the Educational Record.

------------