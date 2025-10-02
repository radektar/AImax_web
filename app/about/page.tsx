import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AImax',
  description: 'Learn about AImax and our mission to enhance patient care.'
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Intro */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">About Us</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed w-full">
            AImax is a healthcare AI company focused on improving the first and last mile of patient care.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-aimax-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark">Founders</h2>
            <span className="text-sm text-aimax-gray-600">Core team behind AImax</span>
          </div>

          {/* Founders Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-aimax-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-16 rounded-full bg-aimax-primary-100 border border-aimax-primary-200" />
                  <div>
                    <p className="font-display text-xl font-semibold text-aimax-dark">Founder Name</p>
                    <p className="font-body text-sm text-aimax-gray-600">Role / Specialty</p>
                  </div>
                </div>
                <p className="font-body text-aimax-gray-700 leading-relaxed">
                  Short bio placeholder. Highlight healthcare, AI expertise, and mission focus.
                </p>
              </div>
            ))}
          </div>

          {/* Group Photo Placeholder */}
          <div className="mt-10">
            <div className="w-full h-64 rounded-2xl border-2 border-dashed border-aimax-gray-300 bg-white/50 flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 bg-aimax-gray-200 rounded-full mx-auto mb-3" />
                <p className="font-body text-aimax-gray-600">Group photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark">Advisory Board</h2>
            <span className="text-sm text-aimax-gray-600">Clinical and industry advisors</span>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={`ab1-${idx}`} className="bg-white rounded-2xl p-6 shadow-sm border border-aimax-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-16 rounded-full bg-aimax-secondary-100 border border-aimax-secondary-200" />
                  <div>
                    <p className="font-display text-xl font-semibold text-aimax-dark">Advisor Name</p>
                    <p className="font-body text-sm text-aimax-gray-600">Expertise Area</p>
                  </div>
                </div>
                <p className="font-body text-aimax-gray-700 leading-relaxed">
                  Short bio placeholder. Notable affiliations and contributions.
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={`ab2-${idx}`} className="bg-white rounded-2xl p-6 shadow-sm border border-aimax-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-16 rounded-full bg-aimax-secondary-100 border border-aimax-secondary-200" />
                  <div>
                    <p className="font-display text-xl font-semibold text-aimax-dark">Advisor Name</p>
                    <p className="font-body text-sm text-aimax-gray-600">Expertise Area</p>
                  </div>
                </div>
                <p className="font-body text-aimax-gray-700 leading-relaxed">
                  Short bio placeholder. Notable affiliations and contributions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AImax in the Press */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark">AImax in the Press</h2>
            <span className="text-sm text-aimax-gray-600">Recent highlights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <article key={`press-${idx}`} className="rounded-2xl border border-aimax-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="h-40 bg-aimax-gray-100" />
                <div className="p-6">
                  <p className="text-sm text-aimax-primary-600 font-medium mb-2">Publication Name</p>
                  <h3 className="font-display text-xl font-semibold text-aimax-dark mb-2">Headline placeholder for AImax coverage</h3>
                  <p className="font-body text-aimax-gray-700">Brief summary of the article highlighting AImax impact.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


