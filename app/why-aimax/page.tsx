import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why AImax | AImax',
  description: 'Understand AImax benefits for patients, medical personnel, and doctors.'
};

export default function WhyAImaxPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">Why AImax</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed">
            Discover how AImax supports patients, medical personnel, and doctors with reliable, empathetic, and easy-to-use AI assistance.
          </p>
        </div>
      </section>
    </main>
  );
}


