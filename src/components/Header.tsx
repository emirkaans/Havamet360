import React from "react";
import Link from "next/link";

export const Header = () => {
  const navLinks = [
    { href: "/workshop", label: "Workshop" },
    { href: "/symposium", label: "Symposium" },
    { href: "/program", label: "Program" },
    { href: "/register", label: "Register" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 text-black">
      <div className="flex items-center justify-between px-10">
        <Link href="/">
          <img
            src="/assets/navbar_logo.png"
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
  );
};
