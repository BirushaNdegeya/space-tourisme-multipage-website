import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import './index.css';

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "space tourism multipage website",
  description: "challenge from frontend mentor coded by Birusha Ndegeya",
  icons: '/favicon-32x32.png'
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
