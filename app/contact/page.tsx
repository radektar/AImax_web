import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | AImax',
  description: 'Get in touch with the AImax team.'
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">Contact</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed mb-8">
            We will get back to you shortly. Please leave your details below.
          </p>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <label htmlFor="name" className="font-body text-sm text-aimax-gray-700">Full name</label>
              <input id="name" name="name" type="text" required className="h-11 px-4 rounded-md border border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-body text-sm text-aimax-gray-700">Email</label>
              <input id="email" name="email" type="email" required className="h-11 px-4 rounded-md border border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-body text-sm text-aimax-gray-700">Message</label>
              <textarea id="message" name="message" rows={5} required className="px-4 py-3 rounded-md border border-aimax-gray-300 focus:outline-none focus:ring-2 focus:ring-aimax-primary-400" />
            </div>
            <button type="submit" className="h-11 rounded-md bg-aimax-primary-600 text-white font-medium hover:bg-aimax-primary-700 transition-colors">Send message</button>
          </form>
        </div>
      </section>
    </main>
  );
}


