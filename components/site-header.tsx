"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function NavLink({ href, label, isOverHero }: { href: string; label: string; isOverHero?: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={
        `text-sm font-medium transition-colors px-2 py-1 rounded-md ` +
        (isActive
          ? 'text-white bg-green-500'
          : isOverHero 
            ? 'text-white hover:text-white/80' 
            : 'text-aimax-dark hover:text-green-500')
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isTestPage = pathname?.startsWith('/test-');

  useEffect(() => {
    const handleScroll = () => {
      // Show backdrop when scrolled down
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled && !isTestPage
        ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-aimax-gray-200 shadow-sm' 
        : isTestPage && !isScrolled
        ? 'bg-transparent'
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AImax Home">
          <div className="relative h-8 w-32 md:h-9 md:w-36">
            <Image
              src={isTestPage && !isScrolled ? "/Brands/1. AIMAX logo/AIMAX logo svg/AIMAX logo white.svg" : "/Brands/1. AIMAX logo/AIMAX logo svg/AIMAX logo black.svg"}
              alt="AImax logo"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 144px, 128px"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink href="/why-aimax" label="Why AImax" isOverHero={isTestPage && !isScrolled} />
          <NavLink href="/products" label="Products" isOverHero={isTestPage && !isScrolled} />
          <NavLink href="/about" label="About us" isOverHero={isTestPage && !isScrolled} />
          <NavLink href="/careers" label="Careers" isOverHero={isTestPage && !isScrolled} />
          <NavLink href="/contact" label="Contact" isOverHero={isTestPage && !isScrolled} />
        </nav>
      </div>
    </header>
  );
}


