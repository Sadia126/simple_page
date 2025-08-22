import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Next15 Products",
  description: "Demo app with NextAuth and products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
