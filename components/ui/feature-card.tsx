import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps extends React.ComponentProps<"div"> {
  title: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

export function FeatureCard({
  title,
  description,
  buttonText,
  buttonUrl,
  items,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "rounded-2xl border py-0 px-6 md:flex-row lg:px-16 md:justify-between md:items-start md:gap-8 pt-10 pb-10 lg:pt-16 lg:pb-16",
        className
      )}
      {...props}
    >
      <div className="md:w-1/2">
        <CardHeader className="px-0 pt-0">
          <CardTitle className="mb-4 font-display text-3xl font-bold text-aimax-dark sm:text-4xl md:text-3xl">
            {title}
          </CardTitle>
          <CardDescription className="mb-6 font-body text-lg text-aimax-gray-600 leading-relaxed italic">
            {description}
          </CardDescription>
          {buttonText && (
            <Button
              variant="primary"
              size="lg"
              className="gap-3"
              asChild
            >
              <Link href={buttonUrl || "/contact"}>
                {buttonText} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </CardHeader>
      </div>
      {items && (
        <div className="md:w-2/5">
          <ul className="flex flex-col space-y-3 text-base font-medium text-aimax-dark">
            {items.map((item, idx) => (
              <li className="flex items-center" key={idx}>
                <svg className="mr-4 h-5 w-5 flex-shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}

