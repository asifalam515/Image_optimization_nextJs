import Navbar from "@/src/components/shared/Navbar";
import "./globals.css";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Image Optimization ",
  description: "Next Js image ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
