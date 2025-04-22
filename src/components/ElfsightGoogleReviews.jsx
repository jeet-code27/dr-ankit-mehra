"use client"; // If using Next.js App Router (for Next.js 13+)

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js"; // Replace with your actual Elfsight script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="elfsight-app-4577d9ad-d911-4ff9-8b77-0c7e8b0c0694" data-elfsight-app-lazy></div> // Replace with the appropriate div if needed
};

export default ElfsightWidget;
