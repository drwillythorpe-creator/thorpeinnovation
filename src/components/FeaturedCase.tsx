"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Camera, DollarSign, CalendarCheck, BarChart3, Newspaper } from "lucide-react";
import { LogoMark } from "./LogoMark";
import { DigitalMindMark, DigitalMindFull } from "./DigitalMindLogo";

const metrics = [
  { value: "9", label: "Módulos IA", color: "#009FC0" },
  { value: "20", label: "Vagas piloto", color: "#1CA995" },
  { value: "MAI/26", label: "Beta fechado", color: "#B4C413" },
  { value: "SaaS", label: "Modelo", color: "#F8BC16" },
];

const features = [
  {
    icon: Camera,
    title: "Kitchen Pass",
    desc: "IA valida a montagem dos pratos pela câmera do celular antes de ir à mesa.",
    color: "#009FC0",
  },
  {
    icon: DollarSign,
    title: "Financeiro automatizado",
    desc: "Aceita digitação, foto de nota fiscal ou comando de voz para controle financeiro.",
    color: "#1CA995",
  },
  {
    icon: CalendarCheck,
    title: "Reservas integradas",
    desc: "Central de reservas com alertas, delivery e cardápio em realidade aumentada.",
    color: "#B4C413",
  },
  {
    icon: BarChart3,
    title: "Gestão completa",
    desc: "Cozinha, financeiro, delivery e atendimento em um único sistema SaaS.",
    color: "#F8BC16",
  },
];

const pressLinks = [
  {
    outlet: "RCWTV",
    title: "De Recife para o Brasil: engenheiro pernambucano lança plataforma de IA para gestão de restaurantes",
    url: "https://www.rcwtv.com.br/noticia/de-recife-para-o-brasil-engenheiro-pernambucano-lanca-plataforma-de-ia-para-a-gestao-de-restaurantes",
    color: "#E3546A",
  },
  {
    outlet: "Somos Notícia",
    title: "Startup de gestão para restaurantes inicia operação com IA e mira expansão internacional em 2027",
    url: "https://somosnoticia.com.br/plataforma-gestao-restaurantes-ia/",
    color: "#C32189",
  },
  {
    outlet: "Folha de Pernambuco",
    title: "Do caderno à IA: Chateau.ia, a nova plataforma que promete virar o jogo para restaurantes",
    url: "https://www.folhape.com.br/economia/do-caderno-a-ia-chateauia-a-nova-plataforma-que-promete-virar-o/488992/",
    color: "#F8BC16",
  },
];

export default function FeaturedCase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 overflow-hidden" style={{ backgroundColor: "#0A1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ color: "#009FC0", backgroundColor: "rgba(0,159,192,0.12)", border: "1px solid rgba(0,159,192,0.25)" }}
          >
            Case em Destaque · Parceria em Ação
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-3">
                <span className="text-white">CHATEAU</span>
                <span style={{ color: "#009FC0" }}>.IA</span>
              </h2>
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#555A6B" }}>
                2026 · Gestão para Restaurantes · Inteligência Artificial · SaaS
              </p>
            </div>

            {/* Partnership badges */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: "rgba(0,159,192,0.08)", borderColor: "rgba(0,159,192,0.2)" }}
                >
                  <LogoMark size={38} />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#009FC0" }}>
                  Parceiro de Arquitetura
                </span>
              </div>

              <div className="flex items-center" style={{ color: "#2a3045" }}>
                <span className="text-2xl font-light" style={{ color: "#374060" }}>×</span>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border"
                  style={{ backgroundColor: "rgba(47,128,237,0.08)", borderColor: "rgba(47,128,237,0.2)" }}
                >
                  <DigitalMindMark size={32} variant="dark" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#60A5FA" }}>
                  Criadora do Projeto
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed mb-5" style={{ color: "#9AA3B8" }}>
              O <strong style={{ color: "white" }}>Chateau.ia</strong> é uma plataforma de gestão completa
              para restaurantes com inteligência artificial em todas as camadas — cozinha, financeiro,
              reservas e delivery num só sistema. Substitui cadernos, planilhas e PDVs legados por
              automação e análise em tempo real.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#9AA3B8" }}>
              A <strong style={{ color: "white" }}>Digital Mind</strong> é a empresa pioneira e criadora
              do projeto — responsável por toda a concepção de produto, visão de negócio e desenvolvimento
              do código. A <strong style={{ color: "#009FC0" }}>Thorpe Innovation</strong> entrou como
              parceira técnica, com <strong style={{ color: "#009FC0" }}>Willy Thorpe</strong> atuando
              como Arquiteto de Software ao lado da equipe da Digital Mind — contribuindo no desenho da
              arquitetura do sistema, definição das camadas de IA, modelagem de dados e nas decisões de
              engenharia que garantiram solidez e escalabilidade ao produto.
            </p>

            {/* Pilot result */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl border"
              style={{ backgroundColor: "rgba(0,159,192,0.06)", borderColor: "rgba(0,159,192,0.2)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#009FC0" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#9AA3B8" }}>
                Piloto lançado em <strong style={{ color: "white" }}>maio de 2026</strong> com a rede
                Forneria 1121 (Recife, Natal e Goiânia). Expansão internacional prevista para
                México, Argentina e Portugal em 2027.
              </p>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-5 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <p className="text-3xl font-black mb-1" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#555A6B" }}>{m.label}</p>
                </div>
              ))}
            </div>

            {/* Link to product */}
            <a
              href="https://www.digitalmind.solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group transition-opacity hover:opacity-80"
            >
              <DigitalMindFull markSize={22} variant="dark" />
              <ExternalLink className="w-3.5 h-3.5 text-[#60A5FA]" />
            </a>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="p-5 rounded-xl border"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${f.color}18` }}
              >
                <f.icon className="w-4 h-4" style={{ color: f.color }} />
              </div>
              <p className="font-bold text-sm mb-1" style={{ color: "white" }}>{f.title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Press coverage */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Newspaper className="w-4 h-4" style={{ color: "#555A6B" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#555A6B" }}>
              Cobertura na mídia
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {pressLinks.map((p) => (
              <a
                key={p.outlet}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex items-start gap-3 p-4 rounded-xl border transition-all hover:border-opacity-60"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span
                  className="inline-block text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${p.color}18`, color: p.color }}
                >
                  {p.outlet}
                </span>
                <span
                  className="text-xs leading-relaxed line-clamp-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: "#6B7280" }}
                >
                  {p.title}
                  <ExternalLink className="inline w-3 h-3 ml-1 opacity-50" />
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
