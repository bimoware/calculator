import { Montserrat } from "next/font/google";
import "katex/dist/katex.min.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ma calculatrice",
  description: "Calculatrice programmable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}
