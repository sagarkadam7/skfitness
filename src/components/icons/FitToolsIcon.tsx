export default function FitToolsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M7 8h4M7 12h7M7 16h5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M15.5 9.5c1.2 0 2 .8 2 1.8 0 1.5-2 2.7-2 4.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}
