import { ThemeToggle } from "@/components/ui/theme-toggle";
import { H1, H2, P } from "@tippsy/ui";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to&nbsp;
          <code className="font-mono font-bold">Tippsy</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex items-center justify-center gap-4">
            <span>Toggle Theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <H1 className="text-5xl font-bold text-center">
          Tippsy
        </H1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <H2 className="mb-3 text-2xl font-semibold">
            Find Your Match{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </H2>
          <P className="m-0 max-w-[30ch] text-sm opacity-50">
            Swipe and match with people who share your interests.
          </P>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <H2 className="mb-3 text-2xl font-semibold">
            Discover Bars{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </H2>
          <P className="m-0 max-w-[30ch] text-sm opacity-50">
            Find the perfect venue for your first date.
          </P>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <H2 className="mb-3 text-2xl font-semibold">
            Chat & Connect{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </H2>
          <P className="m-0 max-w-[30ch] text-sm opacity-50">
            Chat with your matches and plan your meetup.
          </P>
        </div>
      </div>
    </main>
  );
} 