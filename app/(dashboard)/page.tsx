import { AImaxLogo } from '@/components/ui/aimax-logo';
import { HealthcareIcons, AImaxFeatureIcon } from '@/components/ui/aimax-icons';
import HeroWave from '@/components/ui/dynamic-wave-canvas-background';
import { Heart, Users, Stethoscope, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Dynamic Wave Background */}
        <div className="absolute inset-0 z-0">
          <HeroWave />
          {/* Enhanced overlay for better text readability with green-blue waves */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            
            {/* Left Side - Main Content */}
            <div className="space-y-8 hero-content">
              {/* AImax Logo */}
              <div className="mb-6">
                <AImaxLogo className="h-16 w-auto text-white" />
              </div>
              
              <h1 className="font-display hero-title font-bold text-white leading-tight text-shadow-strong">
                Helping with the first and the last mile of the patient!
              </h1>
              <p className="font-body text-lg md:text-xl lg:text-2xl text-white/95 w-full max-w-none text-shadow-soft">
                AImax: your reliable, user-friendly, and empathetic assistant.
              </p>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-aimax-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-aimax-primary-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Demo */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Interactive Demo Container */}
                <div className="relative aspect-square bg-white/10 rounded-3xl overflow-hidden border border-white/30 backdrop-blur-md shadow-2xl">
                  {/* Demo Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-center text-white">
                      {/* AI Assistant Icon */}
                      <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      
                      {/* Demo Text */}
                      <h3 className="font-display text-xl font-semibold mb-3">Interactive AI Demo</h3>
                      <p className="font-body text-sm text-white/80 mb-6 leading-relaxed">
                        Experience AImax's empathetic healthcare assistance
                      </p>
                      
                      {/* Demo Button */}
                      <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/30 backdrop-blur-sm">
                        Try Demo
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/3 left-4 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-500"></div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center space-y-3 text-white/80">
            <span className="text-sm font-body font-medium">Discover AImax</span>
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-1 h-4 bg-white/80 rounded-full mt-2 animate-bounce"></div>
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