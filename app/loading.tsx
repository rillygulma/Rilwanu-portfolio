export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="relative">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
          R
        </div>
      </div>
    </div>
  );
}