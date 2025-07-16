import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white z-50 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-3xl font-bold leading-tight">Baajar<br />E-Com</h1>
          <div className="mt-6">
            <p className="font-semibold mb-2">Contact Us</p>
            <div className="flex items-center gap-2 mb-2">
              <FaWhatsapp />
              <span>Whats App<br />+1 202-918-2132</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>Call Us<br />+1 202-918-2132</span>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="font-semibold border-b border-white mb-4 inline-block">Most Popular Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>• Staples</li>
            <li>• Beverages</li>
            <li>• Personal Care</li>
            <li>• Home Care</li>
            <li>• Baby Care</li>
            <li>• Vegetables & Fruits</li>
            <li>• Snacks & Foods</li>
            <li>• Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h3 className="font-semibold border-b border-white mb-4 inline-block">Customer Services</h3>
          <ul className="space-y-2 text-sm">
            <li>• About Us</li>
            <li>• Terms & Conditions</li>
            <li>• FAQ</li>
            <li>• Privacy Policy</li>
            <li>• E-waste Policy</li>
            <li>• Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-10 pt-4 text-center text-sm">
        © 2025 All rights reserved. Baajar Ltd.
      </div>
    </footer>
  );
}
