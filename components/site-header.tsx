"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={
        `text-sm font-medium transition-colors px-2 py-1 rounded-md ` +
        (isActive
          ? 'text-white bg-aimax-primary-600'
          : 'text-aimax-dark hover:text-aimax-primary-600')
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-aimax-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AImax Home">
          <div className="relative h-8 w-32 md:h-9 md:w-36">
            <Image
              src="/Brands/1. AIMAX logo/AIMAX logo svg/AIMAX logo black.svg"
              alt="AImax logo"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 144px, 128px"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink href="/why-aimax" label="Why AImax" />
          <NavLink href="/products" label="Products" />
          <NavLink href="/about" label="About us" />
          <NavLink href="/contact" label="Contact" />
        </nav>
      </div>
    </header>
  );
}


