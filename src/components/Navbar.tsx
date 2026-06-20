"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#pricing", label: "Pricing" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toolsLinkClass =
    "group inline-flex items-center gap-1.5 rounded-full border border-coral/50 bg-coral/10 px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.12em] text-coral transition-all hover:border-coral hover:bg-coral/20 hover:shadow-lg hover:shadow-coral/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] transition-all duration-500 ${
        scrolled ? "glass-strong py-0" : "bg-transparent py-0 sm:py-2"
      }`}
      style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="shrink-0 font-display text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl">
          SK<span className="italic text-coral">Fitness</span>
        </Link>

        <ul className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-coral after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#tools" className={toolsLinkClass}>
              <Sparkles className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
              Free Fit Tools
            </Link>
          </li>
        </ul>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="#book"
            className="btn-primary rounded-full px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] xl:px-7"
          >
            Book Call
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="#book"
            className="btn-primary rounded-full px-3.5 py-2 font-sans text-[10px] font-bold uppercase tracking-wider"
          >
            Book
          </Link>
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
      >
        <ul
          className="flex h-full flex-col items-center justify-center gap-5 px-6 pb-24"
          style={{ paddingBottom: "max(6rem, calc(5rem + env(safe-area-inset-bottom)))" }}
        >
          <li className="w-full max-w-xs">
            <Link
              href="#tools"
              className={`${toolsLinkClass} w-full justify-center py-4 text-sm`}
              onClick={() => setOpen(false)}
            >
              <Sparkles className="h-4 w-4" />
              Free Fit Tools
              <span className="ml-1 rounded-full bg-coral/20 px-2 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-coral-soft">
                BMI · Macros · More
              </span>
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-1 font-display text-2xl font-semibold text-muted transition-colors hover:text-coral"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 w-full max-w-xs">
            <Link
              href="#book"
              className="btn-primary block w-full rounded-full px-10 py-4 text-center font-sans text-sm font-semibold uppercase tracking-wider"
              onClick={() => setOpen(false)}
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
