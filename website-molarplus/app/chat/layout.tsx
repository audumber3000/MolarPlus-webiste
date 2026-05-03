import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Support | MolarPlus",
  description: "Redirecting you to MolarPlus support on WhatsApp.",
  robots: { index: false, follow: false },
};

export default function ChatLayout({ children }: { children: React.ReactNode }) {
  return children;
}
