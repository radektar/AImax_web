import { AImaxLogo } from '@/components/ui/aimax-logo';
import { HealthcareIcons, AImaxFeatureIcon } from '@/components/ui/aimax-icons';
import { Hero } from '@/components/ui/hero';
import { Feature108 } from '@/components/ui/feature108';
import { Feature73 } from '@/components/ui/feature73';
import { Heart, Users, Stethoscope, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition */}
      <Hero />

      {/* Section 2: Partners & Customers */}
      <section id="about" className="py-12 bg-aimax-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-xl font-bold text-aimax-dark sm:text-4xl lg:text-2xl mb-4">
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
      <Feature73 />

      {/* Section 4: Key Features & Benefits */}
      <Feature108 />


      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-aimax-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">         
          <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl lg:text-5xl mb-8">
            Ready to Transform Healthcare?
          </h2>
          
          <p className="font-body text-xl text-aimax-gray-600 mb-8 mx-4 leading-relaxed">
            Join thousands of patients, medical personnel, and doctors who trust AImax 
            for their healthcare journey. Experience the difference of truly empathetic AI.
          </p>
          
          <div className="bg-white rounded-2xl p-8 border border-aimax-primary-200 mx-auto">
            <p className="font-body text-xl text-aimax-dark font-semibold italic leading-relaxed mb-3">
              "I can only de-activate if you say that you are satisfied with my care."
            </p>
            <p className="text-aimax-primary-500 text-base font-medium">— Your AImax Promise</p>
          </div>
        </div>
      </section>
    </main>
  );
}