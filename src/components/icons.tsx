import type { SVGProps } from 'react';

/**
 * Set de iconos de línea (stroke) minimalistas y coherentes,
 * en el estilo técnico/circuito de la marca NebulAI.
 * Todos heredan el color con `currentColor` y aceptan className/props SVG.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* --- Servicios --- */

export const IconCode = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10" />
  </svg>
);

export const IconApp = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="3" width="12" height="18" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const IconAI = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2.5" />
    <path d="M12 7V4M9.5 4h5M12 17v3M9.5 20h5M7 9.5H4M4 14.5h3M17 9.5h3M17 14.5h3" />
    <circle cx="12" cy="12" r="1.4" />
  </svg>
);

export const IconGear = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

export const IconChat = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 4v-4H6.5" />
    <path d="M8.5 9h7M8.5 12h4" />
  </svg>
);

export const IconBulb = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2h5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
  </svg>
);

export const IconCloud = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7.5 18a4 4 0 0 1-.4-7.98A5 5 0 0 1 17 10.5a3.5 3.5 0 0 1-.5 7H7.5Z" />
  </svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 20V4M4 20h16" />
    <path d="M8 16v-3M12 16V8M16 16v-5M20 16v-2" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="M9.5 12l1.8 1.8L15 10" />
  </svg>
);

export const IconSpark = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" />
  </svg>
);

/* --- UI / contacto --- */

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M4 7l8 5.5L20 7" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const IconSun = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const IconMoon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5a7.5 7.5 0 1 0 11.3 11.3Z" />
  </svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);
