import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ScanLine, Search, AlarmCheck } from 'lucide-react';

const agentCycle = [
  { name: 'Fact-Finder', icon: Search, status: 'scanning govt records…', color: 'text-blue-400' },
  { name: 'Pattern Detector', icon: ScanLine, status: 'analyzing social volume…', color: 'text-pink-400' },
  { name: 'Verifier', icon: ShieldCheck, status: 'cross-validating sources…', color: 'text-emerald-400' },
  { name: 'Critic', icon: AlarmCheck, status: 'probing weak assumptions…', color: 'text-amber-400' },
];

function ProcessingDebate({ onDone }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % agentCycle.length);
    }, 1400);
    const timeout = setTimeout(() => onDone && onDone(), 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onDone]);

  const ActiveIcon = agentCycle[step].icon;

  return (
    <section className="min-h-[60vh] bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {agentCycle.map((agent, idx) => (
            <motion.div
              key={agent.name}
              className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col items-center justify-center text-center"
              animate={{
                scale: idx === step ? 1.06 : 1,
                boxShadow: idx === step ? '0 0 30px rgba(255,255,255,0.12)' : '0 0 0 rgba(0,0,0,0)'
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <agent.icon className={`h-8 w-8 mb-2 ${agent.color}`} />
              <div className="text-sm font-medium">{agent.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="h-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="text-center text-slate-300"
            >
              <ActiveIcon className={`inline-block h-5 w-5 mr-2 ${agentCycle[step].color}`} />
              <span className="align-middle">{agentCycle[step].name} is {agentCycle[step].status}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ProcessingDebate;
