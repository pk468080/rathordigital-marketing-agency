import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function MetaAdsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Meta Ads (Facebook & Instagram)</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Unlock the power of social media advertising. We design, launch, and manage highly targeted Meta ad campaigns that drive awareness, generate leads, and boost sales for your business.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">How We Maximize Your ROI</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Audience Targeting:</strong> Utilizing advanced demographics, interests, and behavior targeting to reach your ideal customer.</li>
          <li><strong>Compelling Creatives:</strong> Designing eye-catching images, videos, and ad copy that convert.</li>
          <li><strong>A/B Testing:</strong> Continuously testing different ad variations to find the winning formula.</li>
          <li><strong>Retargeting Campaigns:</strong> Re-engaging users who have previously interacted with your brand.</li>
          <li><strong>Detailed Analytics:</strong> Providing transparent reporting on ad spend, cost per acquisition, and overall ROI.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Want to scale your sales with Meta Ads?</h3>
          <p className="mb-6">Contact us today to discover how our tailored advertising strategies can grow your business.</p>
          <Link href="/contact">
            <Button>Start Advertising</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
