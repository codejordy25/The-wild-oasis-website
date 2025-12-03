import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    default: "Welcome|The Wild Oasis",
    template: "%s | The Wild Oasis",
  },

  //descrip par defaut de toutes les pages, mains nous pouvonns exporter une autre description dans chaque page
  description:
    "Luxurious cabin hotel, located in the heart of the Itailan Dolomites, surroun by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased bg-primary-900 text-gray-50 min-h-screen relative flex flex-col `}
      >
        <Header />
        {/* grid, pour mettre au centre et occuper tout l'espace, w-full ramner a coté */}
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
