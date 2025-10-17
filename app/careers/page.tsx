import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | AImax',
  description: 'Join AImax in revolutionizing healthcare with AI. Explore career opportunities in one of the hottest sectors: AI in Healthcare.'
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 'tech-lead',
      title: 'Tech Lead Software Development and Technical Infrastructure',
      location: 'Germany - Frankfurt a.M, Hamburg, Berlin, Münster',
      type: 'Full-time',
      workplace: 'Hybrid',
      department: 'IT, Digital & Technology',
      level: 'Associate, Project Manager, Manager',
      description: 'Lead the technical development and infrastructure of our AI healthcare platform during our next growth phase.',
      responsibilities: [
        'Conception and further development of our platform',
        'Management of technical service providers, or establishment of the internal tech department',
        'Development of API endpoints, business logic, and data models',
        'Responsibility for architecture, security, and scalability'
      ],
      requirements: [
        'Knowledge in TypeScript, PostgreSQL, React, and Tailwind',
        'Experience with cloud platforms, especially Azure, is an advantage',
        'Experience in the development of AI applications (LLM, Neo4j, Langchain / Langgraph, ...) is an advantage, but not a prerequisite'
      ],
      benefits: [
        'Attractive and market-standard salary',
        'Participation in VSOP (Virtual Stock Option Plan)',
        'Great creative freedom and C-level exposure',
        'Work in one of the currently hottest sectors: AI in Healthcare'
      ],
      contact: {
        name: 'Dr. Christian Weber',
        email: 'cw@aimax.care',
        phone: '+49-172-8195340'
      }
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-aimax-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-aimax-dark mb-6">Careers at AImax</h1>
          <p className="font-body text-lg text-aimax-gray-700 leading-relaxed mb-8">
            Join us in revolutionizing healthcare with AI. We're building the future of patient care through 
            simple, reliable, and empathetic technology solutions.
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-aimax-gray-200">
            <h2 className="font-display text-2xl font-semibold text-aimax-dark mb-4">Why Work at AImax?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-aimax-dark mb-2">Mission-Driven Impact</h3>
                <p className="font-body text-aimax-gray-700">
                  Help improve the first and last mile of patient care through innovative AI solutions.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-aimax-dark mb-2">Experienced Leadership</h3>
                <p className="font-body text-aimax-gray-700">
                  Work with founders who have decades of healthcare experience and deep industry knowledge.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-aimax-dark mb-2">Cutting-Edge Technology</h3>
                <p className="font-body text-aimax-gray-700">
                  Build AI applications using modern tech stacks and innovative approaches.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-aimax-dark mb-2">Growth Opportunities</h3>
                <p className="font-body text-aimax-gray-700">
                  Be part of a startup entering its next growth phase with comfortable financing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark">Open Positions</h2>
            <span className="text-sm text-aimax-gray-600">Join our growing team</span>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <article key={job.id} className="bg-white rounded-2xl border border-aimax-gray-200 shadow-sm overflow-hidden">
                <div className="p-8">
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-aimax-dark mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-aimax-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.workplace}
                        </span>
                      </div>
                      <p className="font-body text-aimax-gray-700 leading-relaxed">{job.description}</p>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-aimax-dark mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-aimax-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-body text-aimax-gray-700">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-display text-lg font-semibold text-aimax-dark mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-aimax-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-body text-aimax-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-display text-lg font-semibold text-aimax-dark mb-3">What We Offer</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-aimax-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-body text-aimax-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Apply */}
                  <div className="border-t border-aimax-gray-200 pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-display text-lg font-semibold text-aimax-dark mb-2">Ready to Apply?</h4>
                        <p className="font-body text-aimax-gray-700">
                          Contact us to learn more about this position and how you can join our mission.
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <a 
                          href={`mailto:${job.contact.email}?subject=Application for ${job.title}`}
                          className="inline-flex items-center gap-2 bg-aimax-red text-white px-6 py-3 rounded-lg font-medium hover:bg-aimax-red/90 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Apply Now
                        </a>
                        <div className="text-sm text-aimax-gray-600">
                          <p><strong>{job.contact.name}</strong></p>
                          <p>{job.contact.email}</p>
                          <p>{job.contact.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Open Positions Message */}
          {jobOpenings.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-aimax-gray-200">
                <svg className="w-16 h-16 text-aimax-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
                <h3 className="font-display text-xl font-semibold text-aimax-dark mb-2">No Open Positions</h3>
                <p className="font-body text-aimax-gray-700 mb-6">
                  We don't have any open positions at the moment, but we're always looking for talented individuals to join our mission.
                </p>
                <a 
                  href="mailto:cw@aimax.care?subject=General Career Inquiry"
                  className="inline-flex items-center gap-2 bg-aimax-red text-white px-6 py-3 rounded-lg font-medium hover:bg-aimax-red/90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Us Your Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
