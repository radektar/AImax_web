"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function NavLink({ href, label, isOverHero }: { href: string; label: string; isOverHero: boolean }) {
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
          : isOverHero 
            ? 'text-white hover:text-white/80' 
            : 'text-aimax-dark hover:text-aimax-primary-600')
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // 80vh
      setIsOverHero(window.scrollY < heroHeight);
    };

    // Check initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOverHero 
        ? 'bg-transparent' 
        : 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-aimax-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AImax Home">
          <div className="relative h-8 w-32 md:h-9 md:w-36">
            <Image
              src={isOverHero ? "/Brands/1. AIMAX logo/AIMAX logo svg/AIMAX logo white.svg" : "/Brands/1. AIMAX logo/AIMAX logo svg/AIMAX logo black.svg"}
              alt="AImax logo"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 144px, 128px"
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink href="/why-aimax" label="Why AImax" isOverHero={isOverHero} />
          <NavLink href="/products" label="Products" isOverHero={isOverHero} />
          <NavLink href="/about" label="About us" isOverHero={isOverHero} />
          <NavLink href="/careers" label="Careers" isOverHero={isOverHero} />
          <NavLink href="/contact" label="Contact" isOverHero={isOverHero} />
        </nav>
      </div>
    </header>
  );
}


