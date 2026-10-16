// The mark: an azulejo-style tile with a four-point sampaguita star.
export function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Español Para Sa’yo"
      className="logo"
    >
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="9"
        fill="var(--primary)"
        stroke="var(--edge)"
        strokeWidth="3"
      />
      <path
        d="M24 8 29.5 18.5 40 24 29.5 29.5 24 40 18.5 29.5 8 24 18.5 18.5Z"
        fill="var(--mango)"
        stroke="var(--edge)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="4.5" fill="var(--accent)" stroke="var(--edge)" strokeWidth="2" />
    </svg>
  );
}
