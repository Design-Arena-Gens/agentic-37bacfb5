import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Providers } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Guitar Guide | Learn Guitar Online",
  description:
    "Responsive guitar learning hub with video lessons, song chords, and text tutorials for beginners."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main className="page-content">{children}</main>
          <footer className="footer">
            <p>© {new Date().getFullYear()} Guitar Guide. Practice daily and stay inspired.</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
