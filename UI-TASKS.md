# UI Implementation Task List

Regenerated from the business domain models in `Documents/` (not just the existing repo file layout). Each ticket cites the source document(s) it implements and the current `ui-prototype` files it touches. Tickets are grouped by domain, then ordered by priority within each group.

**Source documents referenced:** `productBlueprint*.md`, `CoreEducationalDomainModel.md`, `EducationalProviderModel*.md`, `OrganizationsAndCollaborations-part*.md`, `identityAndMembership.md`, `EnrollmentModel.md`, `Marketplaceanddiscoverymodel.md`, `ReviewsAndReputationModel.md`, `LearnerDomain.md`, `LearningWorkspaceDomain*.md`, `EducationalIntelligenceDomain*.md`, `BusinessModelAndMonetization.md`, `Terminology-Addendum.md`, `ExperienceArchitecture.md`.

---

## Priority 0 — Experience Architecture (foundation for everything below)

Source: `ExperienceArchitecture.md`

0. **Workspace Shell as Experience Layer**
   - Ticket: `WorkspaceShell` should map cleanly to the four documented Workspaces (Learner, Educational Provider, Organization, Administrator) rather than a flat page list per role.
   - Files: `src/components/WorkspaceShell.tsx`, `src/types/ui.ts`
   - Deliverables:
     - Confirm each `PageId` belongs to exactly one Workspace concept (Learner Workspace vs. Provider Workspace vs. Organization Workspace) so role-based nav additions stay principled rather than ad hoc.
     - No business logic in `WorkspaceShell` — it orchestrates, it doesn't own data (per "Business First" principle). Audit for logic that should move into page components.
   - Note: an Administrator Workspace (User Management, Moderation, Marketplace Management, Platform Analytics) is documented but has **no corresponding UI at all** — flag as a known gap, out of scope for this pass unless prioritized.

---

## Priority 1 — Core Educational Domain (Program → Course → Unit → Lesson)

Source: `CoreEducationalDomainModel.md`, `productBlueprint2.md`, `productBlueprint3.md`

1. **Programs Workspace**
   - Files: `src/components/ProgramsView.tsx`, `src/index.css`
   - Deliverables:
     - Program → Course → Unit hierarchy (sidebar program list, expandable course accordion, unit cards) — already largely implemented; verify unit **reusability across courses** is visually represented (a Unit's `courseIds` can contain multiple courses per the "Reusability" section of the domain doc), not just single-course nesting.
     - Role-aware actions: Student (resume/enroll), Tutor (edit/link to course), Organization (assign educator/approve quality).
     - Certificate/completion-criteria display on Program detail (`certificateAvailable`, `completionCriteria` fields already in `domain.ts`).

2. **Units & Lessons Workspace**
   - Files: `src/components/UnitsView.tsx`, `src/index.css`
   - Deliverables:
     - Reinforce the doc's core distinction: **Unit = reusable building block, Lesson = delivery experience**. Unit detail view should show a "used in N courses" reusability indicator.
     - Lesson type badges beyond "Interactive Video" — doc lists Live Session, Reading, Whiteboard, Audio, AI Conversation, Coding, Workshop (`domain.ts` `Lesson.type` currently only has 6 of ~10 documented types — extend the union).
     - Role-aware metadata (student progress vs. tutor authoring vs. org governance/approval), already partially done — verify Assessment attachment surfaces per Unit/Lesson.

3. **Terminology Customization (NEW — no UI currently exists)**
   - Source: `Terminology-Addendum.md`
   - Files: new `src/components/Studio/TerminologySettings.tsx`, wired into `StudioPage.tsx`
   - Deliverables:
     - Learning-Space-level settings screen letting a Tutor/Organization relabel canonical concepts (Program→"Track", Unit→"Module", Assessment→"Challenge", etc.) per the documented examples table.
     - Cosmetic-only: changing a label must not restructure data — this is purely a display-layer settings form.
     - Organization variant should allow individual Tutors to override org-level terms for their own authored content.

---

## Priority 2 — Educational Provider & Branding

Source: `EducationalProviderModel.md` (Parts 1–5)

4. **Personal Brand / Organization Branding (Studio)**
   - Files: `src/components/Studio/StudioPage.tsx` (currently a stub — needs the actual branding/authoring UI described in prior sessions), `src/index.css` (`.logo-row`, `.color-presets`, `.nameplate` classes already exist but aren't wired into `StudioPage.tsx`)
   - Deliverables:
     - Logo upload + auto-generated initial badge, paired two-tone color picker (CSS already scaffolded in `index.css` under "Studio branding" rules — connect it to a working form).
     - Distinguish Personal Brand (Standalone Tutor) vs. Organization Brand (`EducationalProviderModel2.md` §7 vs. `OrganizationsAndCollaborations-part3.md` §14) — Organization branding should not overwrite individual Tutor identity on author pages.
     - Nameplate preview matching the documented "Marketplace Identity" section (reviews, ratings, portfolio surfaced together).

5. **Provider Profile**
   - Files: `src/components/pages/ProviderProfilePage.tsx`
   - Deliverables:
     - Already covers type/growth-stage/reputation/verification — add the missing **Educational Portfolio** content block (`EducationalProviderModel4.md` §12): biography, teaching philosophy, published Programs/Courses/Units, certifications, achievements — currently only brand + stats are shown, not portfolio content.
     - Add Provider Type comparison awareness (Standalone Tutor vs. Organization capability table from `EducationalProviderModel.md` §2) where relevant (e.g., disable Org-only sections for Standalone Tutors).

---

## Priority 3 — Identity & Membership

Source: `identityAndMembership.md`

6. **Profile / Identity**
   - Files: `src/components/pages/ProfilePage.tsx`
   - Deliverables:
     - Current implementation is generic preferences + role tips. Rebuild around the documented split: **Profile** (name, bio, languages, timezone — private/editable) vs. **Professional Identity** (biography, teaching philosophy, expertise, achievements — public, career-spanning) vs. **Membership** (role, status, target Learning Space/Organization).
     - Add Achievements section (`identityAndMembership.md` §14): Teaching/Learning/Community achievement categories — none currently rendered anywhere in the app.
     - Add Verification badges (Identity/Organization/Degree/Teaching Certificate) distinct from Reputation — currently only `verificationStatus` string shown on Provider Profile, no learner-facing equivalent.

7. **Members Page — align to Membership Roles**
   - Files: `src/components/pages/MembersPage.tsx`
   - Deliverables:
     - Current role options (Admin/Editor/Viewer) don't match the documented Organization roles (Owner, Administrator, Educational Manager, Tutor, Student, Guest — `OrganizationsAndCollaborations-part1.md` §4). Replace the permission model with these named roles and their documented responsibilities.
     - Reflect Membership Lifecycle states (Invited → Onboarding → Active → Paused/Role Change → Departure) in the status column instead of just Active/Invited.

---

## Priority 4 — Enrollment & Participation

Source: `EnrollmentModel.md` (v0.2 — includes Lesson-level enrollment)

8. **Enrollment Page**
   - Files: `src/components/pages/EnrollmentPage.tsx`
   - Deliverables:
     - Current mock data only models Program/Course-level progress. Add **Lesson-level Enrollment** as a distinct lightweight card type (v0.2 changelog: Lesson is now a formal, lightweight Enrollment target) — e.g., a "sample lesson" or pay-per-lesson entry separate from full Unit/Course enrollments.
     - Surface Enrollment Method (Self / Tutor Invitation / Org Invitation / Approval Required) and full Enrollment Status set (Pending, Approved, Active, Paused, Completed, Withdrawn, Expired, Archived) — currently only 3 ad hoc statuses are shown.
     - Certification section on completed enrollments (Completion Certificate / Competency Certificate / Professional Certificate).

---

## Priority 5 — Learner Domain & Personalization

Source: `LearnerDomain.md`, `LearningWorkspaceDomain.md` (Parts 1–4)

9. **Learning Plan Page — align to Learning Goals & Learning Insights**
   - Files: `src/components/pages/LearningPlanPage.tsx`
   - Deliverables:
     - Replace generic "milestones" with documented **Learning Goal types** (Knowledge, Skill Development, Academic, Professional, Personal Development, Organization goals) and their attributes (title, category, priority, target date).
     - Add a **Learning Insights** panel distinct from AI Intelligence — surfaces Progress/Strength/Growth-Opportunity/Recommendation/Achievement insight categories (`LearningWorkspaceDomain2.md` §8), each with a short "why this was suggested" explainability line.
     - Add Learning Preferences quick-edit (schedule, session length, pace, format) per `LearnerDomain.md` §5 — currently absent entirely.

10. **Learning Portfolio & Reflection (NEW — no UI currently exists)**
    - Source: `LearnerDomain.md` §9 (Learning Portfolio), `LearningWorkspaceDomain2.md` §9–10 (Reflection, Learning Portfolio)
    - Files: new `src/components/pages/PortfolioPage.tsx`, add `"Portfolio"` to `PageId` in `src/types/ui.ts`, add nav item in `WorkspaceShell.tsx` (Student role)
    - Deliverables:
      - Learner-curated showcase (completed Programs/Courses, certificates, demonstrated competencies, selected projects) distinct from the full Educational Record.
      - Visibility control per item (Private / Shared with Provider / Shared with Org / Public / Secure link).
      - Reflection prompts + journal entries tied to lessons/units, explicitly learner-owned (never AI-modified).

---

## Priority 6 — Discovery & Marketplace

Source: `Marketplaceanddiscoverymodel.md`

11. **Discover Page — align to Discovery Surfaces**
    - Files: `src/components/pages/DiscoverPage.tsx`
    - Deliverables:
      - Current cards are generic ("Recommended programs," "Popular tutors"). Rebuild around the four documented Discovery Surfaces: Search, Category Browse, Recommendation, Referral — each should be a distinguishable UI section/entry point, not folded into one search bar.
      - Ensure any provider card click-through lands on the **Provider's own branded space**, never a platform-branded intermediary — verify this against `ProviderProfilePage.tsx` styling (brand colors already used — good; confirm no generic platform chrome wraps it).

12. **Marketplace Page — Ranking Signals & Attribution**
    - Files: `src/components/pages/MarketplacePage.tsx`
    - Deliverables:
      - Current `rankingSignals` are provider-invented strings ("Demand signal," "Adoption velocity"). Replace with the four documented signals: Relevance, Reputation Score (recency-weighted, volume-aware), Verification (trust modifier only, not ranking override), Engagement/completion quality — and label Verification explicitly as non-quality-implying.
      - Add a visible **Featured Placement** section, clearly labeled "Promoted"/"Sponsored" and structurally separate from the organic-ranked table — currently all listings appear in one undifferentiated ranked table with no paid/organic distinction.
      - Add per-Provider Marketplace Opt-In/Opt-Out toggle (Tutor/Organization view) — supports per-Program/Course-level opt-in, not just all-or-nothing.

13. **Reviews & Reputation (NEW — no UI currently exists)**
    - Source: `ReviewsAndReputationModel.md`
    - Files: new `src/components/pages/ReviewsPage.tsx` or a `ReviewsPanel` embedded in `ProviderProfilePage.tsx`
    - Deliverables:
      - Review list (rating + written feedback) anchored to an Enrollment, with the eligibility rule (min. participation threshold) reflected in UI copy.
      - Provider Response thread (one reply per review, publicly visible, review itself immutable).
      - Reputation Score display as recency-weighted + volume-aware (not a flat average) — add a tooltip explaining this, since `reputationScore` is currently just a bare number on `ProviderProfilePage`.
      - Flag/Dispute affordance for Providers (routes to Moderation vs. Dispute Resolution — two distinct flows per the doc).

---

## Priority 7 — Organization & Collaboration

Source: `OrganizationsAndCollaborations-part1.md`, `-part2.md`, `-part3.md`

14. **Collaboration Workspace**
    - Files: `src/components/pages/CollaborationPage.tsx`
    - Deliverables:
      - Current content is generic ("8 active groups," "24 messages"). Rebuild around documented concepts: Shared Educational Assets library, Collaborative Content Creation workflow (Planning → Concurrent Authoring → Asset Assembly → Internal Review), and Internal Review status states (Draft, Under Review, Changes Requested, Approved).
      - Add a Publishing Governance workflow view for Organization role: Draft → Internal Review → Manager/Owner Approval → Published — currently no publishing-approval UI exists anywhere in the app.
      - Add Internal Communication (contextual comment threads on Units/Lessons, organization-wide announcements) — distinct from generic "messages."

15. **Organization Analytics — split by documented sub-domains**
    - Files: `src/components/pages/AnalyticsPage.tsx`
    - Deliverables:
      - Current page has one generic stat block regardless of role. Split Organization-role analytics into the four documented categories: Learning Analytics (student progress/engagement), Educational Analytics (content quality/completion patterns), Tutor Analytics (satisfaction, response time, marking turnaround), Organization Health (enrollment trends, retention, tutor retention).
      - Student-role analytics should map to Educational Record + Learning Insights (see Priority 5, ticket 9) rather than a generic "progress score" card.

---

## Priority 8 — Educational Intelligence (AI)

Source: `EducationalIntelligenceDomain.md` (Parts 1–3)

16. **AI Intelligence Panel — map to the three-tier roadmap**
    - Files: `src/components/EducationalIntelligencePanel.tsx`
    - Deliverables:
      - Currently a single undifferentiated "Content Audit" panel. Split into tiers per the domain doc and the existing three-tier AI roadmap already noted in memory:
        - **Teacher Productivity** (Planning/Creation/Review Intelligence): question generation, clarity/pacing audit — largely what exists today.
        - **Student Personalization** (Student Support, Personalization, Adaptive Learning): needs a student-facing view — currently the panel is Tutor-only with no Student-role variant at all.
        - **Organizational Intelligence** (Organizational Knowledge, Curriculum Intelligence, QA Intelligence): needs an Organization-role variant — curriculum gap detection, redundancy flags, QA monitoring dashboard don't exist yet.
      - Every AI suggestion needs explicit Accept/Modify/Reject controls per the "Human-Centered AI" principle — currently suggestions are static text with no action buttons.
      - Add "why this was suggested" rationale text next to each suggestion (transparency principle).

---

## Priority 9 — Business Model & Monetization

Source: `BusinessModelAndMonetization.md`

17. **Pricing Page — align to Provider Plans & AI Credits**
    - Files: `src/components/pages/PricingPage.tsx`
    - Deliverables:
      - Current tiers ("Subscription plan," "Usage-based," "Hybrid") don't match the documented Provider Plans (Free/Starter, Independent, Organization) tied to the Tutor Growth Journey. Rebuild the tier cards around those three named plans and their branding-depth/AI-Credit-allowance differences.
      - Add an **AI Credits** meter/explainer distinct from generic "$/learner-minute" usage pricing — Credits are the documented normalization unit across Tier A/B/C AI capabilities, consumed by the Provider's Learning Space, visible in real time.
      - Remove the generic 70/25/5 revenue-share model in favor of the documented structure: Provider Subscription (Provider keeps 100% of own-student revenue) + future Marketplace Commission (Marketplace-attributed enrollments only) + AI Usage — these are three separate streams, not one split percentage.
      - Mark Marketplace Commission UI as **Future Scope** per the doc's explicit status note — don't present it as live pricing.

---

## Priority 10 — Shared styling & cleanup

18. **Shared styling standardization**
    - Files: `src/index.css`
    - Deliverables:
      - Consolidate ad hoc inline styles remaining in `MembersPage.tsx` (grid-template-columns set inline) into shared classes, matching the pattern already used elsewhere.
      - Extend `.stats-grid`, `.program-grid`, `.studio-card` patterns to new pages added above (Portfolio, Reviews, Terminology Settings) rather than introducing new one-off class names.
      - Responsive audit for the two new pages (Portfolio, Reviews) at the existing 900px/600px breakpoints.

---

## Suggested work order

1. Terminology Customization + Provider Profile portfolio content (small, unblocks branding story)
2. Identity & Membership rework (Profile, Members) — many other pages reference roles/achievements
3. Enrollment Page (Lesson-level enrollment, full status set)
4. Learning Plan rework (Goals, Insights) + new Portfolio/Reflection page
5. Marketplace ranking-signal rework + new Reviews & Reputation page
6. Discover Page Discovery-Surfaces rework
7. Collaboration Workspace + Publishing Governance
8. Organization Analytics split
9. AI Intelligence Panel tiering + Student/Org variants
10. Pricing Page rebuild
11. Shared CSS cleanup pass

## Known gaps (flagged, not yet scheduled)

- **Administrator Workspace** (`ExperienceArchitecture.md`): User Management, Moderation, Marketplace Management, Platform Analytics, Security — no UI exists and no role in `RoleSwitcher.tsx` maps to it.
- **Provider Network / Multi-Provider Collaboration** (`EducationalProviderModel5.md` §16–18): future-vision only, no UI expected yet.
- **Competency tracking** as a first-class UI concept (`CoreEducationalDomainModel.md` §13, `LearningWorkspaceDomain4.md` §15): referenced in data model intent but not surfaced anywhere in the UI yet — worth a dedicated ticket once Portfolio/Reflection ships.

## Notes

- Tasks are derived directly from the domain documents in `Documents/`, cross-checked against the current `ui-prototype` component tree — not just from existing UI gaps.
- Where a document uses different terminology than the current code (e.g., "Educational Provider" vs. code's ad hoc "provider"), tickets use the document's terms so implementers can trace requirements back to source.
- Keep role-specific (Student / Tutor / Organization) behavior consistent across pages, and consider whether new pages need an Administrator variant even if that Workspace isn't built yet.