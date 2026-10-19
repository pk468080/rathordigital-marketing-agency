import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'E-commerce Store Development',
  description: 'Launch your online store with a custom e-commerce website built for sales — product pages, checkout and payments.',
};

export default function EcommercePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">E-commerce Store Development</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Launch a powerful, scalable online store that turns visitors into loyal customers. We build high-performing e-commerce solutions tailored to your unique brand and products.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">What We Build</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Platform Expertise:</strong> Development on Shopify, WooCommerce, or custom built solutions.</li>
          <li><strong>Conversion Rate Optimization (CRO):</strong> Designing intuitive user journeys that maximize checkout completion rates.</li>
          <li><strong>Mobile-First Design:</strong> Ensuring your store looks and functions perfectly on all devices.</li>
          <li><strong>Payment & Shipping Integrations:</strong> Seamlessly connecting the payment gateways and logistics partners you need.</li>
          <li><strong>Inventory Management:</strong> Setting up systems to easily manage your products, variants, and stock levels.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to sell online?</h3>
          <p className="mb-6">Let&apos;s build an e-commerce store that scales with your business.</p>
          <Link href="/contact">
            <Button>Discuss Your Project</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
