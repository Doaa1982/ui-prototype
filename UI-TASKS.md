# UI Implementation Task List

This file captures the concrete component-level tickets and file-level changes for the current `ui-prototype` repo.

## Priority 1 — Core workspace pages

1. **Programs Workspace**
   - Ticket: refine `ProgramsView` layout and role-specific workflow
   - Files:
     - `src/components/ProgramsView.tsx`
     - `src/index.css`
   - Deliverables:
     - sidebar program selection panel
     - selected program detail panel
     - course accordion + unit cards
     - role-aware Student/Tutor/Organization actions
     - consistent use of shared CSS classes

2. **Units & Lessons Workspace**
   - Ticket: polish `UnitsView` to match learning hierarchy
   - Files:
     - `src/components/UnitsView.tsx`
     - `src/index.css`
   - Deliverables:
     - unit/lesson list layout
     - student start/resume controls
     - tutor/org edit and preview actions
     - role-aware metadata and progress display

3. **Learning Plan Page**
   - Ticket: align `LearningPlanPage` with documented learning plan model
   - Files:
     - `src/components/pages/LearningPlanPage.tsx`
     - `src/index.css`
   - Deliverables:
     - plan summary stats
     - milestone roadmap cards
     - next-step action card
     - student/tutor/org copy and behavior

## Priority 2 — Discovery, identity, collaboration

4. **Discover / Marketplace**
   - Ticket: implement marketplace/discovery UI from `Marketplaceanddiscoverymodel.md`
   - Files:
     - `src/components/pages/DiscoverPage.tsx`
     - `src/index.css`
   - Deliverables:
     - discovery listing cards
     - search/filter controls
     - trust signal / verification labels
     - provider vs marketplace separation

5. **Profile / Identity**
   - Ticket: build role-aware profile experience
   - Files:
     - `src/components/pages/ProfilePage.tsx`
     - `src/index.css`
   - Deliverables:
     - profile summary and membership details
     - reputation/verification indicators
     - learner/tutor/org profile actions

6. **Collaboration Workspace**
   - Ticket: create organization collaboration UI
   - Files:
     - `src/components/pages/CollaborationPage.tsx`
     - `src/index.css`
   - Deliverables:
     - org/team membership cards
     - shared asset and review workflow panels
     - status of collaboration and approvals

## Priority 3 — Insights, authoring, navigation

7. **Analytics Page**
   - Ticket: implement learning and governance analytics UI
   - Files:
     - `src/components/pages/AnalyticsPage.tsx`
     - `src/index.css`
   - Deliverables:
     - progress/engagement metric cards
     - org/tutor outcome panels
     - reusable card/chart layout styling

8. **Studio Page**
   - Ticket: shape the authoring workspace for Tutor/Organization
   - Files:
     - `src/components/Studio/StudioPage.tsx`
     - `src/index.css`
   - Deliverables:
     - content creation workflows
     - role-aware author controls
     - AI-assisted planning hooks

9. **Workspace Shell & App routing**
   - Ticket: validate navigation and page rendering
   - Files:
     - `src/components/WorkspaceShell.tsx`
     - `src/App.tsx`
   - Deliverables:
     - correct page routes for `PageId`
     - `Studio` visible only for Tutor/Organization
     - consistent sidebar/breadcrumb behavior

## Priority 4 — Shared styling and cleanup

10. **Shared styling standardization**
    - Ticket: unify page and card styles across the app
    - Files:
      - `src/index.css`
      - possibly new shared component files later
    - Deliverables:
      - `.workspace-page`, `.studio-card`, `.stats-grid`, `.program-grid`
      - responsive breakpoints
      - remove inline styling where possible

---

## Suggested work order

1. `ProgramsView` + `UnitsView`
2. `LearningPlanPage`
3. `DiscoverPage`
4. `ProfilePage`
5. `CollaborationPage`
6. `AnalyticsPage`
7. `StudioPage`
8. `WorkspaceShell` + `App.tsx`
9. shared CSS cleanup

## Notes

- Tasks are derived from the Documents folder domain model and the existing app routes.
- Use role-specific Student/Tutor/Organization behavior consistently across pages.
- Keep UI changes constrained to the current repo files and shared styles.
