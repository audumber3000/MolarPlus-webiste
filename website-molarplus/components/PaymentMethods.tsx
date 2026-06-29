import { Landmark } from 'lucide-react';

/**
 * Accepted-payment trust strip for the footer. White tiles on the dark footer,
 * matching the card-network badges customers expect at checkout.
 */

function Tile({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="flex h-9 min-w-[52px] items-center justify-center rounded-md bg-white px-3 shadow-sm"
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}

export default function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/40">
        Secure payments accepted
      </span>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {/* Visa */}
        <Tile label="Visa">
          <span className="text-[15px] font-extrabold italic tracking-tight text-[#1A1F71]">VISA</span>
        </Tile>

        {/* Mastercard */}
        <Tile label="Mastercard">
          <svg viewBox="0 0 32 20" className="h-5 w-auto" aria-hidden>
            <circle cx="13" cy="10" r="8" fill="#EB001B" />
            <circle cx="19" cy="10" r="8" fill="#F79E1B" fillOpacity="0.85" />
          </svg>
        </Tile>

        {/* American Express */}
        <Tile label="American Express">
          <span className="rounded-sm bg-[#2E77BC] px-1.5 py-0.5 text-[10px] font-bold tracking-tight text-white">
            AMEX
          </span>
        </Tile>

        {/* RuPay */}
        <Tile label="RuPay">
          <span className="text-[14px] font-extrabold tracking-tight">
            <span className="text-[#1A4F8B]">Ru</span>
            <span className="text-[#F26522]">Pay</span>
          </span>
        </Tile>

        {/* UPI */}
        <Tile label="UPI">
          <span className="flex items-center gap-1 text-[14px] font-extrabold tracking-tight text-[#0C8A3C]">
            UPI
            <span className="flex flex-col gap-0.5" aria-hidden>
              <span className="block h-0.5 w-2 rounded-full bg-[#F26522]" />
              <span className="block h-0.5 w-2 rounded-full bg-[#0C8A3C]" />
            </span>
          </span>
        </Tile>

        {/* Net Banking */}
        <Tile label="Net Banking">
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-tight text-gray-700">
            <Landmark className="h-3.5 w-3.5 text-gray-600" />
            Net Banking
          </span>
        </Tile>
      </div>
    </div>
  );
}
