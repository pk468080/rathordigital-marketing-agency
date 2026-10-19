import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Search Engine Optimization (SEO) Services',
  description: 'Rank higher on Google with our SEO services: keyword research, on-page and technical SEO, link building and local SEO.',
};

export default function SEOPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Search Engine Optimization (SEO)</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Drive consistent, high-quality organic traffic to your website. Our comprehensive SEO strategies ensure that your business appears at the top of search engine results when your potential customers are looking for you.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Our SEO Approach</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Keyword Research:</strong> Identifying high-value, relevant search terms to target.</li>
          <li><strong>On-Page Optimization:</strong> Structuring your website content, meta tags, and headers for maximum search engine visibility.</li>
          <li><strong>Technical SEO:</strong> Ensuring your site loads fast, is mobile-friendly, and easy for search engines to crawl.</li>
          <li><strong>Off-Page & Link Building:</strong> Building authority through high-quality backlinks and digital PR.</li>
          <li><strong>Local SEO:</strong> Optimizing your Google Business Profile to dominate local searches.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to rank higher?</h3>
          <p className="mb-6">Let&apos;s discuss how we can improve your search engine visibility and drive more organic traffic to your site.</p>
          <Link href="/contact">
            <Button>Get an SEO Audit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
