import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PodOasis",
  description: "Mini-aplicación para escuchar podcasts musicales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
