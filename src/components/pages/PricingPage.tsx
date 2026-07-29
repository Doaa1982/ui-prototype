import {
  ArrowRight,
  DollarSign,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type { UserRole } from "../RoleSwitcher";

type PricingPageProps = {
  role: UserRole;
};

const PRICING_TIERS = [
  {
    title: "Subscription plan",
    price: "$149 / mo",
    detail: "Unlimited learner access, platform services, and AI support included.",
    bullet: "Best for steady, predictable customer revenue.",
  },
  {
    title: "Usage-based pricing",
    price: "$0.025 / learner-minute",
    detail: "Pay per active session and AI compute consumed.",
    bullet: "Best for episodic or high-variability programs.",
  },
  {
    title: "Hybrid package",
    price: "$99 + $0.015 / learner-minute",
    detail: "Base subscription with usage credits for premium AI paths.",
    bullet: "Best for balanced provider offerings.",
  },
];

const REVENUE_SHARE = [
  { label: "Provider share", value: "70%", detail: "Direct revenue retained by the provider." },
  { label: "Platform fee", value: "25%", detail: "Marketplace operations, distribution, and support." },
  { label: "AI service surcharge", value: "5%", detail: "Applied only to AI-powered learning experiences." },
];

export default function PricingPage({ role }: PricingPageProps) {
  return (
    <div className="workspace-page pricing-page">
      <div className="welcome-row">
        <div>
          <p className="eyebrow">PRICING</p>
          <h1>{role === "Organization" ? "Monetization strategy" : "Marketplace pricing options"}</h1>
          <p className="muted">
            {role === "Organization"
              ? "Configure provider pricing, revenue share, and AI usage tiers for your marketplace offerings."
              : "Compare subscription and usage pricing plans, plus how AI usage costs affect provider revenue."}
          </p>
        </div>
      </div>

      <div className="stats-grid pricing-stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><DollarSign size={20} /></div>
          <span className="stat-label">AI usage rate</span>
          <strong className="stat-value">$0.025</strong>
          <span className="stat-detail">Per active learner-minute</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><ShieldCheck size={20} /></div>
          <span className="stat-label">Provider revenue share</span>
          <strong className="stat-value">70%</strong>
          <span className="stat-detail">After platform and AI service fees</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><Layers size={20} /></div>
          <span className="stat-label">Subscription vs usage</span>
          <strong className="stat-value">3 models</strong>
          <span className="stat-detail">Flexible monetization options</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><TrendingUp size={20} /></div>
          <span className="stat-label">Preferred model</span>
          <strong className="stat-value">Hybrid pricing</strong>
          <span className="stat-detail">Best balance of predictability</span>
        </div>
      </div>

      <div className="studio-card pricing-overview-card">
        <div>
          <h3>Pricing at a glance</h3>
          <p className="muted">
            {role === "Organization"
              ? "Set the pricing structure that matches your product mix and makes AI-powered learning sustainable."
              : "Choose the model that fits your buying style for programs, micro-credentials, and AI-enhanced experiences."}
          </p>
        </div>
        <div className="pricing-overview-copy">
          <div>
            <span className="metric-label">AI compute pricing</span>
            <strong>$0.025 / learner-minute</strong>
          </div>
          <div>
            <span className="metric-label">Revenue split</span>
            <strong>70 / 30 / 5</strong>
          </div>
          <div>
            <span className="metric-label">Billing model</span>
            <strong>Subscription + usage</strong>
          </div>
        </div>
      </div>

      <div className="studio-card pricing-rates-grid">
        {PRICING_TIERS.map((tier) => (
          <div key={tier.title} className="pricing-tier-card">
            <div className="pricing-tier-header">
              <DollarSign size={18} />
              <span>{tier.title}</span>
            </div>
            <strong>{tier.price}</strong>
            <p className="muted">{tier.detail}</p>
            <p className="pricing-tier-note">{tier.bullet}</p>
            <button className="secondary-button">Select plan</button>
          </div>
        ))}
      </div>

      <div className="studio-card pricing-detail-grid">
        <div>
          <h3>Subscription vs usage</h3>
          <p className="muted">Understand when subscription, consumption, or hybrid pricing works best for your offering.</p>
          <div className="pricing-comparison">
            <div className="pricing-comparison-card">
              <h4>Subscription</h4>
              <ul>
                <li>Predictable monthly revenue</li>
                <li>Unlimited access within plan limits</li>
                <li>Great for cohort-based and long-term programs</li>
              </ul>
            </div>
            <div className="pricing-comparison-card">
              <h4>Usage-based</h4>
              <ul>
                <li>Revenue aligned to learner activity</li>
                <li>Lower entry cost for buyers</li>
                <li>Ideal for episodic content and AI-intensive sessions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="studio-card pricing-revenue-share-card">
          <div className="profile-card-header">
            <span className="profile-icon"><Sparkles size={20} /></span>
            <div>
              <h3>Provider revenue share</h3>
              <p className="muted">How income flows through the marketplace.</p>
            </div>
          </div>

          <div className="pricing-share-list">
            {REVENUE_SHARE.map((item) => (
              <div key={item.label} className="pricing-share-item">
                <div>
                  <span className="metric-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <p className="muted">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="pricing-action-row">
            <button className="primary-button">
              Configure revenue rules <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
