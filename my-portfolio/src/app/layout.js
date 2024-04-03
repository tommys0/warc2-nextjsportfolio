import "./globals.css";
import Logo from "@/app/components/logo";
import Link from "next/link";
export const metadata = {
  title: "Confidence",
  description: "Design studio based in Prague.",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className="font-main">
        <nav className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center w-10/12 mx-auto font-sans">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>        
          </div>
          <div className="flex space-x-4">
            <Link href="/confis/about">
              <p className="text-black font-light text-xl font-main cursor-pointer relative transition duration-150 hover:text-gray-400 hover:underline">
                ABOUT
              </p>
            </Link>
            <Link href="/confis/portfolio">
              <p className="text-black font-light text-xl font-main cursor-pointer relative transition duration-150 hover:text-gray-400 hover:underline">
                PORTFOLIO
              </p>
            </Link>
            <Link href="/confis/team">
              <p className="text-black font-light text-xl font-main cursor-pointer relative transition duration-150 hover:text-gray-400 hover:underline">
                TEAM
              </p>
            </Link>
            <Link href="/confis/services">
              <p className="text-black font-light text-xl font-main cursor-pointer relative transition duration-150 hover:text-gray-400 hover:underline">
                SERVICES
              </p>
            </Link>
            <Link href="/confis/contact">
              <p className="text-black font-light text-xl font-main cursor-pointer relative transition duration-150 hover:text-gray-400 hover:underline">
                CONTACT
              </p>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}