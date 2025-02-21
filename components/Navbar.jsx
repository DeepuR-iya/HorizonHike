"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="siteLogo" height={29} width={74} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          type="button"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="/menu.svg"
        alt="menu"
        height={24}
        width={24}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="p-2">
              <Link
                href={link.href}
                className="regular-16 text-gray-900 text-l cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="p-4">
            <Button
              title="Login"
              type="button"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
