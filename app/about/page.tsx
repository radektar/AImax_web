import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | AImax',
  description: 'Learn about AImax and our mission to enhance patient care.'
};

export default function AboutPage() {
  const founders = [
    { 
      src: '/Founders/fdm.jpg', 
      alt: 'Dr. Francesco De Meo', 
      name: 'Dr. Francesco De Meo',
      role: 'Healthcare Industry Leader',
      bio: 'After completing his law degree and doctorate, Francesco De Meo initially worked as a lawyer and managing director of a German management consultancy. In 2000, he moved to Helios, a start-up hospital operator in Germany. Within two decades, he developed the company into Europe\'s leading private hospital group, serving as CEO of Helios from 2008 to 2023 and on the board of the DAX-listed healthcare group Fresenius. Francesco De Meo left the company at the age of 60. Today, he supports transformations worldwide and advises startups in the healthcare sector.'
    },
    { 
      src: '/Founders/DSCF5997.jpg', 
      alt: 'Prof. Dr. Jörg Martin', 
      name: 'Prof. Dr. Jörg Martin',
      role: 'Medical Director & Professor',
      bio: 'After studying human medicine in Tübingen and Stuttgart and specializing in anaesthesiology, Jörg Martin worked as physician in anaesthesia and intensive care medicine at the Klinik am Eichert. He was appointed as associate professor by the University of Ulm in 2009. From 2007 to 2013, Martin worked as Managing Director of ALB FILS Kliniken Göppingen until he became Managing Director of RKH Kliniken Holding, a network spanning 7 clinics in 2013. He has been Chairman of the IQM Transparency Committee since 2012 and a member of the IQM Executive Board since 2015.'
    },
    { 
      src: '/Founders/Weber, Christian 01.jpg', 
      alt: 'Dr. Christian Weber', 
      name: 'Dr. Christian Weber',
      role: 'Co-founder & Technical Lead',
      bio: 'Christian Weber studied mathematics in Mainz and obtained his Ph.D. from McMaster University in Canada and the Max Planck Institute for Mathematics in Bonn. He began his professional career as a management consultant at McKinsey, where he spent more than 13 years. In addition, he has over 15 years of operational experience in the German and international healthcare sector in positions like head of corporate development, head of finance, and managing director. As co-founder of AImaxDoc GmbH, he has been responsible for the finance department and the technical development of AImax products since 2024.'
    }
  ];
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
            {founders.map((founder, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-aimax-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={founder.src}
                    alt={founder.alt}
                    width={128}
                    height={128}
                    className="size-32 rounded-full object-cover object-center border border-aimax-primary-200"
                    sizes="128px"
                    priority={idx === 0}
                  />
                  <div>
                    <p className="font-display text-xl font-semibold text-aimax-dark">{founder.name}</p>
                    <p className="font-body text-sm text-aimax-gray-600">{founder.role}</p>
                  </div>
                </div>
                <p className="font-body text-aimax-gray-700 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board - Hidden for now */}
      {/* 
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl font-bold text-aimax-dark">Advisory Board</h2>
            <span className="text-sm text-aimax-gray-600">Clinical and industry advisors</span>
          </div>

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
      */}

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


