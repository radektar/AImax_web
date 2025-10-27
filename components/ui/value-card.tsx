import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ValueCardProps extends React.ComponentProps<"div"> {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function ValueCard({
  badge,
  title,
  description,
  image,
  imageAlt,
  buttonText,
  onButtonClick,
  className,
  ...props
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "grid place-items-center gap-10 lg:grid-cols-2 lg:gap-10",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-5">
        <Badge variant="outline" className="w-fit bg-white text-aimax-gray-600 border-aimax-gray-200">
          {badge}
        </Badge>
        <CardHeader className="px-0">
          <CardTitle className="font-display text-2xl font-bold text-aimax-dark md:text-3xl lg:text-4xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <p className="font-body text-aimax-gray-700 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
          {buttonText && (
            <Button
              variant="primary"
              className="mt-2.5 w-fit gap-2"
              size="lg"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </CardContent>
      </div>
      <div className="relative aspect-[4/3] w-full">
        <img
          src={image}
          alt={imageAlt}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

