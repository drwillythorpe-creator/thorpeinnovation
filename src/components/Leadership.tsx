"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
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
            Liderança
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: "#323334" }}
          >
            Quem está à frente
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 rounded-2xl border border-gray-100 shadow-sm bg-white">
            {/* Photo placeholder — replace with <Image src="/willy.jpg" ... /> when available */}
            <div
              className="w-28 h-28 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(0,159,192,0.1)" }}
            >
              <User className="w-12 h-12" style={{ color: "#009FC0" }} />
            </div>

            <div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ color: "#323334" }}
              >
                Willy Thorpe
              </h3>
              <p
                className="text-sm font-semibold mb-4 tracking-wide uppercase"
                style={{ color: "#009FC0" }}
              >
                CEO & Arquiteto de Software
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "#555658" }}
              >
                À frente da Thorpe Innovation, Willy conduz a empresa com uma
                visão de engenharia aplicada a resultado de negócio — construída
                ao longo de anos atuando em arquitetura de sistemas, soluções
                mobile e projetos de tecnologia no Porto Digital.
              </p>
              <a
                href="https://linkedin.com/in/willythorpe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "#009FC0" }}
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
