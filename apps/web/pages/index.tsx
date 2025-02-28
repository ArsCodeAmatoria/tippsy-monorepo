import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tippsy</title>
        <meta name="description" content="Tippsy app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Tippsy</h1>
        <p className="mb-4">Welcome to Tippsy - This is a simple test page.</p>
        <p>If you can see this page, it means Next.js is working correctly.</p>
      </div>
    </>
  );
} 