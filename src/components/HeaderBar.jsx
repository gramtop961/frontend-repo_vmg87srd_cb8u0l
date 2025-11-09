import { Sparkles } from 'lucide-react';

function HeaderBar() {
  return (
    <header className="w-full bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold text-slate-100">TruthLens</span>
        </div>
        <nav className="text-sm text-slate-400">Multi-Agent AI Fact Checking</nav>
      </div>
    </header>
  );
}

export default HeaderBar;
