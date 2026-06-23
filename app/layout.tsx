import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
      className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="antialiased flex flex-col">{children}  <script dangerouslySetInnerHTML={{ __html: "console.log('%c🚀 Like what you see? We are hiring engineers at Technova.', 'color: #3388ff; font-size: 14px; font-weight: bold; font-family: monospace;');" }} />
</body>
    </html>
  );
}
