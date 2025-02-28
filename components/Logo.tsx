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
      <h1 className={`text-4xl md:text-5xl font-bold ${mrsSheppards.className} whitespace-nowrap mx-2`} style={{ color: '#ff007f' }}>
        Tippsy
      </h1>
    </div>
  );
} 