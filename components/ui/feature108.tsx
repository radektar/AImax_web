import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Clock, MessageCircle, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Why Choose AImax?",
  heading = "Our Core Values Drive Everything We Do",
  description = "Making healthcare AI that truly serves patients and providers",
  tabs = [
    {
      value: "easy-to-use",
      icon: <Clock className="h-auto w-4 shrink-0" />,
      label: "Easy to Use",
      content: {
        badge: "User Experience",
        title: "Intuitive interface designed for everyone.",
        description:
          "No technical expertise required - just natural conversation with our AI assistant. One-click access from any device with instant, accurate responses.",
        buttonText: "Try Demo",
        imageSrc: "/hero_wireframe.png",
        imageAlt: "AImax easy-to-use interface",
      },
    },
    {
      value: "empathetic",
      icon: <MessageCircle className="h-auto w-4 shrink-0" />,
      label: "Empathetic",
      content: {
        badge: "Compassionate AI",
        title: "Healthcare AI that understands emotions.",
        description:
          "Our AI understands that healthcare is personal. Every interaction is designed with compassion and understanding at its core, providing emotionally intelligent responses.",
        buttonText: "Learn More",
        imageSrc: "/hero_wireframe.png",
        imageAlt: "AImax empathetic AI interaction",
      },
    },
    {
      value: "reliable",
      icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
      label: "Reliable",
      content: {
        badge: "Evidence-Based",
        title: "Built on medical expertise and security.",
        description:
          "Built on evidence-based medicine and continuously updated with the latest medical knowledge. HIPAA compliant security ensures your trust is our foundation.",
        buttonText: "See Security",
        imageSrc: "/hero_wireframe.png",
        imageAlt: "AImax reliable healthcare AI",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-aimax-dark sm:text-4xl lg:text-5xl max-w-12xl">
            {heading}
          </h2>
          <p className="font-body text-xl text-aimax-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-aimax-gray-600 data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:bg-aimax-gray-100 hover:text-aimax-gray-800"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-aimax-light/70 p-6 lg:p-16 border border-aimax-gray-200">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-white text-aimax-gray-600 border-aimax-gray-200">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="font-display text-3xl font-bold text-aimax-dark lg:text-5xl">
                    {tab.content.title}
                  </h3>
                  <p className="font-body text-aimax-gray-700 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2 bg-aimax-primary-500 hover:bg-aimax-primary-600 text-white" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
