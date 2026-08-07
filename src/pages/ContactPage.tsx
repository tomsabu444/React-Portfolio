import { useState } from "react";
import { motion } from "motion/react";

import EmailIcon from "@iconify-react/mdi/email-outline";
import ContentCopyIcon from "@iconify-react/mdi/content-copy";
import CheckIcon from "@iconify-react/mdi/check-bold";
import SendIcon from "@iconify-react/mdi/send-outline";
import GithubIcon from "@iconify-react/mdi/github";
import LinkedinIcon from "@iconify-react/mdi/linkedin";
import RadioTowerIcon from "@iconify-react/mdi/radio-tower";
import { logSocialClick } from "@/services/firebase";

function ContactPage() {
  const email = "contact@tomsabu.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-[60vh] w-full flex-col items-center justify-start py-6 text-foreground"
    >
      <div className="relative flex w-full max-w-7xl flex-col items-center px-4 md:px-8">
        {/* Main Section Header Banner */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <motion.div
            className="border-4 border-foreground bg-foreground px-8 py-4 text-background shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2"
            style={{ clipPath: "polygon(2% 0%, 100% 1%, 98% 100%, 0% 99%)" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-secondary text-5xl font-bold uppercase tracking-tight md:text-7xl">
              CONTACT
            </h2>
          </motion.div>

          <div className="mt-3 inline-block -rotate-1 border-2 border-foreground bg-background px-4 py-1 font-tertiary text-xs font-bold tracking-widest text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            TRANSMISSION HUB
          </div>
        </div>

        {/* Contact Cards in Same Row (6 cols each) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 w-full">
          {/* Direct Email Card (6 cols) */}
          <motion.div
            className="relative md:col-span-6 pt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="absolute -top-3 left-4 z-10 -rotate-2 border-2 border-foreground bg-white px-3 py-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-tertiary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <RadioTowerIcon className="w-4 h-4" />
                DIRECT FREQUENCY
              </span>
            </div>

            <div
              className="flex flex-col h-full justify-between border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              style={{ clipPath: "polygon(0% 0%, 100% 1%, 98% 100%, 2% 99%)" }}
            >
              <div>
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

                <div className="mb-6 border-l-4 border-foreground pl-4 py-2 bg-background/50">
                  <span className="font-tertiary text-xl font-bold tracking-wide text-foreground block break-all">
                    {email}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => {
                    handleCopy();
                    logSocialClick("email_copy");
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-foreground bg-foreground px-4 py-2.5 font-tertiary text-xs font-bold text-background shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-background hover:text-foreground transition-all cursor-pointer"
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
                  onClick={() => logSocialClick("email_send")}
                  className="inline-flex items-center justify-center gap-2 border-2 border-foreground bg-background px-4 py-2.5 font-tertiary text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all"
                >
                  <SendIcon className="w-4 h-4" />
                  SEND MAIL
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Signal Badges Card (6 cols) */}
          <motion.div
            className="relative md:col-span-6 pt-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="absolute -top-3 left-4 z-10 rotate-1 border-2 border-foreground bg-foreground px-3 py-1 text-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-tertiary text-xs font-bold uppercase tracking-wider">
                SIGNAL CHANNELS
              </span>
            </div>

            <div
              className="flex flex-col h-full justify-between border-4 border-foreground bg-white p-6 pt-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-4"
              style={{ clipPath: "polygon(1% 0%, 99% 1%, 100% 99%, 0% 100%)" }}
            >
              <div>
                <h3 className="font-secondary text-2xl font-bold text-foreground mb-1">
                  SOCIAL ARCHIVES
                </h3>
                <p className="font-tertiary text-xs text-foreground/80 leading-relaxed mb-4">
                  CONNECT ON EXTERNAL FREQUENCIES AND SOCIAL NETWORKS:
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/tomsabu444"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logSocialClick("github")}
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
                    href="https://linkedin.com/in/tomsabu444"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logSocialClick("linkedin")}
                    className="flex items-center justify-between border-2 border-foreground bg-background p-3 font-tertiary text-sm font-bold text-foreground shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-foreground hover:text-background transition-all group"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-5 h-5" />
                      LINKEDIN // @tomsabu444
                    </span>
                    <span className="text-xs group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transmission Form (COMMENTED OUT AS PER DIRECTIVE) */}
        {/*
        <motion.div
          className="relative w-full pt-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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
            ...form logic...
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}

export default ContactPage;
