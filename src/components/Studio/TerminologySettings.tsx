import { useMemo, useState } from "react";
import { Layers, Check, RotateCcw, Info } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import {
  CANONICAL_CONCEPT_ORDER,
  DEFAULT_TERMINOLOGY_LABELS,
  TERMINOLOGY_PRESETS,
  type CanonicalConceptKey,
  type TerminologyMap,
} from "../../types/domain";

const CONCEPT_DISPLAY_NAME: Record<CanonicalConceptKey, string> = {
  program: "Program",
  course: "Course",
  unit: "Unit",
  lesson: "Lesson",
  assessment: "Assessment",
  activity: "Activity",
  resource: "Resource",
  competency: "Competency",
};

const CONCEPT_HINT: Record<CanonicalConceptKey, string> = {
  program: "e.g. a long-term pathway made of several Courses",
  course: "e.g. one subject or level within a Program",
  unit: "e.g. a reusable topic inside a Course",
  lesson: "e.g. a single learning session inside a Unit",
  assessment: "e.g. a quiz, test, or challenge",
  activity: "e.g. a practice exercise learners complete",
  resource: "e.g. a worksheet, video, or reference file",
  competency: "e.g. a skill learners are expected to demonstrate",
};

type TerminologySettingsProps = {
  role: UserRole;
};

function buildInitialTerminology(learningSpaceId: string): TerminologyMap {
  return {
    learningSpaceId,
    labels: { ...DEFAULT_TERMINOLOGY_LABELS },
    allowTutorOverride: true,
  };
}

export default function TerminologySettings({ role }: TerminologySettingsProps) {
  const [terminology, setTerminology] = useState<TerminologyMap>(() =>
    buildInitialTerminology("space-1")
  );
  const [selectedPresetId, setSelectedPresetId] = useState("default");
  const [saved, setSaved] = useState(false);

  const isOrganization = role === "Organization";

  const isDirty = useMemo(() => {
    return CANONICAL_CONCEPT_ORDER.some(
      (key) => terminology.labels[key] !== DEFAULT_TERMINOLOGY_LABELS[key]
    );
  }, [terminology]);

  function applyPreset(presetId: string) {
    const preset = TERMINOLOGY_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setSelectedPresetId(presetId);
    setTerminology((current) => ({
      ...current,
      labels: { ...DEFAULT_TERMINOLOGY_LABELS, ...preset.labels },
    }));
    setSaved(false);
  }

  function updateLabel(key: CanonicalConceptKey, value: string) {
    setSelectedPresetId("custom");
    setTerminology((current) => ({
      ...current,
      labels: { ...current.labels, [key]: value },
    }));
    setSaved(false);
  }

  function resetToDefault() {
    applyPreset("default");
  }

  function handleSave() {
    // Cosmetic/display-layer only — never changes underlying structural relationships,
    // per Terminology-Addendum.md. Persisting this is a display-label write, not a data migration.
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="terminology-settings">
      <div className="terminology-intro">
        <div>
          <h3>
            <Layers size={18} /> Terminology
          </h3>
          <p className="muted">
            Choose the words your Students see for Programs, Courses, Units, and more. This only
            changes labels shown in your branded space — it never changes how your content is
            structured or how it behaves.
          </p>
        </div>
        {isDirty && (
          <button className="text-button" onClick={resetToDefault}>
            <RotateCcw size={14} /> Reset to default
          </button>
        )}
      </div>

      <div className="terminology-presets">
        {TERMINOLOGY_PRESETS.map((preset) => (
          <button
            key={preset.id}
            className={`terminology-preset-card${
              selectedPresetId === preset.id ? " active" : ""
            }`}
            onClick={() => applyPreset(preset.id)}
          >
            <strong>{preset.name}</strong>
            <span className="muted">{preset.description}</span>
          </button>
        ))}
      </div>

      <div className="terminology-grid">
        {CANONICAL_CONCEPT_ORDER.map((key) => (
          <label key={key} className="terminology-field">
            <span className="terminology-field-label">
              {CONCEPT_DISPLAY_NAME[key]}
              <span className="terminology-field-hint">{CONCEPT_HINT[key]}</span>
            </span>
            <input
              className="studio-text-input terminology-input"
              value={terminology.labels[key]}
              onChange={(event) => updateLabel(key, event.target.value)}
              placeholder={DEFAULT_TERMINOLOGY_LABELS[key]}
            />
          </label>
        ))}
      </div>

      {isOrganization && (
        <label className="terminology-override-toggle">
          <input
            type="checkbox"
            checked={terminology.allowTutorOverride}
            onChange={(event) =>
              setTerminology((current) => ({
                ...current,
                allowTutorOverride: event.target.checked,
              }))
            }
          />
          <span>
            Allow individual Tutors to override these labels for their own authored content
          </span>
        </label>
      )}

      <div className="terminology-preview">
        <span className="studio-preview-label">STUDENT-FACING PREVIEW</span>
        <div className="terminology-preview-path">
          {(["program", "course", "unit", "lesson"] as CanonicalConceptKey[]).map((key, index) => (
            <span key={key} className="terminology-preview-step">
              {index > 0 && <ChevronSeparator />}
              {terminology.labels[key]}
            </span>
          ))}
        </div>
      </div>

      <div className="terminology-note">
        <Info size={14} />
        <span>
          Platform-wide search and analytics still reason about the underlying concept (e.g.
          &ldquo;Unit&rdquo;) even when you display it as &ldquo;{terminology.labels.unit}&rdquo;.
        </span>
      </div>

      <div className="terminology-actions">
        <button className="primary-button" onClick={handleSave}>
          {saved ? (
            <>
              <Check size={16} /> Saved
            </>
          ) : (
            "Save terminology"
          )}
        </button>
      </div>
    </div>
  );
}

function ChevronSeparator() {
  return <span className="terminology-preview-chevron">›</span>;
}
