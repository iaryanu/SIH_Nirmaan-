import Link from "next/link";

export default function CitizenLogin() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-slate-800">
      {/* Demo ribbon */}
      <div className="w-full bg-[var(--ribbon-bg)] py-2 text-center text-xs font-medium tracking-wide text-white">
        DEMO ENVIRONMENT — simulated grievance processing
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

        <div className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-[var(--color-green)]">
          Citizen Portal
        </div>
      </header>

      {/* Login section */}
      <main className="flex min-h-[calc(100vh-100px)] items-start justify-center px-6 pb-16 pt-12">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
              Citizen Access
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              Welcome back
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Login to submit new grievances, view previous complaints, and
              track their resolution status.
            </p>
          </div>

          {/* Login card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[var(--color-navy)]">
                Citizen Login
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Use your registered credentials to continue.
              </p>
            </div>

            {/* Email / Mobile */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold text-slate-700"
              >
                Mobile Number / Email
              </label>

              <input
                id="email"
                type="text"
                placeholder="Enter mobile number or email"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-green)] focus:bg-white focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-slate-700"
                >
                  Password / OTP
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-[var(--color-green)] hover:underline"
                >
                  Use OTP
                </button>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-green)] focus:bg-white focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* Login */}
            <Link
              href="/citizen"
              className="flex w-full items-center justify-center rounded-lg bg-[var(--color-green)] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Login to Citizen Portal →
            </Link>

            {/* Demo notice */}
            <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3">
              <div className="text-xs font-semibold text-[var(--color-navy)]">
                Demo Mode
              </div>

              <p className="mt-1 text-[11px] leading-5 text-slate-600">
                Authentication is simulated for this prototype. Click Login
                to continue to the Citizen Portal.
              </p>
            </div>
          </div>

          {/* Register */}
          <div className="mt-6 text-center text-xs text-slate-500">
            New citizen?
            <button
              type="button"
              className="ml-1 font-semibold text-[var(--color-green)] hover:underline"
            >
              Create an account
            </button>
          </div>

          {/* Back */}
          <div className="mt-5 text-center">
            <Link
              href="/"
              className="text-xs font-medium text-slate-500 hover:text-[var(--color-navy)]"
            >
              ← Back to portal selection
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}