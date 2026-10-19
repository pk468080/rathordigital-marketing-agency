import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Video Editing Services',
  description: 'Scroll-stopping video content for social media, ads and YouTube — edited to match your brand.',
};

export default function VideoEditingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Video Editing</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Video is the most engaging form of content on the internet. We provide professional video editing services to help you captivate your audience on social media, YouTube, and your website.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Short-Form Content:</strong> Engaging edits for TikTok, Instagram Reels, and YouTube Shorts designed for maximum retention.</li>
          <li><strong>YouTube Videos:</strong> Professional pacing, color grading, and graphics for long-form content.</li>
          <li><strong>Promotional Videos:</strong> High-quality ads and promotional materials to showcase your products or services.</li>
          <li><strong>Motion Graphics:</strong> Adding professional animations and text effects to elevate your brand.</li>
          <li><strong>Audio Enhancement:</strong> Crisp, clear audio mixing and sound design.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to elevate your video content?</h3>
          <p className="mb-6">Contact us to discuss your video editing needs.</p>
          <Link href="/contact">
            <Button>Get a Quote</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
