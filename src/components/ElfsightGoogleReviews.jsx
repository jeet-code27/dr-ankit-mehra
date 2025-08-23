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
        className="elfsight-app-08497030-db98-4789-9970-9bc0cbf751d3"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
