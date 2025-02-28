import React from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Tippsy</title>
        <meta name="description" content="Find your perfect match and the perfect bar for your first date." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
        {/* Header */}
        <header className="border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-4xl md:text-5xl font-mrs-shepard text-black dark:text-white">Tippsy</h1>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-black" />}
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Welcome to Tippsy</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Find your perfect match at the perfect venue.
            </p>
            <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="border-t border-gray-100 dark:border-gray-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Tippsy. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
} 