import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-slate-800">
      {/* Demo ribbon */}
      <div className="w-full bg-[var(--ribbon-bg)] py-2 text-center text-xs font-medium tracking-wide text-white">
        DEMO ENVIRONMENT — simulated grievance processing
      </div>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div
                className="gi-mark flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
                aria-hidden
              >
                GI
              </div>
            </Link>

            <div>
              <div className="text-xl font-bold leading-tight text-[var(--color-navy)]">
                Grievance Intelligence
              </div>

              <div className="mt-0.5 text-xs text-slate-500">
                CPGRAMS · AI Decision Support
              </div>
            </div>

            <span className="ml-3 hidden rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-[var(--color-navy)] sm:inline-flex">
              Portal selection
            </span>
          </div>

          <Link
            href="/"
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-navy)] transition hover:border-[var(--color-navy)] hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-12">
        {/* Hero */}
        <section className="mx-auto max-w-4xl pt-12 text-center sm:pt-16">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
            Grievance Intelligence System · Demo
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-navy)] sm:text-5xl">
            One grievance,
            <br />
            understood the moment it arrives.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            An AI-powered grievance intelligence system that helps citizens
            submit and track complaints while giving officers relevant
            historical cases, AI-assisted analysis, and evidence-backed
            resolution insights.
          </p>
        </section>

        {/* System capabilities */}
        <section className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          <FeaturePill label="AI-assisted analysis" />
          <FeaturePill label="Historical case matching" />
          <FeaturePill label="Officer-in-the-loop" />
        </section>

        {/* Portal cards */}
        <section className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
          <PortalCard
            type="CITIZEN"
            title="Citizen Portal"
            description="Lodge a grievance, attach supporting documents, and track its progress from submission to resolution."
            accentColor="var(--color-green)"
            icon="→"
            buttonText="Enter Citizen Portal"
            href="/citizen/login"
          />

          <PortalCard
            type="OFFICER"
            title="Officer Portal"
            description="Review incoming grievances with AI summaries, similar historical cases, and recommended resolution actions."
            accentColor="var(--color-navy)"
            icon="◆"
            buttonText="Enter Officer Portal"
            href="/officer/login"
          />
        </section>

        {/* Bottom note */}
        <div className="mx-auto mt-7 max-w-3xl text-center">
          <p className="text-xs leading-5 text-slate-500">
            Demo supports Citizen, Officer and Nodal/Admin views.
            <span className="mx-2 text-slate-300">•</span>
            Authentication and backend services will be connected in the next
            stage.
          </p>
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------
   Feature pill
--------------------------------------------- */

function FeaturePill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
      {label}
    </div>
  );
}

/* ---------------------------------------------
   Portal card
--------------------------------------------- */

function PortalCard({
  type,
  title,
  description,
  buttonText,
  accentColor,
  icon,
  href,
}: {
  type: string;
  title: string;
  description: string;
  buttonText: string;
  accentColor: string;
  icon: string;
  href: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7"
      style={{ borderTop: `4px solid ${accentColor}` }}
    >
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-[0.06]"
        style={{ backgroundColor: accentColor }}
      />

      {/* Card header */}
      <div className="relative flex items-start justify-between">
        <div>
          <div
            className="mb-2 text-[10px] font-bold tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {type} ACCESS
          </div>

          <h2
            className="text-2xl font-bold"
            style={{ color: accentColor }}
          >
            {title}
          </h2>
        </div>

        <div
          className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white"
          style={{ backgroundColor: accentColor }}
          aria-hidden
        >
          {icon}
        </div>
      </div>

      {/* Description */}
      <p className="relative mt-5 max-w-md text-sm leading-6 text-slate-600">
        {description}
      </p>

      {/* Card features */}
      <div className="relative mt-5 space-y-2 text-xs text-slate-500">
        {type === "CITIZEN" ? (
          <>
            <CardFeature text="Submit and describe a grievance" />
            <CardFeature text="Upload supporting documents" />
            <CardFeature text="Track grievance status" />
          </>
        ) : (
          <>
            <CardFeature text="AI-powered grievance summary" />
            <CardFeature text="Similar historical cases" />
            <CardFeature text="Resolution recommendations" />
          </>
        )}
      </div>

      {/* Button */}
      <div className="relative mt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          style={{ backgroundColor: accentColor }}
        >
          {buttonText}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Card feature
--------------------------------------------- */

function CardFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-500">
        ✓
      </span>
      {text}
    </div>
  );
}