# Marketplace & Discovery

**Version:** 0.1

**Status:** Draft

---

# About This Document

"Marketplace Presence," "Marketplace Profile," and "Marketplace Commission" are referenced across nearly every existing domain document — Educational Provider Model, Organization & Collaboration Model, Business Model & Monetization — but none of them define how a Student actually *finds* a Tutor or Organization, how results are ranked, or how Marketplace Commission (already scoped as Future Scope in the Business Model document) gets attributed.

This document defines that missing layer.

---

# Guiding Principles

## Discovery Must Not Undermine the "Your Own Platform" Promise

The Marketplace is an additional discovery channel *into* a Provider's branded space — it is not a replacement storefront that flattens every Provider into a generic listing. Once a Student clicks through, they should land in the Provider's own branded experience, not a Platform-branded one.

---

## Ranking Must Reward Educational Quality, Not Just Popularity

Consistent with Reputation Protection principles already established: ranking signals should resist gimmicks (review manipulation, keyword stuffing) and reflect genuine learning outcomes and trust.

---

## Attribution Must Be Auditable

Since Marketplace Commission only applies to Marketplace-attributed enrollments (per the Business Model document), the Marketplace must be able to prove, not just claim, that it sourced a given Student.

---

## Marketplace Participation Is Opt-In

Consistent with the Educational Provider Model's existing statement that "Marketplace participation is optional" — a Provider who wants to run a purely private, invitation-based practice must be able to do so without penalty.

---

# Table of Contents

## SECTION I — Discoverability

1. Marketplace Listing
2. Discovery Surfaces
3. Search & Ranking

## SECTION II — Attribution

4. Marketplace Attribution
5. Attribution Window

## SECTION III — Trust Signals

6. Marketplace Trust Signals
7. Featured Placement

## SECTION IV — Provider Control

8. Marketplace Opt-In & Opt-Out

---

# SECTION I — DISCOVERABILITY

---

# 1. Marketplace Listing

## Purpose

Represents a Provider's public-facing presence within the Marketplace, distinct from — but linked to — their Tutor Portfolio or Organization Portfolio.

---

## Definition

A Marketplace Listing is the searchable, browsable representation of a Provider's Educational Offerings (Programs, Courses, Units, or individually Enrollable Lessons) within the platform's discovery surfaces.

---

## Characteristics

- Automatically generated from a Provider's existing Portfolio and published Educational Assets — Providers do not maintain a separate Marketplace profile from scratch.
- Always links through to the Provider's own branded Learning Space, never to a Platform-branded intermediary page, consistent with the "your own platform" principle.

---

## Relationships

```text
Marketplace Listing
│
├── Provider Portfolio (Tutor or Organization)
├── Published Educational Assets
├── Reviews / Reputation Score
└── Marketplace Trust Signals
```

---

# 2. Discovery Surfaces

## Purpose

Defines the distinct ways a Student encounters a Provider through the Marketplace, since "search" alone undersells how discovery actually happens.

---

## Definition

Discovery Surfaces are the different entry points through which a Student finds a Marketplace Listing.

---

## Surfaces

- **Search** — Student actively searches by subject, keyword, or Competency.
- **Category Browse** — Student browses a subject or Competency category without a specific query.
- **Recommendation** — Platform recommends a Provider or Course based on the Student's Learning History, similar to Personalization Intelligence already defined for content.
- **Referral** — a Student arrives via a shared link, still counted as Marketplace-attributed only if the link itself originated from a Marketplace surface, not from the Provider's own external marketing (see Attribution, Section 4).

---

# 3. Search & Ranking

## Purpose

Defines how Marketplace Listings are ordered when a Student searches or browses, since ranking determines which Providers actually get discovered.

---

## Definition

Search & Ranking is the algorithmic ordering of Marketplace Listings in response to a Student query or browse context, weighted by relevance and quality signals.

---

## Ranking Signals

- Relevance to the Student's query or Competency goal.
- Reputation Score (per the Reviews & Reputation Model), recency-weighted and volume-aware, exactly as already defined.
- Verification status (per Identity & Membership) as a trust modifier, not a ranking override — Verification should never imply quality on its own, consistent with the existing rule that "Verification should never imply educational quality."
- Engagement/completion quality signals (e.g. Students who enroll through this Listing tend to complete, not churn) rather than raw enrollment volume alone, to avoid rewarding aggressive marketing over actual outcomes.

---

## Business Rules

- Ranking must never be directly purchasable — a Provider cannot pay to outrank a higher-quality Provider in organic search results. Paid visibility exists only through the clearly separated Featured Placement mechanism (Section 7).
- Ranking signals and their relative weights should be periodically reviewed against actual Student outcomes (Learning Insights) to confirm they still correlate with genuine educational quality rather than gameable proxies.

---

# SECTION II — ATTRIBUTION

---

# 4. Marketplace Attribution

## Purpose

Establishes proof that a given Student Enrollment originated from the Marketplace, which is the precondition for Marketplace Commission to apply at all (per the Business Model document).

---

## Definition

Marketplace Attribution is the recorded, auditable link between a specific Discovery Surface interaction and a resulting Student Enrollment.

---

## Business Rules

- An Enrollment is Marketplace-attributed only if the Student's session included a genuine Marketplace Discovery Surface interaction (Section 2) within the Attribution Window (Section 5) immediately preceding Enrollment.
- A Student who discovers a Provider externally (e.g. social media, word of mouth, a direct link the Provider shared themselves) and enrolls directly through the Provider's own branded page is never Marketplace-attributed, even if that Provider also happens to have a Marketplace Listing.
- Providers must be able to see, per Enrollment, whether it was Marketplace-attributed or not — this transparency is required for Providers to trust the Commission they're being charged.

---

# 5. Attribution Window

## Purpose

Defines how long a Marketplace discovery interaction remains "creditable" toward an eventual Enrollment, since Students rarely enroll in the same session they first discover a Provider.

---

## Definition

The Attribution Window is the maximum time period between a Student's Marketplace Discovery Surface interaction and their resulting Enrollment for that Enrollment to still count as Marketplace-attributed.

---

## Characteristics

- A single platform-wide default window (e.g. 30 days) applies unless a specific Discovery Surface warrants a different window (e.g. a Recommendation interaction may reasonably have a shorter window than an initial Search).
- If a Student interacts with multiple Providers' Listings within the window before enrolling, Attribution credits the Provider whose Listing they actually enrolled with — not a shared or split credit — keeping the model simple and auditable.

---

# SECTION III — TRUST SIGNALS

---

# 6. Marketplace Trust Signals

## Purpose

Helps Students make informed choices at the point of discovery, before they've invested in an Enrollment.

---

## Definition

Marketplace Trust Signals are the visible indicators — drawn from existing Reputation, Verification, and Portfolio concepts — displayed directly on a Marketplace Listing to support Student decision-making.

---

## Examples

- Reputation Score and recent Review excerpts.
- Verification badges (Identity, Credential, Organization Verification).
- Completion rate for the specific Course or Unit being viewed (an Educational Analytics signal, made Student-facing).
- Response time (already defined as a Tutor Portfolio statistic).

---

## Business Rules

- Trust Signals must be pulled from real underlying data (Reputation, Verification, Analytics) — the Marketplace must never display a bespoke, unverified "marketplace-only" trust badge that isn't grounded in the platform's actual Reputation and Verification systems.

---

# 7. Featured Placement

## Purpose

Provides a legitimate, clearly-labeled paid visibility mechanism, kept structurally separate from organic Search & Ranking to preserve trust in the latter.

---

## Definition

Featured Placement is a paid promotional slot that increases a Marketplace Listing's visibility within specific Discovery Surfaces (e.g. a category page banner), without altering its position in organic Search & Ranking results.

---

## Business Rules

- Featured Placement must be visibly labeled as promoted/sponsored to Students, distinguishing it from organic ranking.
- Featured Placement eligibility should still require a minimum Reputation/quality threshold — the Platform should not sell prominent placement to low-quality or unverified Providers regardless of willingness to pay, to protect Student trust and the Platform's own long-term Reputation.

---

# SECTION IV — PROVIDER CONTROL

---

# 8. Marketplace Opt-In & Opt-Out

## Purpose

Preserves the existing principle that "Marketplace participation is optional," ensuring Providers who want a purely private practice are never forced into public discovery.

---

## Definition

Marketplace Opt-In & Opt-Out is the Provider-level setting controlling whether any of their Educational Offerings appear in Marketplace Discovery Surfaces at all.

---

## Business Rules

- A Provider may opt out of the Marketplace entirely at any time; existing Enrollments and Students are unaffected, only future discoverability changes.
- A Provider may opt in selectively at the level of individual Programs or Courses rather than all-or-nothing — e.g. a Tutor may want their flagship Course publicly discoverable while keeping a private cohort Course invitation-only.
- Opting out of the Marketplace has no effect on Provider Subscription pricing or AI Credit allowance — Marketplace participation is a discovery choice, not a paywalled capability tier.

---

# Summary

The Marketplace is a discovery layer on top of Providers' existing branded spaces, not a replacement for them. Listings are auto-generated from existing Portfolios, ranking rewards genuine quality signals over gameable ones, and Marketplace Commission applies only where Attribution can be proven within a defined window. Trust Signals reuse the platform's real Reputation and Verification data rather than inventing marketplace-only badges, Featured Placement is clearly separated from organic ranking, and participation remains fully optional and selectively controllable by every Provider.