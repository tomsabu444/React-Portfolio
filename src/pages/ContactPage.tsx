import { useState } from "react";
import { motion } from "motion/react";

import EmailIcon from "@iconify-react/mdi/email-outline";
import ContentCopyIcon from "@iconify-react/mdi/content-copy";
import CheckIcon from "@iconify-react/mdi/check-bold";
import SendIcon from "@iconify-react/mdi/send-outline";
import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import RadioTowerIcon from "@iconify-react/mdi/radio-tower";

function ContactPage() {
  const email = "contact@tomsabu.com";
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-start py-12 text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center px-4 md:px-8">
        {/* Main Section Header Banner */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <motion.div
            className="border-4 border-foreground bg-foreground px-8 py-4 text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2"
            style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-secondary text-5xl font-bold uppercase tracking-tight md:text-7xl">
              CONTACT
            </h1>
          </motion.div>

          <div className="mt-3 inline-block -rotate-1 border-2 border-foreground bg-background px-4 py-1 font-tertiary text-xs font-bold tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            ENCRYPTED TRANSMISSION HUB // CLEARANCE: OPEN
          </div>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 w-full">
          {/* Left Column: Direct Email & Social Signals (5 cols) */}
          <motion.div
            className="relative md:col-span-5 flex flex-col gap-6 pt-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Direct Email Card */}
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10 -rotate-2 border-2 border-foreground bg-white px-3 py-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <RadioTowerIcon className="w-4 h-4" />
                  DIRECT FREQUENCY
                </span>
              </div>

              <div
                className="flex flex-col border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                style={{ clipPath: "polygon(0% 0%, 100% 1%, 98% 100%, 2% 99%)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="border-2 border-foreground bg-foreground p-2 text-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <EmailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-secondary text-2xl font-bold text-foreground">
                      DIRECT EMAIL
                    </h3>
                    <p className="font-tertiary text-xs text-foreground/70">
                      OFFICIAL DISPATCH ADDRESS
                    </p>
                  </div>
                </div>

                <div className="mb-6 border-l-4 border-foreground pl-4 py-1 bg-background/50">
                  <span className="font-secondary text-xl font-bold tracking-wide text-foreground block break-all">
                    {email}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-4 py-2 font-tertiary text-xs font-bold text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="w-4 h-4 text-green-400" />
                        COPIED TO CLIPBOARD
                      </>
                    ) : (
                      <>
                        <ContentCopyIcon className="w-4 h-4" />
                        COPY ADDRESS
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-background px-4 py-2 font-tertiary text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all"
                  >
                    <SendIcon className="w-4 h-4" />
                    SEND MAIL
                  </a>
                </div>
              </div>
            </div>

            {/* Social Signal Badges Card */}
            <div className="relative pt-2">
              <div className="absolute -top-1 left-4 z-10 rotate-1 border-2 border-foreground bg-foreground px-3 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-tertiary text-xs font-bold uppercase tracking-wider">
                  SIGNAL CHANNELS
                </span>
              </div>

              <div
                className="flex flex-col border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-4"
                style={{ clipPath: "polygon(1% 0%, 99% 1%, 100% 99%, 0% 100%)" }}
              >
                <p className="font-tertiary text-xs text-foreground/80 leading-relaxed">
                  CONNECT ON EXTERNAL FREQUENCIES AND SOCIAL ARCHIVES:
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/tomsabu444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-foreground bg-background p-3 font-tertiary text-sm font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <GithubIcon className="w-5 h-5" />
                      GITHUB // @tomsabu444
                    </span>
                    <span className="text-xs group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>

                  <a
                    href="https://linkedin.com/in/tomsabu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-2 border-foreground bg-background p-3 font-tertiary text-sm font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-5 h-5" />
                      LINKEDIN // TOM SABU
                    </span>
                    <span className="text-xs group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Form (7 cols) */}
          <motion.div
            className="relative md:col-span-7 pt-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="absolute -top-3 right-4 z-10 rotate-2 border-2 border-foreground bg-foreground px-3 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-tertiary text-xs font-bold uppercase tracking-wider">
                TRANSMISSION TERMINAL
              </span>
            </div>

            <div
              className="flex flex-col border-4 border-foreground bg-white p-6 md:p-8 pt-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{ clipPath: "polygon(0% 1%, 99% 0%, 100% 99%, 1% 100%)" }}
            >
              <h3 className="font-secondary text-3xl font-bold text-foreground mb-2">
                SEND MESSAGE
              </h3>
              <p className="font-tertiary text-xs text-foreground/75 mb-6 border-l-4 border-foreground pl-3">
                DISPATCH A DIRECT MESSAGE. ALL INCOMING TRANSMISSIONS ARE LOGGED AND PROCESSED PROMPTLY.
              </p>

              {submitted ? (
                <div className="border-4 border-foreground bg-background p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8 -rotate-1">
                  <div className="inline-block border-2 border-foreground bg-foreground p-2 text-background mb-3">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  <h4 className="font-secondary text-2xl font-bold uppercase text-foreground">
                    TRANSMISSION RECEIVED!
                  </h4>
                  <p className="font-tertiary text-xs text-foreground/80 mt-1">
                    YOUR MESSAGE HAS BEEN ENCRYPTED AND LOGGED SUCCESSFUL. I WILL RESPOND SHORTLY.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-secondary text-lg font-bold text-foreground uppercase tracking-wide">
                      AGENT IDENTIFIER / YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Agent Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border-3 border-foreground bg-background p-3 font-tertiary text-sm text-foreground placeholder:text-foreground/40 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-secondary text-lg font-bold text-foreground uppercase tracking-wide">
                      RETURN FREQUENCY / YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. agent@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border-3 border-foreground bg-background p-3 font-tertiary text-sm text-foreground placeholder:text-foreground/40 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-secondary text-lg font-bold text-foreground uppercase tracking-wide">
                      TRANSMISSION BODY / MESSAGE
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Type your transmission here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border-3 border-foreground bg-background p-3 font-tertiary text-sm text-foreground placeholder:text-foreground/40 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 border-3 border-foreground bg-foreground p-4 font-tertiary text-sm font-bold text-background shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer uppercase flex items-center justify-center gap-2"
                  >
                    <SendIcon className="w-5 h-5" />
                    TRANSMIT MESSAGE
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
