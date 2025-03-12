import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata = {
  title: "D I G I F I L L",
  description:
    "¡Bienvenidos a DIGIFILL! La manera más fácil y rápida de generar tus constancias de habilidades.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <main className="dark:bg-primary-1/95 dark:text-primary-2/60">
          {children}
        </main>
      </body>
    </html>
  );
}
