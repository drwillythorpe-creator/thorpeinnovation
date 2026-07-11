"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "React", color: "#009FC0" },
  { name: "Next.js", color: "#323334" },
  { name: "Node.js", color: "#1CA995" },
  { name: "TypeScript", color: "#009FC0" },
  { name: "React Native", color: "#1CA995" },
  { name: "PostgreSQL", color: "#323334" },
  { name: "MongoDB", color: "#B4C413" },
  { name: "Docker", color: "#009FC0" },
  { name: "AWS", color: "#F8BC16" },
  { name: "Vercel", color: "#323334" },
  { name: "Python", color: "#1CA995" },
  { name: "GraphQL", color: "#E3546A" },
  { name: "REST APIs", color: "#009FC0" },
  { name: "Redis", color: "#E3546A" },
  { name: "Prisma", color: "#1CA995" },
  { name: "Tailwind CSS", color: "#009FC0" },
];

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "#F7F7F8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#1CA995" }}
          >
            Stack Tecnológica
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            Tecnologias que dominamos
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            Escolhemos as ferramentas certas para cada projeto — sem modismo,
            sem dependência de vendors, com foco em manutenibilidade.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="px-4 py-2 rounded-full bg-white border text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderColor: `${tech.color}30`,
                color: tech.color,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
