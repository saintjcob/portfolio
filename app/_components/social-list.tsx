"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";
import LinkAnimated from "./link-animated";

const LINKS = [
  { name: "X", url: "https://x.com/saintjcob" },
  { name: "Bento", url: "https://bento.me/saintjcob" },
  {
    name: "Github",
    url: "https://github.com/saintjcob",
  },
  { name: "Telegram", url: "https://t.me/saintjcob" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jakubziemba" },
  {
    name: "Email",
    url: "",
    icon: <Copy size={14} />,
    onClick: (e: any) => {
      e.preventDefault();
      navigator.clipboard.writeText("ziemba.jak@gmail.com");
    },
  },
  // { name: "Instagram", url: "https://instagram.com/saintjcob.lab" },
];

export default function SocialList() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 1350);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <div className="social-list pt-10">
      <h3 className="flex w-max text-foreground-dimmed">Let&apos;s connect!</h3>
      <ul className="flex w-full flex-col gap-1 pt-4">
        {LINKS.map((link, index) => {
          const isEmail = link.name === "Email";
          return (
            <li
              key={link.name}
              className="flex flex-nowrap gap-4 lg:gap-10"
              onClick={
                link.onClick
                  ? (e) => {
                      link.onClick(e);
                      setCopied(true);
                    }
                  : undefined
              }
            >
              <LinkAnimated
                href={!isEmail ? link.url : ""}
                className="group relative flex items-center gap-1 text-foreground-dimmed"
              >
                {link.name}
                {link.icon && (
                  <span className="flex items-center gap-2 transition-opacity duration-[250ms] ease-out lg:opacity-0 lg:group-hover:opacity-100">
                    {/* TODO: reduced motion */}
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={copied ? "copied" : "default"}
                        initial={{ scale: 0.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{
                          scale: 0.3,
                          opacity: 0,
                          transition: {
                            duration: 0.15,
                          },
                        }}
                        transition={{
                          type: "spring",
                          duration: 0.2,
                          bounce: 0.2,
                        }}
                      >
                        {link.icon && copied ? <Check size={14} /> : link.icon}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                )}
              </LinkAnimated>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
