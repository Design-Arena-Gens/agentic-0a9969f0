import { FormEvent, useMemo, useState } from "react";
import { PersonaInputs } from "@/lib/types";

const platformOptions = [
  { label: "Instagram", value: "instagram" },
  { label: "YouTube", value: "youtube" },
  { label: "TikTok", value: "tiktok" },
  { label: "Snapchat", value: "snapchat" },
  { label: "Threads", value: "threads" },
  { label: "LinkedIn", value: "linkedin" }
];

const monetizationOptions = [
  { label: "Brand Deals", value: "brandDeals" },
  { label: "Digital Products", value: "digitalProducts" },
  { label: "Memberships", value: "memberships" },
  { label: "Merch Drops", value: "merch" },
  { label: "Consulting", value: "consulting" }
];

const defaultInputs: PersonaInputs = {
  nativeLanguage: "Hindi",
  vibe: "Bold, flirty, nightlife storyteller with tech swagger",
  audience: "Night shift hustlers and party goers across Tier 1-2 Indian cities",
  platforms: ["instagram", "youtube", "tiktok"],
  monetization: ["brandDeals", "digitalProducts"],
  personalBoundaries: "No hate speech, no political endorsements, no explicit content",
  automationComfort: "medium",
  timeHorizon: "60-days",
  ambition: "growth"
};

interface Props {
  onSubmit: (inputs: PersonaInputs) => void;
}

export function PersonaForm({ onSubmit }: Props) {
  const [inputs, setInputs] = useState<PersonaInputs>(defaultInputs);
  const [dirty, setDirty] = useState(false);

  const canGenerate = useMemo(() => {
    return inputs.vibe.trim().length > 0 && inputs.audience.trim().length > 0;
  }, [inputs.vibe, inputs.audience]);

  const updateField = <K extends keyof PersonaInputs>(
    key: K,
    value: PersonaInputs[K]
  ) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
    if (!dirty) {
      setDirty(true);
    }
  };

  const toggleSelection = (collectionKey: "platforms" | "monetization", value: string) => {
    setInputs((prev) => {
      const exists = prev[collectionKey].includes(value);
      const next = exists
        ? prev[collectionKey].filter((item) => item !== value)
        : [...prev[collectionKey], value];
      return { ...prev, [collectionKey]: next };
    });
    if (!dirty) {
      setDirty(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canGenerate) {
      return;
    }
    onSubmit(inputs);
  };

  return (
    <form
      className="grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <div className="col-span-full flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">
          Persona Vibe (Hinglish welcome)
        </label>
        <textarea
          className="min-h-[100px] rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.vibe}
          onChange={(e) => updateField("vibe", e.target.value)}
          placeholder="Urban, thoda tharak but charming, AI-meets-real world energy…"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Primary Language</label>
        <input
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.nativeLanguage}
          onChange={(e) => updateField("nativeLanguage", e.target.value)}
          placeholder="Hindi, Hinglish, Marathi…"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Audience Focus</label>
        <textarea
          className="min-h-[100px] rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.audience}
          onChange={(e) => updateField("audience", e.target.value)}
          placeholder="Kaun log dekh rahe hain? Lifestyle? Tech bros? Party squad?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Boundaries</label>
        <textarea
          className="min-h-[100px] rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.personalBoundaries}
          onChange={(e) => updateField("personalBoundaries", e.target.value)}
          placeholder="What stays off-limits? Respect, tone, sensitive topics…"
        />
      </div>

      <div className="md:col-span-2">
        <p className="mb-3 text-sm font-medium text-white/80">Platform Focus</p>
        <div className="flex flex-wrap gap-2">
          {platformOptions.map((option) => {
            const active = inputs.platforms.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleSelection("platforms", option.value)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-white bg-white/90 text-black"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/40"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="md:col-span-2">
        <p className="mb-3 text-sm font-medium text-white/80">Revenue Plays</p>
        <div className="flex flex-wrap gap-2">
          {monetizationOptions.map((option) => {
            const active = inputs.monetization.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => toggleSelection("monetization", option.value)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active
                    ? "border-emerald-400 bg-emerald-300 text-black"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/40"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Automation Comfort</label>
        <select
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.automationComfort}
          onChange={(e) =>
            updateField("automationComfort", e.target.value as PersonaInputs["automationComfort"])
          }
        >
          <option value="low">Low (manual with AI assist)</option>
          <option value="medium">Medium (hybrid)</option>
          <option value="high">High (fully orchestrated)</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Ambition Level</label>
        <select
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.ambition}
          onChange={(e) =>
            updateField("ambition", e.target.value as PersonaInputs["ambition"])
          }
        >
          <option value="lifestyle">Lifestyle creator</option>
          <option value="growth">Growth mode</option>
          <option value="domination">Full domination</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-white/80">Launch Horizon</label>
        <select
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40"
          value={inputs.timeHorizon}
          onChange={(e) =>
            updateField("timeHorizon", e.target.value as PersonaInputs["timeHorizon"])
          }
        >
          <option value="30-days">30 days</option>
          <option value="60-days">60 days</option>
          <option value="90-days">90 days</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          disabled={!canGenerate}
          className="rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {dirty ? "Regenerate Blueprint" : "Generate Blueprint"}
        </button>
      </div>
    </form>
  );
}
