"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface DiagramProps {
  type: "use-case" | "activity" | "erd" | "architecture";
  caption?: string;
}

export default function ProcessDiagram({ type, caption }: DiagramProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getDiagramTitle = () => {
    switch (type) {
      case "use-case":
        return "Use Case Diagram — Role & Feature Access Structure";
      case "activity":
        return "Activity Diagram — Online Admission & Verification Flow";
      case "erd":
        return "Entity Relationship Diagram — Relational Database Model";
      case "architecture":
        return "Layered System Architecture — MVC & Protected Storage";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "use-case":
        return (
          <div className="w-full flex justify-center p-2 bg-[#FAFAF8] rounded border border-editorial-border/60">
            <img
              src="/images/psb/process/use-case-diagram.png"
              alt="Use Case Diagram SPMB PAUD Azzahra"
              className="w-full h-auto max-h-[650px] object-contain rounded shadow-xs"
            />
          </div>
        );

      case "activity":
        return (
          <div className="w-full flex justify-center p-2 bg-[#FAFAF8] rounded border border-editorial-border/60">
            <img
              src="/images/psb/process/activity-diagram.png"
              alt="Activity Diagram SPMB PAUD Azzahra"
              className="w-full h-auto max-h-[650px] object-contain rounded shadow-xs"
            />
          </div>
        );

      case "erd":
        return (
          <div className="w-full space-y-4 text-xs text-editorial-text p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-editorial-accent block border-b pb-1">users</span>
                <span className="text-editorial-muted text-[11px] block">id, name, email, password, role_id</span>
              </div>
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-editorial-accent block border-b pb-1">students</span>
                <span className="text-editorial-muted text-[11px] block">id, user_id, nik, full_name, dob, photo</span>
              </div>
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-editorial-accent block border-b pb-1">registration_waves</span>
                <span className="text-editorial-muted text-[11px] block">id, title, start_date, end_date, quota</span>
              </div>
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-editorial-accent block border-b pb-1">registrations</span>
                <span className="text-editorial-muted text-[11px] block">id, student_id, wave_id, status, notes</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-purple-700 block border-b pb-1">payments</span>
                <span className="text-editorial-muted text-[11px] block">id, registration_id, proof_path, verified_at</span>
              </div>
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-purple-700 block border-b pb-1">site_settings</span>
                <span className="text-editorial-muted text-[11px] block">id, key, value, updated_by</span>
              </div>
              <div className="p-3 bg-white border border-editorial-border rounded space-y-1">
                <span className="font-bold text-purple-700 block border-b pb-1">activity_logs</span>
                <span className="text-editorial-muted text-[11px] block">id, user_id, action, ip_address, timestamp</span>
              </div>
            </div>
          </div>
        );

      case "architecture":
        return (
          <div className="w-full space-y-3 text-xs text-editorial-text p-2 font-mono">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded flex items-center justify-between">
              <span className="font-bold">1. Client / Presentation Layer</span>
              <span className="text-editorial-secondary">Desktop & Mobile Web Browsers (Blade, CSS, JS)</span>
            </div>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-between">
              <span className="font-bold">2. Laravel Application Layer</span>
              <span className="text-editorial-secondary">Controllers, Middleware (Auth, Roles), Service Logic</span>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded flex items-center justify-between">
              <span className="font-bold">3. Data & Storage Layer</span>
              <span className="text-editorial-secondary">MySQL Database + Laravel Protected Storage</span>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded flex items-center justify-between">
              <span className="font-bold">4. Security & Audit</span>
              <span className="text-editorial-secondary">Role Authorization & Sealed Activity Logs</span>
            </div>
          </div>
        );
    }
  };

  return (
    <figure className="my-8 rounded-lg bg-white border border-editorial-border p-4 sm:p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-editorial-border/60">
        <h4 className="font-serif text-sm font-semibold text-editorial-text">
          {getDiagramTitle()}
        </h4>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-editorial-accent hover:bg-blue-50 rounded transition-colors"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Expand</span>
        </button>
      </div>

      {renderContent()}

      {caption && (
        <figcaption className="text-xs text-editorial-muted italic text-center pt-2">
          {caption}
        </figcaption>
      )}

      <ImageLightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={getDiagramTitle()}
      >
        {renderContent()}
      </ImageLightbox>
    </figure>
  );
}
