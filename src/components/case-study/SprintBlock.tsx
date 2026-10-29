import { Lightbulb } from "lucide-react";

interface SprintBlockProps {
  number: number;
  title: string;
  focus: string;
  items: string[];
  lesson: string;
}

export default function SprintBlock({
  number,
  title,
  focus,
  items,
  lesson,
}: SprintBlockProps) {
  return (
    <div className="my-8 rounded-lg bg-white border border-editorial-border p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-editorial-border/60 pb-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded bg-editorial-accent/10 text-editorial-accent font-bold">
            Sprint 0{number}
          </span>
          <h4 className="font-serif text-lg font-bold text-editorial-text">{title}</h4>
        </div>
        <span className="text-xs text-editorial-muted font-mono">{focus}</span>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-mono text-editorial-muted uppercase tracking-wider">
          Delivered Capabilities:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-editorial-secondary">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-editorial-border/60 flex items-start gap-3 bg-amber-50/40 p-3 rounded text-xs text-amber-900 border border-amber-200/60">
        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block">Sprint Retrospective Lesson:</span>
          <span className="text-amber-800/90">{lesson}</span>
        </div>
      </div>
    </div>
  );
}
