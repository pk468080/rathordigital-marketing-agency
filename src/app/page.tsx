import Link from 'next/link';
import { site } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight, BarChart, Monitor, Video, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Take Your Business <span className="text-primary">Online</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            {site.name} provides comprehensive digital solutions to scale your business. From SEO to full e-commerce development, we&apos;ve got you covered.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Get a Free Consultation <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer end-to-end digital marketing and development services to ensure your brand stands out in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <BarChart className="w-6 h-6" />
                </div>
                <CardTitle>Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Data-driven SEO, Google Ads, and Meta Ads to drive targeted traffic.</p>
                <Link href="/services/seo" className="text-primary font-medium hover:underline flex items-center text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Monitor className="w-6 h-6" />
                </div>
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Custom websites and E-commerce stores built for performance and conversion.</p>
                <Link href="/services/web-development" className="text-primary font-medium hover:underline flex items-center text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Video className="w-6 h-6" />
                </div>
                <CardTitle>Video Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Engaging video content to capture your audience&apos;s attention on social media.</p>
                <Link href="/services/video-editing" className="text-primary font-medium hover:underline flex items-center text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <CardTitle>Business Transition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Full consultation and execution to shift your brick-and-mortar business online.</p>
                <Link href="/services/consultation" className="text-primary font-medium hover:underline flex items-center text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to grow your digital presence?</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Let&apos;s discuss your goals and create a custom strategy for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-primary font-bold">
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
