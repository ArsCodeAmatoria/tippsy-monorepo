'use client';

import { Button } from '../components/ui';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h2 className="text-xl font-bold mb-4">Tippsy Custom Error Page</h2>
      <p className="mb-4">Something went wrong with the Tippsy app.</p>
      <Button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </Button>
    </div>
  );
} 