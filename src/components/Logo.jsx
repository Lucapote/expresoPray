export default function Logo({ size = 48, className = '' }) {
  return (
    <img
      src="/logo.webp"
      alt="Expresso al Cielo"
      width={size}
      height={size}
      className={`brand-logo ${className}`.trim()}
      style={{ width: size, height: size }}
    />
  );
}
