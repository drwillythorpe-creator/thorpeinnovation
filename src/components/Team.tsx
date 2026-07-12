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
  "Lançamento iOS",
];

const photos = [
  {
    src: "/team-hackathon.jpeg",
    alt: "Time da Thorpe Innovation no Hackathon CIn · Voxar Labs — Porto Digital, Recife",
    caption: "Hackathon · CIn · Voxar Labs",
    sub: "Porto Digital · Recife, PE",
    badge: "In Loco",
    badgeColor: "#009FC0",
  },
  {
    src: "/team-launch-breaking.jpeg",
    alt: "Lançamento iAID — Thorpe Innovation no Porto Digital com balões e brinde comemorativo",
    caption: "Lançamento iAID",
    sub: "Breaking Paradigms, Innovating Systems",
    badge: "Launch",
    badgeColor: "#F8BC16",
  },
  {
    src: "/team-launch-ios.jpeg",
    alt: "Lançamento do app iOS iAID no Porto Digital — Nosso lema: pensar fora da caixa",
    caption: "iOS App · iAID",
    sub: "Pensar fora da caixa",
    badge: "App Store",
    badgeColor: "#B4C413",
  },
];

export default function Team() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const altY  = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#050D1A" }}
    >
      {/* Top accent */}
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

        {/* Main grid: text left, gallery right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="lg:sticky lg:top-28"
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
              Das sessões de hackathon com o{" "}
              <strong style={{ color: "white" }}>CIn · UFPE e Voxar Labs</strong>{" "}
              ao lançamento do{" "}
              <strong style={{ color: "white" }}>iAID na App Store</strong> —
              estas fotos mostram o time da forma que mais importa: com as mãos
              na massa, ideias em debate e produto acontecendo.
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

            {/* Quote */}
            <motion.div
              className="mt-10 pl-4 border-l-2"
              style={{ borderColor: "rgba(0,159,192,0.35)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <p className="text-sm italic leading-relaxed" style={{ color: "#6B7280" }}>
                "Breaking Paradigms,<br />Innovating Systems."
              </p>
              <p className="text-[10px] font-bold mt-2 tracking-widest uppercase" style={{ color: "#009FC0" }}>
                Thorpe Innovation · Porto Digital
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: photo gallery ────────────────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Photo 1 — Hackathon (large, parallax up) */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div
                className="absolute -inset-3 rounded-2xl blur-xl opacity-15"
                style={{ background: "radial-gradient(ellipse, #009FC0 0%, transparent 70%)" }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{
                  borderColor: "rgba(0,159,192,0.18)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
                }}
              >
                <motion.div style={{ y: mainY }}>
                  <Image
                    src={photos[0].src}
                    alt={photos[0].alt}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </motion.div>
                <PhotoCaption photo={photos[0]} />
              </div>
            </motion.div>

            {/* Photos 2 + 3 — side by side (parallax down) */}
            <div className="grid grid-cols-2 gap-5">
              {photos.slice(1).map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.22 + i * 0.12 }}
                  className="relative"
                >
                  <div
                    className="absolute -inset-2 rounded-2xl blur-lg opacity-10"
                    style={{
                      background: `radial-gradient(ellipse, ${photo.badgeColor} 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="relative rounded-xl overflow-hidden border"
                    style={{
                      borderColor: `${photo.badgeColor}28`,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                    }}
                  >
                    <motion.div style={{ y: altY }}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                    <PhotoCaption photo={photo} compact />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
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

function PhotoCaption({
  photo,
  compact = false,
}: {
  photo: (typeof photos)[number];
  compact?: boolean;
}) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        padding: compact ? "10px 12px" : "16px 20px",
        background:
          "linear-gradient(to top, rgba(5,13,26,0.96) 0%, rgba(5,13,26,0.55) 60%, transparent 100%)",
      }}
    >
      <div className="flex items-end justify-between gap-2">
        <div>
          <p
            className="font-black tracking-widest uppercase leading-none"
            style={{
              fontSize: compact ? "9px" : "11px",
              color: photo.badgeColor,
            }}
          >
            {photo.caption}
          </p>
          {!compact && (
            <p className="text-[10px] mt-0.5" style={{ color: "#6B7280" }}>
              {photo.sub}
            </p>
          )}
        </div>
        <span
          className="font-bold tracking-widest uppercase rounded flex-shrink-0"
          style={{
            fontSize: "9px",
            padding: compact ? "2px 6px" : "3px 8px",
            color: photo.badgeColor,
            backgroundColor: `${photo.badgeColor}18`,
            border: `1px solid ${photo.badgeColor}35`,
          }}
        >
          {photo.badge}
        </span>
      </div>
    </div>
  );
}
