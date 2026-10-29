import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EditorialContainer from "@/components/layout/EditorialContainer";
import TableOfContents, { TOCItem } from "@/components/case-study/TableOfContents";
import MobileSectionNavigator from "@/components/case-study/MobileSectionNavigator";
import ProcessDiagram from "@/components/case-study/ProcessDiagram";
import BeforeAfterFlow from "@/components/case-study/BeforeAfterFlow";
import SprintBlock from "@/components/case-study/SprintBlock";
import TestingSummary from "@/components/case-study/TestingSummary";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Student Admission System Case Study | Fahmi Muhammad Al Hafizh",
  description:
    "A detailed case study covering requirement analysis, system design, Laravel development, Agile delivery, and user acceptance testing for PAUD Al-Quran Az-Zahra Depok.",
};

const tocItems: TOCItem[] = [
  { id: "overview", label: "1. Overview" },
  { id: "starting-point", label: "2. The Starting Point" },
  { id: "understanding-workflow", label: "3. Understanding the Workflow" },
  { id: "requirement-analysis", label: "4. Requirement Analysis" },
  { id: "designing-process", label: "5. Designing the Process" },
  { id: "system-design", label: "6. System Design" },
  { id: "three-sprints", label: "7. Building in Three Sprints" },
  { id: "final-product", label: "8. Final Product" },
  { id: "testing-validation", label: "9. Testing and Validation" },
  { id: "usability-findings", label: "10. Usability Findings" },
  { id: "outcome", label: "11. Outcome" },
  { id: "reflection", label: "12. Reflection" },
  { id: "next-improvements", label: "13. Next Improvements" },
];

export default function PSBCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-editorial-bg text-editorial-text">
      <Header />

      <main className="flex-1 pb-16">
        {/* Case Study Header & Hero Metadata */}
        <section className="pt-12 sm:pt-16 pb-12 border-b border-editorial-border/60">
          <EditorialContainer size="layout">
            <div className="max-w-article mx-auto space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-editorial-secondary hover:text-editorial-text transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>

              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
                  Applied Case Study · Software Engineering & System Analysis
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-editorial-text leading-[1.15]">
                  From Paper Forms to a Structured Online Admission Flow
                </h1>
                <p className="text-base sm:text-xl text-editorial-secondary leading-relaxed font-normal pt-1">
                  Designing and developing a Laravel-based student admission system for SPS PAUD Al-Quran Az-Zahra Depok.
                </p>
              </div>

              {/* Comprehensive Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-editorial-border text-xs sm:text-sm">
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Role
                  </span>
                  <span className="font-medium text-editorial-text block">
                    System Analyst, UI/UX Designer & Web Developer
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Timeline
                  </span>
                  <span className="font-medium text-editorial-text block">
                    2025 – July 2026
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Institution
                  </span>
                  <span className="font-medium text-editorial-text block">
                    SPS PAUD Az-Zahra Depok
                  </span>
                </div>
                <div>
                  <span className="text-editorial-muted block font-mono text-[11px] uppercase tracking-wider mb-1">
                    Method & Stack
                  </span>
                  <span className="font-medium text-editorial-text block">
                    Agile (3 Sprints) · Laravel · MySQL
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href="https://paudazzahradepok.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-editorial-text text-editorial-bg text-xs font-medium rounded hover:bg-editorial-accent transition-colors"
                >
                  <span>Visit Live Deployed System</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
                <span className="text-xs text-editorial-muted font-mono hidden sm:inline">
                  Status: Deployed & Evaluated
                </span>
              </div>
            </div>
          </EditorialContainer>
        </section>

        {/* Mobile TOC Section Navigator */}
        <MobileSectionNavigator items={tocItems} />

        {/* Main Article & Table of Contents Layout */}
        <EditorialContainer size="layout" className="pt-8">
          <div className="flex gap-12 items-start relative">
            {/* Desktop Sticky Table of Contents Sidebar */}
            <TableOfContents items={tocItems} />

            {/* Article Content Column */}
            <article className="flex-1 max-w-article mx-auto space-y-16 text-editorial-text text-base sm:text-[17.5px] leading-[1.7]">
              {/* SECTION 1: Overview */}
              <section id="overview" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  1. Overview
                </h2>
                <p>
                  SPS PAUD Al-Quran Az-Zahra Depok managed new student admissions through traditional paper forms, physical document submissions, manual record books, and individual WhatsApp communication. Parents had to visit the school physically to complete registration, while administrators had to handle the same data across several manual media before entering it again into Dapodik.
                </p>
                <p>
                  I worked on this project end-to-end as part of an applied software engineering research initiative: studying the existing workflow, identifying user and operational needs, defining functional specifications, designing the system architecture and relational database, developing the application across three Agile sprints, and validating the result through Alpha and Beta Testing.
                </p>
                <div className="p-4 bg-white border border-editorial-border rounded-lg text-xs space-y-2 my-4">
                  <span className="font-mono text-editorial-accent font-bold uppercase tracking-wider block">
                    Project Boundaries & Scope
                  </span>
                  <p className="text-editorial-secondary leading-relaxed">
                    The system digitizes school information, online student data entry, protected document upload, registration-wave selection, status tracking, payment-proof upload, Admin verification, data export, and activity logging. Age eligibility decisions, in-person observation, and direct payment gateway integration were intentionally kept outside the system scope.
                  </p>
                </div>
              </section>

              {/* SECTION 2: The Starting Point */}
              <section id="starting-point" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  2. The Starting Point
                </h2>
                <p>
                  The previous admission process was functional but placed heavy administrative effort on both parents and school staff. Information was distributed through printed brochures and limited social media posts. Parents contacted the school, visited the physical site, completed paper forms, and submitted physical copies of family cards and birth certificates.
                </p>

                <p className="font-medium text-editorial-text">
                  Three core operational problems were identified:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="p-4 rounded bg-white border border-editorial-border space-y-1">
                    <span className="font-bold text-sm text-editorial-text block">
                      1. Registration access was constrained by time and location.
                    </span>
                    <span className="text-sm text-editorial-secondary block">
                      Parents with restricted work hours or longer travel distances faced friction completing in-person registration during school operating hours.
                    </span>
                  </li>
                  <li className="p-4 rounded bg-white border border-editorial-border space-y-1">
                    <span className="font-bold text-sm text-editorial-text block">
                      2. Information was handled repeatedly across multiple media.
                    </span>
                    <span className="text-sm text-editorial-secondary block">
                      Transferring data manually from paper forms to physical record books and subsequently into Dapodik increased administrative workload and vulnerability to recording errors.
                    </span>
                  </li>
                  <li className="p-4 rounded bg-white border border-editorial-border space-y-1">
                    <span className="font-bold text-sm text-editorial-text block">
                      3. Admission status communication was fragmented.
                    </span>
                    <span className="text-sm text-editorial-secondary block">
                      Parents had no single digital dashboard to track application verification or receive formal administrative notes independently.
                    </span>
                  </li>
                </ul>

                <BeforeAfterFlow />
              </section>

              {/* SECTION 3: Understanding the Workflow */}
              <section id="understanding-workflow" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  3. Understanding the Workflow
                </h2>
                <p>
                  To design a system that fit real school operations, I conducted direct observation of admission routines and a semi-structured interview with the school principal on 7 March 2026. The objective was not merely to assemble a wishlist of features, but to analyze the exact sequence of events before, during, and after registration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs">
                  <div className="p-4 bg-white border border-editorial-border rounded space-y-1">
                    <span className="font-bold text-editorial-text block">Direct Observation</span>
                    <span className="text-editorial-secondary">Examined physical document handoffs, record book filing, and Dapodik re-entry routines.</span>
                  </div>
                  <div className="p-4 bg-white border border-editorial-border rounded space-y-1">
                    <span className="font-bold text-editorial-text block">Principal Interview</span>
                    <span className="text-editorial-secondary">Gathered administrative rules, wave quota management, and verification criteria.</span>
                  </div>
                  <div className="p-4 bg-white border border-editorial-border rounded space-y-1">
                    <span className="font-bold text-editorial-text block">Workflow Analysis</span>
                    <span className="text-editorial-secondary">Mapped tasks into 3 distinct roles: Parent/Guardian, Admin, and Super Admin.</span>
                  </div>
                </div>
              </section>

              {/* SECTION 4: Requirement Analysis */}
              <section id="requirement-analysis" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  4. Requirement Analysis
                </h2>
                <p>
                  Discovery findings were translated into a formal Software Requirement Specification containing <strong>17 functional requirements</strong> and <strong>6 non-functional requirements</strong> across <strong>3 user roles</strong>.
                </p>

                <div className="my-6 p-6 rounded-lg bg-white border border-editorial-border space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-editorial-text">
                    Functional Capability Breakdown
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <span className="font-mono font-bold text-editorial-accent uppercase">Public & Parent Capabilities</span>
                      <ul className="space-y-1 text-editorial-secondary">
                        <li>• Public school profile & admission information</li>
                        <li>• Parent account registration & profile management</li>
                        <li>• Multi-child management under single parent account</li>
                        <li>• Photo, family card (KK) & birth certificate upload</li>
                        <li>• Active registration wave selection</li>
                        <li>• Application status tracking & Admin notes</li>
                        <li>• Payment-proof upload & Registration Card download</li>
                      </ul>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono font-bold text-purple-700 uppercase">Admin & Super Admin Capabilities</span>
                      <ul className="space-y-1 text-editorial-secondary">
                        <li>• Admin statistics dashboard & applicant overview</li>
                        <li>• Registration wave & quota management</li>
                        <li>• Applicant search, filter & document review</li>
                        <li>• Status updates (Accept, Reject, Request Revision)</li>
                        <li>• Payment-proof verification</li>
                        <li>• Applicant data recap & CSV/Excel export</li>
                        <li>• Super Admin user management & activity logging</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg text-xs space-y-1">
                  <span className="font-bold text-editorial-accent block">Non-Functional Criteria:</span>
                  <p className="text-editorial-secondary">
                    Role-based access control, protected document endpoints, cross-browser compatibility, simple mental models for non-technical users, normal response target below 5 seconds, and reliable database state consistency.
                  </p>
                </div>
              </section>

              {/* SECTION 5: Designing the Process */}
              <section id="designing-process" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  5. Designing the Process
                </h2>
                <p>
                  Before starting implementation, I structured the system flow to clarify transitions, authorization rules, and scope boundaries.
                </p>
                <p>
                  A critical decision was allowing one parent account to manage multiple children separately, ensuring parents with more than one child do not need multiple logins.
                </p>
                <p>
                  Additionally, clear boundaries were defined: payment processing is handled via proof upload and manual verification (no external payment gateway), and Dapodik integration remains a separate administrative step rather than an automatic API link.
                </p>
              </section>

              {/* SECTION 6: System Design */}
              <section id="system-design" className="scroll-mt-28 space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  6. System Design
                </h2>
                <p>
                  The system design artifacts established clear blueprints for role permissions, operational workflows, relational data schemas, and layered architecture.
                </p>

                <ProcessDiagram
                  type="use-case"
                  caption="Figure 6.1 — Use Case Diagram defining feature boundaries across Parent, Admin, and Super Admin roles."
                />

                <ProcessDiagram
                  type="activity"
                  caption="Figure 6.2 — Activity Diagram illustrating end-to-end parent application and school verification workflows."
                />

                <ProcessDiagram
                  type="erd"
                  caption="Figure 6.3 — Entity Relationship Diagram covering users, children, registration waves, applications, payments, settings, and logs."
                />

                <ProcessDiagram
                  type="architecture"
                  caption="Figure 6.4 — Layered System Architecture based on Laravel MVC, role middleware, and protected storage."
                />
              </section>

              {/* SECTION 7: Building in Three Sprints */}
              <section id="three-sprints" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  7. Building in Three Sprints
                </h2>
                <p>
                  The product backlog contained 22 items and was delivered iteratively across three Agile sprints using a local Herd environment, Visual Studio Code, Git, and Laravel.
                </p>

                <SprintBlock
                  number={1}
                  title="Public Information & Access"
                  focus="Sprint 01 — Foundation"
                  items={[
                    "Public school profile & admission requirements",
                    "Parent registration & login system",
                    "Password reset workflow",
                    "Parent profile management",
                  ]}
                  lesson="Complex content pages require reusable component planning to prevent code duplication across public views."
                />

                <SprintBlock
                  number={2}
                  title="Parent Admission Journey"
                  focus="Sprint 02 — Parent Flow"
                  items={[
                    "Student data entry form",
                    "Document upload (photo, KK, birth cert)",
                    "Active registration wave selection",
                    "Status tracking & Admin note view",
                    "Payment-proof upload",
                    "Registration Card PDF generation",
                  ]}
                  lesson="Long forms require clear inline validation and explicit file-size guidelines to prevent upload frustration."
                />

                <SprintBlock
                  number={3}
                  title="School Administration & System Management"
                  focus="Sprint 03 — Admin Scope"
                  items={[
                    "Admin statistics dashboard",
                    "Registration wave & quota management",
                    "Applicant review, verification & status update",
                    "Payment-proof verification",
                    "Data recap & CSV export",
                    "Website content settings",
                    "Admin account management & activity logging",
                    "Protected document access endpoints",
                  ]}
                  lesson="Administrative features require strict authorization middleware and activity audit logs to safeguard sensitive records."
                />
              </section>

              {/* SECTION 8: Final Product */}
              <section id="final-product" className="scroll-mt-28 space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  8. Final Product
                </h2>
                <p>
                  The completed web application centralizes the admission lifecycle into two primary web interfaces: the Parent Admission Portal and the Administrative Management Dashboard.
                </p>

                {/* Parent Flow Visual Grid */}
                <div className="p-6 rounded-lg bg-white border border-editorial-border space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-editorial-text border-b pb-2">
                    Parent Admission Journey
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-editorial-accent block">Step 01. Registration & Data</span>
                      <p className="text-editorial-secondary">Parent creates an account and fills student personal and family data.</p>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-editorial-accent block">Step 02. Wave & Document Upload</span>
                      <p className="text-editorial-secondary">Selects open wave and uploads photo, KK, and birth certificate.</p>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-editorial-accent block">Step 03. Status & Registration Card</span>
                      <p className="text-editorial-secondary">Monitors verification notes, submits payment proof, and downloads card.</p>
                    </div>
                  </div>
                </div>

                {/* Admin Flow Visual Grid */}
                <div className="p-6 rounded-lg bg-white border border-editorial-border space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-editorial-text border-b pb-2">
                    School Administration Portal
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-purple-700 block">01. Stats & Wave Control</span>
                      <p className="text-editorial-secondary">Dashboard overview of registrations, wave opening, and quota tracking.</p>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-purple-700 block">02. Verification & Review</span>
                      <p className="text-editorial-secondary">In-browser document preview, status update, and revision notes.</p>
                    </div>
                    <div className="p-3 bg-[#FAFAF8] rounded border border-editorial-border space-y-1">
                      <span className="font-bold text-purple-700 block">03. Recap & Audit Logs</span>
                      <p className="text-editorial-secondary">One-click data export and full audit trail of administrative actions.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9: Testing and Validation */}
              <section id="testing-validation" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  9. Testing and Validation
                </h2>
                <p>
                  System evaluation was performed in two stages using User Acceptance Testing (UAT): Alpha Testing in a controlled environment and Beta Testing with target users.
                </p>

                <TestingSummary />
              </section>

              {/* SECTION 10: Usability Findings */}
              <section id="usability-findings" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  10. Usability Findings
                </h2>
                <p>
                  Beta Testing confirmed overall workflow completion but highlighted key usability insights that functional testing alone could not reveal.
                </p>

                <div className="space-y-4 my-6">
                  <div className="p-5 rounded-lg bg-white border border-editorial-border space-y-2">
                    <span className="font-mono text-xs font-bold text-editorial-accent uppercase">
                      Finding 01 — Explicit File Limits
                    </span>
                    <p className="text-sm font-semibold text-editorial-text">
                      Upload constraints should be visible before file selection.
                    </p>
                    <p className="text-xs text-editorial-secondary leading-relaxed">
                      A parent participant experienced an error when a family-card file exceeded size limits. Upload limits and supported file extensions must be displayed directly on the form field before user action.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-white border border-editorial-border space-y-2">
                    <span className="font-mono text-xs font-bold text-editorial-accent uppercase">
                      Finding 02 — Payment Navigation Discoverability
                    </span>
                    <p className="text-sm font-semibold text-editorial-text">
                      Payment actions should link directly from the status dashboard.
                    </p>
                    <p className="text-xs text-editorial-secondary leading-relaxed">
                      Parents expected payment-proof upload to be accessible directly from the registration-status screen rather than navigating back to a separate menu.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-white border border-editorial-border space-y-2">
                    <span className="font-mono text-xs font-bold text-editorial-accent uppercase">
                      Finding 03 — Administrative Helper Text
                    </span>
                    <p className="text-sm font-semibold text-editorial-text">
                      Administrative fields require contextual guidance.
                    </p>
                    <p className="text-xs text-editorial-secondary leading-relaxed">
                      The school administrator requested helper text clarifying the operational distinction between registration end dates and available wave quotas.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 11: Outcome */}
              <section id="outcome" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  11. Outcome
                </h2>
                <p>
                  The project delivered a deployed web application at <a href="https://paudazzahradepok.site" target="_blank" rel="noopener noreferrer" className="text-editorial-accent underline">paudazzahradepok.site</a> and complete technical documentation. The system centralized public school information, online registration, applicant data, document verification, application status tracking, payment-proof verification, and system administration into one structured digital workflow.
                </p>
                <p>
                  All 17 functional requirements were implemented and verified through 46 passed Alpha scenarios. Both end-user evaluation participants completed every assigned Beta Testing task, rating the initial system 4.6 out of 5.0.
                </p>
              </section>

              {/* SECTION 12: Reflection */}
              <section id="reflection" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  12. Reflection
                </h2>
                <div className="p-6 rounded-lg bg-white border border-editorial-border space-y-4 text-sm sm:text-base italic leading-relaxed text-editorial-text">
                  <p>
                    “Building this system reinforced that systematic requirement analysis is the true foundation of software quality. Interface elegance means little if role permissions, document security, or status transitions are ambiguous.”
                  </p>
                  <p>
                    “Testing with real school staff and parents demonstrated that functional success does not guarantee frictionless use. Thoughtful micro-copy, clear validation, and clear mental models make the difference between software that merely works and software that is readily adopted.”
                  </p>
                </div>
              </section>

              {/* SECTION 13: Next Improvements */}
              <section id="next-improvements" className="scroll-mt-28 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-editorial-text border-b border-editorial-border/60 pb-2">
                  13. Next Improvements
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-editorial-secondary list-disc pl-5">
                  <li>Add explicit file-size and accepted format hints directly on file upload fields.</li>
                  <li>Enhance payment-proof discoverability directly from the applicant status screen.</li>
                  <li>Add contextual helper text to administrative wave and quota management forms.</li>
                  <li>Expand usability testing to a larger sample of parents and school administrators.</li>
                  <li>Conduct formal load testing and automated database backup strategy implementations.</li>
                  <li>Explore future standardized data export formats for Dapodik entry assistance.</li>
                </ul>
              </section>
            </article>
          </div>
        </EditorialContainer>
      </main>

      <Footer />
    </div>
  );
}
