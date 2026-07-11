"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Zap, Brain, Cloud } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { DigitalMindMark } from "./DigitalMindLogo";

const strengths = [
  {
    icon: Brain,
    label: "Visão e Produto",
    desc: "Digital Mind: pioneira na criação, código e inteligência de produto.",
    color: "#2F80ED",
  },
  {
    icon: Zap,
    label: "Arquitetura de Software",
    desc: "Thorpe Innovation: desenho técnico, arquitetura e apoio à engenharia.",
    color: "#009FC0",
  },
  {
    icon: Cloud,
    label: "Escala com IA & Cloud",
    desc: "Juntas, entregam sistemas robustos prontos para crescer.",
    color: "#1CA995",
  },
];

export default function Partnership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="parceria"
      ref={ref}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#1CA995" }}
          >
            Parceria Estratégica
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            Uma parceria que{" "}
            <span style={{ color: "#009FC0" }}>soma forças</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            A <strong style={{ color: "#323334" }}>Digital Mind</strong> lidera a criação de produtos
            digitais com IA e cloud. A <strong style={{ color: "#009FC0" }}>Thorpe Innovation</strong> entra
            como parceira de arquitetura e engenharia de software — apoiando a equipe da Digital Mind no
            desenho técnico dos sistemas e garantindo que cada produto chegue ao mercado com solidez e
            escalabilidade.
          </p>
        </motion.div>

        {/* Logos side by side */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Thorpe — protagonista */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-md border border-gray-100"
              style={{ backgroundColor: "white" }}
            >
              <LogoMark size={64} />
            </div>
            <div className="text-center">
              <p className="font-bold text-base" style={{ color: "#323334" }}>
                Thorpe<span style={{ color: "#009FC0" }}>Innovation</span>
              </p>
              <span
                className="inline-block mt-1 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{
                  color: "#009FC0",
                  backgroundColor: "rgba(0,159,192,0.1)",
                }}
              >
                Líder do Projeto
              </span>
            </div>
          </div>

          {/* Connector */}
          <div className="flex items-center gap-3">
            <div
              className="hidden sm:block h-px w-10"
              style={{ backgroundColor: "rgba(50,51,52,0.15)" }}
            />
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2"
              style={{
                borderColor: "rgba(50,51,52,0.15)",
                color: "#878889",
              }}
            >
              +
            </div>
            <div
              className="hidden sm:block h-px w-10"
              style={{ backgroundColor: "rgba(50,51,52,0.15)" }}
            />
          </div>

          {/* Digital Mind — parceiro */}
          <div className="flex flex-col items-center gap-3">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              <DigitalMindMark size={44} variant="light" />
            </div>
            <div className="text-center flex flex-col items-center gap-1">
              <p className="font-black text-sm tracking-wide uppercase leading-none">
                <span style={{ color: "#1A1A2E" }}>DIGITAL</span>
                <span style={{ color: "#3B82F6" }}>MIND</span>
              </p>
              <span
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border"
                style={{
                  color: "#3B82F6",
                  borderColor: "rgba(59,130,246,0.3)",
                  backgroundColor: "rgba(59,130,246,0.06)",
                }}
              >
                Parceiro Estratégico
              </span>
            </div>
          </div>
        </motion.div>

        {/* Strength cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {strengths.map((s, i) => (
            <motion.div
              key={s.label}
              className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${s.color}12` }}
              >
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <p
                className="font-semibold text-sm mb-1"
                style={{ color: "#323334" }}
              >
                {s.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#878889" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Discrete CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
        >
          <a
            href="https://www.digitalmind.solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: "#2F80ED" }}
          >
            Conheça a Digital Mind
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
