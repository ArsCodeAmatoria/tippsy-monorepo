import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tippsy - Dating & Bar Matching App</title>
        <meta name="description" content="Find your perfect match and the perfect bar for your first date." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <div className="w-full max-w-5xl flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">
            Tippsy
          </h1>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Sign In
          </button>
        </div>
        
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mb-16">
          <h2 className="text-5xl font-bold mb-6">Find Your Match & The Perfect Bar</h2>
          <p className="text-xl mb-8">
            Tippsy helps you connect with like-minded people and discover great bars for your first date.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium">
              Get Started
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Match With People</h3>
            <p>Find people who share your interests and connect with them through our intuitive matching system.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Discover Bars</h3>
            <p>Browse through curated lists of bars perfect for first dates in your area.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Plan Your Date</h3>
            <p>Coordinate with your match and plan the perfect first date at one of our partner bars.</p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="w-full max-w-5xl border-t border-gray-200 dark:border-gray-700 pt-8 mt-auto text-center">
          <p>© {new Date().getFullYear()} Tippsy. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
} 