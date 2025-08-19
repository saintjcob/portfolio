"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tw } from "@/utils/tailwind";
import useOGMetadata from "@/hooks/useOGMetadata";
import { ExternalLink } from "lucide-react";

interface LinkWithPreviewProps {
  href: string;
  children: React.ReactNode;
}

export default function LinkWithPreview({
  href,
  children,
}: LinkWithPreviewProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [initialLoadFinished, setInitialLoadFinished] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const previewRef = useRef<HTMLSpanElement>(null);

  const { ogMetadata, isLoading } = useOGMetadata(href);

  const previewContent = useMemo(() => {
    if (isLoading) {
      return (
        <span className="flex aspect-video w-[350px] items-center justify-center rounded-md bg-foreground-dimmed text-background">
          Loading preview...
        </span>
      );
    }

    if (ogMetadata?.ogImage) {
      return (
        <span className="block w-[350px] p-0.5">
          <Image
            src={ogMetadata.ogImage}
            alt={ogMetadata.title || "Preview"}
            width={350}
            height={150}
            className="h-auto rounded-md"
            onLoad={() => setImageLoaded(true)}
          />
          <h3 className="px-0.5 pt-2 text-sm font-medium tracking-text">
            {ogMetadata.title}
          </h3>
        </span>
      );
    }

    return (
      <span className="flex aspect-video w-[350px] items-center justify-center rounded-md bg-foreground-dimmed text-background">
        No preview available
      </span>
    );
  }, [ogMetadata, isLoading]);

  useEffect(() => {
    if (!initialLoadFinished) {
      setInitialLoadFinished(true);
    }
  }, []);

  return (
    <span className="relative inline-block">
      <Link
        href={href}
        ref={linkRef}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        className="group relative inline-flex items-center"
      >
        {children}
        <span
          className={tw(
            "ml-1 opacity-100 transition-opacity duration-[250ms] ease-out motion-reduce:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 motion-reduce:lg:group-hover:opacity-100",
          )}
        >
          <ExternalLink size={14} className="text-foreground-dimmed" />
        </span>
        <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground-dimmed transition-[width] duration-[400ms] ease-out lg:group-hover:w-full motion-reduce:lg:group-hover:w-0" />
      </Link>
      <AnimatePresence>
        {showPreview && (
          <motion.span
            ref={previewRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={imageLoaded ? { opacity: 1, scale: 1 } : {}}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={tw(
              "absolute bottom-full left-1/2 z-[9999] hidden -translate-x-1/2 transform rounded-md bg-[#171717] p-2 shadow-md lg:block",
            )}
          >
            {previewContent}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
