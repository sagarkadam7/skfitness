export default function SkMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <path
        d="M8 16.5c0-3.2 2.4-5.5 5.8-5.5 2.1 0 3.6 1 4.4 2.3l-2.2 1.3c-.5-.8-1.3-1.2-2.2-1.2-1.5 0-2.6 1.2-2.6 3.1s1.1 3.1 2.6 3.1c1 0 1.7-.4 2.2-1.2l2.2 1.3c-.8 1.3-2.3 2.3-4.4 2.3-3.4 0-5.8-2.3-5.8-5.5z"
        fill="#ffffff"
      />
      <path
        d="M18.5 11h2.4l3.1 10.2h-2.3l-.6-2h-3.4l-.6 2h-2.3L18.5 11zm2.1 6.3-.9-3.1-.9 3.1h1.8z"
        fill="#f08e7e"
      />
      <circle cx="26" cy="8" r="2" fill="#d4ff00" />
    </svg>
  );
}
