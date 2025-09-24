import { Button } from "./button";
import { Heart, Download, ArrowRight, Plus, Settings, Trash2 } from "lucide-react";

/**
 * AImax Button Showcase Component
 * Demonstrates all button variants, sizes, and states
 * Used for design system documentation and testing
 */
export function ButtonShowcase() {
  return (
    <div className="p-8 space-y-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-aimax-dark mb-2">
          AImax Button System
        </h1>
        <p className="font-body text-aimax-gray-600 mb-8">
          Comprehensive button component system with AImax brand styling
        </p>

        {/* Button Variants */}
        <section className="space-y-6">
          <h2 className="font-body text-xl font-semibold text-aimax-dark">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Primary Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Primary (Secondary Blue)</h3>
              <div className="space-y-2">
                <Button variant="primary">Primary Button</Button>
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="primary">
                  <Heart className="h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Secondary (Primary Teal)</h3>
              <div className="space-y-2">
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button variant="secondary">
                  <Download className="h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Outline (Primary)</h3>
              <div className="space-y-2">
                <Button variant="outline">Outline Button</Button>
                <Button variant="outline" disabled>Disabled</Button>
                <Button variant="outline">
                  <ArrowRight className="h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Secondary Outline Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Outline Secondary</h3>
              <div className="space-y-2">
                <Button variant="outline-secondary">Outline Secondary</Button>
                <Button variant="outline-secondary" disabled>Disabled</Button>
                <Button variant="outline-secondary">
                  <Plus className="h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Ghost</h3>
              <div className="space-y-2">
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="ghost" disabled>Disabled</Button>
                <Button variant="ghost">
                  <Settings className="h-4 w-4" />
                  With Icon
                </Button>
              </div>
            </div>

            {/* Link Buttons */}
            <div className="space-y-3">
              <h3 className="font-body text-sm font-medium text-aimax-gray-700">Link</h3>
              <div className="space-y-2">
                <Button variant="link">Link Button</Button>
                <Button variant="link" disabled>Disabled</Button>
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4" />
                  Destructive
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Sizes */}
        <section className="space-y-6">
          <h2 className="font-body text-xl font-semibold text-aimax-dark">Button Sizes</h2>
          <div className="flex flex-wrap items-end gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="default">Default</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Button Shapes */}
        <section className="space-y-6">
          <h2 className="font-body text-xl font-semibold text-aimax-dark">Button Shapes</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" shape="default">Default</Button>
            <Button variant="primary" shape="rounded">Rounded</Button>
            <Button variant="primary" shape="square">Square</Button>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="space-y-6">
          <h2 className="font-body text-xl font-semibold text-aimax-dark">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="icon-sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="primary" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="primary" size="icon-lg">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" shape="rounded">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Healthcare Use Cases */}
        <section className="space-y-6">
          <h2 className="font-body text-xl font-semibold text-aimax-dark">Healthcare Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-body text-lg font-medium text-aimax-dark">Patient Actions</h3>
              <div className="space-y-2">
                <Button variant="primary" size="lg" shape="rounded" className="w-full">
                  <Heart className="h-5 w-5" />
                  Start Care Journey
                </Button>
                <Button variant="outline" size="lg" shape="rounded" className="w-full">
                  Book Appointment
                </Button>
                <Button variant="ghost" className="w-full">
                  View Health Records
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-body text-lg font-medium text-aimax-dark">Medical Personnel</h3>
              <div className="space-y-2">
                <Button variant="secondary" size="lg" className="w-full">
                  <Settings className="h-5 w-5" />
                  Access Dashboard
                </Button>
                <Button variant="outline-secondary" size="lg" className="w-full">
                  Patient Management
                </Button>
                <Button variant="link">
                  Clinical Guidelines
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
