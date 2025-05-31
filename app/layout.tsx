import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb | Holiday Rentals, Cabins, Beach Houses and more",
  description:
    "Discover and book unique homes, apartments, and experiences around the world with our Airbnb clone. Whether you're looking for a cozy stay, a luxury retreat, or local adventures, find the perfect place to create unforgettable memories—all in one easy-to-use platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
