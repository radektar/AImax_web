import { Button } from '@/components/ui/button';
import { AImaxLogo } from '@/components/ui/aimax-logo';
import { HealthcareIcons, AImaxFeatureIcon } from '@/components/ui/aimax-icons';
import { Heart, Users, Stethoscope, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition */}
      <section className="h-[70vh] bg-gradient-to-br from-aimax-primary-500 to-aimax-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Side - Main Content */}
            <div className="space-y-8">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Helping with the first and the last mile of the patient!
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 w-full max-w-none">
              AImax: your reliable, user-friendly, and empathetic assistant.
            </p>
            </div>

            {/* Right Side - AImax Signet */}
            <div className="flex items-center justify-center">
              <svg width="320" height="320" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.5498 13.5498H28.4502V8.45016C28.4502 4.34309 25.1071 1 21 1C16.8929 1 13.5498 4.34309 13.5498 8.45016V13.5498H8.45016C4.34309 13.5498 1 16.8929 1 21C1 25.1071 4.34309 28.4502 8.45016 28.4502H13.5498V33.5498C13.5498 37.6569 16.8929 41 21 41C25.1071 41 28.4502 37.6569 28.4502 33.5498V28.4502H33.5498C37.6569 28.4502 41 25.1071 41 21C41 16.8929 37.6569 13.5498 33.5498 13.5498ZM8.45295 26.0969C5.63683 26.0969 3.35606 23.8133 3.35606 21C3.35606 18.1867 5.63962 15.9031 8.45295 15.9031H13.5526V26.0997H8.45295V26.0969ZM26.0997 33.547C26.0997 36.3632 23.8161 38.6439 21.0028 38.6439C18.1867 38.6439 15.9059 36.3604 15.9059 33.547V28.4474L22.5 28.4502V26.0997L15.9059 26.0969V8.45016C15.9059 5.63404 18.1895 3.35327 21.0028 3.35327C23.8189 3.35327 26.0997 5.63683 26.0997 8.45016V15.5741C24.7753 14.3305 22.9992 13.561 21.0446 13.5498H19.5V15.9031H21.0446C23.8412 15.9282 26.0997 18.2006 26.0997 21V33.5498V33.547ZM33.5498 26.0969H28.4502V21C28.4502 19.0287 27.6778 17.2359 26.4259 15.9031H33.5498C36.366 15.9031 38.6467 18.1867 38.6467 21C38.6467 23.8133 36.3632 26.0969 33.5498 26.0969Z" fill="white" stroke="white"/>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Target Audiences & Use Cases */}
      <section id="why-aimax" className="py-20 bg-aimax-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl mb-6">
              Supporting Every Step of Healthcare
            </h2>
            <p className="font-body text-xl text-aimax-gray-600 mx-auto leading-relaxed">
              AImax serves three distinct audiences with tailored AI assistance throughout their healthcare journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Patients */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-primary-100 text-aimax-primary-500 mx-auto mb-4 group-hover:bg-aimax-primary-500 group-hover:text-white transition-all duration-300">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">For Patients</h3>
              </div>
              <ul className="space-y-4 text-aimax-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-500 mt-2 mr-4"></div>
                  <span className="font-body">Healthguide</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-500 mt-2 mr-4"></div>
                  <span className="font-body">24/7 easy to access</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-500 mt-2 mr-4"></div>
                  <span className="font-body">Empathetic, like talking to a friend</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-500 mt-2 mr-4"></div>
                  <span className="font-body">Reliable: based on German medical guidelines and trained with German GPs</span>
                </li>
              </ul>
            </div>

            {/* Medical Personnel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-secondary-100 text-aimax-secondary-500 mx-auto mb-4 group-hover:bg-aimax-secondary-500 group-hover:text-white transition-all duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">For Medical Personnel</h3>
              </div>
              <ul className="space-y-4 text-aimax-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-secondary-500 mt-2 mr-4"></div>
                  <span className="font-body">Supports time consuming administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-secondary-500 mt-2 mr-4"></div>
                  <span className="font-body">Patient admission</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-secondary-500 mt-2 mr-4"></div>
                  <span className="font-body">Filling out questionnaires on symptoms and further anamneses</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-secondary-500 mt-2 mr-4"></div>
                  <span className="font-body">Quality metrics, PROMs</span>
                </li>
              </ul>
            </div>

            {/* Doctors */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-primary-100 text-aimax-primary-600 mx-auto mb-4 group-hover:bg-aimax-primary-600 group-hover:text-white transition-all duration-300">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">For Doctors</h3>
              </div>
              <ul className="space-y-4 text-aimax-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-600 mt-2 mr-4"></div>
                  <span className="font-body">More efficient patient appointments through prior assessed anamneses</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-aimax-primary-600 mt-2 mr-4"></div>
                  <span className="font-body">Digital 2nd opinion on suspected diagnosis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Section 3: Partners & Customers */}
     <section id="about" className="py-20 bg-aimax-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl mb-6">
              Trusted by Healthcare Leaders
            </h2>
          </div>
          
          <div className="flex flex-row flex-nowrap gap-6 items-center overflow-x-auto py-2">
            {/* Partner logos - real assets */}
            <div className="bg-white rounded-xl p-6 h-28 min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-aimax-gray-200">
              <div className="relative h-14 w-40 md:h-16 md:w-44 lg:h-16 lg:w-48">
                <Image src="/Partners/kize.png" alt="KiZe Maulbronn" fill className="object-contain" sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 h-28 min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-aimax-gray-200">
              <div className="relative h-14 w-40 md:h-16 md:w-44 lg:h-16 lg:w-48">
                <Image src="/Partners/medi_verbund.png" alt="medi Verbund" fill className="object-contain" sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 h-28 min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-aimax-gray-200">
              <div className="relative h-14 w-40 md:h-16 md:w-44 lg:h-16 lg:w-48">
                <Image src="/Partners/time.png" alt="time" fill className="object-contain" sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 h-28 min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-aimax-gray-200">
              <div className="relative h-14 w-40 md:h-16 md:w-44 lg:h-16 lg:w-48">
                <Image src="/Partners/uni_tubingen.png" alt="Uni Tübingen" fill className="object-contain" sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px" />
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 h-28 min-w-[180px] flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-aimax-gray-200">
              <div className="relative h-14 w-40 md:h-16 md:w-44 lg:h-16 lg:w-48">
                <Image src="/Partners/Kreisklinikien.png" alt="Kreisklinikien" fill className="object-contain" sizes="(min-width: 1024px) 192px, (min-width: 768px) 176px, 160px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Key Features & Benefits */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl mb-6">
              Why Choose AImax?
            </h2>
            <p className="font-body text-xl text-aimax-gray-600 mx-auto leading-relaxed">
              Our core values drive everything we do - making healthcare AI that truly serves patients and providers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Easy to Use */}
            <div className="bg-aimax-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-aimax-gray-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-primary-100 text-aimax-primary-500 mx-auto mb-4 group-hover:bg-aimax-primary-500 group-hover:text-white transition-all duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">Easy to Access and Even Easier to Use</h3>
              </div>
              <p className="font-body text-aimax-gray-700 mb-6 leading-relaxed">
                Intuitive interface designed for all user types. No technical expertise required - 
                just natural conversation with our AI assistant.
              </p>
              <ul className="space-y-3 text-aimax-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-500 mr-4"></div>
                  <span className="font-body">One-click access from any device</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-500 mr-4"></div>
                  <span className="font-body">Natural language processing</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-500 mr-4"></div>
                  <span className="font-body">Instant, accurate responses</span>
                </li>
              </ul>
            </div>

            {/* Empathetic */}
            <div className="bg-aimax-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-aimax-gray-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-secondary-100 text-aimax-secondary-500 mx-auto mb-4 group-hover:bg-aimax-secondary-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">Empathetic and Friendly</h3>
              </div>
              <p className="font-body text-aimax-gray-700 mb-6 leading-relaxed">
                Our AI understands that healthcare is personal. Every interaction is designed 
                with compassion and understanding at its core.
              </p>
              <ul className="space-y-3 text-aimax-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-secondary-500 mr-4"></div>
                  <span className="font-body">Emotionally intelligent responses</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-secondary-500 mr-4"></div>
                  <span className="font-body">Patient-centered communication</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-secondary-500 mr-4"></div>
                  <span className="font-body">Supportive guidance</span>
                </li>
              </ul>
            </div>

            {/* Reliable */}
            <div className="bg-aimax-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-aimax-gray-200">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-aimax-primary-100 text-aimax-primary-600 mx-auto mb-4 group-hover:bg-aimax-primary-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-aimax-dark mb-4">Reliable</h3>
              </div>
              <p className="font-body text-aimax-gray-700 mb-6 leading-relaxed">
                Built on evidence-based medicine and continuously updated with the latest 
                medical knowledge. Your trust is our foundation.
              </p>
              <ul className="space-y-3 text-aimax-gray-700">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-600 mr-4"></div>
                  <span className="font-body">Medically accurate information</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-600 mr-4"></div>
                  <span className="font-body">HIPAA compliant security</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-aimax-primary-600 mr-4"></div>
                  <span className="font-body">Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="primary" size="xl" shape="rounded" className="font-body">
              Contact Our Team
            </Button>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-aimax-primary-200 mx-auto">
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