# Terminology (Addendum to Core Educational Domain Model)

**Version:** 0.1

**Status:** Draft — fills Section V, Item 3, referenced in the original table of contents but not previously written.

---

# 18. Terminology

## Purpose

Terminology ensures that every Educational Provider — and every Organization within the platform — can express core platform concepts (Program, Course, Unit, Lesson, Competency, etc.) using language that fits their own educational context, without fragmenting the underlying data model.

---

## Definition

Terminology is the mapping between the platform's canonical business concepts (as defined throughout the Core Educational Domain Model) and the display labels a Provider or Organization chooses to present to their own Students.

---

## Why Terminology Matters

Different educational contexts use different words for structurally identical concepts:

- A language school may call a "Unit" a **Module**.
- A K-12 school may call a "Course" a **Class** or **Subject**.
- A corporate learning team may call a "Program" a **Curriculum** or **Track**.
- A coding bootcamp may call an "Assessment" a **Challenge**.

Forcing every Provider to use identical platform vocabulary in their Student-facing experience would work against the core promise that each Provider's space feels like their own — one of the platform's stated Design Principles ("Every educator deserves a brand").

---

## Characteristics

- Terminology mapping is cosmetic/display-layer only — it never changes the underlying structural relationships (a relabeled "Module" still behaves exactly like a Unit).
- Defined at the Learning Space level, so a Standalone Tutor or Organization sets their own labels once and it applies across their Programs, Courses, Units, and Lessons.
- Organizations may allow individual Tutors to override Organization-level Terminology for their own authored content, consistent with the principle that Organizations do not override individual Tutor identity.
- Terminology changes do not require any data migration, since they only affect what label is displayed, not what is stored.

---

## Examples

| Canonical Concept | Language School Example | K-12 School Example | Corporate Learning Example |
|---|---|---|---|
| Program | Language Track | Grade Level | Learning Curriculum |
| Course | Level (e.g. "A1") | Subject | Training Path |
| Unit | Module | Chapter | Topic |
| Lesson | Lesson | Lesson | Session |
| Assessment | Quiz | Test | Challenge |

---

## Business Rules

- Every canonical concept must have a sensible default label (the terms already used throughout this domain model) so Providers who never customize Terminology have a coherent out-of-the-box experience.
- Terminology customization must never be so unconstrained that it breaks cross-Provider or Marketplace-level communication (e.g. platform-wide search or analytics still need to reason about "Units" even if a given Provider displays them as "Modules").

---

## Relationships

```text
Terminology
│
├── Learning Space (owns the mapping)
├── Canonical Concepts (Program, Course, Unit, Lesson, Activity, Resource, Assessment, Competency)
└── Display Labels (Provider-chosen, Student-facing)
```
