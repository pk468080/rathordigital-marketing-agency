import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Business Consultation Services',
  description: 'Take your brick-and-mortar business online with expert consultation and end-to-end execution.',
};

export default function ConsultationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Business Online Transition & Consultation</h1>
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="text-xl text-slate-600 mb-8">
          Are you a traditional brick-and-mortar business looking to shift online? We provide end-to-end consultation and execution to successfully digitize your operations and reach a global audience.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-4">Our Transformation Roadmap</h2>
        <ul className="list-disc pl-6 space-y-4 text-slate-600 mb-10">
          <li><strong>Digital Strategy Audit:</strong> Assessing your current business model and identifying the best digital channels for growth.</li>
          <li><strong>Infrastructure Setup:</strong> Recommending and setting up the right tools (CRM, e-commerce platforms, payment gateways).</li>
          <li><strong>Brand Digitization:</strong> Adapting your offline brand identity for maximum impact online.</li>
          <li><strong>Team Training:</strong> Equipping your staff with the knowledge to manage digital operations effectively.</li>
          <li><strong>Growth Execution:</strong> Creating a tailored marketing plan to announce your digital presence and drive initial sales.</li>
        </ul>
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-bold mb-4">Ready to take your business online?</h3>
          <p className="mb-6">Book a comprehensive consultation session to map out your digital transformation.</p>
          <Link href="/contact">
            <Button>Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
