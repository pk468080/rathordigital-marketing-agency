import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${site.name} for a free consultation on SEO, ads, web development and more.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Ready to take your business to the next level? Get in touch with us today for a free consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Email</h3>
                <p className="mt-1 text-slate-600">
                  <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                <p className="mt-1 text-slate-600">
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Office</h3>
                <p className="mt-1 text-slate-600">
                  {site.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
