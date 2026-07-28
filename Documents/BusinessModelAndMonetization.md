# Business Model & Monetization

**Version:** 0.1

**Status:** Draft

---

# About This Document

This document defines how the AI Learning Platform generates revenue, how value is shared between the Platform, Educational Providers, and Students, and how Educational Intelligence (AI) is priced and metered.

It is the missing economic layer beneath the existing domain models. Every other document in this project describes *what the platform does*; this document describes *how the platform sustains itself while doing it*.

Like the other domain documents, this one is business-level — it defines pricing philosophy, revenue mechanics, and rules, not billing implementation, payment processors, or tax handling.

---

# Guiding Principles

## The Business Model Must Match the Brand Promise

The platform's core differentiator is that every Educational Provider's space feels like *their own platform*, not a shared marketplace listing.

The monetization model must reinforce this rather than undermine it. A model that makes tutors feel like they are "renting a stall" in someone else's marketplace works against the product's core value proposition.

---

## The Platform Earns By Making Providers Successful

Revenue should scale with the success the platform helps create — more students taught well, more educational quality, more AI-assisted productivity — rather than by extracting value regardless of provider outcomes.

---

## AI Has Real Cost and Must Be Priced Deliberately

Educational Intelligence is not a free feature. Every generation, recommendation, and analysis consumes compute. Pricing must ensure AI usage scales sustainably with the value it creates, rather than becoming an unbounded liability.

---

## Simplicity Builds Trust

Educational Providers are not financial experts. Pricing should be predictable and easy to explain in one sentence. Complex usage-based billing across many dimensions erodes trust and increases support burden.

---

## The Model Must Support the Provider Growth Journey

A Standalone Tutor teaching ten students and an Organization teaching ten thousand should both find a natural, fair place within the same pricing structure — without needing to migrate plans in a way that feels punitive.

---

# Table of Contents

## SECTION I — Revenue Model

1. Revenue Streams
2. Platform Subscription
3. Marketplace Commission
4. Revenue Model Comparison

## SECTION II — AI Monetization

5. Educational Intelligence Pricing Philosophy
6. AI Tiering
7. AI Credits & Metering

## SECTION III — Provider Economics

8. Provider Plans
9. Organization Revenue Sharing
10. Payouts *(Future Scope)*

## SECTION IV — Open Questions

11. Open Questions & Validation Needs

---

# SECTION I — REVENUE MODEL

---

# 1. Revenue Streams

## Purpose

Defines where platform revenue originates.

---

## Definition

The Platform earns revenue through three complementary streams, each tied to a different part of the Educational Provider's journey.

---

## Streams

### Provider Subscription

A recurring fee paid by a Standalone Tutor or Organization for access to their branded Learning Space, Educational Assets tooling, and baseline platform capabilities.

---

### AI Usage

A metered or tiered fee for consumption of Educational Intelligence capabilities beyond an included baseline.

---

### Marketplace Commission *(Future Scope)*

A percentage of revenue earned specifically from students the Platform's Marketplace discovers and delivers to a Provider — not from a Provider's own existing students or self-sourced traffic.

---

## Relationships

```text
Revenue

├── Provider Subscription  (pays for the branded space itself)
├── AI Usage               (pays for Educational Intelligence consumption)
└── Marketplace Commission (pays for student discovery, future scope)
```

---

## Business Rules

- Provider Subscription revenue must never depend on Marketplace success — a Provider who brings their own students in full should be able to run a sustainable business on subscription alone.
- Marketplace Commission applies only to Marketplace-attributed enrollments, never to a Provider's self-sourced or direct students.
- AI Usage is metered independently of both other streams so that AI cost is never cross-subsidized invisibly by subscription price alone.

---

# 2. Platform Subscription

## Purpose

The Platform Subscription is the primary, predictable revenue stream and reflects the platform's core value: giving every Educational Provider their own branded educational space.

---

## Definition

A recurring fee, billed monthly or annually, that grants a Standalone Tutor or Organization access to their Learning Space, Educational Asset creation tools, branding capabilities, and a defined baseline of Educational Intelligence usage.

---

## Characteristics

- Tiered by capability and scale (e.g. number of active students, number of Tutors in an Organization, storage, branding customization depth) rather than by revenue the Provider earns.
- Does not take a percentage of what a Provider charges their own students.
- Includes a limited free tier to support the earliest stage of the Tutor Growth Journey (see Educational Provider Model).

---

## Why Subscription Over Commission-First

A commission-first model implicitly treats the Platform as the primary source of student discovery — appropriate for a pure marketplace, but in tension with a product built around Providers owning their own branded identity and relationships.

Subscription lets Providers keep 100% of their own student revenue, which reinforces the "this is your platform" promise made throughout the Educational Provider and Organization models.

---

# 3. Marketplace Commission

## Purpose

Once Marketplace & Discovery capabilities exist, the Platform requires a way to earn from the value it creates by *finding new students* for a Provider — separate from the value of hosting their existing business.

---

## Definition

Marketplace Commission is a percentage fee applied only to enrollments that originate through Platform-driven discovery (search, recommendations, category browsing, featured placement).

---

## Characteristics

- Applies only to attributable Marketplace-sourced enrollments.
- Requires clear, auditable attribution so Providers trust the distinction between "my student" and "Marketplace's student."
- Commission rate may vary by Provider tier (e.g. lower commission for higher subscription tiers, rewarding platform investment).

---

## Status

This stream is **Future Scope**, dependent on the Marketplace & Discovery domain being defined and built. It should not be assumed as a near-term revenue source.

---

# 4. Revenue Model Comparison

## Purpose

Documents why the Hybrid model (Subscription + future Marketplace Commission + AI Usage) was chosen over pure alternatives.

---

## Comparison

| Model | Fits Brand Promise | Predictable for Providers | Scales With Provider Success | Recommended |
|---|---|---|---|---|
| Pure Subscription | Strong | Strong | Weak (flat regardless of Provider scale) | Partial — base layer only |
| Pure Marketplace Commission | Weak (undermines "your own platform") | Weak | Strong | No |
| Hybrid (Subscription + future Commission + AI Usage) | Strong | Strong | Strong (via AI usage and future commission) | **Yes** |

---

# SECTION II — AI MONETIZATION

---

# 5. Educational Intelligence Pricing Philosophy

## Purpose

Establishes how Educational Intelligence — the platform's AI co-pilot — is priced in a way that is sustainable for the Platform and transparent for Providers.

---

## Definition

Educational Intelligence Pricing Philosophy governs which AI capabilities are included in baseline subscription, which are metered, and how usage limits are communicated.

---

## Principles

- AI cost must never be an invisible line item. Providers should always understand what a given AI action "costs" them, even under a flat subscription.
- Capabilities that run once per Provider action (e.g. generating questions for one lesson) are cheaper to include generously than capabilities that run once per Student action (e.g. AI tutoring chat), since the latter scales with the Provider's own success and therefore their willingness to pay.
- No AI capability should silently degrade educational quality to manage cost (e.g. secretly using a weaker model). If cost constraints require a lighter-weight capability, this should be transparent.

---

# 6. AI Tiering

## Purpose

Maps existing Educational Intelligence capabilities (defined across the Educational Intelligence Domain documents) to a pricing tier.

---

## Definition

AI Tiering aligns the three-tier Educational Intelligence roadmap — Teacher Productivity, Student Personalization, and Teacher-Facing Creative Tools — with a monetization tier, based on cost-per-use and value-per-use.

---

## Tiering Model

### Tier A — Included in Subscription (Generous Free Allowance)

Low marginal cost, high adoption value, encourages Providers to build their library.

Examples: AI question generation from transcript, AI pause-point suggestions, lesson idea generator, branding copy assistant.

---

### Tier B — Metered / Paid Add-On

Runs per-Student rather than per-Provider-action, so cost scales directly with Provider success and must be funded accordingly.

Examples: Student-facing lesson Q&A chat, adaptive explanations, auto-generated study notes, Learning Companions *(Future Vision)*.

---

### Tier C — Organization-Level / Premium

Requires ongoing model context (e.g. Organizational Knowledge ingestion) and therefore carries both compute and data-maintenance cost.

Examples: Organizational Knowledge-aligned AI recommendations, Curriculum Intelligence gap detection, Quality Assurance Intelligence monitoring.

---

## Relationships

```text
Educational Intelligence Capability
        │
        ▼
  Cost Driver (per-action vs per-student vs per-organization)
        │
        ▼
     AI Tier (A, B, or C)
        │
        ▼
  Pricing Treatment (included / metered / premium)
```

---

# 7. AI Credits & Metering

## Purpose

Defines the mechanism by which AI usage beyond the included baseline is measured and charged.

---

## Definition

AI Credits are a usage unit representing a normalized amount of Educational Intelligence consumption, allowing different underlying AI operations (short generation vs. long analysis) to be billed on a common scale.

---

## Characteristics

- Every Provider Subscription tier includes a monthly Credit allowance.
- Tier A capabilities consume Credits at a low, generous rate; Tier B and C capabilities consume Credits at a higher rate reflecting their cost and value.
- Unused Credits may roll over within limits to avoid punishing uneven usage months (e.g. a tutor building a course intensively for two weeks).
- Providers should be able to purchase additional Credits without upgrading their entire subscription tier, preserving simplicity.

---

## Business Rules

- Credits are consumed by the Provider's Learning Space, not by an individual Student, even when the capability is Student-facing — the Provider remains the paying party.
- Credit consumption must be visible to the Provider in real time to prevent bill shock.
- A Provider should never be blocked mid-lesson-delivery by a Student-facing AI feature running out of Credits; graceful fallback behavior (e.g. AI chat pauses with a clear message) is required rather than a broken Student experience.

---

# SECTION III — PROVIDER ECONOMICS

---

# 8. Provider Plans

## Purpose

Translates the Revenue Model and AI Tiering into concrete plan tiers that map to the Provider Growth Journey already defined in the Educational Provider Model.

---

## Definition

Provider Plans are named subscription tiers that bundle Learning Space capabilities, branding depth, and AI Credit allowance, scaled to where a Provider sits in their growth journey.

---

## Illustrative Plan Shape

| Plan | Fits | Branding | AI Credits | Notes |
|---|---|---|---|---|
| Free / Starter | New Tutor | Basic (auto-generated badge, limited colors) | Small monthly allowance | Supports first Unit / first learners |
| Independent | Independent Tutor / Experienced Tutor | Full personal branding | Moderate allowance + pay-as-you-go top-ups | Core paid tier for solo Providers |
| Organization | Organization Founder+ | Full org branding + per-tutor sub-branding | Pooled org-wide allowance | Adds multi-Tutor collaboration, Organization Analytics |

Exact pricing figures, Credit quantities, and feature gating require market validation (see Open Questions).

---

## Business Rules

- Plan tiers must map cleanly onto the existing Tutor Growth Journey and Organization Evolution models — a Provider should never feel forced to "downgrade" their identity to fit a plan.
- Moving from Independent to Organization plan must preserve all Educational Assets, Professional Identity, and AI Credit history, consistent with the "no platform migration" principle in the Product Blueprint.

---

# 9. Organization Revenue Sharing

## Purpose

Organizations distribute revenue and AI Credit allowance among multiple Tutors; this requires business rules distinct from the Standalone Tutor case.

---

## Definition

Organization Revenue Sharing defines how student payments and AI Credit consumption are attributed and, where relevant, split among Organization members.

---

## Characteristics

- The Organization, not the individual Tutor, holds the Provider Subscription and AI Credit pool by default.
- Internal revenue split between the Organization and its Tutors (e.g. employed vs. commission-based Tutors) is a matter of Organization policy, not a Platform-enforced rule — consistent with the principle that Organizations govern their own internal standards.
- The Platform should provide the reporting Organizations need to run their own internal revenue-sharing model, without dictating what that model is.

---

# 10. Payouts *(Future Scope)*

## Purpose

Once the Platform processes student payments on behalf of Providers (rather than Providers handling payment collection independently), a payout mechanism becomes necessary.

---

## Definition

Payouts represent the transfer of student-paid revenue, net of any applicable Marketplace Commission, from the Platform to the Educational Provider.

---

## Status

Out of scope for the current model. This section is a placeholder acknowledging the dependency: Payouts cannot be meaningfully designed until it is decided whether the Platform processes payments directly or Providers handle their own billing externally. This decision should be made alongside Marketplace & Discovery.

---

# SECTION IV — OPEN QUESTIONS

---

# 11. Open Questions & Validation Needs

The following require market validation, competitive research, or a product decision before this document can move from Draft to a committed model.

## Pricing

- What are actual price points for Starter / Independent / Organization plans? Requires competitive benchmarking (Teachable, Podia, Kajabi, Thinkific) adjusted for AI-inclusive positioning.
- What Credit allowance per tier is sustainable given real AI API cost per generation?

## Marketplace Timing

- At what point does Marketplace & Discovery get built, and does Commission apply retroactively to existing Providers or only to new Marketplace-sourced relationships?

## Payments

- Does the Platform process student payments directly (requiring Payouts, Section 10), or do Providers handle their own payment collection (e.g. via their own Stripe account), with the Platform only billing the Provider's subscription?

## AI Cost Ceiling

- What per-Provider AI cost ceiling triggers a manual review to prevent abuse (e.g. a single Provider generating extreme volumes of AI content beyond credit limits via top-ups)?

## Free Tier Sustainability

- Is the Free / Starter tier's AI allowance sustainable at scale, or does it need a hard cap independent of Credits (e.g. capped number of Students) to prevent a free tier from absorbing meaningful AI cost indefinitely?

## Organization Internal Splits

- Should the Platform offer optional built-in tooling for Organization-to-Tutor revenue splits, or remain fully agnostic as currently proposed in Section 9?

---

# Summary

The Business Model rests on a Hybrid approach: Provider Subscription as the predictable core revenue stream that respects the "your own platform" brand promise, AI Usage as a separately metered stream that keeps Educational Intelligence economically sustainable as it scales, and Marketplace Commission as a future stream tied specifically to Platform-driven student discovery rather than a Provider's own success.

This structure is designed to let a Provider grow — from Free Starter to Independent to Organization — without ever feeling like growth is penalized, while ensuring the Platform's AI-heavy differentiation remains financially sound at every stage.
