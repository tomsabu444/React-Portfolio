import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import { MorphingText } from "../components/ui/morphing-text";
import tom_sabu from "../assets/tom_sabu.png";

function HomePage() {
  const currentYear = new Date().getFullYear().toString();
  const githubUrl = "https://github.com/tomsabu444";
  const linkedinUrl = "https://www.linkedin.com/in/tomsabu444";

  return (
    <section
      id="home"
      className="relative  min-h-screen flex flex-col justify-center  px-28"
    >
      {/* Year display */}
      <div className="absolute right-6 top-6 flex flex-col text-right font-heading text-4xl leading-none sm:right-10 lg:right-16">
        <span>{currentYear.slice(0, 2)}</span>
        <span>{currentYear.slice(2)}</span>
      </div>
      <div className="flex flex-col  gap-6">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center my-auto gap-8">
            <h1 className="font-heading text-9xl">TOM SABU.</h1>
            {/* //? Morphing text */}
            <MorphingText
              texts={["Software Engineer", "Security Enthusiast"]}
              className=" text-right font-secondary "
            />
          </div>

          {/* img */}
          <img src={tom_sabu} alt="Tom Sabu" className="w-[35%] h-auto" />
        </div>

        <div className="flex relative justify-between  w-full">
          <div className="flex items-start gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <GithubIcon className="h-10 w-10 " />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex text-foreground transition hover:text-neutral-700"
            >
              <LinkedinIcon className="h-10 w-10" />
            </a>
          </div>
          <div className="font-tertiary flex flex-col items-end relative bottom-10  text-lg font-medium">
            <h3>April 19, 2003</h3>
            <h4>Kottayam, Kerala, India</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
