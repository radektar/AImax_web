import * as React from "react";
import { Slot as SlotPrimitive } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-body inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        // AImax Primary Button - Green
        primary:
          "bg-green-500 text-white shadow-md hover:bg-green-600 active:bg-green-700 focus-visible:ring-green-500 disabled:bg-aimax-gray-300",
        
        // AImax Secondary Button - Blue
        secondary:
          "bg-aimax-secondary-500 text-white shadow-md hover:bg-aimax-secondary-600 active:bg-aimax-secondary-700 focus-visible:ring-aimax-secondary-500 disabled:bg-aimax-gray-300",
        
        // AImax Outline Button - Primary Border
        outline:
          "border-2 border-green-500 bg-transparent text-green-600 shadow-sm hover:bg-green-50 active:bg-green-100 focus-visible:ring-green-500 disabled:border-aimax-gray-300 disabled:text-aimax-gray-400",
        
        // AImax Secondary Outline - Secondary Border
        "outline-secondary":
          "border-2 border-aimax-secondary-500 bg-transparent text-aimax-secondary-500 shadow-sm hover:bg-aimax-secondary-50 active:bg-aimax-secondary-100 focus-visible:ring-aimax-secondary-500 disabled:border-aimax-gray-300 disabled:text-aimax-gray-400",
        
        // AImax Ghost Button
        ghost:
          "bg-transparent text-aimax-gray-700 hover:bg-aimax-gray-100 active:bg-aimax-gray-200 focus-visible:ring-aimax-gray-500",
        
        // AImax Link Button
        link: 
          "bg-transparent text-aimax-primary-500 underline-offset-4 hover:underline hover:text-aimax-primary-600 active:text-aimax-primary-700 focus-visible:ring-aimax-primary-500",
        
        // AImax Destructive Button
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500 disabled:bg-aimax-gray-300"
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md gap-1.5 has-[>svg]:px-2.5",
        default: "h-10 px-4 py-2 rounded-lg has-[>svg]:px-3",
        lg: "h-12 px-6 text-base rounded-lg has-[>svg]:px-5",
        xl: "h-14 px-8 text-lg rounded-xl has-[>svg]:px-6",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-lg"
      },
      shape: {
        default: "",
        rounded: "rounded-full",
        square: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      shape: "default"
    }
  }
);

function Button({
  className,
  variant,
  size,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
