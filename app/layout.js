import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dalio | Digital Agency",
  description: "Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-hero bg-no-repeat bg-contain bg-primary-bg">
        <Navbar />
        <main className=" overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
