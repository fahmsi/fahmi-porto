import { CheckCircle, XCircle } from "lucide-react";

export default function BeforeAfterFlow() {
  return (
    <div className="my-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before Flow */}
        <div className="p-6 rounded-lg bg-red-50/40 border border-red-200/80 space-y-4">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm border-b border-red-200 pb-2">
            <XCircle className="w-4 h-4 text-red-600" />
            <span>Before — Paper-Based Workflow</span>
          </div>

          <ol className="space-y-2.5 text-xs text-red-950 font-medium">
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">01.</span>
              <span>Information distributed via printed brochures or limited social media</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">02.</span>
              <span>Parent contacts school & arranges physical visit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">03.</span>
              <span>Parent fills physical paper form & submits physical documents</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">04.</span>
              <span>School stores paper records & manually verifies entries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">05.</span>
              <span>Data manually re-entered into Dapodik</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-red-500 font-bold">06.</span>
              <span>Status communicated individually via personal WhatsApp</span>
            </li>
          </ol>
        </div>

        {/* After Flow */}
        <div className="p-6 rounded-lg bg-emerald-50/40 border border-emerald-200/80 space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm border-b border-emerald-200 pb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>After — Centralized Digital Flow</span>
          </div>

          <ol className="space-y-2.5 text-xs text-emerald-950 font-medium">
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">01.</span>
              <span>Parent registers online account & views public school info</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">02.</span>
              <span>Fills student profile & uploads photo, KK, and birth certificate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">03.</span>
              <span>Selects active registration wave & submits application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">04.</span>
              <span>Admin reviews documents & updates status on dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">05.</span>
              <span>Parent tracks status online & uploads payment proof</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-emerald-600 font-bold">06.</span>
              <span>Admin verifies payment & parent downloads official Registration Card</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
