import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

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
                <p className="mt-1 text-slate-600">hello@rathoreagency.com</p>
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
                <p className="mt-1 text-slate-600">+1 (555) 123-4567</p>
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
                <p className="mt-1 text-slate-600">123 Digital Way<br />Tech District, City 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form UI */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First name</label>
                <input type="text" name="first-name" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2" placeholder="John" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last name</label>
                <input type="text" name="last-name" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2" placeholder="john@example.com" />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service you are interested in</label>
              <select id="service" name="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2 bg-white">
                <option>SEO</option>
                <option>Meta Ads</option>
                <option>Google Ads</option>
                <option>Web Development</option>
                <option>E-commerce Store</option>
                <option>Video Editing</option>
                <option>Business Transition</option>
                <option>Other / Unsure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm border p-2" placeholder="Tell us about your project..."></textarea>
            </div>

            <div>
              <Button type="button" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
