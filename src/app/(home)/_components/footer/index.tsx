import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark py-7 mt-12 text-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full sm:mb-0 sm:w-1/3">
            <h3 className="text-lg font-semibold">LegalMagnet</h3>
            <p className="mt-2 text-sm">
              Empowering businesses with innovative legal solutions. Automating
              your legal tasks with ease and precision.
            </p>
          </div>

          <div className="mb-6 w-full sm:mb-0 sm:w-1/3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.004c-5.523 0-10 4.478-10 10s4.477 10 10 10 10-4.478 10-10-4.477-10-10-10zm2.82 9.826l-1.415 1.415-1.616-1.616c-.246.148-.523.287-.814.418-.613.248-1.307.462-1.98.662-.198-.174-.39-.35-.597-.52.364-.771.679-1.56.931-2.43l1.522-2.227c.267-.4.39-.866.39-1.338s-.123-.939-.39-1.338l-1.522-2.227c-.252-.87-.567-1.659-.931-2.43.207-.17.399-.346.597-.52.673.2 1.367.414 1.98.662.291-.131.568-.27.814-.418l1.616-1.616 1.415 1.415-2.392 2.392c-.339.338-.532.778-.618 1.249-.179.826-.271 1.694-.276 2.571-.006.911.091 1.786.277 2.607.086.49.279.95.569 1.362l2.392 2.392z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20ZM13 7a1 1 0 0 1 1 1v5.26l3.26 1.93a1 1 0 0 1 .46 1.33 1 1 0 0 1-1.32.46L13 13.26V8a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} LegalMagnet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
