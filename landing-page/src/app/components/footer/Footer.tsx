"use client";

import React from "react";
import Link from "next/link";

/**
 * Footer-Komponente für die Landing Page
 * Exaktes Layout und Design wie im Bild
 */
const Footer: React.FC = () => {
  // Newsletter-Formular Handler
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier kann später die Newsletter-Logik ergänzt werden
  };

  return (
    <footer className="bg-[#263238] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid für die vier Footer-Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* Logo: SVG oder Bild */}
              <img src="/Icon.png" alt="Nexcent Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-white ml-2">
                Nexcent
              </span>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed mb-6">
              <p>Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <Link
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 bg-[#37474F] rounded-full flex items-center justify-center hover:bg-[#4caf4f] transition-colors"
              >
                {/* SVG Icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              {/* Dribbble */}
              <Link
                href="#"
                aria-label="Dribbble"
                className="w-8 h-8 bg-[#37474F] rounded-full flex items-center justify-center hover:bg-[#4caf4f] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12s12-5.372 12-12c0-6.627-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.299 2.431-.299 2.43 0 4.646.87 6.043 2.057zm-7.94-1.882c1.353 1.80 2.557 3.642 3.618 5.524-2.417.922-5.186 1.231-8.28 1.231-.213 0-.426-.008-.638-.018.842-3.016 2.746-5.564 5.3-6.737zm-5.595 8.404c.225-.008.451-.011.677-.011 3.163 0 6.053-.315 8.611-1.351.138.278.271.56.394.843-3.043.694-5.611 2.186-7.611 4.222-1.491-1.717-2.407-3.934-2.071-6.703zm3.86 8.068c1.75-1.85 4.074-3.217 6.862-3.844.327.845.61 1.719.845 2.619-.58.24-1.195.366-1.825.366-1.789 0-3.425-.633-4.882-1.141zm7.591.177c-.191-.824-.421-1.634-.692-2.42 2.048-.286 4.293-.248 6.701.22-.275 1.94-1.275 3.675-2.735 4.95-.665-.477-1.316-.99-1.949-1.544l-.325-.206z" />
                </svg>
              </Link>
              {/* Twitter */}
              <Link
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 bg-[#37474F] rounded-full flex items-center justify-center hover:bg-[#4caf4f] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 bg-[#37474F] rounded-full flex items-center justify-center hover:bg-[#4caf4f] transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6" style={{ color: '#ffffff' }}>Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#ffffff' }}>Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold  mb-6"style={{ color: '#ffffff' }}>
              Stay up to date
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[#455A64] text-white placeholder-gray-400 rounded-l-lg border-0 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[#455A64] hover:bg-[#4caf4f] text-white rounded-r-lg transition-colors"
                aria-label="Newsletter abonnieren"
              >
                {/* Senden-Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
