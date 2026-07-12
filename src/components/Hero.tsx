"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import PinwheelCanvas from "./PinwheelCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated canvas background */}
      <PinwheelCanvas />

      {/* Gradient overlay — keeps text readable over the canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(105deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.52) 48%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="inline-block text-sm font-semibold tracking-widest uppercase mb-6 px-3 py-1 rounded-full border"
              style={{
                color: "#009FC0",
                borderColor: "rgba(0,159,192,0.3)",
                backgroundColor: "rgba(0,159,192,0.07)",
              }}
            >
              Desenvolvimento de Software · Porto Digital · Recife
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: "#323334" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Sua ideia.{" "}
            <span style={{ color: "#009FC0" }}>Nossa engenharia.</span>
            <br />
            Software que funciona.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "#555658" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            A Thorpe Innovation desenvolve soluções digitais sob medida para
            empresas que precisam sair do papel com segurança, qualidade e
            velocidade. Do conceito ao produto em produção.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all"
              style={{ backgroundColor: "#009FC0" }}
            >
              Iniciar meu projeto
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold border-2 hover:bg-white/60 backdrop-blur-sm transition-colors"
              style={{ borderColor: "#323334", color: "#323334" }}
            >
              Conhecer nosso processo
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: "#009FC0" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
