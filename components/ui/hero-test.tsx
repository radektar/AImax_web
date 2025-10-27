import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroTestProps {
  backgroundColor?: string;
}

function HeroTest({ backgroundColor = "green-700" }: HeroTestProps) {
  // Map color names to Tailwind classes
  const bgClassMap: Record<string, string> = {
    "green-900": "bg-green-900",
    "green-800": "bg-green-800",
    "green-700": "bg-green-700",
    "blue-900": "bg-blue-900",
    "blue-800": "bg-blue-800",
    "blue-700": "bg-blue-700",
  };
  
  const bgClass = bgClassMap[backgroundColor] || "bg-green-700";
  
  return (
    <div className={`w-full py-16 pt-32 lg:pt-40 ${bgClass} grain-texture`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="flex gap-6 flex-col">
            <div className="flex gap-6 flex-col">
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-left font-bold text-white">
                Helping with the first and the last mile of the patient!
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-100 text-left">
                Easy to access and even easier to use, Empathetic and friendly, Reliable.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="primary"
                className="gap-3 !bg-white !text-green-900 hover:!bg-gray-100 !border !border-white focus-visible:!ring-white"
                asChild
              >
                <Link href="/contact">
                  Contact Us <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - AI Assistant Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden w-full max-w-[500px] aspect-square">
              <Image 
                src="/assistant_1_light.png" 
                alt="AImax Healthcare Assistant"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroTest };

