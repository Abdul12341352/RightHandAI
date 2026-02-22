/* First make sure that you have installed the package */
/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "ai-receptionist-client" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2563eb" }, // blue accent for light theme
          dark: { "cal-brand": "#fafafa" }   // white accent for dark theme
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="ai-receptionist-client"
      data-cal-link="work-please-joasem/ai-receptionist-client"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}'
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "12px 20px",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Book a Demo
    </button>
  );
}
