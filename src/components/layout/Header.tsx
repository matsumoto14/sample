"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";

export default function Header() {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            VideoHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/videos"
              className="text-gray-700 hover:text-primary-600"
            >
              Videos
            </Link>
            <Link
              href="/subscription"
              className="text-gray-700 hover:text-primary-600"
            >
              Subscription
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600"
            >
              About
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Dashboard
                </Link>
                <button className="btn-outline">Logout</button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-primary-600"
                >
                  Login
                </Link>
                <Link href="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3">
            <Link
              href="/videos"
              className="block text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="/subscription"
              className="block text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscription
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-primary-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button className="btn-outline w-full">Logout</button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
