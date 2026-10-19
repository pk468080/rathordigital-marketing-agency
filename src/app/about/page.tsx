import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${site.name} — our mission to turn traditional businesses into digital powerhouses through SEO, ads, web development and more.`,
};

const highlights = [
  { value: '7+', label: 'Services under one roof' },
  { value: '100%', label: 'Transparent reporting' },
  { value: '1:1', label: 'Dedicated strategy for every client' },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">About {site.shortName}</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We are a full-service digital marketing and web development agency dedicated to helping businesses thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
          <p className="text-lg text-slate-600 mb-6">
            At {site.name}, our mission is simple: to transform traditional businesses into digital powerhouses. We believe that every business, regardless of size, deserves a robust online presence that drives real, measurable growth.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            We don&apos;t just build websites or run ads; we build comprehensive digital ecosystems. From the first click on a Meta Ad to the final checkout on a custom e-commerce store, we optimize every step of the customer journey.
          </p>
          <Link href="/contact">
            <Button>Work With Us</Button>
          </Link>
        </div>
        <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-8">Why businesses choose us</h3>
          <div className="space-y-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex items-baseline gap-4">
                <span className="text-4xl font-extrabold">{item.value}</span>
                <span className="text-blue-100">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-blue-100 text-sm">
            Every engagement starts with a free consultation — no jargon, no lock-in, just a clear plan.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Data-Driven Approach</h3>
            <p className="text-slate-600">We make decisions based on analytics, not guesswork, ensuring your budget is spent efficiently.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Full-Service Capabilities</h3>
            <p className="text-slate-600">From SEO and Ads to Development and Video Editing, we handle everything under one roof.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Transparent Reporting</h3>
            <p className="text-slate-600">You&apos;ll always know exactly how your campaigns are performing with our clear, honest reporting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
