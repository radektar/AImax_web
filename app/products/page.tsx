import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Products | AImax',
  description: 'Explore AImax capabilities designed for healthcare audiences.'
};

export default function ProductsPage() {
  const productLogos: Record<string, string> = {
    aiprime: '/Brands/7. AIprime logo/AIprime logo colour.png',
    aiadmin: '/Brands/5. AIadmin logo/AIadmin logo colour.png',
    aisenior: '/Brands/2. AIsenior logo/AIsenior logo colour.png',
    aikids: '/Brands/4. AIkids logo/AIkids logo colour.png',
    ailife: '/Brands/6. AIlife logo/AIlife logo colour.png',
    aipet: '/Brands/3. AIpet logo/AIpet logo colour.png'
  };
  const products = [
    { key: 'aiprime', name: 'AIprime', accent: 'text-product-aiprime-fg', badgeBg: 'bg-product-aiprime-bg', description: 'Core conversational healthcare AI by AImax. General triage and guidance.' },
    { key: 'aiadmin', name: 'AIadmin', accent: 'text-product-aiadmin-fg', badgeBg: 'bg-product-aiadmin-bg', description: 'Administrative assistant for scheduling, documentation, and workflow.' },
    { key: 'aisenior', name: 'AIsenior', accent: 'text-product-aisenior-fg', badgeBg: 'bg-product-aisenior-bg', description: 'Tailored support for seniors: medication, reminders, caregiver coordination.' },
    { key: 'aikids', name: 'AIkids', accent: 'text-product-aikids-fg', badgeBg: 'bg-product-aikids-bg', description: 'Kid-friendly guidance for parents and pediatric contexts.' },
    { key: 'ailife', name: 'AIlife', accent: 'text-product-ailife-fg', badgeBg: 'bg-product-ailife-bg', description: 'Lifestyle and wellness companion focused on prevention.' },
    { key: 'aipet', name: 'AIpet', accent: 'text-product-aipet-fg', badgeBg: 'bg-product-aipet-bg', description: 'Veterinary-focused assistant for pet health inquiries.' }
  ];
  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">Products</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed mb-10">
            Explore AImax capabilities designed for patients, medical personnel, and doctors.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {products.map((p) => (
              <article key={p.key} className="rounded-2xl border border-aimax-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                  {/* Left: Subbrand logo/name */}
                  <div className="flex items-center gap-4 p-6 border-b md:border-b-0 md:border-r border-aimax-gray-200">
                    <div className="relative h-10 w-40 md:h-12 md:w-48">
                      <Image
                        src={productLogos[p.key]}
                        alt={`${p.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(min-width: 768px) 192px, 160px"
                        priority={false}
                      />
                    </div>
                    {/* Name removed as logo already includes brand name */}
                  </div>

                  {/* Right: Description */}
                  <div className="p-6">
                    <p className="font-body text-aimax-gray-700 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


