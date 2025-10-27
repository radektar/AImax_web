import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">AImax Design System</h1>
          <p className="text-lg text-muted-foreground">
            Complete design tokens, components, and styling guidelines for the AImax landing page.
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brand Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>AImax primary and secondary colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-green-500 border border-gray-200"></div>
                    <div>
                      <p className="font-semibold">Green-500</p>
                      <p className="text-sm text-muted-foreground">#26C6E2</p>
                      <code className="text-xs">bg-green-500</code>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-blue-500 border border-gray-200"></div>
                    <div>
                      <p className="font-semibold">Blue-500</p>
                      <p className="text-sm text-muted-foreground">#2760B6</p>
                      <code className="text-xs">bg-blue-500</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gray Scale */}
            <Card>
              <CardHeader>
                <CardTitle>Gray Scale</CardTitle>
                <CardDescription>Neutral grays for text and UI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
                    <div key={shade} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-aimax-gray-${shade} border border-gray-200`}></div>
                      <div>
                        <p className="font-semibold">Gray-{shade}</p>
                        <code className="text-xs">bg-aimax-gray-{shade}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Background Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Background Colors</CardTitle>
                <CardDescription>Section and card backgrounds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-background border-2 border-border"></div>
                    <div>
                      <p className="font-semibold">Background</p>
                      <code className="text-xs">bg-background</code>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-aimax-light border-2 border-border"></div>
                    <div>
                      <p className="font-semibold">AImax Light</p>
                      <code className="text-xs">bg-aimax-light</code>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-green-50 border-2 border-border"></div>
                    <div>
                      <p className="font-semibold">Green-50</p>
                      <code className="text-xs">bg-green-50</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Scale Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing Scale</h2>
          <Card>
            <CardHeader>
              <CardTitle>Standard Spacing Values</CardTitle>
              <CardDescription>Consistent spacing tokens for padding, margins, and gaps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: 'Extra Small', token: 'xs', value: '4px', usage: 'Inline elements' },
                { name: 'Small', token: 'sm', value: '8px', usage: 'Input padding' },
                { name: 'Medium', token: 'md', value: '16px', usage: 'Content gaps' },
                { name: 'Large', token: 'lg', value: '24px', usage: 'Minor gaps' },
                { name: 'Extra Large', token: 'xl', value: '32px', usage: 'Major gaps' },
                { name: '2XL', token: '2xl', value: '48px', usage: 'Minor section spacing' },
                { name: '3XL', token: '3xl', value: '64px', usage: 'Major section spacing' },
                { name: '4XL', token: '4xl', value: '96px', usage: 'Extra large spacing' },
              ].map((spacing) => (
                <div key={spacing.token} className="flex items-center gap-6 border-b pb-4 last:border-b-0">
                  <div className="w-32 font-mono text-sm">{spacing.token}</div>
                  <div className="flex-1">
                    <div className="bg-muted h-8 rounded" style={{ width: spacing.value }}></div>
                  </div>
                  <div className="text-sm text-muted-foreground">{spacing.value}</div>
                  <div className="text-sm font-medium">{spacing.usage}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography Scale</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Display Typography */}
            <Card>
              <CardHeader>
                <CardTitle>Display & Headings</CardTitle>
                <CardDescription>Page and section headings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xl text-muted-foreground mb-2">Page Title</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
                    Main Heading
                  </h1>
                  <code className="text-xs text-muted-foreground">text-4xl sm:text-5xl lg:text-6xl font-display font-bold</code>
                </div>
                <div>
                  <p className="text-xl text-muted-foreground mb-2">Section Heading</p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                    Section Title
                  </h2>
                  <code className="text-xs text-muted-foreground">text-3xl sm:text-4xl lg:text-5xl font-display font-bold</code>
                </div>
                <div>
                  <p className="text-xl text-muted-foreground mb-2">Card Title</p>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    Card Heading
                  </h3>
                  <code className="text-xs text-muted-foreground">text-2xl sm:text-3xl font-display font-bold</code>
                </div>
              </CardContent>
            </Card>

            {/* Body Typography */}
            <Card>
              <CardHeader>
                <CardTitle>Body Text</CardTitle>
                <CardDescription>Paragraph and description text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-2">Lead Paragraph</p>
                  <p className="text-lg md:text-xl leading-relaxed text-aimax-gray-600">
                    This is a lead paragraph with larger text size for emphasis. It should be used for important introductory text.
                  </p>
                  <code className="text-xs text-muted-foreground">text-lg md:text-xl leading-relaxed</code>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">Body Text</p>
                  <p className="text-base lg:text-lg leading-relaxed text-aimax-gray-700">
                    This is regular body text used throughout the site. It should be readable and comfortable for long-form content.
                  </p>
                  <code className="text-xs text-muted-foreground">text-base lg:text-lg leading-relaxed</code>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">Small Text</p>
                  <p className="text-sm text-muted-foreground">
                    This is small text typically used for labels, captions, or secondary information.
                  </p>
                  <code className="text-xs text-muted-foreground">text-sm text-muted-foreground</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Border Radius Scale</h2>
          <Card>
            <CardHeader>
              <CardTitle>Standard Border Radius Values</CardTitle>
              <CardDescription>Consistent border radius for cards, buttons, and images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { token: 'sm', value: '4px', usage: 'Small elements' },
                { token: 'md', value: '8px', usage: 'Buttons' },
                { token: 'lg', value: '12px', usage: 'Images' },
                { token: 'xl', value: '16px', usage: 'Cards' },
                { token: '2xl', value: '24px', usage: 'Large cards' },
                { token: 'full', value: '9999px', usage: 'Pills, badges' },
              ].map((radius) => (
                <div key={radius.token} className="flex items-center gap-6 border-b pb-4 last:border-b-0">
                  <div className="w-32 font-mono text-sm">{radius.token}</div>
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-gradient-to-br from-green-500 to-blue-500"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: radius.value,
                      }}
                    ></div>
                    <div>
                      <div className="text-sm font-medium">{radius.value}</div>
                      <div className="text-xs text-muted-foreground">{radius.usage}</div>
                    </div>
                  </div>
                  <code className="text-xs text-muted-foreground">rounded-{radius.token === 'full' ? 'full' : `radius-${radius.token}`}</code>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Component Examples Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Component Examples</h2>
          
          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="outline-secondary">Outline Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Badges</h3>
            <div className="flex flex-wrap gap-4">
              <Badge>Default Badge</Badge>
              <Badge variant="outline">Outline Badge</Badge>
              <Badge variant="secondary">Secondary Badge</Badge>
              <Badge variant="destructive">Destructive Badge</Badge>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>This is a card description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is card content with consistent spacing and styling.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>With custom styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Feature one
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Feature two
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Feature three
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section Spacing Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Section Spacing Standards</h2>
          <Card>
            <CardHeader>
              <CardTitle>Section Vertical Spacing</CardTitle>
              <CardDescription>Consistent spacing between major page sections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Major Sections</p>
                  <div className="bg-green-100 border-2 border-green-500 py-16 rounded-lg text-center">
                    <code className="text-sm">py-16 (64px)</code>
                    <p className="text-xs text-muted-foreground mt-2">Used for: Hero, Key Features, CTA</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Minor Sections</p>
                  <div className="bg-blue-100 border-2 border-blue-500 py-12 rounded-lg text-center">
                    <code className="text-sm">py-12 (48px)</code>
                    <p className="text-xs text-muted-foreground mt-2">Used for: Partners, Feature subsections</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold mb-2">Content Gaps</p>
                  <div className="grid grid-cols-3 gap-spacing-xl">
                    <div className="bg-muted p-4 rounded text-center text-sm">Major (32px)</div>
                    <div className="bg-muted p-4 rounded text-center text-sm">Medium (24px)</div>
                    <div className="bg-muted p-4 rounded text-center text-sm">Small (16px)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

