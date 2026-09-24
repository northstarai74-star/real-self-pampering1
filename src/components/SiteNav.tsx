import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { label: "Home", href: "#top" },
  { label: "Verify", href: "#verify" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-5 sm:h-16 md:h-20 md:px-10">
        <a
          href="#top"
          className={cn(
            "flex flex-col items-baseline gap-0 transition-colors sm:gap-1 sm:flex-row sm:gap-2",
            solid ? "text-plum" : "text-ink",
          )}
        >
          <span className="font-display text-base tracking-tight sm:text-lg md:text-xl">{site.name}</span>
          <span className="label-xs hidden text-gold text-xs sm:inline">{site.tagline}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:gap-9 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "label-xs text-xs transition-colors hover:text-plum sm:text-sm",
                solid ? "text-ink/75" : "text-ink/80",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/admin"
            className="label-xs hidden border border-gold bg-gold px-2 py-1.5 text-ink text-xs transition-colors duration-300 hover:bg-plum hover:text-primary-foreground sm:inline-block sm:px-3 sm:py-2 md:px-4 md:py-3 md:px-6"
          >
            Admin
          </a>
          <a
            href="#verify"
            className="label-xs border border-plum bg-plum px-3 py-2 text-xs text-primary-foreground transition-colors duration-300 hover:bg-ink sm:px-4 sm:py-2 md:px-6 md:py-3"
          >
            Verify
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 text-ink lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-5 md:px-10">
            <span className="font-display text-base sm:text-lg text-plum">{site.name}</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="size-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col px-4 pt-2 sm:px-5 md:px-10" aria-label="Mobile">
            <a
              href="/admin"
              onClick={() => setOpen(false)}
              className="border-b-2 border-gold bg-gold px-3 py-3 font-display text-lg sm:text-xl text-ink font-bold hover:bg-plum hover:text-primary-foreground transition-colors"
            >
              Admin Panel
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 sm:py-5 font-display text-2xl sm:text-3xl text-plum"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
