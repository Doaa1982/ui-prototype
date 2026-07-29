// Central Domain Model Types for AI Learning Platform

export type ProviderType = 
  | "StandaloneTutor"
  | "Academy"
  | "School"
  | "TrainingCentre"
  | "Institute"
  | "CorporateLearningTeam"
  | "CommunityGroup";

export type MembershipRole = 
  | "Owner"
  | "Administrator"
  | "EducationalManager"
  | "Tutor"
  | "Student"
  | "Guest";

export type MembershipStatus = 
  | "Invited"
  | "Pending"
  | "Active"
  | "Paused"
  | "Terminated";

export type EducationalAssetType = 
  | "Program"
  | "Course"
  | "Unit"
  | "Lesson"
  | "Activity"
  | "Assessment"
  | "Resource";

export interface Person {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  bio?: string;
  languages: string[];
  timezone: string;
}

export interface Account {
  id: string;
  personId: string;
  createdAt: string;
  status: "Active" | "Suspended";
}

export interface Membership {
  id: string;
  personId: string;
  targetType: "LearningSpace" | "Organization";
  targetId: string;
  role: MembershipRole;
  status: MembershipStatus;
  joinedAt: string;
}

export interface EducationalProvider {
  id: string;
  name: string;
  type: ProviderType;
  description: string;
  brandColors: {
    primary: string;
    accent: string;
  };
  logoUrl?: string;
  ownerPersonId: string;
  learningSpaceId: string;
  reputationScore: number;
  verificationStatus: "Verified" | "Unverified" | "Pending";
}

export interface Program {
  id: string;
  providerId: string;
  title: string;
  description: string;
  courseIds: string[];
  certificateAvailable: boolean;
  completionCriteria?: string;
}

export interface Course {
  id: string;
  programId?: string;
  providerId: string;
  title: string;
  description: string;
  unitIds: string[];
  subject: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Unit {
  id: string;
  courseIds: string[]; // Can be referenced across multiple courses (reusable)
  providerId: string;
  title: string;
  topic: string;
  objectives: string[];
  lessonIds: string[];
  resourceIds: string[];
  estimatedDurationMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  type:
    | "Video"
    | "Interactive"
    | "Reading"
    | "Live"
    | "Discussion"
    | "AIConversation"
    | "Whiteboard"
    | "Audio"
    | "Coding"
    | "Workshop";
  youtubeId?: string;
  contentMarkdown?: string;
  activityIds: string[];
  assessmentIds: string[];
}

export interface Activity {
  id: string;
  lessonId: string;
  type: "MultipleChoice" | "OpenResponse" | "Reflection" | "CodingChallenge" | "SpeakingPractice";
  prompt: string;
  options?: string[];
  correctOptionIndex?: number | null;
}

export interface Assessment {
  id: string;
  unitId?: string;
  lessonId?: string;
  title: string;
  type: "Formative" | "Summative";
  passingScore: number;
}

export interface EducationalIntelligenceFeedback {
  clarityScore: number;
  pacingFeedback: string;
  suggestions: string[];
  detectedGaps: string[];
  alignmentStatus: "Aligned" | "NeedsRevision" | "Incomplete";
}

// --- Terminology (Terminology-Addendum.md) ---
// Cosmetic/display-layer mapping of canonical concepts to Provider-chosen labels.
// Never restructures underlying data — only what's shown to Students.

export type CanonicalConceptKey =
  | "program"
  | "course"
  | "unit"
  | "lesson"
  | "assessment"
  | "activity"
  | "resource"
  | "competency";

export interface TerminologyMap {
  learningSpaceId: string;
  labels: Record<CanonicalConceptKey, string>;
  /** Organizations may allow individual Tutors to override org-level terms for their own authored content. */
  allowTutorOverride: boolean;
}

export const CANONICAL_CONCEPT_ORDER: CanonicalConceptKey[] = [
  "program",
  "course",
  "unit",
  "lesson",
  "assessment",
  "activity",
  "resource",
  "competency",
];

export const DEFAULT_TERMINOLOGY_LABELS: Record<CanonicalConceptKey, string> = {
  program: "Program",
  course: "Course",
  unit: "Unit",
  lesson: "Lesson",
  assessment: "Assessment",
  activity: "Activity",
  resource: "Resource",
  competency: "Competency",
};

export interface TerminologyPreset {
  id: string;
  name: string;
  description: string;
  labels: Partial<Record<CanonicalConceptKey, string>>;
}

export const TERMINOLOGY_PRESETS: TerminologyPreset[] = [
  {
    id: "default",
    name: "Platform Default",
    description: "The out-of-the-box vocabulary used throughout the domain model.",
    labels: {},
  },
  {
    id: "language-school",
    name: "Language School",
    description: "Track, Level, Module, Quiz — familiar to language learners.",
    labels: { program: "Language Track", course: "Level", unit: "Module", assessment: "Quiz" },
  },
  {
    id: "k12",
    name: "K-12 School",
    description: "Grade Level, Subject, Chapter, Test.",
    labels: { program: "Grade Level", course: "Subject", unit: "Chapter", assessment: "Test" },
  },
  {
    id: "corporate",
    name: "Corporate Learning",
    description: "Curriculum, Training Path, Topic, Challenge.",
    labels: { program: "Learning Curriculum", course: "Training Path", unit: "Topic", assessment: "Challenge" },
  },
];

// --- Educational Portfolio (EducationalProviderModel4.md §12, identityAndMembership.md §10) ---

// --- Identity & Membership: Achievements, Verification, Professional Identity ---
// (identityAndMembership.md SECTION III & IV)

export type AchievementCategory = "Teaching" | "Learning" | "Community";

export interface Achievement {
  id: string;
  category: AchievementCategory;
  title: string;
  description: string;
  earnedAt: string;
}

export type VerificationType =
  | "Identity"
  | "Organization"
  | "Degree"
  | "TeachingCertificate"
  | "Business";

export interface VerificationBadge {
  type: VerificationType;
  status: "Verified" | "Pending" | "Unverified" | "Expired";
  verifiedAt?: string;
  expiresAt?: string;
}

/**
 * Professional Identity is distinct from the personal Profile: it belongs to the individual
 * educator, evolves through contribution rather than self-description, and remains independent
 * of organizational changes. Verification here NEVER implies educational quality on its own —
 * it only confirms authenticity, per identityAndMembership.md §13.
 */
export interface ProfessionalIdentity {
  personId: string;
  professionalBiography: string;
  teachingPhilosophy: string;
  expertiseAreas: string[];
  subjects: string[];
  languages: string[];
  yearsOfExperience: number;
  certifications: string[];
  achievements: Achievement[];
  verifications: VerificationBadge[];
}

export interface MembershipSummary {
  role: MembershipRole;
  status: MembershipStatus;
  targetType: "LearningSpace" | "Organization";
  targetName: string;
  joinedAt: string;
  lifecycleStage:
    | "Invitation / Application"
    | "Onboarding"
    | "Active Participation"
    | "Paused"
    | "Role Change"
    | "Departure";
}

export const MEMBERSHIP_ROLE_RESPONSIBILITIES: Record<MembershipRole, string[]> = {
  Owner: [
    "Establishes and leads the organization",
    "Defines mission and manages branding",
    "Appoints administrators and educational managers",
    "Reviews organization-wide analytics",
  ],
  Administrator: [
    "Manages memberships and invitations",
    "Maintains organizational settings",
    "Coordinates schedules and communication",
    "Supports tutors operationally",
  ],
  EducationalManager: [
    "Reviews educational assets and maintains standards",
    "Mentors tutors",
    "Approves published educational content",
    "Leads continuous improvement initiatives",
  ],
  Tutor: [
    "Creates educational assets",
    "Teaches learners",
    "Collaborates with peers and participates in reviews",
    "Improves educational content over time",
  ],
  Student: [
    "Learns, participates, and completes assessments",
    "Provides feedback",
    "Contributes to continuous improvement",
  ],
  Guest: [
    "Participates temporarily or with limited visibility",
    "Accesses specific educational spaces or events only",
  ],
};

export interface EducationalPortfolio {
  providerId: string;
  biography: string;
  teachingPhilosophy: string;
  expertiseAreas: string[];
  languages: string[];
  yearsOfExperience: number;
  certifications: string[];
  achievements: string[];
  publishedProgramTitles: string[];
  publishedCourseTitles: string[];
  publishedUnitTitles: string[];
  statistics: {
    studentsTaught: number;
    unitsPublished: number;
    completionRate: number; // 0-100
    averageRating: number; // 0-5
    responseTimeHours: number;
  };
}
