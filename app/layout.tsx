import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Technova Digital Studio",
  description: "Built for growth. Engineered for scale. We build digital assets that create measurable value for your company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="antialiased flex flex-col">{children}{/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
  <script dangerouslySetInnerHTML={{ __html: "console.log('%c🚀 Like what you see? We are hiring engineers at Technova.', 'color: #3388ff; font-size: 14px; font-weight: bold; font-family: monospace;');" }} />
</body>
    </html>
  );
}
