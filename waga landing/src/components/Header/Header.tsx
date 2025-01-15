"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa"; // React Icons
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full ${
        stickyMenu ? "bg-[#06221E] shadow-lg" : "bg-[#06221E]"
      }`}
    >
      <div
        className="relative mx-auto max-w-screen-xl flex items-center justify-between px-4 py-4 md:px-8"
        
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo/logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-6 w-6">
            <span
              className={`absolute left-0 top-0 h-1 w-full bg-[#D7FF00] transition-transform duration-300 ${
                navigationOpen ? "rotate-45 translate-y-2" : "rotate-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-2 h-1 w-full bg-[#D7FF00] transition-opacity duration-300 ${
                navigationOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-4 h-1 w-full bg-[#D7FF00] transition-transform duration-300 ${
                navigationOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
              }`}
            ></span>
          </span>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            navigationOpen
              ? "block bg-[#06221E] text-center p-4 xl:flex"
              : "hidden xl:flex"
          }`}
        >
          <ul className="flex flex-col gap-6 xl:flex-row xl:items-center">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.path || "#"}
                  className={`${
                    pathUrl === menuItem.path
                      ? "text-[#D7FF00] font-bold"
                      : "text-white hover:text-[#D7FF00]"
                  } transition-all duration-200`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons and Button */}
        <div className="hidden xl:flex items-center space-x-6">
          {/* Icons */}
          <Link href="https://t.me" target="_blank">
            <FaTelegramPlane className="w-6 h-6 text-[#D7FF00] hover:brightness-110" />
          </Link>
          <Link href="https://discord.com" target="_blank">
            <FaDiscord className="w-6 h-6 text-[#D7FF00] hover:brightness-110" />
          </Link>
          <Link href="https://x.com" target="_blank">
            <FaTwitter className="w-6 h-6 text-[#D7FF00] hover:brightness-110" />
          </Link>

          {/* Connect Wallet Button */}
          <button className="bg-[#D7FF00] text-[#06221E] font-medium py-2 px-4 rounded-lg hover:brightness-110 transition-all">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
