import { InterFont } from "@/src/ui/font";
import "./globals.css";

export const metadata = {
  title: "DC3 Seguro",
  description:
    "¡Bienvenidos a DC-3 Seguro! La manera más fácil y rápida de generar tus constancias de habilidades (DC-3).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${InterFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
