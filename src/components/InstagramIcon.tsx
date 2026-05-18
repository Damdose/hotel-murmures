export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        d="M 9 13 C 11.209 13 13 11.209 13 9 C 13 6.791 11.209 5 9 5 C 6.791 5 5 6.791 5 9 C 5 11.209 6.791 13 9 13 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 0 13 L 0 5 C 0 2.239 2.239 0 5 0 L 13 0 C 15.761 0 18 2.239 18 5 L 18 13 C 18 15.761 15.761 18 13 18 L 5 18 C 2.239 18 0 15.761 0 13 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M 14.5 3.511 L 14.51 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
