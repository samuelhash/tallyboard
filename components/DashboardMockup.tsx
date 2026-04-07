// Purely decorative server component — no interactivity, no 'use client' needed.
// All values are hardcoded to simulate a real app screenshot.

// ─── Chart math ──────────────────────────────────────────────────────────────

const MONTHS = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'] as const;
const VALUES = [4200, 5100, 6800, 8200, 10500, 12847] as const;

// SVG viewport — extra top padding so the tooltip has room above the last point
const VB_W = 440;
const VB_H = 130;
const PX = 8;       // horizontal padding
const PY_TOP = 28;  // top padding (space for tooltip)
const PY_BTM = 10;  // bottom padding
const MIN = 3000;
const MAX = 14000;
const CHART_H = VB_H - PY_TOP - PY_BTM; // 92
const CHART_BTM = VB_H - PY_BTM;        // 120 — y-level for the fill polygon bottom

/** Map a data value to an SVG [x, y] coordinate. */
function pt(i: number, val: number): [number, number] {
  const x = PX + (i / (VALUES.length - 1)) * (VB_W - PX * 2);
  const y = PY_TOP + (1 - (val - MIN) / (MAX - MIN)) * CHART_H;
  return [x, y];
}

// Pre-compute all chart points once at module level (pure math, safe on server)
const PTS = (VALUES as readonly number[]).map((v, i) => pt(i, v)) as [number, number][];

/**
 * Smooth cubic-bezier path. For each consecutive pair of points,
 * the two control handles sit at the horizontal midpoint — one
 * inheriting the source y, the other the target y. This produces
 * natural, monotone-looking S-curves with no overshoot.
 */
const LINE_PATH = PTS.reduce((d, [x, y], i) => {
  if (i === 0) return `M ${x},${y}`;
  const [px, py] = PTS[i - 1];
  const mx = (px + x) / 2;
  return `${d} C ${mx},${py} ${mx},${y} ${x},${y}`;
}, '');

const [LAST_X, LAST_Y] = PTS[PTS.length - 1];
const FILL_PATH = `${LINE_PATH} L ${LAST_X},${CHART_BTM} L ${PTS[0][0]},${CHART_BTM} Z`;

// Tooltip over the last data point — clamped so it stays within the viewbox
const TT_W = 64;
const TT_H = 20;
const TT_X = Math.min(LAST_X - TT_W / 2, VB_W - TT_W - PX);
const TT_Y = Math.max(4, LAST_Y - TT_H - 9);

// ─── Platform pills data ─────────────────────────────────────────────────────

const PLATFORMS = [
  {
    name: 'YouTube',
    amount: '$6,200',
    color: '#FF5252',
    bg: 'rgba(255,82,82,0.1)',
    border: 'rgba(255,82,82,0.22)',
  },
  {
    name: 'Twitch',
    amount: '$2,100',
    color: '#9146FF',
    bg: 'rgba(145,70,255,0.1)',
    border: 'rgba(145,70,255,0.22)',
  },
  {
    name: 'Sponsors',
    amount: '$3,400',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.1)',
    border: 'rgba(52,211,153,0.22)',
  },
  {
    name: 'Merch',
    amount: '$1,147',
    color: '#FBBF24',
    bg: 'rgba(251,191,36,0.1)',
    border: 'rgba(251,191,36,0.22)',
  },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[600px] mx-auto select-none"
    >
      {/* ── Ambient glow behind the card ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: '-15%',
          background:
            'radial-gradient(ellipse 65% 50% at 58% 55%, rgba(52,211,153,0.13), transparent 70%)',
          filter: 'blur(28px)',
        }}
      />

      {/* ── The card ── */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #15151c 0%, #0f0f14 100%)',
          border: '1px solid rgba(255,255,255,0.09)',
          // Top-edge inset highlight simulates the lit surface of a tilted panel
          boxShadow: [
            '0 1px 0 rgba(255,255,255,0.08) inset',
            '0 -1px 0 rgba(0,0,0,0.4) inset',
            '22px 32px 70px rgba(0,0,0,0.65)',
            '6px 10px 24px rgba(0,0,0,0.45)',
            '0 0 0 0.5px rgba(255,255,255,0.04)',
          ].join(', '),
          // Perspective tilt — card leans back-top and turns left to face center
          transform:
            'perspective(1000px) rotateX(7deg) rotateY(-14deg) rotateZ(2deg)',
          transformOrigin: '55% 48%',
          willChange: 'transform',
        }}
      >
        {/* Top-edge specular highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(90deg, transparent 8%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0.12) 65%, transparent 92%)',
          }}
        />

        {/* ── Window chrome ── */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.016)',
          }}
        >
          <div className="flex items-center gap-3">
            {/* macOS-style traffic lights */}
            <div className="flex items-center gap-[5px]">
              <div
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: '#FF5F57', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3) inset' }}
              />
              <div
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: '#FEBC2E', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3) inset' }}
              />
              <div
                className="w-[11px] h-[11px] rounded-full"
                style={{ background: '#28C840', boxShadow: '0 0 0 0.5px rgba(0,0,0,0.3) inset' }}
              />
            </div>
            <span className="text-white/30 text-[11px] font-medium tracking-tight">
              TallyBoard &mdash; Overview
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Live indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.18)' }}>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#34D399', boxShadow: '0 0 4px rgba(52,211,153,0.8)' }}
              />
              <span className="text-[#34D399] text-[9px] font-semibold tracking-wide">LIVE</span>
            </div>
            {/* Avatar */}
            <div
              className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(52,211,153,0.12)',
                border: '1px solid rgba(52,211,153,0.25)',
              }}
            >
              <span className="text-[#34D399] text-[8px] font-bold leading-none">JD</span>
            </div>
          </div>
        </div>

        {/* ── Dashboard body ── */}
        <div className="px-5 pt-5 pb-5 flex flex-col gap-4">

          {/* ── Revenue header row ── */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: 'rgba(255,255,255,0.32)' }}
              >
                Total Revenue
              </p>
              <p
                className="font-bold leading-none font-num"
                style={{
                  fontSize: '30px',
                  letterSpacing: '-0.025em',
                  color: '#ffffff',
                  textShadow: '0 0 30px rgba(255,255,255,0.08)',
                }}
              >
                $12,847.32
              </p>
            </div>

            {/* +18% badge */}
            <div
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 flex-shrink-0 mt-0.5"
              style={{
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
              }}
            >
              {/* Green up arrow */}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 8L5 2L8.5 8"
                  stroke="#34D399"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="font-bold font-num"
                style={{ color: '#34D399', fontSize: '12px' }}
              >
                +18%
              </span>
              <span
                className="text-[10px]"
                style={{ color: 'rgba(255,255,255,0.32)' }}
              >
                vs last month
              </span>
            </div>
          </div>

          {/* ── Line chart ── */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.055)',
            }}
          >
            <div className="px-4 pt-3.5 pb-2.5">
              <div className="flex items-center justify-between mb-1">
                <p
                  className="text-[9px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  6-Month Revenue
                </p>
                <p
                  className="text-[9px] font-num"
                  style={{ color: 'rgba(52,211,153,0.5)' }}
                >
                  ↑ trending up
                </p>
              </div>

              <svg
                viewBox={`0 0 ${VB_W} ${VB_H}`}
                className="w-full"
                style={{ height: '96px', display: 'block', overflow: 'visible' }}
                aria-hidden="true"
              >
                <defs>
                  {/* Fill area gradient — green to transparent going downward */}
                  <linearGradient id="tbFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.28" />
                    <stop offset="75%" stopColor="#34D399" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
                  </linearGradient>

                  {/* Line stroke — fades from dim on the left to full-bright on the right */}
                  <linearGradient id="tbStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
                    <stop offset="55%" stopColor="#34D399" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                  </linearGradient>

                  {/* Soft glow filter for the line */}
                  <filter id="tbGlow" x="-10%" y="-40%" width="120%" height="180%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Clip path so the fill area doesn't overflow below the chart bottom */}
                  <clipPath id="chartClip">
                    <rect x="0" y="0" width={VB_W} height={VB_H} />
                  </clipPath>
                </defs>

                {/* Subtle dashed horizontal grid lines */}
                {([0.3, 0.6, 0.9] as const).map((v) => {
                  const y = PY_TOP + (1 - v) * CHART_H;
                  return (
                    <line
                      key={v}
                      x1={PX}
                      y1={y}
                      x2={VB_W - PX}
                      y2={y}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                      strokeDasharray="3 7"
                    />
                  );
                })}

                {/* Vertical guide line dropping from the last point */}
                <line
                  x1={LAST_X}
                  y1={LAST_Y}
                  x2={LAST_X}
                  y2={CHART_BTM}
                  stroke="rgba(52,211,153,0.2)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />

                {/* Fill area under the line (clipped) */}
                <path
                  d={FILL_PATH}
                  fill="url(#tbFill)"
                  clipPath="url(#chartClip)"
                />

                {/* Line glow — blurred duplicate for bloom effect */}
                <path
                  d={LINE_PATH}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="4"
                  strokeOpacity="0.15"
                  strokeLinecap="round"
                  filter="url(#tbGlow)"
                />

                {/* Primary line */}
                <path
                  d={LINE_PATH}
                  fill="none"
                  stroke="url(#tbStroke)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data point dots */}
                {PTS.map(([x, y], i) => {
                  const isLast = i === PTS.length - 1;
                  return (
                    <g key={i}>
                      {/* Outer pulse ring on the final (current) point */}
                      {isLast && (
                        <circle
                          cx={x}
                          cy={y}
                          r={9}
                          fill="#34D399"
                          fillOpacity={0.1}
                        />
                      )}
                      <circle
                        cx={x}
                        cy={y}
                        r={isLast ? 3.5 : 2}
                        fill={isLast ? '#34D399' : 'rgba(52,211,153,0.45)'}
                        stroke={isLast ? '#0f0f14' : 'none'}
                        strokeWidth={isLast ? 1.5 : 0}
                      />
                    </g>
                  );
                })}

                {/* Tooltip anchored above the last data point */}
                <g>
                  {/* Shadow for tooltip */}
                  <rect
                    x={TT_X + 1}
                    y={TT_Y + 2}
                    width={TT_W}
                    height={TT_H}
                    rx={5}
                    fill="rgba(0,0,0,0.35)"
                    filter="url(#tbGlow)"
                  />
                  {/* Tooltip background */}
                  <rect
                    x={TT_X}
                    y={TT_Y}
                    width={TT_W}
                    height={TT_H}
                    rx={5}
                    fill="rgba(52,211,153,0.13)"
                    stroke="rgba(52,211,153,0.38)"
                    strokeWidth={0.75}
                  />
                  {/* Tooltip text */}
                  <text
                    x={TT_X + TT_W / 2}
                    y={TT_Y + 13.5}
                    textAnchor="middle"
                    fill="#34D399"
                    fontSize={10}
                    fontWeight={700}
                    fontFamily="ui-monospace, 'SF Mono', Menlo, monospace"
                  >
                    $12,847
                  </text>
                </g>
              </svg>

              {/* Month axis labels */}
              <div
                className="flex justify-between mt-1"
                style={{ paddingLeft: `${PX}px`, paddingRight: `${PX}px` }}
              >
                {MONTHS.map((m) => (
                  <span
                    key={m}
                    className="font-num"
                    style={{ fontSize: '9px', color: 'rgba(255,255,255,0.22)' }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Platform pills — 2 × 2 grid ── */}
          <div className="grid grid-cols-2 gap-2">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5"
                style={{
                  background: p.bg,
                  border: `1px solid ${p.border}`,
                }}
              >
                {/* Colored platform dot with a soft glow */}
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: p.color,
                    boxShadow: `0 0 6px ${p.color}99`,
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p
                    className="font-medium truncate"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.06em',
                      color: 'rgba(255,255,255,0.38)',
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="font-bold leading-tight font-num"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.88)' }}
                  >
                    {p.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Expense summary bar ── */}
          <div
            className="flex items-center justify-around rounded-xl px-4 py-3"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.055)',
            }}
          >
            {/* Expenses */}
            <div className="flex items-center gap-2">
              <div
                className="w-[6px] h-[6px] rounded-full"
                style={{ background: '#F87171', boxShadow: '0 0 5px rgba(248,113,113,0.6)' }}
              />
              <span
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.33)', letterSpacing: '0.04em' }}
              >
                Expenses
              </span>
              <span
                className="font-semibold font-num"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.62)' }}
              >
                $2,340
              </span>
            </div>

            {/* Divider */}
            <div
              className="w-px h-5"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            />

            {/* Net Profit */}
            <div className="flex items-center gap-2">
              <div
                className="w-[6px] h-[6px] rounded-full"
                style={{ background: '#34D399', boxShadow: '0 0 5px rgba(52,211,153,0.6)' }}
              />
              <span
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.33)', letterSpacing: '0.04em' }}
              >
                Net Profit
              </span>
              <span
                className="font-bold font-num"
                style={{ fontSize: '13px', color: '#34D399' }}
              >
                $10,507
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
