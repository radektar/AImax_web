import { HeroTest } from '@/components/ui/hero-test';
import { ValueProposition } from '@/components/ui/value-proposition';
import { AudienceCards } from '@/components/ui/audience-cards';
import { ContactCta } from '@/components/ui/contact-cta';
import Image from 'next/image';

export default function TestHeroPage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition - Testing green-700 background */}
      <HeroTest backgroundColor="green-700" />

      {/* Section 2: Partners & Customers */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl lg:text-xl mb-4">
              Trusted by Healthcare Leaders
            </h2>
          </div>
          
          <div className="flex flex-row flex-nowrap gap-8 items-center justify-center overflow-x-auto py-2">
            {/* Partner logos - real assets */}
            <div className="h-16 min-w-[140px] flex items-center justify-center">
              <div className="relative h-12 w-32 md:h-14 md:w-36 lg:h-16 lg:w-40">
                <Image src="/Partners/kize.png" alt="KiZe Maulbronn" fill className="object-contain" sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 128px" />
              </div>
            </div>
            <div className="h-16 min-w-[140px] flex items-center justify-center">
              <div className="relative h-12 w-32 md:h-14 md:w-36 lg:h-16 lg:w-40">
                <Image src="/Partners/medi_verbund.png" alt="medi Verbund" fill className="object-contain" sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 128px" />
              </div>
            </div>
            <div className="h-16 min-w-[140px] flex items-center justify-center">
              <div className="relative h-12 w-32 md:h-14 md:w-36 lg:h-16 lg:w-40">
                <Image src="/Partners/time.png" alt="time" fill className="object-contain" sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 128px" />
              </div>
            </div>
            <div className="h-16 min-w-[140px] flex items-center justify-center">
              <div className="relative h-12 w-32 md:h-14 md:w-36 lg:h-16 lg:w-40">
                <Image src="/Partners/uni_tubingen.png" alt="Uni Tübingen" fill className="object-contain" sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 128px" />
              </div>
            </div>
            <div className="h-16 min-w-[140px] flex items-center justify-center">
              <div className="relative h-12 w-32 md:h-14 md:w-36 lg:h-16 lg:w-40">
                <Image src="/Partners/Kreisklinikien.png" alt="Kreisklinikien" fill className="object-contain" sizes="(min-width: 1024px) 160px, (min-width: 768px) 144px, 128px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Target Audiences & Use Cases */}
      <AudienceCards />

      {/* Section 4: Key Features & Benefits */}
      <ValueProposition />

      {/* Contact/CTA Section */}
      <ContactCta 
        title="Ready to Transform Healthcare?"
        description="I can only de-activate if you say that you are satisfied with my care."
        buttonText="Contact Us"
        buttonUrl="/contact"
        items={[
          "Join thousands of patients",
          "Medical personnel approved",
          "Doctor recommended",
          "Truly empathetic AI care",
          "Complete healthcare journey support"
        ]}
      />
    </main>
  );
}

