# Reviews & Reputation Mechanics

**Version:** 0.1

**Status:** Draft

---

# About This Document

Reputation and Portfolio concepts appear throughout the Identity & Membership Model, the Educational Provider Model, and the Organization & Collaboration Model, but none of those documents define what a Review actually is, who may leave one, or how it is moderated.

This document closes that gap. It defines Reviews as the primary input to Reputation, and establishes the business rules that keep Reputation trustworthy.

---

# Guiding Principles

## Reputation Must Be Earned, Never Granted

Consistent with the Identity & Membership Model: Reputation "cannot be created manually. It must be earned." Every rule in this document exists to protect that principle.

---

## Reviews Require a Real Educational Relationship

A Review is a statement about a lived educational experience. It must be anchored to a verified Enrollment, not open to anyone with an opinion.

---

## Transparency Over Control

Providers may respond to Reviews. They may not delete Reviews simply because they are negative. Trust depends on Reviews being resistant to manipulation by either Providers or bad-faith Students.

---

# Table of Contents

## SECTION I — Reviews

1. Review
2. Review Eligibility
3. Review Target
4. Review Lifecycle
5. Provider Response

## SECTION II — Reputation

6. Reputation Score
7. Reputation Composition
8. Reputation Protection

## SECTION III — Moderation

9. Review Moderation
10. Dispute Resolution

---

# SECTION I — REVIEWS

---

# 1. Review

## Purpose

A Review is the mechanism by which a Student communicates their educational experience to future learners and to the Provider themselves.

---

## Definition

A Review is a Student-authored evaluation of a completed or substantially progressed educational relationship with a Tutor or Organization, consisting of a rating and optional written feedback.

---

## Characteristics

- Authored by exactly one Student.
- Anchored to exactly one Enrollment (Program, Course, or Unit level).
- Immutable once submitted, except for Student-initiated edits within a limited edit window.

---

## Relationships

```text
Review
│
├── Student (author)
├── Enrollment (anchor)
├── Reviewed Target (Tutor and/or Organization)
└── Provider Response (optional)
```

---

# 2. Review Eligibility

## Purpose

Ensures only Students with a genuine educational relationship can leave a Review, protecting Reputation from manipulation.

---

## Definition

Review Eligibility is the set of conditions a Student must satisfy before a Review can be submitted.

---

## Business Rules

- A Student must have an Enrollment in at least one of: Paused, Completed, or sufficiently Active status (a minimum participation threshold — e.g. having attended or accessed a defined minimum portion of content — prevents zero-engagement reviews).
- A Student may leave one Review per Enrollment target (one per Course, one per Program, etc.), not unlimited Reviews of the same Provider.
- A Student who withdraws from an Enrollment before reaching the participation threshold is not eligible to leave a Review for that Enrollment.

---

# 3. Review Target

## Purpose

Clarifies who is actually being reviewed when a Student's Enrollment involves both a Tutor and an Organization.

---

## Definition

The Review Target is the specific Tutor, Organization, or both, that a Review's rating and feedback apply to.

---

## Business Rules

- If a Student enrolls directly with a Standalone Tutor, the Review Target is that Tutor only.
- If a Student enrolls in an Organization-owned Course taught by a specific Tutor, the Student may leave a Review for the Tutor, the Organization, or both, as two logically separate Reviews reflecting potentially different experiences (e.g. great Tutor, poor Organization support).
- Organization-level Reputation aggregates Organization-targeted Reviews; it does not automatically inherit the average of its Tutors' individual Reviews, since organizational quality (support, platform reliability, administration) is a distinct experience from individual teaching quality.

---

# 4. Review Lifecycle

## Purpose

Defines the states a Review moves through from submission to permanence.

---

## Lifecycle

```text
Eligible to Review
        │
        ▼
    Submitted
        │
        ▼
  Edit Window Open (Student may revise)
        │
        ▼
      Locked
        │
    ┌───┴────┐
    ▼        ▼
 Published  Flagged for Moderation
```

---

## Characteristics

- The Edit Window (e.g. 14 days) allows a Student to revise their Review as an experience develops, without allowing indefinite retroactive editing that would undermine trust.
- Once Locked, a Review is permanent except through the Moderation process (Section 9).

---

# 5. Provider Response

## Purpose

Allows a Tutor or Organization to publicly respond to a Review, providing context or addressing concerns without being able to suppress the Review itself.

---

## Definition

A Provider Response is a single public reply a Tutor or Organization may attach to a Review directed at them.

---

## Business Rules

- One Response per Review; the Provider may edit their own Response at any time, but the underlying Review remains unchanged.
- A Provider may never delete a Review. They may only flag it for Moderation (Section 9) if they believe it violates policy (e.g. harassment, factually false claims unrelated to educational experience, spam).

---

# SECTION II — REPUTATION

---

# 6. Reputation Score

## Purpose

Translates individual Reviews into an aggregated signal that helps Students make informed decisions, as described in the Identity & Membership Model.

---

## Definition

A Reputation Score is a calculated aggregate derived from a Provider's Reviews, weighted to resist manipulation and reflect recent educational quality more heavily than distant history.

---

## Characteristics

- Recency-weighted: recent Reviews carry more influence than old ones, so a Provider's Reputation reflects their current quality, not a legacy score built years ago.
- Volume-aware: a Provider with 3 Reviews and a perfect score should not outrank a Provider with 300 Reviews and a slightly lower average; the score calculation should account for sample size (e.g. a Bayesian or confidence-adjusted average).
- Never manually adjustable by Platform staff except through the formal Moderation process.

---

# 7. Reputation Composition

## Purpose

Clarifies that Reputation, as already scoped in Identity & Membership, is broader than the Reputation Score alone.

---

## Definition

Reputation Composition is the full set of signals — Reviews, Published Educational Content, Years of Teaching, Verified Credentials, Community Contributions — that make up a Provider's overall Reputation, of which the Reputation Score (Reviews-derived) is the most visible single number.

---

## Relationships

```text
Reputation
│
├── Reputation Score (Reviews-derived, numeric)
├── Verification status
├── Published Content volume
├── Years of Teaching
└── Community Contributions
```

---

# 8. Reputation Protection

## Purpose

Defines the safeguards that keep Reputation resistant to manipulation, consistent with the "resist manipulation" principle already stated in Identity & Membership.

---

## Business Rules

- Reviews from Students with no verified Enrollment participation never count toward Reputation Score.
- Sudden, statistically anomalous spikes in Review volume or rating (a common signature of incentivized or fake reviews) trigger automatic flagging for Moderation review before affecting the public Score.
- A Provider may not offer incentives (discounts, free content) explicitly conditioned on leaving a positive Review; this is a platform policy violation subject to Moderation.

---

# SECTION III — MODERATION

---

# 9. Review Moderation

## Purpose

Provides a process for addressing Reviews that may violate platform policy without giving Providers unilateral removal power.

---

## Definition

Review Moderation is the structured process by which a flagged Review is evaluated against platform policy and either upheld, edited (e.g. redacting a policy-violating portion), or removed.

---

## Moderation Workflow

```text
Review Flagged
   (by Provider, Student, or automated anomaly detection)
        │
        ▼
  Moderation Review
        │
   ┌────┴────┐
   ▼         ▼
 Upheld   Removed / Redacted
```

---

## Business Rules

- A Review may only be removed for genuine policy violations (harassment, off-topic content, confirmed fake/incentivized origin) — never simply for being negative.
- The reviewing Student is notified of the outcome and, where applicable, given the opportunity to resubmit a policy-compliant version.

---

# 10. Dispute Resolution

## Purpose

Provides Providers a path to contest a Review they believe is factually inaccurate, separate from Moderation's policy-violation scope.

---

## Definition

Dispute Resolution allows a Provider to formally contest the factual accuracy of a Review's claims (e.g. "this Student never attended the sessions they describe"), triggering a targeted investigation distinct from general content Moderation.

---

## Characteristics

- Disputes require the Provider to specify the exact factual claim being contested, not a general objection to the rating.
- A successful factual dispute may result in a correction note being attached to the Review rather than automatic removal, preserving the Student's right to have left it while correcting the record.

---

# Summary

Reviews are the verified, Enrollment-anchored input to Reputation. Reputation Score aggregates them with recency-weighting and volume-awareness to resist gaming. Providers can respond publicly but never delete outright; Moderation and Dispute Resolution provide the only legitimate paths to challenge a Review, keeping the system honest for Students while remaining fair to Providers.
