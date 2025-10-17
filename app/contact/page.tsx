import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AImax',
  description: 'Get in touch with the AImax team.'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-aimax-dark mb-8">Contact Us</h1>
            <p className="font-body text-xl md:text-2xl text-aimax-gray-700 leading-relaxed max-w-6xl mx-auto">
              We will get back to you shortly. Please leave your details below and we'll be in touch.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form className="grid gap-10">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="grid gap-3">
                    <label htmlFor="name" className="font-body text-base font-semibold text-aimax-gray-700">Full name</label>
                    <input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      className="h-14 px-6 rounded-lg border-2 border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400 focus:border-aimax-primary-400 transition-all duration-200 text-lg" 
                    />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="email" className="font-body text-base font-semibold text-aimax-gray-700">Email</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="h-14 px-6 rounded-lg border-2 border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400 focus:border-aimax-primary-400 transition-all duration-200 text-lg" 
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="grid gap-3">
                  <label htmlFor="message" className="font-body text-base font-semibold text-aimax-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={8} 
                    required 
                    className="px-6 py-4 rounded-lg border-2 border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400 focus:border-aimax-primary-400 transition-all duration-200 resize-vertical text-lg" 
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button 
                    type="submit" 
                    className="px-12 py-4 rounded-lg bg-aimax-primary-600 text-white font-semibold text-lg hover:bg-aimax-primary-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Information */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-aimax-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-aimax-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-aimax-dark mb-3">Response Time</h3>
                <p className="font-body text-aimax-gray-600 text-lg">We typically respond within 24 hours</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-aimax-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-aimax-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-aimax-dark mb-3">Support</h3>
                <p className="font-body text-aimax-gray-600 text-lg">Available Monday to Friday, 9 AM - 6 PM CET</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-aimax-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-aimax-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-aimax-dark mb-3">Privacy</h3>
                <p className="font-body text-aimax-gray-600 text-lg">Your information is secure and confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


