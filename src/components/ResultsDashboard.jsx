import { BadgeCheck, AlertTriangle, Gauge, BookOpen, MessagesSquare } from 'lucide-react';

const badgeByVerdict = {
  True: { color: 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30', Icon: BadgeCheck, label: 'True' },
  False: { color: 'bg-rose-600/20 text-rose-300 border-rose-600/30', Icon: AlertTriangle, label: 'False' },
  Unverified: { color: 'bg-amber-600/20 text-amber-300 border-amber-600/30', Icon: AlertTriangle, label: 'Unverified' },
  'Partially True': { color: 'bg-blue-600/20 text-blue-300 border-blue-600/30', Icon: BadgeCheck, label: 'Partially True' },
};

const barByConfidence = {
  Low: 'w-1/3 bg-rose-500',
  Medium: 'w-2/3 bg-amber-500',
  High: 'w-full bg-emerald-500',
};

const MOCK_DATA = {
  status: 'complete',
  query: 'Does E20 fuel damage car engines?',
  verdict: 'Unverified',
  confidence_level: 'Medium',
  synthesis_explanation:
    "While social media is saturated with anecdotal reports of engine knocking, no official government or peer-reviewed automotive study currently confirms widespread acute damage from E20 in compatible vehicles.",
  debate_rounds: 2,
  evidence: {
    official: [
      { title: 'Ministry of Petroleum Advisory 2025', type: 'Government', snippet: 'Lists compatible vehicle classes; no explicit warning for new engines.' },
      { title: 'SAE Technical Paper #4022', type: 'Academic', snippet: 'Long-term corrosion studies are ongoing; preliminary results neutral.' },
    ],
    social: [
      { title: 'Viral Mechanic Reel (2.1M views)', type: 'Instagram', snippet: 'Claims fuel pumps are failing in 2018-2020 models.' },
      { title: 'r/CarsIndia Megathread', type: 'Reddit', snippet: '400+ users reporting lower mileage and increased engine noise.' },
    ],
  },
};

function EvidenceList({ title, accent, items, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`h-5 w-5 ${accent}`} />
        <h3 className="text-sm font-semibold tracking-wide text-slate-200">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="rounded-xl bg-slate-900/60 border border-white/10 p-4">
            <div className="text-slate-100 font-medium">{it.title}</div>
            <div className="text-xs text-slate-400 mb-1">{it.type}</div>
            <p className="text-sm text-slate-300">{it.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ResultsDashboard({ data = MOCK_DATA }) {
  const badge = badgeByVerdict[data.verdict] || badgeByVerdict.Unverified;
  const BarClass = barByConfidence[data.confidence_level] || barByConfidence.Medium;

  return (
    <section className="bg-slate-950 text-slate-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <div className="text-slate-400 text-sm">Query</div>
          <h2 className="text-2xl md:text-3xl font-semibold">{data.query}</h2>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className={`rounded-2xl border ${badge.color} px-5 py-4 flex items-center gap-3 bg-white/5`}>
            <badge.Icon className="h-6 w-6" />
            <div>
              <div className="text-xs text-slate-400">Verdict</div>
              <div className="text-lg font-semibold">{badge.label}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div className="text-xs text-slate-400 mb-2">Confidence</div>
            <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
              <div className={`h-full ${BarClass} transition-all`} />
            </div>
            <div className="text-right text-xs mt-2 text-slate-400">{data.confidence_level}</div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
            <div className="text-xs text-slate-400 mb-1">Debate Rounds</div>
            <div className="text-2xl font-semibold">{data.debate_rounds}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-5 w-5 text-emerald-400" />
            <h3 className="text-sm font-semibold tracking-wide text-slate-200">AI Synthesis</h3>
          </div>
          <p className="text-slate-300 leading-relaxed">{data.synthesis_explanation}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <EvidenceList
            title="Fact-Finder Evidence"
            accent="text-blue-400"
            items={data.evidence.official}
            icon={BadgeCheck}
          />
          <EvidenceList
            title="Pattern-Detector Signals"
            accent="text-pink-400"
            items={data.evidence.social}
            icon={MessagesSquare}
          />
        </div>
      </div>
    </section>
  );
}

export default ResultsDashboard;
