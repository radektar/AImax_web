import { AImaxLogo } from '@/components/ui/aimax-logo';
import { HealthcareIcons, AImaxFeatureIcon } from '@/components/ui/aimax-icons';
import HeroWave from '@/components/ui/dynamic-wave-canvas-background';
import { Feature108 } from '@/components/ui/feature108';
import { Feature73 } from '@/components/ui/feature73';
import { Heart, Users, Stethoscope, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Dynamic Wave Background */}
        <div className="absolute inset-0 z-0">
          <HeroWave />
          {/* Enhanced overlay for better text readability with green-blue waves */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center pt-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-8">
            
            {/* Left Side - Main Content */}
            <div className="space-y-8 hero-content">
              <h1 className="font-display hero-title font-bold text-white leading-tight">
                Helping with the first and the last mile of the patient!
              </h1>
            </div>

            {/* Right Side - AI Assistant Image */}
            <div className="flex items-center justify-center lg:justify-end">
              {/* AI Assistant Image - 420x420px */}
              <div className="relative rounded-3xl overflow-hidden w-[420px] h-[420px]">
                <Image 
                  src="/assistant_1_light.png" 
                  alt="AImax Healthcare Assistant"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
        
      </section>

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