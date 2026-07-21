export default function Avatar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 360"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cartoon avatar of Mihir, wearing a headset with a stylus in hand"
    >
      <defs>
        <radialGradient id="bgGlow" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#2A2D3A" />
          <stop offset="100%" stopColor="#121319" />
        </radialGradient>
        <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2B98C" />
          <stop offset="100%" stopColor="#E29E6C" />
        </linearGradient>
        <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B2A22" />
          <stop offset="100%" stopColor="#241812" />
        </linearGradient>
        <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B93FF" />
          <stop offset="100%" stopColor="#4A6FE0" />
        </linearGradient>
        <linearGradient id="hoodieShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E57B0" />
          <stop offset="100%" stopColor="#324690" />
        </linearGradient>
      </defs>

      {/* backdrop artboard */}
      <rect width="360" height="360" rx="28" fill="url(#bgGlow)" />
      <rect x="0.5" y="0.5" width="359" height="359" rx="27.5" fill="none" stroke="#33364470" />

      {/* floating measurement ticks, design-tool flavor */}
      <g stroke="#33364470" strokeWidth="1">
        <line x1="24" y1="0" x2="24" y2="16" />
        <line x1="336" y1="0" x2="336" y2="16" />
        <line x1="0" y1="24" x2="16" y2="24" />
        <line x1="0" y1="336" x2="16" y2="336" />
      </g>

      {/* shoulders / hoodie */}
      <path d="M78 330 C78 250 118 216 180 216 C242 216 282 250 282 330 Z" fill="url(#hoodie)" />
      <path d="M78 330 C78 270 100 236 132 222 C110 246 104 288 108 330 Z" fill="url(#hoodieShadow)" opacity="0.6" />
      <path d="M282 330 C282 270 260 236 228 222 C250 246 256 288 252 330 Z" fill="url(#hoodieShadow)" opacity="0.6" />
      {/* hoodie strings */}
      <circle cx="166" cy="248" r="4" fill="#EDEEF3" opacity="0.85" />
      <circle cx="194" cy="248" r="4" fill="#EDEEF3" opacity="0.85" />
      <path d="M166 248 C164 262 160 272 156 282" stroke="#EDEEF3" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M194 248 C196 262 200 272 204 282" stroke="#EDEEF3" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />

      {/* neck */}
      <rect x="160" y="196" width="40" height="34" rx="12" fill="url(#skin)" />

      {/* head */}
      <ellipse cx="180" cy="150" rx="66" ry="72" fill="url(#skin)" />

      {/* ears */}
      <ellipse cx="114" cy="152" rx="9" ry="14" fill="#E29E6C" />
      <ellipse cx="246" cy="152" rx="9" ry="14" fill="#E29E6C" />

      {/* hair */}
      <path d="M114 128 C110 78 146 46 180 46 C216 46 250 78 246 128 C246 108 232 98 216 96 C220 84 206 74 190 78 C182 66 164 66 156 78 C138 78 128 92 130 108 C118 108 112 118 114 128 Z" fill="url(#hair)" />
      {/* short fade sides */}
      <path d="M112 132 C108 150 110 168 118 180 C112 164 112 146 118 132 Z" fill="url(#hair)" />
      <path d="M248 132 C252 150 250 168 242 180 C248 164 248 146 242 132 Z" fill="url(#hair)" />

      {/* eyebrows */}
      <path d="M148 140 C156 134 168 134 176 138" stroke="#241812" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M184 138 C192 134 204 134 212 140" stroke="#241812" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* glasses — nods to detail-oriented design eye */}
      <g stroke="#22242F" strokeWidth="3.5" fill="#EDEEF322">
        <rect x="140" y="146" width="38" height="28" rx="9" />
        <rect x="182" y="146" width="38" height="28" rx="9" />
        <line x1="178" y1="158" x2="182" y2="158" />
        <line x1="132" y1="152" x2="140" y2="150" />
        <line x1="220" y1="150" x2="228" y2="152" />
      </g>
      <circle cx="159" cy="160" r="4" fill="#241812" />
      <circle cx="201" cy="160" r="4" fill="#241812" />

      {/* nose */}
      <path d="M178 168 C176 178 174 184 180 188" stroke="#C98554" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* smile */}
      <path d="M162 198 C170 206 190 206 198 198" stroke="#7A3B2A" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* headset — a nod to focus / craft */}
      <path d="M108 140 C104 96 138 62 180 62 C222 62 256 96 252 140" stroke="#22242F" strokeWidth="7" fill="none" strokeLinecap="round" />
      <rect x="98" y="132" width="18" height="30" rx="8" fill="#22242F" />
      <rect x="244" y="132" width="18" height="30" rx="8" fill="#FF8A4C" />

      {/* stylus in hand, lower right — the "designer's tool" signature */}
      <g transform="translate(246 292) rotate(-28)">
        <rect x="0" y="0" width="72" height="10" rx="5" fill="#EDEEF3" />
        <rect x="0" y="0" width="14" height="10" rx="5" fill="#C8FF4D" />
      </g>
      <ellipse cx="252" cy="308" rx="16" ry="13" fill="url(#skin)" />
    </svg>
  )
}
