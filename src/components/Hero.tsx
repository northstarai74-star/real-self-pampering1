import heroImage from "@/assets/hero-nails.jpg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-cream">
      <img
        src={heroImage}
        alt="Close-up of hands with glossy nude-blush almond nails resting on cream silk"
        width={1920}
        height={1088}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-4 pb-12 pt-24 sm:px-5 sm:pb-16 sm:pt-28 md:justify-center md:px-10 md:pb-24">
        <div className="max-w-xl">
          <p className="label-xs flex items-center gap-2 text-plum sm:gap-3">
            <span className="h-px w-6 bg-gold sm:w-8" />
            {site.city} — {site.tagline}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ink sm:mt-6 sm:text-6xl md:text-7xl lg:text-[4.75rem]">
            Nail Art,
            <br />
            <span className="italic text-plum">Elevated.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/75 sm:mt-6 sm:text-base md:text-lg">
            Thoughtfully designed nails for those who appreciate the details.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-x-8 sm:gap-y-4">
            <a
              href="#verify"
              className="label-xs border border-plum bg-plum px-6 py-3 text-center text-primary-foreground transition-colors duration-300 hover:bg-ink sm:px-8 sm:py-4"
            >
              Verify a Certificate
            </a>
            <a
              href="#gallery"
              className="label-xs border-b border-ink/30 pb-1 text-center text-ink transition-colors duration-300 hover:border-gold hover:text-plum sm:text-left"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </div>

      <span className="label-xs absolute bottom-4 right-4 hidden text-ink/50 sm:block sm:bottom-8 sm:right-5 md:right-10">
        Est. 2019
      </span>
    </section>
  );
}
