import { Star, AlertCircle } from "lucide-react";

export default function TestingSummary() {
  return (
    <div className="my-10 space-y-6">
      {/* Alpha & Beta Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Alpha Testing Card */}
        <div className="p-6 rounded-lg bg-white border border-editorial-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-editorial-border/60 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-editorial-accent">
              Alpha Testing Results
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-mono font-semibold">
              100% Pass Rate
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-serif text-4xl font-bold text-editorial-text">46 / 46</span>
            <span className="text-xs text-editorial-secondary font-medium">Scenarios Passed</span>
          </div>

          <p className="text-xs text-editorial-secondary leading-relaxed">
            Conducted in a controlled development environment across authentication, student data entry, wave selection, document protection, Admin verification, and activity logging.
          </p>

          <div className="p-3 bg-[#FAFAF8] border border-editorial-border rounded text-[11px] text-editorial-muted flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-editorial-accent shrink-0 mt-0.5" />
            <span>
              Note: 100% scenario pass rate verifies that documented functional criteria behaved as expected in the dev environment; it does not imply zero defect probability in production.
            </span>
          </div>
        </div>

        {/* Beta Testing Card */}
        <div className="p-6 rounded-lg bg-white border border-editorial-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-editorial-border/60 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
              Beta Testing (UAT)
            </span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-xs font-mono font-semibold">
              2 Participants
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="font-serif text-4xl font-bold text-editorial-text">4.6 / 5.0</span>
            <span className="text-xs text-editorial-secondary font-medium">Average Evaluation Score</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-[#FAFAF8] rounded border border-editorial-border/60">
              <span className="font-mono font-bold text-editorial-text block">8 / 11 Tasks</span>
              <span className="text-[11px] text-editorial-muted">Independent Completion</span>
            </div>
            <div className="p-2 bg-[#FAFAF8] rounded border border-editorial-border/60">
              <span className="font-mono font-bold text-editorial-text block">3 / 11 Tasks</span>
              <span className="text-[11px] text-editorial-muted">Completed w/ Assistance</span>
            </div>
          </div>

          <p className="text-xs text-editorial-secondary leading-relaxed">
            Evaluated by 1 school administrator and 1 parent representative across 11 core admission tasks.
          </p>
        </div>
      </div>

      {/* Questionnaire Score Breakdown */}
      <div className="p-6 rounded-lg bg-white border border-editorial-border shadow-sm space-y-4">
        <h4 className="font-serif text-base font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
          Beta Testing Questionnaire Detail (5.0 Scale)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-editorial-muted block">Registration Clarity</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-editorial-text text-lg">5.0</span>
              <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /></div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-editorial-muted block">Data Management</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-editorial-text text-lg">5.0</span>
              <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /></div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-editorial-muted block">Perceived Usefulness</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-editorial-text text-lg">5.0</span>
              <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /></div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-editorial-muted block">Ease of Use & Features</span>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-editorial-text text-lg">4.5</span>
              <div className="flex text-amber-400"><Star className="w-3 h-3 fill-amber-400" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
