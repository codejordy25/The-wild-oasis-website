import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import "@/app/_styles/globals.css";

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
      <body className="bg-primary-900 text-gray-50 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copy Right Wild Oasis</footer>
      </body>
    </html>
  );
}
