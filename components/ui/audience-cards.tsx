import { Heart, Users, Stethoscope } from "lucide-react";
import { AudienceCard } from "@/components/ui/audience-card";

interface Audience {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface AudienceCardsProps {
  heading?: string;
  description?: string;
  audiences?: Audience[];
}

export const AudienceCards = ({
  heading = "Supporting Every Step of Healthcare",
  description = "AImax serves three distinct audiences with tailored AI assistance throughout their healthcare journey",
  audiences = [
    {
      id: "patients",
      title: "Your 24/7 Healthcare Companion",
      description:
        "Healthguide available anytime, anywhere. Easy-to-use interface for health inquiries, symptom assessment, and severity calibration. Empathetic support that feels like talking to a caring friend, all based on German medical guidelines and trained with German GPs.",
      image: "/pacjencui.png",
      icon: <Heart className="h-8 w-8" />,
    },
    {
      id: "medical-personnel",
      title: "Streamline Administrative Tasks",
      description:
        "Support for time-consuming administrative work including patient admission, filling out questionnaires on symptoms and anamneses, and managing quality metrics and PROMs. Free up valuable time to focus on patient care.",
      image: "/personel.png",
      icon: <Users className="h-8 w-8" />,
    },
    {
      id: "doctors",
      title: "Enhanced Clinical Decision Support",
      description:
        "More efficient patient appointments through prior assessed anamneses. Access to digital 2nd opinions on suspected diagnoses with comprehensive cross-checking against medical guidelines and literature.",
      image: "/lekarze.png",
      icon: <Stethoscope className="h-8 w-8" />,
    },
  ],
}: AudienceCardsProps) => {
  return (
    <section className="py-16 bg-aimax-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl lg:text-5xl mb-4">
            {heading}
          </h2>
          <p className="font-body text-lg md:text-xl text-aimax-gray-600 mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {audiences[0] && (
            <div className="md:col-span-2 md:grid md:grid-cols-2 gap-8 overflow-clip rounded-xl border border-aimax-gray-200 bg-white">
              <div className="md:min-h-[18rem] lg:min-h-[20rem] bg-aimax-light">
                <img
                  src={audiences[0].image}
                  alt={audiences[0].title}
                  className="aspect-[4/3] h-full w-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-6 md:px-6 md:py-6 lg:px-8 lg:py-8">
                <div className="mb-3">{audiences[0].icon}</div>
                <h3 className="font-display mb-3 text-2xl font-bold text-aimax-dark md:text-3xl">
                  {audiences[0].title}
                </h3>
                <p className="font-body text-aimax-gray-700 text-base lg:text-lg leading-relaxed">
                  {audiences[0].description}
                </p>
              </div>
            </div>
          )}
          {audiences.slice(1).map((audience) => (
            <AudienceCard
              key={audience.id}
              title={audience.title}
              description={audience.description}
              image={audience.image}
              icon={audience.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

