# Educational Provider Model

**Version:** 0.1

**Status:** Draft

---

# About This Document

## Purpose

This document defines the business concept of an **Educational Provider**.

An Educational Provider is any individual or organization that offers educational services through the platform.

Rather than modeling tutors and organizations separately throughout the platform, this document introduces a common business abstraction that represents all education providers.

This approach simplifies the domain model while allowing providers to grow naturally from independent educators into collaborative organizations.

---

## Scope

This document defines:

- Educational Providers
- Provider Types
- Provider Responsibilities
- Provider Lifecycle
- Standalone Tutors
- Organizations
- Shared Provider Capabilities
- Provider Growth

---

## Out of Scope

The following topics are covered by other domain documents.

| Topic | Document |
|---------|----------|
| Educational Structure | Core Educational Domain |
| Identity & Membership | Identity & Membership Model |
| Learner Participation | Enrollment & Participation |
| Organization Collaboration | Organization & Collaboration Model |
| Marketplace | Marketplace & Discovery *(Future)* |
| Educational Intelligence | Educational Intelligence Strategy *(Future)* |

---

# Relationship to Other Domain Models

```text
Product Vision
        │
        ▼
Educational Provider
        │
        ├──────────────┐
        ▼              ▼
Standalone Tutor   Organization
        │              │
        └──────┬───────┘
               ▼
Educational Assets
               │
               ▼
Learners
```

---

# Guiding Principles

## Education Can Be Delivered By Individuals Or Organizations

The platform supports educators at every stage of their professional journey.

An educator may begin as an independent tutor and later establish an academy, training centre, or educational organization without changing platforms.

---

## Professional Identity Belongs To The Individual

Professional identity belongs to the educator rather than the organization.

Organizations provide collaboration, governance, branding, and shared educational value without replacing personal identity.

---

## Growth Should Not Require Platform Migration

Educational Providers should be able to grow from a single educator into a large educational organization while preserving their educational assets, learners, and professional history.

---

## Educational Assets Are Long-Term Investments

Providers continuously build reusable educational assets that increase in value through collaboration, learner feedback, analytics, and Educational Intelligence.

---

## Continuous Improvement

Educational Providers continuously improve educational quality through:

- collaboration
- learner feedback
- educational reviews
- analytics
- Educational Intelligence
- professional development

Educational quality is an ongoing process rather than a final destination.

---

# Table of Contents

## SECTION I — Educational Provider

1. Educational Provider
2. Provider Types
3. Provider Responsibilities
4. Provider Lifecycle

---

## SECTION II — Standalone Tutor

5. Standalone Tutor
6. Personal Learning Space
7. Personal Brand
8. Tutor Growth Journey

---

## SECTION III — Organization

9. Organization
10. Organization Evolution

---

## SECTION IV — Shared Provider Capabilities

11. Educational Assets
12. Educational Portfolio
13. Marketplace Presence
14. Analytics
15. Educational Intelligence

---

## SECTION V — Future Vision

16. Provider Network
17. Multi-Provider Collaboration
18. Educational Ecosystem

---

# SECTION I — Educational Provider

---

# 1. Educational Provider

## Purpose

Educational Providers are the foundation of the educational marketplace.

Every learner interacts with one or more Educational Providers throughout their learning journey.

Educational Providers create educational value by designing, delivering, improving, and maintaining educational experiences.

---

## Definition

An Educational Provider is any individual or organization that offers educational programs, courses, units, or learning experiences through the platform.

Educational Providers may operate independently or collaboratively.

The platform treats both models as equal participants within the educational ecosystem.

---

## Provider Types

An Educational Provider may be:

- Standalone Tutor
- Academy
- School
- Training Centre
- Institute
- Corporate Learning Team
- Community Learning Organization

Future versions may introduce additional provider types.

---

## Characteristics

Every Educational Provider:

- owns educational assets
- delivers learning
- has a public identity
- has a marketplace presence
- builds reputation
- receives learner feedback
- maintains educational quality
- uses Educational Intelligence
- analyses educational performance
- continuously improves educational experiences

---

## Shared Capabilities

Every Educational Provider may have:

- Branding
- Learning Space
- Educational Portfolio
- Educational Assets
- Learners
- Reviews
- Reputation
- Analytics
- Educational Intelligence
- Marketplace Profile

The implementation of these capabilities may differ depending on the provider type.

---

## Relationships

```text
Educational Provider

├── Brand

├── Learning Space

├── Educational Assets

├── Educational Portfolio

├── Marketplace Profile

├── Learners

├── Reputation

├── Analytics

└── Educational Intelligence
```

---

## Business Rules

- Every Educational Provider has one public identity.
- Every Educational Provider owns at least one Learning Space.
- Every Educational Provider may publish educational assets.
- Every Educational Provider may participate in the Marketplace.
- Every Educational Provider may receive learner feedback.
- Every Educational Provider continuously improves educational quality.

---

# 2. Provider Types

## Purpose

Different Educational Providers operate in different ways while sharing common platform capabilities.

Provider Types define organisational complexity rather than educational value.

---

## Standalone Tutor

An independent educator managing their own educational business.

Characteristics include:

- personal brand
- individual ownership
- direct learner relationships
- independent decision making

---

## Organization

A collaborative educational provider consisting of multiple educators working together.

Characteristics include:

- shared brand
- educational governance
- collaborative content creation
- multiple tutors
- shared educational standards

Organizations are described in greater detail within the Organization & Collaboration Model.

---

## Provider Comparison

| Capability | Standalone Tutor | Organization |
|------------|------------------|--------------|
| Personal Brand | ✓ | Optional |
| Organization Brand | — | ✓ |
| Multiple Tutors | — | ✓ |
| Educational Governance | Limited | ✓ |
| Shared Educational Assets | Limited | ✓ |
| Collaboration | Limited | ✓ |
| Organization Analytics | — | ✓ |
| Marketplace Presence | ✓ | ✓ |

---

# 3. Provider Responsibilities

Educational Providers are responsible for delivering high-quality educational experiences.

Responsibilities include:

- designing educational experiences
- publishing educational assets
- supporting learners
- maintaining educational quality
- collecting learner feedback
- improving educational content
- protecting provider reputation
- following educational standards

Organizations may distribute these responsibilities across multiple members.

Standalone Tutors perform these responsibilities individually.

---

# 4. Provider Lifecycle

Educational Providers evolve over time.

Typical lifecycle:

```text
Join Platform

↓

Create Educational Provider

↓

Define Brand

↓

Create Learning Space

↓

Publish Educational Assets

↓

Attract Learners

↓

Build Reputation

↓

Improve Educational Quality

↓

Grow

↓

Expand
```

Growth does not necessarily mean becoming larger.

For some providers, growth means deeper expertise, stronger educational quality, or greater learner impact.

For others, growth may involve expanding into collaborative organizations, opening additional learning spaces, or serving new learner communities.

The platform supports multiple growth paths while preserving continuity of identity, educational assets, and reputation.

---