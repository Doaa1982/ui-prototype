import { useState } from "react";
import { Sparkles, CheckCircle2, AlertTriangle, Lightbulb, RefreshCw, Target } from "lucide-react";
import type { EducationalIntelligenceFeedback } from "../types/domain";

const MOCK_AI_FEEDBACK: EducationalIntelligenceFeedback = {
  clarityScore: 92,
  pacingFeedback: "Good overall pace. Lesson 2 paragraph 3 could be simplified for beginner learners.",
  suggestions: [
    "Add a 2-question formative quiz after the second video segment to reinforce Greetings vocabulary.",
    "Include a real-world dialogue practice activity for Unit 04.",
    "Consider adding Arabic pronunciation audio clips for key vocabulary terms."
  ],
  detectedGaps: [
    "Prerequisite knowledge check for 'Present Tense Verbs' is missing before Unit 05.",
    "No self-reflection activity defined at the end of the course track."
  ],
  alignmentStatus: "Aligned"
};

export default function EducationalIntelligencePanel() {
  const [feedback, setFeedback] = useState<EducationalIntelligenceFeedback>(MOCK_AI_FEEDBACK);
  const [analyzing, setAnalyzing] = useState(false);

  function handleReAnalyze() {
    setAnalyzing(true);
    setTimeout(() => {
      setFeedback({
        ...MOCK_AI_FEEDBACK,
        clarityScore: 95,
        suggestions: [
          ...MOCK_AI_FEEDBACK.suggestions,
          "AI Audit Complete: All learning objectives align with CEFR A1 standards."
        ]
      });
      setAnalyzing(false);
    }, 1200);
  }

  return (
    <div className="ei-container">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">EDUCATIONAL INTELLIGENCE CO-PILOT</p>
          <h1>Content Audit & Pedagogical Insights</h1>
          <p className="muted">
            Invisible, context-aware AI assistance that evaluates clarity, pacing, and learning alignment across your Units and Lessons.
          </p>
        </div>
        <button className="primary-button" onClick={handleReAnalyze} disabled={analyzing}>
          <RefreshCw size={16} className={analyzing ? "spin" : ""} />
          {analyzing ? "Auditing Content..." : "Run AI Audit"}
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><CheckCircle2 size={20} className="text-green" /></div>
          <span className="stat-label">Clarity Score</span>
          <strong className="stat-value">{feedback.clarityScore}%</strong>
          <span className="stat-detail">Pedagogically clear</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon"><Target size={20} /></div>
          <span className="stat-label">Alignment Status</span>
          <strong className="stat-value">{feedback.alignmentStatus}</strong>
          <span className="stat-detail">Competencies matched</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon"><AlertTriangle size={20} className="text-amber" /></div>
          <span className="stat-label">Detected Gaps</span>
          <strong className="stat-value">{feedback.detectedGaps.length}</strong>
          <span className="stat-detail">Actionable items</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon"><Lightbulb size={20} /></div>
          <span className="stat-label">AI Suggestions</span>
          <strong className="stat-value">{feedback.suggestions.length}</strong>
          <span className="stat-detail">Ready to apply</span>
        </div>
      </div>

      <div className="ei-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "24px" }}>
        <div className="studio-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={18} className="text-accent" /> AI Improvement Recommendations
          </h3>
          <p className="muted">Suggestions generated from learner engagement data and pedagogical standards:</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index} style={{ padding: "12px", background: "var(--surface-hover)", borderRadius: "8px", borderLeft: "3px solid #3978ee", fontSize: "0.9rem" }}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>

        <div className="studio-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <AlertTriangle size={18} className="text-amber" /> Curriculum Gap Detection
          </h3>
          <p className="muted">Identified missing prerequisites or competency linkages:</p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
            {feedback.detectedGaps.map((gap, index) => (
              <li key={index} style={{ padding: "12px", background: "var(--surface-hover)", borderRadius: "8px", borderLeft: "3px solid #f59e0b", fontSize: "0.9rem" }}>
                {gap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
