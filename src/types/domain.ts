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
  type: "Video" | "Interactive" | "Reading" | "Live" | "Discussion" | "AIConversation";
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
