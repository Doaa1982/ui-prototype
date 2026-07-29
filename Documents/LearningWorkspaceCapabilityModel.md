# Learning Workspace Capability Model

**Version:** 1.0 (Draft)

**Status:** Foundational Business Architecture

**Depends On:**
- Learning Workspace Domain Language & Business Ontology

**Used By:**
- Product Blueprint
- Domain Model
- Bounded Contexts
- Product Roadmap
- Requirements Specifications
- Software Architecture

---

# 1. Purpose

## 1.1 Purpose

The Learning Workspace Capability Model defines **what a Learning Workspace is capable of doing**, independent of technical implementation.

Capabilities represent the long-term business abilities that the platform must provide to enable an educator or educational organisation to operate a successful learning business.

Unlike features, capabilities are stable over time and rarely change as the product evolves.

---

## 1.2 Why Capability Modelling?

Business capabilities answer the question:

> **"What must a Learning Workspace be able to do?"**

They intentionally avoid answering:

- How it works
- Which screen implements it
- Which service owns it
- Which database stores it

Those decisions come later.

---

## 1.3 Principles

A capability:

- Represents a business ability.
- Is technology independent.
- May contain many business processes.
- May evolve through multiple product releases.
- Is owned by the Learning Workspace.

---

# 2. Capability Hierarchy

```
Learning Workspace
│
├── Identity Domain
│   ├── Workspace Identity
│   ├── Branding
│   ├── Membership
│   ├── Teams
│   ├── Roles
│   └── Configuration
│
├── Experience Domain
│   ├── Learner Experience
│   ├── Tutor Experience
│   ├── Parent Experience
│   ├── Navigation
│   ├── Personalisation
│   └── Accessibility
│
├── Learning Domain
│   ├── Learning Products
│   ├── Curriculum
│   ├── Learning Delivery
│   ├── Activities
│   ├── Assessment
│   ├── Certification
│   ├── Scheduling
│   └── Progress
│
├── Business Domain
│   ├── Commerce
│   ├── CRM
│   ├── Marketing
│   ├── Sales
│   ├── Finance
│   ├── Pricing
│   ├── Subscriptions
│   └── Revenue
│
├── Intelligence Domain
│   ├── AI Teaching
│   ├── AI Learning
│   ├── AI Assessment
│   ├── AI Content
│   ├── Knowledge
│   ├── Automation
│   └── Recommendations
│
├── Operations Domain
│   ├── Communication
│   ├── Community
│   ├── Reporting
│   ├── Documents
│   ├── Policies
│   ├── Compliance
│   ├── Events
│   └── Resource Management
│
└── Platform Domain
    ├── Integrations
    ├── Marketplace
    ├── API
    ├── Notifications
    ├── Audit
    ├── Storage
    └── Monitoring
```

---

# 3. Capability Definitions

---

# 3.1 Workspace Identity

## Purpose

Defines the unique identity of a Learning Workspace.

This capability enables the workspace to exist as an independent educational business.

---

## Includes

- Workspace identity
- Business profile
- Public information
- Domain management
- Workspace lifecycle
- Workspace visibility

---

## Does Not Include

- Branding
- Courses
- Members
- Payments

---

---

# 3.2 Workspace Branding

## Purpose

Allows every workspace to create a unique learner experience through its own visual identity.

---

## Includes

- Logo
- Colours
- Typography
- Icons
- Email branding
- Certificate branding
- Theme
- Learner portal appearance

---

## Future Expansion

- Multiple brands
- White labelling
- Brand templates

---

# 3.3 Workspace Configuration

## Purpose

Allows each workspace to define how its learning business operates.

---

## Includes

- Languages
- Time zone
- Calendar settings
- Teaching philosophy
- Learning preferences
- Notification preferences
- Default behaviours
- Regional settings

---

## Examples

A workspace may choose:

- mastery learning
- exam-focused learning
- project-based learning
- self-paced learning

without changing the platform itself.

---

# 3.4 Membership Management

## Purpose

Manages every person's relationship with a Learning Workspace.

---

## Includes

- Invitations
- Registration
- Membership lifecycle
- Workspace roles
- Permissions
- Member status

---

## Business Principle

Platform Identity is global.

Membership belongs to the workspace.

---

# 3.5 Team Management

## Purpose

Supports collaborative operation of a Learning Workspace.

---

## Includes

- Teaching staff
- Teaching assistants
- Content creators
- Administrators
- Finance staff
- Customer support
- Marketing staff

---

## Future Expansion

- Departments
- Teams
- Branches

---

# 3.6 Learning Product Management

## Purpose

Allows a workspace to design, organise and publish educational offerings.

---

## Learning Products may include

- Courses
- Tutoring services
- Cohort programmes
- Bootcamps
- Workshops
- Learning paths
- Membership programmes
- Digital resources
- Certification programmes

---

## Business Principle

The workspace sells learning products.

Not simply courses.

---

# 3.7 Learning Delivery

## Purpose

Supports the delivery of learning experiences.

---

## Includes

- Lessons
- Live sessions
- Recorded sessions
- Learning activities
- Practice
- Homework
- Attendance
- Progress tracking

---

---

# 3.8 Learning Experience

## Purpose

Allows each workspace to create its own educational experience.

---

## Includes

- Dashboard design
- Navigation
- Learning flow
- Student experience
- Parent experience
- Personalisation

---

## Business Principle

Two workspaces may provide completely different learner experiences while using the same platform.

---

# 3.9 Assessment & Certification

## Purpose

Measures learner achievement.

---

## Includes

- Assessments
- Quizzes
- Assignments
- Projects
- Rubrics
- Grading
- Feedback
- Certificates

---

---

# 3.10 Scheduling

## Purpose

Coordinates learning activities over time.

---

## Includes

- Calendars
- Availability
- Booking
- Sessions
- Timetables
- Events
- Deadlines

---

# 3.11 Communication

## Purpose

Enables communication between workspace participants.

---

## Includes

- Announcements
- Messages
- Notifications
- Email
- Parent communication
- Learning reminders

---

---

# 3.12 Community

## Purpose

Supports interaction beyond formal learning.

---

## Includes

- Forums
- Discussion groups
- Challenges
- Clubs
- Social learning
- Peer interaction

---

# 3.13 Commerce

## Purpose

Supports commercial operation of the learning business.

---

## Includes

- Product catalogue
- Pricing
- Checkout
- Payments
- Subscriptions
- Discounts
- Refunds
- Invoices

---

## Business Principle

Commerce belongs to the workspace.

The platform provides the infrastructure.

---

# 3.14 AI Services

## Purpose

Provides workspace-specific AI capabilities.

---

## Includes

- AI tutor
- AI teaching assistant
- AI content generation
- AI assessment
- AI feedback
- AI recommendations
- AI analytics
- AI automation

---

## Business Principle

Every workspace owns its own AI configuration and behaviour.

---

# 3.15 Analytics & Insights

## Purpose

Provides operational and educational intelligence.

---

## Includes

- Learning analytics
- Business analytics
- Student engagement
- Tutor performance
- Revenue analytics
- Growth metrics

---

# 3.16 Automation

## Purpose

Allows repetitive operational tasks to execute automatically.

---

## Examples

- Welcome new learners
- Generate certificates
- Notify parents
- Schedule reminders
- Send invoices
- Publish reports

---

# 3.17 Integrations

## Purpose

Connects the workspace with external services.

---

## Examples

- Video conferencing
- Payment gateways
- Email providers
- Calendar services
- Cloud storage
- AI providers

---

# 3.18 Governance

## Purpose

Ensures the workspace operates according to defined policies and organisational rules.

---

## Includes

- Policies
- Compliance
- Audit history
- Consent
- Data retention
- Academic integrity

---

# 3.19 Workspace Administration

## Purpose

Supports day-to-day administration of the workspace.

---

## Includes

- Workspace management
- Subscription management
- Billing settings
- Operational monitoring
- Workspace maintenance

---

# 4. Capability Relationships

```
Learning Workspace
│
├── Identity
│
├── Experience
│   ├── Branding
│   ├── Configuration
│   └── Learning Experience
│
├── People
│   ├── Membership
│   └── Team
│
├── Learning
│   ├── Learning Products
│   ├── Learning Delivery
│   ├── Assessment
│   └── Scheduling
│
├── Business
│   ├── Commerce
│   ├── Communication
│   ├── Community
│   └── Analytics
│
├── Intelligence
│   ├── AI
│   └── Automation
│
└── Platform
    ├── Governance
    ├── Integrations
    └── Administration
```

---

# 5. Capability Design Principles

Every capability must satisfy the following principles.

## Workspace Ownership

Every capability belongs to a Learning Workspace.

---

## Independence

Capabilities should evolve independently wherever possible.

---

## Configurability

Every workspace should be able to configure capabilities according to its educational philosophy and business model.

---

## Scalability

Capabilities must support growth from:

- Individual tutor
- Tutoring business
- Academy
- Learning centre
- Educational organisation

without requiring redesign.

---

## Composability

Capabilities should work together without creating tight coupling.

For example:

- Commerce can sell any Learning Product.
- AI can enhance any Learning capability.
- Analytics can measure every capability.

---

# 6. Next Step

This capability model provides the business foundation for defining:

1. Core Domain
2. Supporting Subdomains
3. Generic Subdomains
4. Bounded Contexts
5. Domain Model
6. Business Processes
7. Functional Requirements

All future architectural decisions should trace back to one or more capabilities defined in this document.