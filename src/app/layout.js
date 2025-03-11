import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

export const metadata = {
  title: "DC3 Seguro",
  description:
    "¡Bienvenidos a DC-3 Seguro! La manera más fácil y rápida de generar tus constancias de habilidades (DC-3).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="dark:bg-[#1a222c] dark:text-[#aeb7c0]">
          {children}
        </main>
      </body>
    </html>
  );
}
