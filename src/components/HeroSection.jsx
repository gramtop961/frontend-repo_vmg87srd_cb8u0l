import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';

function HeroSection({ onInvestigate }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onInvestigate(input.trim());
  };

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            TruthLens: Agentic Fact Verification
          </h1>
          <p className="text-slate-300 mb-8 max-w-2xl">
            Investigate claims with a multi-agent AI that weighs official records against social signals to reach a nuanced verdict.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a claim to investigate (e.g., 'Does E20 fuel damage engines?')."
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-100 placeholder-slate-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition-colors font-medium shadow-lg shadow-emerald-600/25"
            >
              Investigate
            </button>
          </form>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  );
}

export default HeroSection;
