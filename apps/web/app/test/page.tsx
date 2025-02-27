import { Button } from '@tippsy/ui';

export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Tippsy Test Page</h1>
      <p className="mb-4">This is a test page to verify that our Next.js app is working correctly.</p>
      <p className="mb-8">If you can see this page, it means the Next.js app is properly loading custom pages.</p>
      <Button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Tippsy UI Button
      </Button>
    </div>
  );
} 