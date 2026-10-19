import Link from 'next/link';
import { site } from '@/lib/site';

// Computed once at build time (pages are statically prerendered).
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{site.shortName}</h3>
          <p className="text-gray-400 text-sm">
            Empowering businesses to thrive online through comprehensive digital marketing and development solutions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO</Link></li>
            <li><Link href="/services/meta-ads" className="hover:text-white transition-colors">Meta Ads</Link></li>
            <li><Link href="/services/google-ads" className="hover:text-white transition-colors">Google Ads</Link></li>
            <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              Email:{' '}
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
