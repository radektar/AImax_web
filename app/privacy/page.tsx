import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AImax',
  description: 'AImax privacy practices and data handling policies.'
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">Privacy Policy</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed">Placeholder for AImax Privacy Policy.</p>
        </div>
      </section>
    </main>
  );
}


