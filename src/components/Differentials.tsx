"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, MessageSquare, Layers, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Code,
    title: "Engenharia de verdade",
    desc: "Código limpo, testável e documentado — não gambiarras que funcionam hoje e quebram amanhã. Arquitetura que sustenta crescimento.",
    accent: "#009FC0",
  },
  {
    icon: MessageSquare,
    title: "Comunicação transparente",
    desc: "O cliente acompanha cada etapa em tempo real, sem caixa-preta. Relatórios claros e acesso direto ao time.",
    accent: "#1CA995",
  },
  {
    icon: Layers,
    title: "Stack moderna e sustentável",
    desc: "Tecnologias com comunidade ativa, fácil manutenção futura e baixo custo de onboarding para novos desenvolvedores.",
    accent: "#B4C413",
  },
  {
    icon: TrendingUp,
    title: "Foco em resultado de negócio",
    desc: "Cada decisão técnica é avaliada pelo impacto no objetivo do cliente — não por modismo ou preferência interna.",
    accent: "#F8BC16",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" ref={ref} className="py-24 bg-white">
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
            Por que a Thorpe
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            4 pilares que nos diferenciam
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            Competência técnica e confiabilidade de execução, na mesma empresa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-6 rounded-2xl border-t-2 bg-white shadow-sm hover:shadow-md transition-shadow"
              style={{ borderTopColor: p.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${p.accent}15` }}
              >
                <p.icon className="w-5 h-5" style={{ color: p.accent }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#323334" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#878889" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
