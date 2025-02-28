"use client";

import React from 'react';
import { Mrs_Sheppards } from 'next/font/google';

const mrsSheppards = Mrs_Sheppards({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export function Logo() {
  return (
    <div className="relative z-50 px-6 py-3">
      <h1 className={`text-4xl md:text-5xl font-bold ${mrsSheppards.className} text-black dark:text-white tracking-widest mx-2 whitespace-nowrap`}>
        Tippsy
      </h1>
    </div>
  );
} 