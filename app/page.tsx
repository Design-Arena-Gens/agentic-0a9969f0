/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { PersonaForm } from "@/components/PersonaForm";
import { PlanOutput } from "@/components/PlanOutput";
import { generatePlan } from "@/lib/generatePlan";
import { PersonaInputs, PlanArtifacts } from "@/lib/types";
import { motion } from "framer-motion";

export default function Home() {
  const [plan, setPlan] = useState<PlanArtifacts | null>(null);

  const handleSubmit = (inputs: PersonaInputs) => {
    const nextPlan = generatePlan(inputs);
    setPlan(nextPlan);
  };

  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 text-white">
      <div className="absolute inset-0 -z-10 bg-mesh-gradient opacity-60" />

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-6 text-center md:text-left"
      >
        <span className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 md:self-start">
          Agentic Influencer Lab
        </span>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Build your hyper-real AI influencer alter ego who follows every brief, har waqt.
        </h1>
        <p className="max-w-2xl text-base text-white/70 md:text-lg">
          Drop your vibe, audience, and limits. We'll architect a full-stack blueprint—persona DNA,
          tool stack, automation flow, and launch roadmap—so your virtual twin behaves exactly how
          you want, bina kisi drama ke.
        </p>
      </motion.header>

      <PersonaForm onSubmit={handleSubmit} />
      <PlanOutput plan={plan} />

      <footer className="pb-10 text-center text-xs text-white/40">
        Crafted for creators who want full control over their AI persona &amp; brand.
      </footer>
    </main>
  );
}
