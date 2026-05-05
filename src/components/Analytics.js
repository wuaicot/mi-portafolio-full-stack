import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-1D1F77Q3QR", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

/**
 * Utility to track custom events
 * @param {string} eventName - Name of the event (e.g., 'download_cv')
 * @param {object} params - Additional parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export default Analytics;
