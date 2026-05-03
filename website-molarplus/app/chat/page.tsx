"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919594078777";
const PREFILLED_MESSAGE =
  "Hi Team, I need help with your product MolarPlus Dental software";
const REDIRECT_DELAY_SECONDS = 3;

export default function ChatRedirectPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_DELAY_SECONDS);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, REDIRECT_DELAY_SECONDS * 1000);

    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, [whatsappUrl]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2a276e] via-[#4a4694] to-[#1a1548] px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-[#25D366]" />
        </div>

        <h1 className="text-2xl font-bold text-[#2a276e] mb-2">
          Connecting you to MolarPlus Support
        </h1>
        <p className="text-gray-600 mb-8">
          You&apos;ll be redirected to WhatsApp in{" "}
          <span className="font-semibold text-[#2a276e]">{secondsLeft}</span>{" "}
          second{secondsLeft === 1 ? "" : "s"}…
        </p>

        <a
          href={whatsappUrl}
          className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl px-6 py-4 transition-colors shadow-md"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Connect with Support
        </a>

        <p className="text-sm text-gray-500 mt-6">
          If you&apos;re not redirected automatically, please click the button
          above.
        </p>
      </div>
    </main>
  );
}
