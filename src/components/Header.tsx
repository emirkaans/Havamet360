"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/workshop", label: "Workshop" },
    { href: "/symposium", label: "Symposium" },
    { href: "/program", label: "Program" },
    { href: "/contact", label: "Contact" },
    { href: "/register", label: "Register" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 850) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (pathname === "/") {
      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  return (
    <div
      className={`sticky top-0 left-0 z-50 h-20 text-white transition-colors duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <header>
        <div className="flex items-center justify-between px-10">
          <Link href="/">
            <img
              src="/assets/images/itu-logo-white.png"
              className="mx-4 my-2 h-14 lg:h-16"
              alt="Logo"
            />
          </Link>

          <div className="flex mx-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="m-4">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};
