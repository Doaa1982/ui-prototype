import { useRef, useState } from "react";
import { Palette, Layers as LayersIcon, Upload, Check } from "lucide-react";
import type { UserRole } from "../RoleSwitcher";
import TerminologySettings from "./TerminologySettings";

type StudioTab = "branding" | "terminology";

const COLOR_PRESETS: { primary: string; accent: string }[] = [
  { primary: "#3978ee", accent: "#eaf2ff" },
  { primary: "#8465d9", accent: "#f4eefb" },
  { primary: "#32a57b", accent: "#e8fbf0" },
  { primary: "#d97706", accent: "#fef3c7" },
  { primary: "#c94b4b", accent: "#fbeaea" },
];

type StudioPageProps = {
  role: UserRole;
  providerName?: string;
};

export default function StudioPage({ role, providerName = "Dody Ahmed" }: StudioPageProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>("branding");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [colors, setColors] = useState(COLOR_PRESETS[0]);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initials = providerName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleLogoUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogoUrl(typeof reader.result === "string" ? reader.result : null);
    reader.readAsDataURL(file);
  }

  function handleSave() {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="workspace-page studio-page">
      <div className="welcome-row studio-header">
        <div>
          <p className="eyebrow">STUDIO</p>
          <h1>Brand & terminology</h1>
          <p className="muted">
            {role === "Organization"
              ? "Set the organization's visual identity and the vocabulary your Tutors and Students see."
              : "Build a recognizable identity for your personal Learning Space."}
          </p>
        </div>
      </div>

      <div className="studio-tabs">
        <button
          className={`studio-tab${activeTab === "branding" ? " studio-tab-active" : ""}`}
          onClick={() => setActiveTab("branding")}
        >
          <Palette size={15} /> Branding
        </button>
        <button
          className={`studio-tab${activeTab === "terminology" ? " studio-tab-active" : ""}`}
          onClick={() => setActiveTab("terminology")}
        >
          <LayersIcon size={15} /> Terminology
        </button>
      </div>

      {activeTab === "branding" && (
        <div className="studio-panel studio-panel-grid">
          <div className="studio-card">
            <h3>Logo</h3>
            <p className="muted">
              Upload a logo, or keep the auto-generated badge built from your initials.
            </p>
            <div className="logo-row">
              <div className="logo-preview" style={{ background: colors.primary }}>
                {logoUrl ? <img src={logoUrl} alt="Provider logo" /> : <span>{initials}</span>}
              </div>
              <div className="logo-actions">
                <button className="secondary-button" onClick={() => fileInputRef.current?.click()}>
                  <Upload size={14} /> Upload logo
                </button>
                {logoUrl && (
                  <button className="text-button" onClick={() => setLogoUrl(null)}>
                    Remove and use badge
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleLogoUpload}
                />
              </div>
            </div>

            <h3 style={{ marginTop: "26px" }}>Brand colors</h3>
            <p className="muted">Pick a paired two-tone scheme, or set custom values.</p>
            <div className="color-presets">
              {COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.primary}
                  className={`color-preset${
                    preset.primary === colors.primary ? " color-preset-active" : ""
                  }`}
                  onClick={() => setColors(preset)}
                  aria-label={`Use ${preset.primary} color scheme`}
                >
                  <span style={{ background: preset.primary }} />
                  <span style={{ background: preset.accent }} />
                </button>
              ))}
            </div>

            <div className="custom-color-row">
              <label className="custom-color-field">
                <span>Primary</span>
                <input
                  type="color"
                  value={colors.primary}
                  onChange={(event) =>
                    setColors((current) => ({ ...current, primary: event.target.value }))
                  }
                />
                <code>{colors.primary}</code>
              </label>
              <label className="custom-color-field">
                <span>Accent</span>
                <input
                  type="color"
                  value={colors.accent}
                  onChange={(event) =>
                    setColors((current) => ({ ...current, accent: event.target.value }))
                  }
                />
                <code>{colors.accent}</code>
              </label>
            </div>

            <div className="draft-actions">
              <button className="primary-button" onClick={handleSave}>
                {saved ? (
                  <>
                    <Check size={16} /> Saved
                  </>
                ) : (
                  "Save branding"
                )}
              </button>
            </div>
          </div>

          <div className="studio-card studio-preview">
            <span className="studio-preview-label">STUDENT-FACING PREVIEW</span>
            <div className="nameplate" style={{ background: colors.accent }}>
              <div className="nameplate-badge" style={{ background: colors.primary }}>
                {logoUrl ? <img src={logoUrl} alt="" /> : <span>{initials}</span>}
              </div>
              <div>
                <strong>{providerName}</strong>
                <span>{role === "Organization" ? "Organization" : "Independent Tutor"}</span>
              </div>
            </div>
            <p className="muted" style={{ marginTop: "16px" }}>
              This is how your name, logo, and colors will appear across your branded Learning
              Space — never a shared, platform-branded page.
            </p>
          </div>
        </div>
      )}

      {activeTab === "terminology" && (
        <div className="studio-card">
          <TerminologySettings role={role} />
        </div>
      )}
    </div>
  );
}
