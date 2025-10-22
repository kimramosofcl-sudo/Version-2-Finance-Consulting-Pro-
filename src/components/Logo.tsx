interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: "light" | "dark";
}

export function Logo({ className = "", showText = true, variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Background Circle */}
          <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
          
          {/* Abstract Finance Symbol - Rising bars/graph */}
          <path
            d="M12 24L12 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M17 20L17 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M22 16L22 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M27 12L27 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Connecting line suggesting growth */}
          <path
            d="M12 24L17 20L22 16L27 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.6"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient
              id="gradient"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`tracking-tight ${textColor}`}>
            FinanceConsult
          </span>
          <span className={`text-sm ${variant === "light" ? "text-blue-200" : "text-blue-600"}`}>
            Pro
          </span>
        </div>
      )}
    </div>
  );
}
