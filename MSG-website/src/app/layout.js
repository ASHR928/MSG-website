import "./globals.css";
import "./font.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import localFont from "next/font/local";

const croissantOne = localFont({
  name: "Croissant One",
  src: "../../public/assets/fonts/CroissantOne-Regular.ttf",
});

export const metadata = {
  title: "MSK",
  description: "Creative Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={croissantOne.className}>{children}</body>
    </html>
  );
}
