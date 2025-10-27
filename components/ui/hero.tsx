import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-32 pt-32 lg:pt-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="flex gap-6 flex-col">
            <div className="flex gap-6 flex-col">
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight text-left font-bold text-aimax-dark">
                Helping with the first and the last mile of the patient!
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-aimax-gray-600 text-left">
                AImax is: Easy to access and even easier to use, Empathetic and friendly, Reliable.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
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
            <div className="relative rounded-3xl overflow-hidden w-full max-w-[500px] aspect-square bg-gradient-to-br from-aimax-primary-50 to-aimax-primary-100">
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

export { Hero };

