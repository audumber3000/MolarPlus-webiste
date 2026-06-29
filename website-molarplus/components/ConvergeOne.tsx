import type { ReactNode } from 'react';
import { Caveat } from 'next/font/google';
import { Smartphone, Monitor } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { colors } from '@/lib/seo';

const caveat = Caveat({ subsets: ['latin'], weight: ['500', '700'] });

const HUB = { x: 500, y: 96 };
const VB_W = 1000;
const VB_H = 620;

// Official Google "G" mark, for the reviews node.
function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

type Node = {
  x: number;
  y: number;
  rotate: string;
  label: string;
  img?: string;
  logo?: ReactNode;
};

const nodes: Node[] = [
  // top arc
  { x: 110, y: 320, rotate: '-3deg', label: 'Drawer of files', img: '/converge/drawer.png' },
  { x: 300, y: 280, rotate: '2deg', label: 'Paper register', img: '/converge/register.png' },
  {
    x: 500,
    y: 262,
    rotate: '-2deg',
    label: 'WhatsApp',
    logo: <WhatsAppIcon className="h-9 w-9 text-[#25D366]" />,
  },
  { x: 700, y: 280, rotate: '3deg', label: 'Invoices', img: '/converge/invoice.png' },
  { x: 890, y: 320, rotate: '-2deg', label: 'Inventory', img: '/converge/inventory.png' },
  // bottom arc
  { x: 95, y: 500, rotate: '2deg', label: 'Staff attendance', img: '/converge/attendance.png' },
  { x: 270, y: 540, rotate: '-3deg', label: 'Consent forms', img: '/converge/consent.png' },
  { x: 445, y: 555, rotate: '2deg', label: 'Prescriptions', img: '/converge/prescription.png' },
  { x: 610, y: 552, rotate: '-2deg', label: 'X-rays', img: '/converge/xray.png' },
  { x: 780, y: 538, rotate: '3deg', label: 'Lab orders', img: '/converge/lab.png' },
  {
    x: 905,
    y: 500,
    rotate: '-2deg',
    label: 'Google reviews',
    logo: <GoogleG className="h-9 w-9" />,
  },
];

function Polaroid({ node }: { node: Node }) {
  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg"
      style={{ transform: `rotate(${node.rotate})` }}
    >
      <div className="flex h-[72px] w-[96px] items-center justify-center overflow-hidden rounded bg-slate-50">
        {node.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={node.img} alt={node.label} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          node.logo
        )}
      </div>
      <div
        className={`${caveat.className} mt-1 text-center text-[17px] leading-tight text-[#2b2b2b]`}
      >
        {node.label}
      </div>
    </div>
  );
}

function Hub() {
  return (
    <div className="inline-flex flex-col items-center rounded-2xl border border-[#2a276e]/15 bg-white px-6 py-4 shadow-xl shadow-[#2a276e]/10">
      <div className="text-lg font-extrabold tracking-tight text-[#1a1c4b]">MolarPlus</div>
      <div className="mt-2 flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
        >
          <Smartphone className="h-3.5 w-3.5" /> Mobile
        </span>
        <span
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: `${colors.primary}10`, color: colors.primary }}
        >
          <Monitor className="h-3.5 w-3.5" /> Web
        </span>
      </div>
    </div>
  );
}

export default function ConvergeOne() {
  return (
    <section className="py-28 bg-[#fdfdfb] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
            One place for everything
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
            Every scattered system. One place.
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Files in a drawer, the paper register, WhatsApp chats, invoices, inventory, attendance,
            consent forms, prescriptions, X-rays, lab orders, even chasing Google reviews — MolarPlus
            pulls every one of them together, on your phone and your computer.
          </p>
        </div>

        {/* ── Desktop: scattered cloud converging to the hub ── */}
        <div className="relative hidden md:block">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {nodes.map((n) => (
              <path
                key={`l${n.x}-${n.y}`}
                d={`M ${n.x} ${n.y} Q ${(n.x + HUB.x) / 2} ${(n.y + HUB.y) / 2 - 40} ${HUB.x} ${HUB.y + 26}`}
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
            ))}
            {nodes.map((n) => (
              <circle key={`d${n.x}-${n.y}`} cx={n.x} cy={n.y} r="3.5" fill="#cbd5e1" />
            ))}
            <circle cx={HUB.x} cy={HUB.y + 26} r="5" fill={colors.primary} />
          </svg>

          {/* Hub overlay */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${(HUB.y / VB_H) * 100}%` }}
          >
            <Hub />
          </div>

          {/* Node overlays */}
          {nodes.map((n) => (
            <div
              key={`o${n.x}-${n.y}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(n.x / VB_W) * 100}%`, top: `${(n.y / VB_H) * 100}%` }}
            >
              <Polaroid node={n} />
            </div>
          ))}
        </div>

        {/* ── Mobile: hub + grid of polaroids ── */}
        <div className="md:hidden">
          <div className="flex justify-center">
            <Hub />
          </div>
          <div className={`${caveat.className} my-5 text-center text-xl text-[#2b2b2b]`}>
            ↑ all of it, in one place
          </div>
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            {nodes.map((n) => (
              <Polaroid key={`m${n.x}-${n.y}`} node={n} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
