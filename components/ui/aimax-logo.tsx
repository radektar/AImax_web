import { cn } from "@/lib/utils";

interface AImaxLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "logo" | "logo-with-tagline" | "icon-only";
  animated?: boolean;
  color?: "default" | "primary" | "secondary" | "white";
}

const logoSizeClasses = {
  sm: "h-4", // ~16px height, maintains aspect ratio
  md: "h-6", // ~24px height 
  lg: "h-8", // ~32px height
  xl: "h-10", // ~40px height
  "2xl": "h-12" // ~48px height
};

const iconSizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8", 
  lg: "h-10 w-10",
  xl: "h-12 w-12",
  "2xl": "h-16 w-16"
};

const taglineSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
  "2xl": "text-xl"
};

/**
 * Official AImax Logo SVG Component
 * Uses the actual AImax logotype from Logo_AImax.svg
 */
function AImaxLogoSVG({ 
  className, 
  size = "md", 
  color = "default" 
}: { 
  className?: string; 
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "default" | "primary" | "secondary" | "white";
}) {
  const colorClasses = {
    default: "text-aimax-dark",
    primary: "text-aimax-primary-500",
    secondary: "text-aimax-secondary-500", 
    white: "text-white"
  };

  return (
    <svg 
      className={cn(
        "fill-current",
        logoSizeClasses[size],
        colorClasses[color],
        className
      )}
      viewBox="0 0 151 30" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M76.2954 0H75.0413L63.7859 13.2958L52.526 0H51.2764H46.2734V30H51.2764V6.07021L63.7859 21.2502L76.2954 6.07021V30H81.2983V0H76.2954Z" />
      <path d="M41.2724 0H36.2695V30H41.2724V0Z" />
      <path d="M24.5032 0H5.51432C2.4681 0 0 2.4663 0 5.5103V29.9955H5.00292V19.997H25.019V29.9955H30.0219V5.5103C30.0219 2.4663 27.5538 0 24.5076 0H24.5032ZM4.99848 14.9978V6.96786C4.99848 5.87913 5.87899 4.99926 6.96851 4.99926H23.0445C24.1341 4.99926 25.0146 5.87913 25.0146 6.96786V14.9978H4.99848Z" />
      <path d="M112.066 0H93.0768C90.0306 0 87.5625 2.4663 87.5625 5.5103V29.9955H92.5654V19.997H112.582V29.9955H117.584V5.5103C117.584 2.4663 115.116 0 112.07 0H112.066ZM92.561 14.9978V6.96786C92.561 5.87913 93.4415 4.99926 94.531 4.99926H110.607C111.697 4.99926 112.577 5.87913 112.577 6.96786V14.9978H92.561Z" />
      <path d="M150.1 0H144.83L135.091 11.2472L125.347 0H120.082V1.18205L131.542 14.9222L120.082 28.6669V30H125.223L135.091 18.7483L144.959 30H150.1V28.6669L138.639 14.9222L150.1 1.18205V0Z" />
    </svg>
  );
}

/**
 * AImax Medical Cross Icon Component
 * Simplified medical cross for use as an icon alongside the main logo
 */
function AImaxMedicalCross({ className, size = "md", color = "primary" }: { 
  className?: string; 
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "primary" | "secondary" | "white";
}) {
  const bgColorClasses = {
    primary: "bg-aimax-primary-500",
    secondary: "bg-aimax-secondary-500",
    white: "bg-white border-2 border-aimax-gray-200"
  };

  const iconColorClasses = {
    primary: "text-white",
    secondary: "text-white", 
    white: "text-aimax-primary-500"
  };

  return (
    <div className={cn(
      "flex items-center justify-center rounded-lg shadow-sm",
      iconSizeClasses[size],
      bgColorClasses[color],
      className
    )}>
      <svg 
        className={cn(
          "fill-current",
          iconColorClasses[color],
          {
            "h-3 w-3": size === "sm",
            "h-4 w-4": size === "md", 
            "h-5 w-5": size === "lg",
            "h-6 w-6": size === "xl",
            "h-8 w-8": size === "2xl"
          }
        )} 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L12 8L18 8L18 12L12 12L12 22L6 22L6 12L0 12L0 8L6 8L6 2L12 2Z"/>
      </svg>
    </div>
  );
}

/**
 * Complete AImax Logo Component
 * Uses the official AImax logotype with optional medical cross icon and tagline
 */
export function AImaxLogo({ 
  className, 
  size = "md", 
  variant = "logo",
  animated = false,
  color = "default"
}: AImaxLogoProps) {
  const baseClasses = cn(
    "flex items-center",
    {
      "transition-transform duration-200 hover:scale-105": animated
    },
    className
  );

  if (variant === "icon-only") {
    return (
      <div className={baseClasses}>
        <AImaxMedicalCross size={size} color={color === "white" ? "white" : "primary"} />
      </div>
    );
  }

  if (variant === "logo") {
    return (
      <div className={baseClasses}>
        <AImaxLogoSVG size={size} color={color} />
      </div>
    );
  }

  if (variant === "logo-with-tagline") {
    return (
      <div className={baseClasses}>
        <AImaxMedicalCross size={size} color={color === "white" ? "white" : "primary"} className="mr-3" />
        <div className="flex flex-col">
          <AImaxLogoSVG size={size} color={color} />
          <span className={cn(
            "font-body font-medium text-aimax-primary-500 leading-tight mt-1",
            taglineSizeClasses[size],
            {
              "text-white": color === "white",
              "text-aimax-primary-500": color !== "white"
            }
          )}>
            Healthcare AI Assistant
          </span>
        </div>
      </div>
    );
  }

  // Default to logo variant
  return (
    <div className={baseClasses}>
      <AImaxLogoSVG size={size} color={color} />
    </div>
  );
}

// Export individual components for flexibility
export { AImaxLogoSVG, AImaxMedicalCross };
