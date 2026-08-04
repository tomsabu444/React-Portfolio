import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import EmailIcon from "@iconify-react/mdi/email-outline";
import ArrowUpIcon from "@iconify-react/mdi/arrow-up-bold";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full border-t-4 border-foreground bg-white text-foreground py-5 px-4 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left: Brand / Title Stamp */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="inline-block -rotate-2 border-2 border-foreground bg-foreground px-3 py-1 font-heading text-xl tracking-widest text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            TOM SABU.
          </div>
          <span className="font-tertiary text-xs font-bold tracking-wider text-foreground/75 uppercase mt-1">
            PORTFOLIO // VER 3.0
          </span>
        </div>

        {/* Center: Copyright & Status Stamp */}
        <div className="flex flex-col items-center text-center gap-1.5">
          <div className="inline-block rotate-1 border-2 border-foreground bg-background px-3 py-0.5 font-tertiary text-[11px] font-bold tracking-widest text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
            END OF FILE
          </div>
          <p className="font-tertiary text-xs text-foreground/70">
            &copy; {new Date().getFullYear()} TOM SABU. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right: Social Links & Back-To-Top Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/tomsabu444"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/tomsabu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:contact@tomsabu.com"
              aria-label="Email Contact"
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 border-2 border-foreground bg-foreground px-3 py-1.5 font-tertiary text-xs font-bold text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-all -rotate-2 cursor-pointer uppercase"
          >
            TOP <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
