import Navigation from "@/app/_components/Navigation";
import Logo from "./_components/Logo";

export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
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
