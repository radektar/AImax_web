import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
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

export const Cta4 = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "/contact",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-20 bg-aimax-primary-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-white border border-aimax-primary-200 px-6 py-10 md:flex-row lg:px-16 lg:py-16 shadow-sm">
              <div className="md:w-1/2">
                <h4 className="mb-4 font-display text-3xl font-bold text-aimax-dark sm:text-4xl md:text-3xl">{title}</h4>
                <p className="mb-6 font-body text-lg text-aimax-gray-600 leading-relaxed italic">{description}</p>
                <Button className="gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200" asChild>
                  <a href={buttonUrl}>
                    {buttonText} <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              <div className="md:w-2/5">
                <ul className="flex flex-col space-y-3 text-base font-medium text-aimax-dark">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-5 flex-shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
