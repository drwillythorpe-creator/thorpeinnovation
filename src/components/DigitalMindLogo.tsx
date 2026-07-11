/**
 * Digital Mind logo — recriado fielmente a partir da logomarca oficial:
 * quadrado azul arredondado com "DM" branco + wordmark "DIGITALMIND"
 * (DIGITAL em branco/cinza-claro, MIND em azul-claro).
 */

interface DigitalMindMarkProps {
  size?: number;
  className?: string;
  /** "dark" para fundo escuro (branco/azul), "light" para fundo claro (escuro/azul) */
  variant?: "dark" | "light";
}

export function DigitalMindMark({ size = 40, className = "", variant = "dark" }: DigitalMindMarkProps) {
  const squareBg = "#3B82F6";
  const letterColor = "white";

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded square */}
      <rect x="0" y="0" width="40" height="40" rx="7" fill={squareBg} />
      {/* DM letters */}
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill={letterColor}
        letterSpacing="-0.5"
      >
        DM
      </text>
    </svg>
  );
}

interface DigitalMindFullProps {
  markSize?: number;
  className?: string;
  /** "dark" = sobre fundo escuro (texto branco). "light" = sobre fundo claro (texto escuro). */
  variant?: "dark" | "light";
}

export function DigitalMindFull({ markSize = 36, className = "", variant = "dark" }: DigitalMindFullProps) {
  const digitalColor = variant === "dark" ? "#FFFFFF" : "#1A1A2E";
  const mindColor = "#60A5FA"; // azul-claro fiel ao original
  const fontSize = Math.round(markSize * 0.56);

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <DigitalMindMark size={markSize} variant={variant} />
      <span
        className="font-black tracking-wide leading-none uppercase"
        style={{ fontSize, letterSpacing: "0.02em" }}
      >
        <span style={{ color: digitalColor }}>DIGITAL</span>
        <span style={{ color: mindColor }}>MIND</span>
      </span>
    </span>
  );
}
