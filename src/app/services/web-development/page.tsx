import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Website Development Services',
  description: 'Custom, fast, mobile-friendly websites built to convert visitors into customers.',
};

export default function WebDevPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Website Development</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Your website is your digital storefront. We build stunning, fast-loading, and secure websites that clearly communicate your value proposition and drive action.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Our Development Process</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Custom Design:</strong> Unique interfaces tailored to your brand identity, not just off-the-shelf templates.</li>
          <li><strong>Modern Tech Stack:</strong> Using the latest technologies (like React, Next.js) for unparalleled performance and SEO.</li>
          <li><strong>Responsive Layouts:</strong> Ensuring flawless user experience across desktops, tablets, and smartphones.</li>
          <li><strong>Content Management:</strong> Integrating easy-to-use CMS solutions so you can update your own content.</li>
          <li><strong>Performance Optimization:</strong> Lightning-fast load times to keep users engaged and please search engines.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Need a new website?</h3>
          <p className="mb-6">Let&apos;s create a digital experience that sets you apart from the competition.</p>
          <Link href="/contact">
            <Button>Get a Web Dev Quote</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
