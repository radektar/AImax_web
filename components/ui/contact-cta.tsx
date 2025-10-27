import { FeatureCard } from "@/components/ui/feature-card";

interface ContactCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

export const ContactCta = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "/contact",
  items = defaultItems,
}: ContactCtaProps) => {
  return (
    <section className="py-16 bg-aimax-light" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-7xl w-full">
            <FeatureCard
              title={title}
              description={description}
              buttonText={buttonText}
              buttonUrl={buttonUrl}
              items={items}
              className="border-aimax-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
