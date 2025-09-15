import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      {/* Elfsight Google Reviews */}
      <div
        className="elfsight-app-b658eaad-9fbf-4a61-87f0-1f92c0c37aa0"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
