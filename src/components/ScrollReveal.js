"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up", // fade-up, fade-in, fade-left, fade-right, scale-up
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getVariantStyles = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100 filter-none";
    }
    switch (variant) {
      case "fade-up":
        return "opacity-0 translate-y-12 blur-[2px]";
      case "fade-left":
        return "opacity-0 -translate-x-12 blur-[2px]";
      case "fade-right":
        return "opacity-0 translate-x-12 blur-[2px]";
      case "scale-up":
        return "opacity-0 scale-95 blur-[2px]";
      case "fade-in":
      default:
        return "opacity-0 blur-[2px]";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${getVariantStyles()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
