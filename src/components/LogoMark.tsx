interface LogoMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function LogoMark({ size = 40, className = "", animated = false }: LogoMarkProps) {
  return (
    <svg
      viewBox="-220 -220 440 440"
      width={size}
      height={size}
      className={`${animated ? "animate-spin-slow" : ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="scale(1.6)" strokeWidth="26" strokeLinecap="round">
        <line x1="10" y1="-30" x2="40" y2="-130" stroke="#b5c423" />
        <line x1="40" y1="-5" x2="120" y2="5" stroke="#f4b31a" />
        <line x1="25" y1="30" x2="80" y2="120" stroke="#c52185" />
        <line x1="-10" y1="40" x2="-45" y2="110" stroke="#df5463" />
        <line x1="-40" y1="15" x2="-130" y2="30" stroke="#17a0c5" />
        <line x1="-30" y1="-15" x2="-80" y2="-75" stroke="#25a9a8" />
      </g>
    </svg>
  );
}

interface LogoFullProps {
  markSize?: number;
  className?: string;
}

export function LogoFull({ markSize = 36, className = "" }: LogoFullProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={markSize} />
      <span className="font-bold tracking-tight leading-none" style={{ color: "#323334", fontSize: markSize * 0.55 }}>
        Thorpe
        <span style={{ color: "#009FC0" }}>Innovation</span>
      </span>
    </span>
  );
}
