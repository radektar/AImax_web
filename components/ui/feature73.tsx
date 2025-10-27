import { Heart, Users, Stethoscope } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  colorClasses: string;
}

interface Feature73Props {
  heading?: string;
  description?: string;
  features?: Feature[];
}

export const Feature73 = ({
  heading = "Supporting Every Step of Healthcare",
  description = "AImax serves three distinct audiences with tailored AI assistance throughout their healthcare journey",
  features = [
    {
      id: "patients",
      title: "Your 24/7 Healthcare Companion",
      description:
        "Healthguide available anytime, anywhere. Easy-to-use interface for health inquiries, symptom assessment, and severity calibration. Empathetic support that feels like talking to a caring friend, all based on German medical guidelines and trained with German GPs.",
      image: "/hero_wireframe.png",
      icon: <Heart className="h-8 w-8" />,
      colorClasses: "bg-aimax-primary-100 text-aimax-primary-500 group-hover:bg-aimax-primary-500 group-hover:text-white",
    },
    {
      id: "medical-personnel",
      title: "Streamline Administrative Tasks",
      description:
        "Support for time-consuming administrative work including patient admission, filling out questionnaires on symptoms and anamneses, and managing quality metrics and PROMs. Free up valuable time to focus on patient care.",
      image: "/hero_wireframe.png",
      icon: <Users className="h-8 w-8" />,
      colorClasses: "bg-aimax-secondary-100 text-aimax-secondary-500 group-hover:bg-aimax-secondary-500 group-hover:text-white",
    },
    {
      id: "doctors",
      title: "Enhanced Clinical Decision Support",
      description:
        "More efficient patient appointments through prior assessed anamneses. Access to digital 2nd opinions on suspected diagnoses with comprehensive cross-checking against medical guidelines and literature.",
      image: "/hero_wireframe.png",
      icon: <Stethoscope className="h-8 w-8" />,
      colorClasses: "bg-aimax-primary-100 text-aimax-primary-600 group-hover:bg-aimax-primary-600 group-hover:text-white",
    },
  ],
}: Feature73Props) => {
  return (
    <section className="py-12 bg-aimax-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl lg:text-5xl mb-4">
            {heading}
          </h2>
          <p className="font-body text-lg text-aimax-gray-600 mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-6">
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-xl border border-aimax-gray-200 bg-white md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-6">
              <div className="md:min-h-[18rem] lg:min-h-[20rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-6 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <h3 className="font-display mb-3 text-xl font-bold text-aimax-dark md:text-2xl lg:text-3xl">
                  {features[0].title}
                </h3>
                <p className="font-body text-aimax-gray-700 text-base leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-aimax-gray-200 bg-white"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-6 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <h3 className="font-display mb-3 text-lg font-bold text-aimax-dark md:text-xl lg:text-2xl">
                  {feature.title}
                </h3>
                <p className="font-body text-aimax-gray-700 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

