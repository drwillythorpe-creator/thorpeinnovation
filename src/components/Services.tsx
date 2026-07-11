"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Rocket,
  BarChart3,
  Plug,
  RefreshCw,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Sob Medida",
    desc: "Sistemas web e mobile construídos do zero, alinhados à regra de negócio do cliente com arquitetura sólida e código de qualidade.",
    accent: "#009FC0",
  },
  {
    icon: Rocket,
    title: "MVP e Validação de Produto",
    desc: "Desenvolvimento rápido de produtos mínimos viáveis para validar ideias com o mercado sem queimar todo o orçamento.",
    accent: "#1CA995",
  },
  {
    icon: BarChart3,
    title: "Consultoria Técnica e Arquitetura",
    desc: "Diagnóstico, arquitetura de sistemas e boas práticas para produtos que já existem e precisam escalar ou melhorar.",
    accent: "#B4C413",
  },
  {
    icon: Plug,
    title: "Integrações e APIs",
    desc: "Conexão entre sistemas, automações e integrações com serviços de terceiros — pagamentos, ERPs, CRMs e mais.",
    accent: "#F8BC16",
  },
  {
    icon: RefreshCw,
    title: "Modernização de Legados",
    desc: "Migração e reestruturação de sistemas antigos para stacks modernas, sem interromper a operação do negócio.",
    accent: "#E3546A",
  },
  {
    icon: Users,
    title: "Times Dedicados / Squad",
    desc: "Squads de desenvolvimento alocados para projetos contínuos, com a mesma agilidade de uma equipe interna.",
    accent: "#C32189",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" ref={ref} className="py-24 bg-white">
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
            O que fazemos
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#323334" }}
          >
            Serviços de desenvolvimento de software
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
            Do zero ao produto em produção — oferecemos a capacidade técnica
            que seu negócio precisa, no momento certo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: `${s.accent}15` }}
              >
                <s.icon className="w-6 h-6" style={{ color: s.accent }} />
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "#323334" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#878889" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
