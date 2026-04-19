"use client";

interface PremiumIconProps {
  className?: string;
  size?: number;
}

export function GlobeIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="url(#globeGradient)"
        strokeWidth="3"
        fill="none"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="url(#globeGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      <line
        x1="4"
        y1="24"
        x2="44"
        y2="24"
        stroke="url(#globeGradient)"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="24" cy="24" r="4" fill="url(#globeGradient)" />
    </svg>
  );
}

export function ShieldIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path
        d="M24 4L6 14V24C6 34 14 42 24 44C34 42 42 34 42 24V14L24 4Z"
        fill="url(#shieldGradient)"
        stroke="url(#shieldGradient)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 24L22 28L30 20"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkleIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <path
        d="M24 2L27 17L42 20L27 23L24 38L21 23L6 20L21 17L24 2Z"
        fill="url(#sparkleGradient)"
      />
      <path
        d="M24 14L25.5 21L32 22.5L25.5 24L24 31L22.5 24L16 22.5L22.5 21L24 14Z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}

export function DocumentIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <path
        d="M12 6H30L38 14V42H12V6Z"
        fill="url(#docGradient)"
        stroke="url(#docGradient)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 6V14H38"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <line x1="18" y1="22" x2="32" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="18" y1="28" x2="32" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="18" y1="34" x2="26" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function MessageIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path
        d="M8 12C8 12 16 8 24 8C32 8 40 12 40 12V32C40 32 32 36 24 36C16 36 8 32 8 32V12Z"
        fill="url(#messageGradient)"
      />
      <path
        d="M8 12C8 12 16 16 24 16C32 16 40 12 40 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="26" r="2" fill="white" opacity="0.7" />
      <circle cx="24" cy="26" r="2" fill="white" opacity="0.7" />
      <circle cx="30" cy="26" r="2" fill="white" opacity="0.7" />
    </svg>
  );
}

export function UserIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="16" r="10" fill="url(#userGradient)" />
      <path
        d="M8 44C8 36 15 30 24 30C33 30 40 36 40 44"
        fill="url(#userGradient)"
      />
    </svg>
  );
}

export function TargetIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#B91C1C" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" stroke="url(#targetGradient)" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="14" stroke="url(#targetGradient)" strokeWidth="2" fill="none" />
      <circle cx="24" cy="24" r="8" fill="url(#targetGradient)" />
      <circle cx="24" cy="24" r="3" fill="white" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" fill="url(#checkGradient)" />
      <path
        d="M16 24L21 29L32 18"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <path
        d="M24 4L29 17L44 20L34 30L36 44L24 38L12 44L14 30L4 20L19 17L24 4Z"
        fill="url(#starGradient)"
      />
    </svg>
  );
}

export function JapanIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="20" fill="#BC002D" />
      <circle cx="24" cy="24" r="8" fill="white" />
    </svg>
  );
}

export function GraduationIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <path
        d="M4 36V16L24 6L44 16V36"
        stroke="url(#gradGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M16 36H32" stroke="url(#gradGradient)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="26" r="6" fill="url(#gradGradient)" />
    </svg>
  );
}

export function BuildingIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <rect x="8" y="16" width="32" height="24" rx="2" fill="url(#buildingGradient)" />
      <rect x="12" y="20" width="8" height="8" fill="white" opacity="0.3" />
      <rect x="24" y="20" width="8" height="8" fill="white" opacity="0.3" />
      <rect x="12" y="32" width="8" height="4" fill="white" opacity="0.3" />
      <rect x="24" y="32" width="8" height="4" fill="white" opacity="0.3" />
      <rect x="20" y="6" width="8" height="10" fill="url(#buildingGradient)" />
    </svg>
  );
}

export function RocketIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <path
        d="M24 4L28 20H38L30 30L34 44L24 36L14 44L18 30L10 20H20L24 4Z"
        fill="url(#rocketGradient)"
      />
    </svg>
  );
}

export function ClockIcon({ className = "", size = 24 }: PremiumIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="clockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" stroke="url(#clockGradient)" strokeWidth="3" fill="none" />
      <path
        d="M24 14V24H32"
        stroke="url(#clockGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
