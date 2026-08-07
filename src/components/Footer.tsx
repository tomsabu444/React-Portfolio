import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import EmailIcon from "@iconify-react/mdi/email-outline";
import ArrowUpIcon from "@iconify-react/mdi/arrow-up-bold";
import { logSocialClick, logSectionView } from "@/services/firebase";

function Footer() {
  const scrollToTop = () => {
    logSectionView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-white text-foreground py-5 px-4 md:px-8">
      {/* Top Divider using clip-path */}
      <div
        className="absolute -top-2 left-0 w-full h-4 bg-foreground pointer-events-none z-20"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      />
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 gap-x-2 md:flex-nowrap md:gap-6">
        {/* Left: Brand / Title Stamp */}
        <div className="flex flex-col items-start text-left gap-1 order-1 md:order-1">
          <div className="inline-block -rotate-2 border-2 border-foreground bg-foreground px-3 py-1 font-heading text-xl tracking-widest text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            TOM SABU.
          </div>
          <span className="font-tertiary text-xs font-bold tracking-wider text-foreground/75 uppercase mt-1">
            PORTFOLIO // VER 3.0
          </span>
        </div>

        {/* Center: Copyright & Status Stamp */}
        <div className="flex flex-col items-center text-center gap-1.5 w-full md:w-auto order-3 md:order-2 mt-2 md:mt-0">
          <div className="inline-block rotate-1 border-2 border-foreground bg-background px-3 py-0.5 font-tertiary text-[11px] font-bold tracking-widest text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase">
            END OF FILE
          </div>
          <p className="font-tertiary text-xs text-foreground/70">
            &copy; {new Date().getFullYear()} TOM SABU. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Right: Social Links & Back-To-Top Button */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          {/* Social Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/tomsabu444"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              onClick={() => logSocialClick("github")}
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/tomsabu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              onClick={() => logSocialClick("linkedin")}
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:contact@tomsabu.com"
              aria-label="Email Contact"
              onClick={() => logSocialClick("email")}
              className="border-2 border-foreground bg-background p-2 text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-colors"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back-To-Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 border-2 border-foreground bg-foreground px-3 py-1.5 font-tertiary text-xs font-bold text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-all rotate-2 cursor-pointer uppercase"
          >
            TOP <ArrowUpIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
