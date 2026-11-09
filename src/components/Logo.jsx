// Placeholder: reemplazar por el logo real de Expresso al Cielo (SVG o <img>).
export default function Logo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#EAF3FB" stroke="#C9972B" strokeWidth="3" />
      <path d="M32 18c-3 6-9 9-16 9 2 8 9 12 16 12s14-4 16-12c-7 0-13-3-16-9z" fill="#C9972B" />
      <circle cx="32" cy="22" r="5" fill="#1F3350" />
    </svg>
  );
}
