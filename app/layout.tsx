import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import MainFooter from "@/components/layout/MainFooter";
import MainNavbar from "@/components/layout/MainNavbar";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hazel-ecommerce-website.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${opensans.variable}   antialiased`}
      >
        <Providers>
          <MainNavbar />
          <div> {children}</div>
          <MainFooter />
        </Providers>
      </body>
    </html>
  );
}