import { Montserrat, Open_Sans } from "next/font/google";
import "../globals.css";
import "../i18n";
import { Providers } from "../providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://boatxshare-website.vercel.app"),
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
          <div> {children}</div>
        </Providers>
      </body>
    </html>
  );
}
