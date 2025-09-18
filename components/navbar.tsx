"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { BsGithub } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-20 px-4 backdrop-blur-md bg-background/70 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-b border-border">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          alt="logo"
          src="/images/logo.webp"
          width={170}
          height={100}
          priority
          className="w-36 md:w-40 cursor-pointer"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-1 md:gap-3 lg:gap-5">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant="ghost"
              className={`font-medium text-md transition ${
                pathname === link.href
                  ? "text-primary underline underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-3">
        <ModeToggle />
        <Link
          href="https://github.com/benlhachemi/modifio.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 rounded-full px-5"
          >
            <span>GitHub</span>
            <BsGithub className="text-xl" />
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <LuMenu className="text-2xl" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-6">
          <SheetHeader>
            <SheetTitle>
              <Image
                alt="logo"
                src="/images/logo.webp"
                width={120}
                height={80}
                className="mx-auto"
              />
            </SheetTitle>
            <SheetDescription className="space-y-4 mt-6">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant="link"
                      className={`w-full font-medium text-lg ${
                        pathname === link.href ? "text-primary" : ""
                      }`}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-6 border-t">
                <ModeToggle />
                <Link
                  href="https://github.com/benlhachemi/modifio.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full flex items-center gap-2 bg-green-500 hover:bg-green-600 rounded-full"
                  >
                    <span>GitHub Repo</span>
                    <BsGithub />
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
