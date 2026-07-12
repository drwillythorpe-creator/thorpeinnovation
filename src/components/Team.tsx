"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Users, Cpu } from "lucide-react";

const stats = [
  { icon: Users, value: "+10", label: "Anos de time", color: "#009FC0" },
  { icon: MapPin, value: "Porto Digital", label: "Recife · PE", color: "#1CA995" },
  { icon: Cpu, value: "100%", label: "Foco em produto", color: "#B4C413" },
];

const tags = [
  "Hackathon",
  "Porto Digital",
  "CIn · UFPE",
  "Voxar Labs",
  "IA aplicada",
  "Arquitetura de sistemas",
];

export default function Team() {
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Subtle parallax on the photo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#050D1A" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #009FC0 30%, #1CA995 70%, transparent 100%)",
          opacity: 0.35,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{
              color: "#009FC0",
              borderColor: "rgba(0,159,192,0.28)",
              backgroundColor: "rgba(0,159,192,0.07)",
            }}
          >
            <Users className="w-3 h-3" />
            Time in loco
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-6">
              <span className="text-white">O time que </span>
              <br />
              <span style={{ color: "#009FC0" }}>constrói</span>
              <span className="text-white"> junto.</span>
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "#9AA3B8" }}>
              Mais de uma década construindo software com método e propósito.
              A Thorpe Innovation nasceu dentro do{" "}
              <strong style={{ color: "white" }}>Porto Digital</strong>, o maior
              polo de tecnologia do Nordeste, e carrega no DNA a cultura de
              colaboração, prototipagem rápida e resolução real de problemas.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#9AA3B8" }}>
              Esta foto é do{" "}
              <strong style={{ color: "white" }}>Hackathon CIn · Voxar Labs</strong>,
              onde o time esteve presente — debatendo arquitetura, IA e estratégia
              de produto em tempo real, do jeito que a gente gosta: ao redor da mesa,
              com código aberto e ideias na lousa.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md"
                  style={{
                    color: "#555A6B",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${s.color}15` }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-black leading-none" style={{ color: s.color }}>
                      {s.value}
                    </p>
                    <p className="text-[11px] font-medium mt-0.5" style={{ color: "#555A6B" }}>
                      {s.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            {/* Glow behind photo */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, #009FC0 0%, #1CA995 50%, transparent 80%)",
              }}
            />

            {/* Photo frame */}
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(0,159,192,0.18)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              }}
            >
              <motion.div style={{ y: imageY }} className="relative">
                <Image
                  src="/team-hackathon.jpeg"
                  alt="Time da Thorpe Innovation no Hackathon CIn · Voxar Labs — Porto Digital, Recife"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Bottom overlay with caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,13,26,0.95) 0%, rgba(5,13,26,0.5) 60%, transparent 100%)",
                }}
              >
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-black tracking-widest uppercase mb-0.5" style={{ color: "#009FC0" }}>
                      Hackathon · CIn · Voxar Labs
                    </p>
                    <p className="text-[11px]" style={{ color: "#6B7280" }}>
                      Porto Digital · Recife, PE
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded flex-shrink-0"
                    style={{
                      color: "#B4C413",
                      backgroundColor: "rgba(180,196,19,0.12)",
                      border: "1px solid rgba(180,196,19,0.25)",
                    }}
                  >
                    In Loco
                  </span>
                </div>
              </div>
            </div>

            {/* Floating quote card */}
            <motion.div
              className="absolute -bottom-6 -left-6 max-w-[220px] p-4 rounded-xl border backdrop-blur-sm hidden sm:block"
              style={{
                backgroundColor: "rgba(5,13,26,0.85)",
                borderColor: "rgba(0,159,192,0.2)",
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p className="text-xs leading-relaxed italic" style={{ color: "#9AA3B8" }}>
                "Breaking Paradigms,<br />Innovating Systems."
              </p>
              <p className="text-[10px] font-bold mt-2 tracking-widest uppercase" style={{ color: "#009FC0" }}>
                Thorpe Innovation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #1CA995 40%, #009FC0 60%, transparent 100%)",
          opacity: 0.2,
        }}
      />
    </section>
  );
}
