import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#101820]">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#5ca32d 1px, transparent 1px),
            linear-gradient(90deg, #5ca32d 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Soft green background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#5ca32d]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#5ca32d]/10 blur-[130px]" />

      {/* Navbar */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <div className="relative h-[55px] w-[200px] sm:h-[75px] sm:w-[260px]">
            <Image
              src="/images/logo-solvo.png"
              alt="Solvonergy"
              fill
              priority
              className="object-contain object-left"
            />
          </div>

          {/* Status */}
          <div className="hidden items-center gap-3 rounded-full border border-[#5ca32d]/20 bg-[#5ca32d]/5 px-5 py-2.5 sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ca32d] opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5ca32d]" />
            </span>

            <span className="text-xs font-semibold tracking-[0.15em] text-[#5ca32d]">
              WEBSITE UNDER DEVELOPMENT
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="h-px bg-gradient-to-r from-transparent via-[#5ca32d]/20 to-transparent" />
        </div>
      </header>

      {/* Main Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-145px)] items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Mobile status */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#5ca32d]/20 bg-[#5ca32d]/5 px-4 py-2 sm:hidden">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ca32d] opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5ca32d]" />
              </span>

              <span className="text-[10px] font-semibold tracking-[0.15em] text-[#5ca32d]">
                WEBSITE UNDER DEVELOPMENT
              </span>
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#5ca32d]">
              Solvo Energy
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#101820] sm:text-7xl lg:text-8xl">
              Something
              <span className="block text-[#5ca32d]">powerful</span>
              <span className="block">is coming.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              We&apos;re currently working on the new Solvo Energy website.
              Our digital platform is being built to showcase our energy
              solutions, technologies, and vision for a more sustainable
              future.
            </p>

            {/* Progress indicator */}
            <div className="mt-10 max-w-md">
              <div className="mb-3 flex items-center justify-between text-xs font-medium">
                <span className="text-gray-500">
                  Website development
                </span>

                <span className="text-[#5ca32d]">
                  In progress
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full w-[68%] rounded-full bg-[#5ca32d]" />
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex min-h-[420px] items-center justify-center">
            {/* Large green glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#5ca32d]/10 blur-[90px]" />

            {/* Outer circles */}
            <div className="absolute h-[370px] w-[370px] rounded-full border border-[#5ca32d]/10" />

            <div className="absolute h-[290px] w-[290px] rounded-full border border-[#5ca32d]/15" />

            <div className="absolute h-[215px] w-[215px] rounded-full border border-[#5ca32d]/20" />

            {/* Rotating ring */}
            <div className="absolute h-[370px] w-[370px] animate-[spin_18s_linear_infinite] rounded-full border border-transparent border-t-[#5ca32d]/50" />

            {/* Main energy card */}
            <div className="relative flex h-52 w-52 items-center justify-center rounded-[2.5rem] border border-[#5ca32d]/20 bg-white/80 shadow-[0_25px_80px_rgba(92,163,45,0.15)] backdrop-blur-xl">
              <div className="absolute inset-3 rounded-[2rem] border border-[#5ca32d]/10" />

              {/* Lightning icon */}
              <svg
                viewBox="0 0 64 64"
                className="relative h-24 w-24 text-[#5ca32d] drop-shadow-[0_5px_15px_rgba(92,163,45,0.35)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 4L12 36H29L25 60L52 25H35L36 4Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Floating elements */}
            <div className="absolute left-[12%] top-[25%] flex h-3 w-3 animate-pulse rounded-full bg-[#5ca32d] shadow-[0_0_20px_rgba(92,163,45,0.6)]" />

            <div className="absolute right-[15%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-[#5ca32d]" />

            <div className="absolute bottom-[22%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-[#5ca32d]" />

            <div className="absolute bottom-[18%] right-[20%] flex h-3 w-3 animate-pulse rounded-full bg-[#5ca32d] shadow-[0_0_20px_rgba(92,163,45,0.6)]" />

            {/* Small labels */}
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                Energy
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-800">
                Innovation
              </p>
            </div>

            <div className="absolute bottom-12 right-0 hidden rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-[10px] uppercase tracking-widest text-gray-400">
                Solvo
              </p>
              <p className="mt-1 text-sm font-semibold text-[#5ca32d]">
                Powering Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Solvo Energy. All rights reserved.
          </p>

          <p className="font-medium tracking-[0.15em] text-[#5ca32d]">
            POWERING THE FUTURE
          </p>
        </div>
      </footer>
    </main>
  );
}