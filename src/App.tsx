import { useState } from "react";
import type { PageId } from "./types/ui";
import type { UserRole } from "./components/RoleSwitcher";
import WorkspaceShell from "./components/WorkspaceShell";
import StudioPage from "./components/Studio/StudioPage";
import EducationalIntelligencePanel from "./components/EducationalIntelligencePanel";
import UnitsView from "./components/UnitsView";
import ProgramsView from "./components/ProgramsView";
import DashboardPage from "./components/pages/DashboardPage";
import DiscoverPage from "./components/pages/DiscoverPage";
import ProfilePage from "./components/pages/ProfilePage";
import LearningPlanPage from "./components/pages/LearningPlanPage";
import EnrollmentPage from "./components/pages/EnrollmentPage";
import CollaborationPage from "./components/pages/CollaborationPage";
import AnalyticsPage from "./components/pages/AnalyticsPage";
import MarketplacePage from "./components/pages/MarketplacePage";
import PricingPage from "./components/pages/PricingPage";
import MembersPage from "./components/pages/MembersPage";
import ProviderProfilePage from "./components/pages/ProviderProfilePage";

const programs = [
  {
    title: "Arabic Language Track",
    description: "Build practical Arabic communication skills.",
    progress: 68,
    lessons: "24 of 36 lessons",
    color: "blue",
  },
  {
    title: "Data Science Bootcamp",
    description: "Learn data analysis and machine learning fundamentals.",
    progress: 34,
    lessons: "12 of 35 lessons",
    color: "purple",
  },
  {
    title: "English for Business",
    description: "Improve communication in professional environments.",
    progress: 82,
    lessons: "18 of 22 lessons",
    color: "green",
  },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageId>("Dashboard");
  const [role, setRole] = useState<UserRole>("Student");
  const [selectedProviderId, setSelectedProviderId] = useState<string>("prov-1");

  function handleRoleChange(nextRole: UserRole) {
    setRole(nextRole);
    if (nextRole === "Student" && activePage === "Studio") {
      setActivePage("Dashboard");
    }
  }

  function handleNavigate(page: PageId) {
    setActivePage(page);
  }

  return (
    <WorkspaceShell
      activePage={activePage}
      role={role}
      sidebarOpen={sidebarOpen}
      onNavigate={handleNavigate}
      onRoleChange={handleRoleChange}
      onSidebarToggle={setSidebarOpen}
    >
      {activePage === "Dashboard" && (
        <DashboardPage role={role} programs={programs} onNavigate={handleNavigate} />
      )}
      {activePage === "Discover" && <DiscoverPage role={role} />}
      {activePage === "Pricing" && <PricingPage role={role} />}
      {activePage === "Members" && <MembersPage role={role} />}
      {activePage === "Profile" && <ProfilePage role={role} />}
      {activePage === "Provider Profile" && <ProviderProfilePage role={role} providerId={selectedProviderId} />}
      {activePage === "Learning Plan" && <LearningPlanPage role={role} />}
      {activePage === "Enrollment" && <EnrollmentPage role={role} />}
      {activePage === "Marketplace" && (
        <MarketplacePage
          role={role}
          onNavigate={handleNavigate}
          onSelectProvider={setSelectedProviderId}
        />
      )}
      {activePage === "Programs" && <ProgramsView role={role} />}
      {activePage === "Units & Lessons" && <UnitsView role={role} />}
      {activePage === "AI Intelligence" && <EducationalIntelligencePanel />}
      {activePage === "Collaboration" && <CollaborationPage role={role} />}
      {activePage === "Analytics" && <AnalyticsPage role={role} />}
     {activePage === "Studio" && <StudioPage role={role} />}
    </WorkspaceShell>
  );
}

export default App;
