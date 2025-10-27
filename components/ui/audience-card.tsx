import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AudienceCardProps extends React.ComponentProps<"div"> {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  imageClassName?: string;
}

export function AudienceCard({
  title,
  description,
  image,
  icon,
  imageClassName,
  className,
  ...props
}: AudienceCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border",
        className
      )}
      {...props}
    >
      <div className={cn("min-h-[18rem] lg:min-h-[20rem]", imageClassName)}>
        <img
          src={image}
          alt={title}
          className="aspect-[16/9] h-full w-full object-cover object-center"
        />
      </div>
      <CardContent className="px-6 py-6 md:px-8 md:py-8">
        {icon && (
          <div className="mb-3">
            {icon}
          </div>
        )}
        <CardTitle className="font-display mb-3 text-2xl font-bold text-aimax-dark md:text-3xl">
          {title}
        </CardTitle>
        <CardDescription className="font-body text-base lg:text-lg leading-relaxed text-aimax-gray-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

