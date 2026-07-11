"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, LayoutTemplate, GitBranch, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta",
    desc: "Entendimento profundo do problema, objetivos de negócio, público e requisitos técnicos antes de escrever uma linha de código.",
    accent: "#009FC0",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Arquitetura e Planejamento",
    desc: "Definição de stack, escopo técnico detalhado, cronograma realista e roadmap de entregas.",
    accent: "#1CA995",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Desenvolvimento Iterativo",
    desc: "Sprints com entregas incrementais, código revisado em pares e comunicação constante com o cliente.",
    accent: "#B4C413",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testes e Qualidade",
    desc: "Validação funcional, testes automatizados, revisão de código e garantia de performance antes de cada entrega.",
    accent: "#F8BC16",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deploy e Acompanhamento",
    desc: "Publicação em produção, monitoramento ativo e suporte pós-entrega para garantir estabilidade.",
    accent: "#E3546A",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="processo"
      ref={ref}
      className="py-24"
      style={{ backgroundColor: "#F7F7F8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Como trabalhamos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            Do conceito ao produto em{" "}
            <span style={{ color: "#009FC0" }}>5 etapas</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            Um processo estruturado que garante previsibilidade, qualidade e
            alinhamento constante com o cliente.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ backgroundColor: "rgba(0,159,192,0.15)" }}
          />

          <div className="flex flex-col gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`relative md:grid md:grid-cols-2 md:gap-8 md:items-center ${
                  i % 2 === 0 ? "" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* Content left or right */}
                <div
                  className={`${
                    i % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  } mb-4 md:mb-10`}
                >
                  <div
                    className={`inline-flex flex-col ${
                      i % 2 === 0
                        ? "md:items-end"
                        : "md:items-start"
                    } items-start`}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: step.accent }}
                    >
                      Etapa {step.number}
                    </span>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#323334" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-xs"
                      style={{ color: "#878889" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center shadow-md ${
                    i % 2 === 0 ? "" : ""
                  }`}
                  style={{ backgroundColor: step.accent }}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>

                {/* Mobile: icon inline */}
                <div className="md:hidden flex items-center gap-3 mb-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: step.accent }}
                  >
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
