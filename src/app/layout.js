import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Learnyst-TodoApp",
  description: "A todo list to keep track of all your todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
