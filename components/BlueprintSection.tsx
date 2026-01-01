import { BlueprintSection } from "@/lib/types";
import { motion } from "framer-motion";

interface Props {
  section: BlueprintSection;
  index: number;
}

export function BlueprintSectionCard({ section, index }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-md"
    >
      <h3 className="font-display text-lg font-semibold text-white">
        {section.title}
      </h3>
      <ul className="space-y-2 text-sm text-white/80">
        {section.bullets.map((point, bulletIndex) => (
          <li key={bulletIndex} className="leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
