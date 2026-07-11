"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Plataforma Web",
    title: "Sistema de Gestão Operacional",
    desc: "Desenvolvimento de plataforma web sob medida para gestão de operações logísticas, com integração a ERPs e dashboards em tempo real.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    accent: "#009FC0",
  },
  {
    tag: "Aplicativo Mobile",
    title: "App de Serviços ao Cidadão",
    desc: "Aplicativo mobile para acesso a serviços municipais digitalizados, com autenticação segura e notificações em tempo real.",
    stack: ["React Native", "Firebase", "API REST"],
    accent: "#1CA995",
  },
  {
    tag: "MVP",
    title: "Plataforma de Marketplace B2B",
    desc: "MVP de marketplace B2B para conectar fornecedores e compradores no setor industrial, do zero ao primeiro usuário em 8 semanas.",
    stack: ["Next.js", "Stripe", "Supabase"],
    accent: "#B4C413",
  },
];

export default function Cases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cases"
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
            Portfólio
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            Projetos em destaque
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            Uma amostra do que entregamos — cada projeto com seu próprio
            desafio e solução técnica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Color band */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: c.accent }}
              />

              <div className="p-6 flex flex-col flex-1">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-2 py-0.5 rounded"
                  style={{
                    color: c.accent,
                    backgroundColor: `${c.accent}12`,
                  }}
                >
                  {c.tag}
                </span>
                <h3
                  className="font-bold text-lg mb-3 leading-snug"
                  style={{ color: "#323334" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "#878889" }}
                >
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded border"
                      style={{
                        color: "#555658",
                        borderColor: "rgba(50,51,52,0.15)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm mt-10"
          style={{ color: "#878889" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Cases completos e mais projetos disponíveis mediante contato.
        </motion.p>
      </div>
    </section>
  );
}
