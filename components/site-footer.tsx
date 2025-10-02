import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-aimax-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-aimax-gray-600">© {new Date().getFullYear()} AImax. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/privacy" className="text-aimax-gray-600 hover:text-aimax-primary-600">Privacy</Link>
          <Link href="/terms" className="text-aimax-gray-600 hover:text-aimax-primary-600">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}


