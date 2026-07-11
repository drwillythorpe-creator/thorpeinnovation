"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, CalendarDays, Target } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="py-24" style={{ backgroundColor: "#F7F7F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#1CA995" }}
            >
              Sobre a empresa
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
              style={{ color: "#323334" }}
            >
              Engenharia aplicada a{" "}
              <span style={{ color: "#009FC0" }}>resultado de negócio</span>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#555658" }}>
              Fundada em 2013 no Porto Digital, um dos maiores polos de
              tecnologia e inovação do Brasil, a Thorpe Innovation é uma empresa
              de desenvolvimento de software focada em transformar ideias de
              negócio em produtos digitais robustos e escaláveis.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#555658" }}>
              Combinamos engenharia de software sólida com visão estratégica de
              produto para entregar soluções que resolvem problemas reais — não
              apenas código.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#555658" }}>
              Trabalhamos como parceiros técnicos dos nossos clientes, do
              primeiro rascunho da ideia ao produto em produção, com
              transparência em cada etapa.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {[
              {
                icon: CalendarDays,
                label: "Fundada em 2013",
                desc: "Mais de uma década construindo software de qualidade no mercado brasileiro e exterior.",
                color: "#009FC0",
              },
              {
                icon: MapPin,
                label: "Porto Digital · Recife, PE",
                desc: "Nascemos em um dos maiores hubs de tecnologia e inovação do Brasil.",
                color: "#1CA995",
              },
              {
                icon: Target,
                label: "Foco em resultado",
                desc: "Cada decisão técnica é avaliada pelo impacto no objetivo do cliente.",
                color: "#B4C413",
              },
            ].map(({ icon: Icon, label, desc, color }, i) => (
              <div
                key={label}
                className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#323334" }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#878889" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
