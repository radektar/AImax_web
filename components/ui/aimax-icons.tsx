import { cn } from "@/lib/utils";
import { 
  Heart, 
  Users, 
  Stethoscope, 
  ShieldCheck, 
  Clock, 
  MessageCircle,
  UserCheck,
  Activity,
  Brain,
  Zap,
  Shield,
  Smile,
  CheckCircle,
  ArrowRight,
  Plus,
  Settings,
  Download,
  Upload,
  Search,
  Bell,
  Calendar,
  FileText,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  type LucideIcon
} from "lucide-react";

interface IconProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "default" | "primary" | "secondary" | "muted" | "white" | "success" | "warning" | "error";
}

const sizeClasses = {
  xs: "h-3 w-3",
  sm: "h-4 w-4", 
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8"
};

const colorClasses = {
  default: "text-aimax-gray-600",
  primary: "text-aimax-primary-500",
  secondary: "text-aimax-secondary-500",
  muted: "text-aimax-gray-400",
  white: "text-white",
  success: "text-green-500",
  warning: "text-yellow-500", 
  error: "text-red-500"
};

/**
 * AImax Icon Wrapper Component
 * Provides consistent sizing and coloring for all icons
 */
function AImaxIcon({ 
  icon: Icon, 
  className, 
  size = "md", 
  color = "default",
  ...props 
}: IconProps & { icon: LucideIcon }) {
  return (
    <Icon 
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
}

/**
 * AImax Healthcare Icons
 * Curated set of icons for healthcare and medical contexts
 */
export const HealthcareIcons = {
  // Core Healthcare
  Heart,
  Stethoscope,
  Activity,
  Shield,
  ShieldCheck,
  
  // People & Users
  Users,
  UserCheck,
  
  // AI & Technology
  Brain,
  Zap,
  Lightbulb,
  
  // Communication
  MessageCircle,
  Phone,
  Mail,
  
  // Time & Scheduling  
  Clock,
  Calendar,
  
  // Success & Quality
  CheckCircle,
  Smile,
  Star,
  Award,
};

/**
 * AImax UI Icons  
 * Common interface and interaction icons
 */
export const UIIcons = {
  // Navigation
  ArrowRight,
  
  // Actions
  Plus,
  Settings,
  Download,
  Upload,
  Search,
  
  // Notifications
  Bell,
  
  // Content
  FileText,
  
  // Location
  MapPin,
  
  // Analytics
  TrendingUp,
  Target,
};

/**
 * AImax Icon Badge Component
 * Icon with background for emphasis and branding
 */
export function AImaxIconBadge({
  icon: Icon,
  className,
  size = "md",
  variant = "primary",
  shape = "rounded"
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "muted" | "success" | "warning" | "error";
  shape?: "rounded" | "circle" | "square";
}) {
  const badgeSizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12", 
    xl: "h-16 w-16"
  };

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8"
  };

  const variantClasses = {
    primary: "bg-aimax-primary-500 text-white",
    secondary: "bg-aimax-secondary-500 text-white", 
    muted: "bg-aimax-gray-100 text-aimax-gray-600",
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    error: "bg-red-100 text-red-600"
  };

  const shapeClasses = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    square: "rounded-none"
  };

  return (
    <div className={cn(
      "flex items-center justify-center shadow-sm",
      badgeSizeClasses[size],
      variantClasses[variant],
      shapeClasses[shape],
      className
    )}>
      <Icon className={cn("shrink-0", iconSizeClasses[size])} />
    </div>
  );
}

/**
 * AImax Feature Icon Component
 * Large icon with text for feature showcases
 */
export function AImaxFeatureIcon({
  icon: Icon,
  title,
  description,
  className,
  size = "lg",
  variant = "primary"
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "muted";
}) {
  return (
    <div className={cn("text-center space-y-3", className)}>
      <div className="flex justify-center">
        <AImaxIconBadge 
          icon={Icon} 
          size={size} 
          variant={variant} 
          shape="circle"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-body font-semibold text-aimax-dark text-lg">
          {title}
        </h3>
        {description && (
          <p className="font-body text-aimax-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Export the base icon component for custom usage
export { AImaxIcon };
