import { PlanArtifacts } from "@/lib/types";
import { BlueprintSectionCard } from "./BlueprintSection";
import { motion } from "framer-motion";

interface Props {
  plan: PlanArtifacts | null;
}

export function PlanOutput({ plan }: Props) {
  if (!plan) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70 backdrop-blur-xl">
        Fill the form to drop a full-stack AI influencer blueprint designed around you.
      </div>
    );
  }

  const sections = [
    plan.personaOverview,
    plan.experienceStack,
    plan.contentEngine,
    plan.automationSuite,
    plan.monetizationSuite,
    plan.launchRoadmap,
    plan.guardrails,
    plan.signatureMoves
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-xl md:grid-cols-2"
    >
      {sections.map((section, index) => (
        <BlueprintSectionCard key={section.title} section={section} index={index} />
      ))}
    </motion.div>
  );
}
