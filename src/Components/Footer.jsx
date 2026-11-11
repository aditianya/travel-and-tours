
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 md:px-12 py-16">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-2">
            <h2 className="text-4xl font-playfair mb-4">
              Way.Farer
            </h2>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Discover beautiful destinations, explore new
              cultures and create unforgettable memories
              with every journey.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#instagram" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#facebook" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <Link to="/">Home</Link>
              <Link to="/products">Tours</Link>
              <Link to="/login">Login</Link>
              <Link to="/profile">My Profile</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Get in Touch
            </h3>

            <p className="text-slate-400 mb-4">
              Have questions about your next adventure?
              We'd love to hear from you.
            </p>

            <a
              href="mailto:hello@wayfarer.com"
              className="inline-flex items-center gap-2 hover:text-slate-300"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-400">
          <p>© 2026 Way.Farer. All rights reserved.</p>
          <p>Made for travellers, by travellers.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
