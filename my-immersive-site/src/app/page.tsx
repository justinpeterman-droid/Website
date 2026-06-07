import SpinningCubeScene from "@/components/SpinningCubeScene";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Phase 1 scaffold
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            my-immersive-site
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Next.js, Tailwind, and React Three Fiber are wired. The spinning cube
            below is a crude 3D pipeline smoke test — it will be removed in Phase
            4 when the persistent canvas lands.
          </p>
        </div>
        <SpinningCubeScene />
      </main>
    </div>
  );
}
