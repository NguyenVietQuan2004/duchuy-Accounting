import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // ⬅️ đổi Kanit thành Montserrat
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BMBCAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* áp dụng font Montserrat */}
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
