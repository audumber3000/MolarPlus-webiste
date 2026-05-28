'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'molarplus-cookie-consent';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setShow(true);
      requestAnimationFrame(() => setVisible(true));
    }
  }, []);

  const choose = (value: 'accepted' | 'rejected') => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
    setTimeout(() => setShow(false), 400);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-[70] sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl shadow-black/10">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#2a276e]/10">
            <Cookie className="h-5 w-5 text-[#2a276e]" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#1a1c4b]">We use cookies</p>
            <p className="mt-1 text-[13px] leading-relaxed text-gray-600">
              We use cookies to improve your experience and analyse site traffic. Read our{' '}
              <Link href="/cookies-policy" className="font-medium text-[#2a276e] underline">
                cookie policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="flex-1 rounded-lg border border-gray-200 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="flex-1 rounded-lg bg-[#2a276e] py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
