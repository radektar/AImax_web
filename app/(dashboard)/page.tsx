import { Button } from '@/components/ui/button';
import { Heart, Users, Stethoscope, ShieldCheck, Clock, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero/Main Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500 text-white mr-4 animate-pulse">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L12 8L18 8L18 12L12 12L12 22L6 22L6 12L0 12L0 8L6 8L6 2L12 2Z"/>
                </svg>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  AIMAX
                </h1>
                <p className="text-lg text-red-500 font-medium">Healthcare AI Assistant</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl mb-6">
              Helping with the first and the{' '}
              <span className="text-red-500">last mile of the patient!</span>
            </h2>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              AImax provides intelligent, empathetic support across the entire patient care journey. 
              Our AI assistant ensures satisfaction with the promise: 
              <span className="font-semibold text-gray-900">
                "I cannot deactivate until you are satisfied with your care"
              </span>
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg">
                Start Your Care Journey
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 rounded-full text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Target Audiences & Use Cases */}
      <section id="why-aimax" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Supporting Every Step of Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AImax serves three distinct audiences with tailored AI assistance throughout their healthcare journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Patients */}
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Patients</h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  General health questions and symptom assessment
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Severity and urgency calibration of symptoms
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Easy-to-use interface for health inquiries
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  24/7 availability for peace of mind
                </li>
              </ul>
            </div>

            {/* Medical Personnel */}
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Medical Personnel</h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Administrative task assistance
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Streamlined workflow support
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Professional healthcare tools
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Efficient patient communication
                </li>
              </ul>
            </div>

            {/* Doctors */}
            <div className="text-center group">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mx-auto mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Doctors</h3>
              <ul className="text-left space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Diagnostic support through comprehensive cross-checking
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Integration with medical guidelines and literature
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Clinical decision support tools
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-2 w-2 rounded-full bg-red-500 mt-2 mr-3"></div>
                  Evidence-based recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Features & Benefits */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Why Choose AImax?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values drive everything we do - making healthcare AI that truly serves patients and providers
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Easy to Use */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-100 text-red-500 mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy to Access and Even Easier to Use</h3>
              <p className="text-gray-600 mb-6">
                Intuitive interface designed for all user types. No technical expertise required - 
                just natural conversation with our AI assistant.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  One-click access from any device
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Natural language processing
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Instant, accurate responses
                </li>
              </ul>
            </div>

            {/* Empathetic */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-100 text-red-500 mb-6">
                <MessageCircle className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empathetic and Friendly</h3>
              <p className="text-gray-600 mb-6">
                Our AI understands that healthcare is personal. Every interaction is designed 
                with compassion and understanding at its core.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Emotionally intelligent responses
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Patient-centered communication
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Supportive guidance
                </li>
              </ul>
            </div>

            {/* Reliable */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-red-100 text-red-500 mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliable</h3>
              <p className="text-gray-600 mb-6">
                Built on evidence-based medicine and continuously updated with the latest 
                medical knowledge. Your trust is our foundation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Medically accurate information
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  HIPAA compliant security
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-3"></div>
                  Continuous learning and improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Partners & Customers */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AImax partners with leading healthcare organizations to deliver exceptional patient care
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center opacity-60">
            {/* Partner logos - placeholder styling */}
            <div className="bg-gray-100 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">KiZe Maulbronn</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">medi</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 w-full h-24 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">time</span>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              View All Partners
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L12 8L18 8L18 12L12 12L12 22L6 22L6 12L0 12L0 8L6 8L6 2L12 2Z"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
            Ready to Transform Healthcare?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of patients, medical personnel, and doctors who trust AImax 
            for their healthcare journey. Experience the difference of truly empathetic AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-8 py-3 rounded-full text-lg">
              Contact Our Team
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            "I cannot deactivate until you are satisfied with your care" - Your AImax Promise
          </p>
        </div>
      </section>
    </main>
  );
}