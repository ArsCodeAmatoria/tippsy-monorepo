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
    <div className="overflow-visible px-3">
      <h1 className={`text-4xl md:text-5xl font-bold ${mrsSheppards.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 dark:from-pink-400 dark:to-violet-400 tracking-wider`}>
        Tippsy
      </h1>
    </div>
  );
} 