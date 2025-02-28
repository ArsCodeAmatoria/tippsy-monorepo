import React from 'react';
import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Tippsy Test Page</title>
        <meta name="description" content="A test page for the Tippsy app" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-6">Tippsy Test Page</h1>
        <p className="mb-4">This is a test page using the Pages Router.</p>
        <p>If you can see this page, it means Next.js is working correctly with the Pages Router.</p>
      </div>
    </>
  );
} 