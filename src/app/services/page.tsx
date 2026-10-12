import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Search, MonitorPlay, MousePointerClick, ShoppingCart, Code, Video, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher on Google and drive organic traffic to your website. We optimize your content, technical structure, and backlink profile.",
    icon: Search,
    href: "/services/seo"
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description: "Reach your ideal customers with highly targeted social media advertising campaigns that generate leads and sales.",
    icon: MonitorPlay,
    href: "/services/meta-ads"
  },
  {
    title: "Google Ads",
    description: "Capture high-intent traffic with strategic Pay-Per-Click campaigns. Be there when your customers are searching for you.",
    icon: MousePointerClick,
    href: "/services/google-ads"
  },
  {
    title: "E-commerce Development",
    description: "Build a robust, scalable online store. We specialize in Shopify, WooCommerce, and custom e-commerce solutions.",
    icon: ShoppingCart,
    href: "/services/ecommerce"
  },
  {
    title: "Website Development",
    description: "Custom, responsive, and fast-loading websites that represent your brand and convert visitors into customers.",
    icon: Code,
    href: "/services/web-development"
  },
  {
    title: "Video Editing",
    description: "Professional video editing for YouTube, Reels, TikTok, and promotional materials to engage your audience.",
    icon: Video,
    href: "/services/video-editing"
  },
  {
    title: "Business Online Consultation",
    description: "A complete roadmap to shift your offline business to the digital world. Strategy, implementation, and growth.",
    icon: Briefcase,
    href: "/services/consultation"
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We provide a full suite of digital marketing and development services designed to help your business grow and succeed online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                <Link href={service.href} className="mt-auto">
                  <Button variant="outline" className="w-full justify-between">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
        <p className="text-slate-600 mb-6">Book a free consultation call and we&apos;ll help you figure out the best strategy for your business.</p>
        <Link href="/contact">
          <Button>Book a Free Consultation</Button>
        </Link>
      </div>
    </div>
  );
}
