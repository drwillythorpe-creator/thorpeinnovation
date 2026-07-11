"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, SendHorizonal, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("E-mail inválido"),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, "Mensagem muito curta — conte um pouco mais sobre seu projeto"),
});

type FormData = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "5581986834320";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Vim do Site da Thorpe Innovation e desejo iniciar o meu projeto tecnológico."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Erro ao enviar. Tente novamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setErrorMsg("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  };

  return (
    <section id="contato" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#1CA995" }}
            >
              Contato
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
              style={{ color: "#323334" }}
            >
              Tem uma ideia? Vamos{" "}
              <span style={{ color: "#009FC0" }}>
                transformá-la em software.
              </span>
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#555658" }}
            >
              Não sabe por onde começar? Fale com a gente — uma conversa de 30
              minutos já é suficiente para entender o que você precisa e traçar
              um caminho.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contato@thorpeinnovation.com"
                className="flex items-center gap-3 text-sm font-medium group"
                style={{ color: "#009FC0" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors group-hover:opacity-80"
                  style={{ backgroundColor: "rgba(0,159,192,0.1)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#009FC0" }} />
                </div>
                contato@thorpeinnovation.com
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium group"
                style={{ color: "#1CA995" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-opacity group-hover:opacity-80"
                  style={{ backgroundColor: "rgba(28,169,149,0.1)" }}
                >
                  <MessageCircle
                    className="w-5 h-5"
                    style={{ color: "#1CA995" }}
                  />
                </div>
                WhatsApp — fale agora
              </a>
            </div>
          </motion.div>

          {/* ── Right column — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-14 px-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <CheckCircle2
                  className="w-14 h-14 mb-4"
                  style={{ color: "#1CA995" }}
                />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#323334" }}
                >
                  Mensagem enviada!
                </h3>
                <p className="text-sm mb-1" style={{ color: "#555658" }}>
                  E-mail recebido com sucesso em{" "}
                  <span className="font-medium">thorpe@willythorpe.com</span>.
                </p>
                <p className="text-sm" style={{ color: "#878889" }}>
                  Retornaremos em até 1 dia útil.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium underline"
                  style={{ color: "#009FC0" }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                {/* Error banner */}
                {status === "error" && (
                  <div
                    className="flex items-start gap-3 p-4 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(227,84,106,0.06)",
                      borderColor: "rgba(227,84,106,0.3)",
                    }}
                  >
                    <AlertCircle
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#E3546A" }}
                    />
                    <p className="text-sm" style={{ color: "#E3546A" }}>
                      {errorMsg}
                    </p>
                  </div>
                )}

                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#323334" }}
                  >
                    Nome *
                  </label>
                  <Input
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    {...register("name")}
                    className={errors.name ? "border-red-400 focus:ring-red-300" : ""}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#323334" }}
                  >
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    {...register("email")}
                    className={errors.email ? "border-red-400 focus:ring-red-300" : ""}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#323334" }}
                  >
                    Empresa
                  </label>
                  <Input
                    placeholder="Nome da empresa (opcional)"
                    autoComplete="organization"
                    {...register("company")}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: "#323334" }}
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    placeholder="Conte sobre seu projeto, desafio ou ideia..."
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-red-400 focus:ring-red-300" : ""}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#009FC0" }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <SendHorizonal className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "#878889" }}>
                  Seus dados são tratados com confidencialidade.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
