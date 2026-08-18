export default function CitizenPortal() {
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
            <div
              className="gi-mark flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
              aria-hidden
            >
              GI
            </div>

            <div>
              <div className="text-xl font-bold leading-tight text-[var(--color-navy)]">
                Grievance Intelligence
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                CPGRAMS · AI Decision Support
              </div>
            </div>
          </div>

          <div className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-[var(--color-green)]">
            Citizen Portal
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-4xl px-6 pb-16">
        {/* Page heading */}
        <section className="pt-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
            Citizen Services
          </div>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-navy)]">
            Lodge a Grievance
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Describe your issue in your own words. Our system will analyze
            your grievance and help route it to the appropriate work area.
          </p>
        </section>

        {/* Grievance form */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Description */}
          <div>
            <label
              htmlFor="grievance"
              className="text-sm font-semibold text-[var(--color-navy)]"
            >
              What is your grievance?
            </label>

            <p className="mt-1 text-xs text-slate-500">
              Explain what happened, when it happened, and what resolution you
              are seeking.
            </p>

            <textarea
              id="grievance"
              rows={7}
              placeholder="Example: My pension application was rejected even though I submitted all the required documents..."
              className="mt-4 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--color-green)] focus:bg-white focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* AI classification notice */}
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)] text-xs font-bold text-white">
                AI
              </div>

              <div>
                <div className="text-sm font-semibold text-[var(--color-navy)]">
                  Automatic grievance classification
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  You don't need to select a department manually. The system
                  will identify the relevant topic, work area and priority
                  after submission.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting documents */}
          <div className="mt-7">
            <div className="text-sm font-semibold text-[var(--color-navy)]">
              Supporting Documents
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Upload documents that may help the officer understand your case.
            </p>

            <label
              htmlFor="documents"
              className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-[var(--color-green)] hover:bg-green-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-green)] shadow-sm">
                +
              </div>

              <div className="mt-3 text-sm font-semibold text-slate-700">
                Upload supporting documents
              </div>

              <div className="mt-1 text-xs text-slate-400">
                PDF, JPG or PNG · Optional
              </div>

              <input
                id="documents"
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              Your grievance will be assigned a unique reference number.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-green)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Submit Grievance
              <span className="ml-2">→</span>
            </button>
          </div>
        </section>

        {/* Process hint */}
        <section className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <ProcessStep
            number="01"
            title="Submit"
            description="Describe your grievance"
          />

          <ProcessStep
            number="02"
            title="AI Analysis"
            description="Understand and classify"
          />

          <ProcessStep
            number="03"
            title="Officer Review"
            description="Receive human-led action"
          />
        </section>
      </main>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-[10px] font-bold tracking-[0.18em] text-[var(--color-green)]">
        {number}
      </div>

      <div className="mt-2 text-sm font-semibold text-[var(--color-navy)]">
        {title}
      </div>

      <div className="mt-1 text-xs text-slate-500">
        {description}
      </div>
    </div>
  );
}