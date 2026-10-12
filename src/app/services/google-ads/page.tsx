import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function GoogleAdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Google Ads (PPC)</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Capture high-intent traffic the exact moment they are searching for your products or services. Our Google Ads management ensures you get the highest possible return on your ad spend.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Our PPC Strategy</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Search Campaigns:</strong> Bidding on the most profitable keywords for your business.</li>
          <li><strong>Display Network:</strong> Reaching potential customers across millions of websites and apps.</li>
          <li><strong>Shopping Campaigns:</strong> Showcasing your e-commerce products directly in search results.</li>
          <li><strong>Conversion Tracking:</strong> Setting up precise tracking to measure exactly what is driving sales.</li>
          <li><strong>Ongoing Optimization:</strong> Adjusting bids, testing ad copy, and refining keywords to lower your Cost Per Acquisition (CPA).</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to capture more leads?</h3>
          <p className="mb-6">Let&apos;s build a Google Ads campaign that delivers measurable results.</p>
          <Link href="/contact">
            <Button>Get a PPC Proposal</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
