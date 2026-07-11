"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "12+", label: "Anos de mercado", accent: "#009FC0" },
  { value: "50+", label: "Projetos entregues", accent: "#1CA995" },
  { value: "8", label: "Stacks dominadas", accent: "#B4C413" },
  { value: "100%", label: "Foco em resultado", accent: "#F8BC16" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2 tabular-nums"
                style={{ color: m.accent }}
              >
                {m.value}
              </div>
              <div
                className="text-sm font-medium uppercase tracking-wide"
                style={{ color: "#878889" }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
