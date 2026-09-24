import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-blush/25 py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-10">
        <Reveal className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-xs flex items-center gap-2 text-plum sm:gap-3">
              <span className="h-px w-6 bg-gold sm:w-8" />
              What we offer
            </p>
            <h2 className="mt-4 text-3xl text-ink sm:mt-6 sm:text-4xl md:text-5xl">Our Services</h2>
          </div>
          <p className="max-w-sm text-xs text-ink/65 sm:text-sm">
            Prices are starting points — final pricing depends on length, structure and the detail of
            the design. Every appointment includes preparation and aftercare guidance.
          </p>
        </Reveal>

        <ul className="mt-10 border-t border-border sm:mt-14">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 60} className="border-b border-border">
              <div className="group grid gap-2 py-5 sm:py-7 md:grid-cols-12 md:items-baseline md:gap-6">
                <h3 className="label-xs text-ink transition-colors duration-300 group-hover:text-plum sm:text-xs md:col-span-3">
                  {service.name}
                </h3>
                <p className="text-xs text-ink/70 sm:text-sm md:col-span-6">{service.description}</p>
                <p className="label-xs text-xs text-ink/45 md:col-span-2">{service.duration}</p>
                <p className="font-display text-lg text-plum sm:text-xl md:col-span-1 md:text-right">
                  {service.price}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
